<template>
  <footer class="app-footer">
    <div class="footer-content">
      <p>&copy; 2024 Wellness App. Take a deep breath.</p>
      <nav class="footer-links">
        <router-link to="/privacy">Privacy Policy</router-link>
        <router-link to="/resources">Emergency Resources</router-link>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scoped>
.app-footer {
  background-color: #f8f9fa;
  padding: 2rem 1rem;
  margin-top: auto; /* Pushes footer to bottom if using flexbox on parent */
  border-top: 1px solid #e9ecef;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a {
  text-decoration: none;
  color: #6c757d;
  font-size: 0.9rem;
}

.footer-links a:hover {
  color: #42b983; /* Vue green */
}
</style>
