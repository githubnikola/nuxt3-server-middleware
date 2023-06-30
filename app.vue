<script setup>
const data = await useFetch('/api/partner')
</script>
<template>
  <div>
    <pre>{{data}}</pre>
  </div>
</template>
