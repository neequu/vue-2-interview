import { ALBUMS_API_URL, POSTS_API_URL, USERS_API_URL } from "../utils/constants"
import axios, { AxiosResponse } from 'axios';
import type {Post, Album, User} from '../../types'
import { LRUCache } from 'lru-cache'
import { hash as ohash } from 'ohash'

const cache = new LRUCache<string, any>({
  max: 500,
  ttl: 2000 * 60 * 60, // 2 hour
})
// make request with given url
async function _makeRequest(url:string, params: Record<string, string | number | undefined> = {}): Promise<any> {
  try {
    const response: Promise<AxiosResponse> = axios.get(url, {
      params,
    });
    return response
  } catch(e:any) {
    console.log(e)
  }
}

async function makeRequest(url:string, params: Record<string, string | number | undefined> = {}): Promise<any> {
  const hash = ohash([url, params])
  if (!cache.has(hash)) {
    cache.set(
      hash,
      _makeRequest(url, params)
        .catch((e) => {
          cache.delete(hash)
          throw e
        }),
    )
  }
  return cache.get(hash)!
}

// get users 
export async function getUsers():Promise<AxiosResponse<User[]>> {
  return makeRequest(USERS_API_URL)
}
// get posts by user id 
export async function getPostsByUserId(userId:number|string):Promise<AxiosResponse<Post[]>> {
  return makeRequest(POSTS_API_URL, {userId})
}
// get albums by user id 
export async function getAlbumsByUserId(userId:number|string):Promise<AxiosResponse<Album[]>> {
  return makeRequest(ALBUMS_API_URL, {userId})
}
// get photos in albums by album id
export async function getAlbumsPhotosById(albumId:number|string, params: Record<string, string | number | undefined> = {}):Promise<{data: Album[]}> {
  const url = `${ALBUMS_API_URL}/${albumId}/photos`
  return makeRequest(url, params)
}

// create new post
export async function createPost(params:Post):Promise<AxiosResponse<Post>> {
  return axios.post(POSTS_API_URL, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
}