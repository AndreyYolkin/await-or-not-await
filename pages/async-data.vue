<template>
  <div class="async-data">
    <h1>Async Data</h1>
    <p>This page uses asyncData() to fetch some data</p>
    <p>The data is fetched on the server side using getServerSideProps() and then passed to the page via props.</p>
    <p>If you open up the network tab in your browser devtools, you'll see the axios request that fetches the data.</p>
    <p>You can also open up the developer tools in your browser and navigate to the "Application" tab to see the data that's fetched.</p>
    {{ data }}
  </div>
</template>

<script setup lang="ts">

const { data } = useAsyncData('async-data', () => $fetch('/api/test'))
</script>