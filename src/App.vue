<script setup lang="ts">
import {useAuthStore} from "@/store";

const authStore = useAuthStore()
authStore.restore()
</script>

<template>
  <component :is="$route.meta.layout || 'div'">
    <RouterView />
  </component>
</template>

<style scoped>

</style>
