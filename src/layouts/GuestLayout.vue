<script setup lang="ts">

</script>

<template>
    <div class="min-h-screen bg-sky-50 flex flex-col items-center justify-center text-center">
      <nav class="absolute top-0 left-0 w-full p-4 flex justify-between bg-white shadow">
        <RouterLink to="/" class="font-bold text-lg">Citoyen·ne & Futé·e</RouterLink>
        <RouterLink to="/login" class="text-blue-600 font-medium">Se connecter</RouterLink>
      </nav>
      <main class="mt-24 w-full max-w-md px-4">
        <slot></slot>
      </main>
    </div>
</template>

<style scoped>

</style>