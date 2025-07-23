<script setup lang="ts">
import { ref } from 'vue'
const currentYear = ref(new Date().getFullYear())
import { BASE_TITLE } from '@/utils/constants'
const title = ref(BASE_TITLE)
</script>

<template>
  <footer class="bg-white border-t border-gray-200 py-8 mt-auto">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Logo and description -->
        <div class="mb-6 md:mb-0">
          <div class="flex items-center">
            <span class="text-xl font-bold text-gray-800">{{ title }}</span>
          </div>
          <p class="text-gray-600 mt-2 max-w-md">
            {{ $t('baseline') }}
          </p>
        </div>
      </div>

      <!-- Social links and copyright -->
      <div class="mt-8 border-t border-gray-200 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-500 text-sm">
            &copy; {{ currentYear }} {{ $t('footer') }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>