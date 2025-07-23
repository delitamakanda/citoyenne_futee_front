<script setup lang="ts">
defineProps<{
  title: string;
  content: string;
  progress: number;
}>();
import Progress from '@/components/ui/progress/Progress.vue'
</script>

<template>
  <div class="bg-white shadow rounded p-4 space-y-2">
    <h3 class="text-lg font-bold">{{ title }}</h3>
    <p class="text-sm text-gray-600">{{ content }}</p>
    <Progress v-model="progress" />
  </div>
</template>

<style scoped>

</style>