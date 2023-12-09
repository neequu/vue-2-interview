<template>
  <header class="header">
    <h1>Users</h1>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/new">New</router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import '../style.scss';

.header {
  padding: 1.5rem 0;
  border-bottom: 1px solid #333;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1rem;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}

a {
  color: $text-color;
  font-weight: 700;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 250ms ease;

  &:hover {
    border-color: white;
  }
}
</style>