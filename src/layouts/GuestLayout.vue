<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
    <div class="min-h-screen bg-sky-50">
      <Header>
      <template #actions>
        <div class="spacer-y-4">
          <RouterLink to="/login" class="hover:underline mr-3" active-class="text-blue-600 font-bold">{{ $t('login') }}</RouterLink>
          <RouterLink to="/register" class="hover:underline" active-class="text-blue-600 font-bold">{{ $t('register') }}</RouterLink>
        </div>
      </template>
      </Header>
      <main class="mt-24 w-full px-4">
        <slot></slot>
      </main>
      <Footer />
    </div>
</template>

<style scoped>

</style>