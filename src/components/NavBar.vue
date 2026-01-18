<template>
  <nav class="glass-nav">
    <div class="logo">🌿 MindfulMe</div>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/breathing">Breathing</router-link></li>
      <li><router-link to="/wellness">Wellness</router-link></li>
      <li><router-link to="/ai-support">AI Support</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
.glass-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #42b983;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: #505d6b;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 5px 0;
}

.nav-links a:hover {
  color: #42b983;
}

.nav-links a.router-link-active {
  color: #42b983;
  border-bottom: 2px solid #42b983;
}

/* Responsive Menu for Mobile */
@media (max-width: 768px) {
  .nav-links {
    gap: 1rem;
    font-size: 0.9rem;
  }
}
</style>
