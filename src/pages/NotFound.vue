<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
import Button from '@/components/ui/button/Button.vue'

const goBack = () => {
  router.back()
}

const goToHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <h1 class="not-found-title">404</h1>
      <h2 class="not-found-subtitle">{{ $t('404.title') }}</h2>
      <p class="not-found-message">
        {{ $t('404.message') }}
      </p>
      <div class="not-found-actions">
        <Button @click="goBack" variant="outline">
          {{ $t('404.goBack') }}
        </Button>
        <Button @click="goToHome">
          {{ $t('404.backToHome') }}
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
  text-align: center;
}

.not-found-content {
  max-width: 600px;
}

.not-found-title {
  font-size: 8rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1rem;
}

.not-found-subtitle {
  font-size: 2rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.not-found-message {
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.not-found-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .not-found-container {
    flex-direction: row;
    text-align: left;
    gap: 2rem;
  }

  .not-found-actions {
    justify-content: flex-start;
  }
}
</style>