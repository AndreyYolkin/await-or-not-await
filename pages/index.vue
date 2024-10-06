<template>
  <div class="home">
    <h1>Welcome to LazyNuxt</h1>
    <p>links</p>
    <ul>
      <li>
        <NuxtLink to="/async-data">Async Data (No await)</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/lazy-async-data">Lazy Async Data (No await)</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/async-data-await">Async Data Await</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/lazy-async-data-await">Lazy Async Data Await</NuxtLink>
      </li>
    </ul>
  </div>
</template>