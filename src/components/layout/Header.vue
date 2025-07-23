<script setup lang="ts">
import { BASE_TITLE } from "@/utils/constants";
import { ref } from "vue";
const mainTitle = ref(BASE_TITLE)
import {useAuthStore} from "@/store";
import {Button} from "@/components/ui/button";

defineProps<{
  showHeader?: boolean;
}>()

const authStore = useAuthStore();
</script>

<template>
  <header class="bg-white shadow px-6 py-4 flex justify-between items-center">
    <h1 class="text-xl font-bold">{{ mainTitle }}</h1>
    <nav v-if="showHeader" class="space-x-4">
      <RouterLink to="/lessons" class="hover:underline" active-class="text-blue-600 font-bold">{{ $t('lesson') }}</RouterLink>
      <RouterLink to="/profile" class="hover:underline" active-class="text-blue-600 font-bold">{{ $t('profile') }}</RouterLink>
      <Button @click="authStore.logout">{{$t('logout')}}</Button>
    </nav>
    <slot v-else name="actions"></slot>
  </header>
</template>

<style scoped>

</style>