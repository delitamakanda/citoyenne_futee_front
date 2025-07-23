<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  question: string;
  choices: { id: number; text: string; is_correct: boolean }[];
}>()

const selectedChoice = ref<number | null>(null)
const feedback = ref('')
const showFeedback = ref(false)

const handleChoiceClick = () => {
  if (selectedChoice.value === null) {
    return
  }
  const correctChoice = props.choices.find((choice) => choice.is_correct)
  feedback.value = selectedChoice.value === correctChoice?.id? 'Correct!' : 'Wrong!'
  showFeedback.value = true
}
</script>

<template>
  <div class="bg-white shadow p-6 rounded space-y-4 max-w-xl mx-auto">
    <h2 class="text-lg font-bold">{{ question }}</h2>

    <ul class="space-y-2">
      <li
          v-for="choice in choices"
          :key="choice.id"
          :class="[
          'p-3 rounded border cursor-pointer transition',
          selectedChoice === choice.id
            ? 'border-blue-600 bg-blue-50'
            : 'border-gray-300 hover:bg-gray-50'
        ]"
          @click="selectedChoice = choice.id"
      >
        {{ choice.text }}
      </li>
    </ul>

    <button
        class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        @click="handleChoiceClick"
        :disabled="selectedChoice === null"
    >
      Valider ma réponse
    </button>

    <p v-if="showFeedback" class="mt-4 font-medium" :class="feedback.startsWith('Correct') ? 'text-green-600' : 'text-red-600'">
      {{ feedback }}
    </p>
  </div>
</template>

<style scoped>

</style>