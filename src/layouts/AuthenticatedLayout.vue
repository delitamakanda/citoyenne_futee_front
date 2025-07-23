<script setup lang="ts">
import {useAuthStore} from "@/store";
import {Button} from "@/components/ui/button";

const authStore = useAuthStore()
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 class="text-xl font-bold">🎓 Citoyen·ne & Futé·e</h1>
      <nav class="space-x-4">
        <RouterLink to="/lessons" class="hover:underline" active-class="text-blue-600 font-bold">Leçons</RouterLink>
        <RouterLink to="/profile" class="hover:underline" active-class="text-blue-600 font-bold">Profil</RouterLink>
        <Button @click="authStore.logout">Déconnexion</Button>
      </nav>
    </header>
    <main class="p-6 max-w-4xl mx-auto">
      <slot></slot>
    </main>
  </div>
</template>

<style scoped>

</style>