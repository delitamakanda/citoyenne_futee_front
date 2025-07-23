<script setup lang="ts">
import {useAuthStore} from "@/store";

const authStore = useAuthStore()
authStore.restore()
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
