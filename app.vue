<script setup>
const event = useRequestEvent()
const data = await useFetchWithCookie(event, '/api/partner')
</script>
<template>
  <div>
    <pre>{{data}}</pre>
  </div>
</template>
