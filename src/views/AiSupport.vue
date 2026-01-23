<script setup>
import { ref } from 'vue'
import { getAiMessage } from '../services/aiService.js'

const mood = ref('')
const aiMessage = ref('')
const loading = ref(false)
const history = ref([])
const onlineMode = ref(true)
const charLimit = 200

// Offline fallback messages
const offlineMessages = {
  stressed: '🌿 Take a deep breath. You’ve got this.',
  sad: '💙 It’s okay to feel sad. Be gentle with yourself.',
  tired: '😴 Rest is important. Give yourself time to recharge.',
  anxious: '🌸 You are safe. Focus on one small step at a time.',
}

const askAI = async () => {
  if (!mood.value.trim()) return
  if (mood.value.length > charLimit) {
    aiMessage.value = `⚠️ Your message exceeds ${charLimit} characters. Please shorten it.`
    return
  }

  loading.value = true
  try {
    let response
    if (onlineMode.value) {
      response = await getAiMessage(`Offer a gentle message for someone who feels: ${mood.value}`)
    } else {
      response = offlineMessages[mood.value.toLowerCase()] || 'Offline mode: Stay kind to yourself.'
    }

    aiMessage.value = response
    history.value.push({ mood: mood.value, response, reactions: [] })
    mood.value = ''
  } catch (err) {
    aiMessage.value = '⚠️ Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
}

const retry = async () => {
  if (!history.value.length) return
  mood.value = history.value[history.value.length - 1].mood
  await askAI()
}

const addReaction = (index, emoji) => {
  history.value[index].reactions.push(emoji)
}
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center px-6"
  >
    <div class="bg-white shadow-2xl rounded-3xl p-10 max-w-3xl w-full flex flex-col">
      <!-- Title -->
      <h1 class="text-4xl font-extrabold text-purple-700 mb-6 text-center">🌟 Companion Journal</h1>
      <p class="text-center text-gray-600 mb-8">
        Select a mood or write your own, then receive a gentle reflection.
      </p>

      <!-- Online/Offline Switch -->
      <div class="flex items-center justify-center mb-6">
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" v-model="onlineMode" class="hidden" />
          <span class="w-12 h-6 bg-gray-300 rounded-full relative">
            <span
              class="absolute top-0 left-0 w-6 h-6 bg-purple-600 rounded-full transform transition"
              :class="onlineMode ? 'translate-x-6' : ''"
            ></span>
          </span>
          <span class="text-sm text-gray-700">
            {{ onlineMode ? '🌐 Online AI' : '📴 Offline Mode' }}
          </span>
        </label>
      </div>

      <!-- Mood Buttons -->
      <div class="flex flex-wrap gap-3 mb-6 justify-center">
        <button
          @click="mood = 'stressed'"
          class="px-4 py-2 rounded-full bg-red-100 hover:bg-red-200"
        >
          😣 Stressed
        </button>
        <button @click="mood = 'sad'" class="px-4 py-2 rounded-full bg-blue-100 hover:bg-blue-200">
          😢 Sad
        </button>
        <button
          @click="mood = 'tired'"
          class="px-4 py-2 rounded-full bg-yellow-100 hover:bg-yellow-200"
        >
          😴 Tired
        </button>
        <button
          @click="mood = 'anxious'"
          class="px-4 py-2 rounded-full bg-purple-100 hover:bg-purple-200"
        >
          😰 Anxious
        </button>
      </div>

      <!-- Textbox -->
      <textarea
        v-model="mood"
        class="w-full h-40 p-6 rounded-2xl shadow-inner bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 focus:outline-none focus:ring-4 focus:ring-purple-300 text-gray-700 placeholder-gray-400 text-lg"
        :maxlength="charLimit"
        placeholder="✨ Write your feelings here (max {{ charLimit }} chars)..."
      ></textarea>
      <p class="text-xs text-gray-500 mt-2 text-right">{{ mood.length }}/{{ charLimit }}</p>

      <!-- Buttons -->
      <div class="flex gap-4 mt-6">
        <button
          @click="askAI"
          class="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-2xl"
        >
          🌟 Get Reflection
        </button>
        <button
          v-if="aiMessage"
          @click="retry"
          class="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-2xl"
        >
          🔄 Retry
        </button>
      </div>

      <!-- AI Response -->
      <div class="mt-8 p-6 bg-green-50 border-l-4 border-green-400 rounded-2xl min-h-[100px]">
        <p v-if="loading" class="text-gray-500 italic">Thinking of something kind...</p>
        <p v-else-if="aiMessage" class="text-gray-800 leading-relaxed whitespace-pre-line text-lg">
          {{ aiMessage }}
        </p>
        <p v-else class="text-gray-400 italic">Your supportive message will appear here.</p>
      </div>

      <!-- History -->
      <div v-if="history.length" class="mt-12">
        <h2 class="text-xl font-semibold text-purple-700 mb-8 text-center">
          📝 Reflection Timeline
        </h2>
        <div class="space-y-6">
          <div
            v-for="(item, index) in history"
            :key="index"
            class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
          >
            <p class="text-sm text-gray-500 mb-2">
              <span class="font-semibold text-indigo-600">Mood:</span> {{ item.mood }}
            </p>
            <p class="text-gray-800 leading-relaxed text-lg mb-4">{{ item.response }}</p>
            <div class="flex gap-2">
              <button
                @click="addReaction(index, '👍')"
                class="px-2 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                👍
              </button>
              <button
                @click="addReaction(index, '😊')"
                class="px-2 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                😊
              </button>
              <button
                @click="addReaction(index, '❤️')"
                class="px-2 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                ❤️
              </button>
            </div>
            <div v-if="item.reactions.length" class="mt-2 text-sm text-gray-600">
              Reactions: {{ item.reactions.join(' ') }}
            </div>
          </div>
        </div>
      </div>

      <!-- Disclaimer -->
      <p class="text-xs text-gray-500 mt-6 text-center">
        ⚠️ This is not medical advice. For serious concerns, please consult a professional.
      </p>
    </div>
  </div>
</template>
