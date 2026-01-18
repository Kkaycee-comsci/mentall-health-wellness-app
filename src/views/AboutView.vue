<template>
  <div class="about">
    <section class="hero">
      <h1>About Our Wellness Journey</h1>
      <p>
        We believe in nurturing mental health and overall wellness through mindful breathing,
        positive habits, and AI‑powered support. This app is designed to guide you toward balance,
        resilience, and inner peace.
      </p>
    </section>

    <section class="features">
      <div class="feature-card">
        <h2>🌿 Mindful Breathing</h2>
        <p>Practice guided breathing exercises to reduce stress and improve focus.</p>
      </div>
      <div class="feature-card">
        <h2>💡 Wellness Tips</h2>
        <p>Discover daily tips for healthy living, nutrition, and self‑care routines.</p>
      </div>
      <div class="feature-card">
        <h2>🤖 AI Support</h2>
        <p>Get personalized support and encouragement whenever you need it most.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
}
</script>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #e0f7fa, #f1f8e9);
  color: #333;
}

.hero {
  max-width: 800px;
  text-align: center;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 2.5rem;
  color: #2e7d32;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.features {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.feature-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 250px;
  text-align: center;
  transition: transform 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h2 {
  margin-bottom: 0.5rem;
  color: #00796b;
}
</style>
