<template>
  <div class="home-container">
    <header class="hero">
      <h1>Welcome Back</h1>
      <p>Take a moment for yourself today.</p>
    </header>

    <section class="mood-tracker">
      <h3>How are you feeling right now?</h3>
      <div class="mood-options">
        <button @click="selectMood('Happy')">😊<span>Happy</span></button>
        <button @click="selectMood('Calm')">😌<span>Calm</span></button>
        <button @click="selectMood('Tired')">😴<span>Tired</span></button>
        <button @click="selectMood('Stressed')">😰<span>Stressed</span></button>
      </div>
      <p v-if="selectedMood" class="mood-feedback">
        It's okay to feel <strong>{{ selectedMood }}</strong
        >. We're here for you.
      </p>
    </section>

    <div class="quick-nav">
      <router-link to="/breathing" class="nav-card">
        <div class="icon">🌬️</div>
        <h4>Breathing</h4>
        <p>Calm your mind instantly</p>
      </router-link>

      <router-link to="/ai-support" class="nav-card">
        <div class="icon">🤖</div>
        <h4>AI Support</h4>
        <p>Chat with your assistant</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      selectedMood: null,
    }
  },
  methods: {
    selectMood(mood) {
      this.selectedMood = mood
    },
  },
}
</script>

<style scoped>
.home-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.mood-tracker {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  margin: 2rem 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.mood-options {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.mood-options button {
  background: none;
  border: 2px solid #f0f0f0;
  padding: 1rem;
  border-radius: 15px;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.mood-options button span {
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: #64748b;
}

.mood-options button:hover {
  border-color: #42b983;
  transform: translateY(-5px);
  background: #f0fdf4;
}

.mood-feedback {
  margin-top: 1.5rem;
  color: #42b983;
  font-style: italic;
}

.quick-nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.nav-card {
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.3s;
  border: 1px solid #f0f0f0;
}

.nav-card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

h4 {
  margin: 0;
  color: #2c3e50;
}

.nav-card p {
  font-size: 0.85rem;
  color: #64748b;
  margin-top: 5px;
}

@media (max-width: 600px) {
  .quick-nav {
    grid-template-columns: 1fr;
  }
  .mood-options {
    flex-wrap: wrap;
  }
}
</style>
