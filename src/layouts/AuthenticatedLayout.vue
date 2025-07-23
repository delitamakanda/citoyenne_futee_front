<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from "@/components/layout/Footer.vue";

</script>

<template lang="html">
  <div class="min-h-screen bg-gray-50">
    <Header :showHeader="true" />
    <main class="p-6 max-w-4xl mx-auto">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<style scoped>

</style>