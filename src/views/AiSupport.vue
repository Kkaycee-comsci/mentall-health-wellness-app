<template>
  <div class="chat-container">
    <h2>AI Wellness Assistant</h2>

    <div class="chat-box">
      <div v-for="(msg, i) in messages" :key="i" :class="['message', msg.role]">
        <p>{{ msg.text }}</p>
      </div>
    </div>

    <div class="input-area">
      <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Ask about wellness..." />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AiSupport',
  data() {
    return {
      userInput: '',
      messages: [{ role: 'ai', text: 'Hello! How can I support your wellness today?' }],
    }
  },
  methods: {
    sendMessage() {
      if (!this.userInput.trim()) return

      // Add user message
      this.messages.push({ role: 'user', text: this.userInput })

      const savedInput = this.userInput
      this.userInput = ''

      // Add simple AI reply after 1 second
      setTimeout(() => {
        this.messages.push({
          role: 'ai',
          text: `I understand you're asking about "${savedInput}". Focus on small, positive steps today!`,
        })
      }, 1000)
    },
  },
}
</script>

<style scoped>
.chat-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: sans-serif;
}
.chat-box {
  height: 400px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow-y: auto;
  padding: 1rem;
  background: #fdfdfd;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.message {
  max-width: 80%;
  padding: 10px;
  border-radius: 10px;
}
.user {
  align-self: flex-end;
  background-color: #d1e7dd;
  color: #0f5132;
}
.ai {
  align-self: flex-start;
  background-color: #e2e3e5;
  color: #383d41;
}
.input-area {
  display: flex;
  margin-top: 1rem;
  gap: 10px;
}
input {
  flex: 1;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #3aa876;
}
</style>
