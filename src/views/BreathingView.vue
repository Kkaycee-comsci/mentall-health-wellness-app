<template>
  <div class="breathing-container">
    <h2>Breathing Exercise</h2>

    <div :class="['circle', status]"></div>

    <p class="instruction">{{ message }}</p>

    <button @click="toggleExercise" :class="{ 'btn-active': isActive }">
      {{ isActive ? 'Stop' : 'Start' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'BreathingView',
  data() {
    return {
      isActive: false,
      status: 'idle',
      message: 'Press Start to begin',
      timer: null,
    }
  },
  methods: {
    toggleExercise() {
      this.isActive = !this.isActive
      if (this.isActive) {
        this.runCycle()
      } else {
        this.stopExercise()
      }
    },
    stopExercise() {
      clearTimeout(this.timer)
      this.isActive = false
      this.status = 'idle'
      this.message = 'Press Start to begin'
    },
    runCycle() {
      if (!this.isActive) return

      // Step 1: Inhale (4 seconds)
      this.status = 'inhale'
      this.message = 'Inhale...'

      this.timer = setTimeout(() => {
        if (!this.isActive) return

        // Step 2: Exhale (4 seconds)
        this.status = 'exhale'
        this.message = 'Exhale...'

        this.timer = setTimeout(() => {
          this.runCycle()
        }, 4000)
      }, 4000)
    },
  },
  // Clean up timer if user leaves the page
  beforeUnmount() {
    this.stopExercise()
  },
}
</script>

<style scoped>
.breathing-container {
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #a8dadc;
  margin: 3rem auto;
  /* This transition matches the 4s timer in the script */
  transition: all 4s ease-in-out;
  box-shadow: 0 0 20px rgba(168, 218, 220, 0.5);
}

.circle.inhale {
  transform: scale(1.8);
  background: #457b9d;
}

.circle.exhale {
  transform: scale(1);
  background: #a8dadc;
}

.instruction {
  font-size: 1.8rem;
  color: #1d3557;
  font-weight: bold;
  height: 2rem;
  margin-bottom: 2rem;
}

button {
  padding: 12px 30px;
  font-size: 1.1rem;
  border: none;
  background: #e63946;
  color: white;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #c12a36;
}

.btn-active {
  background: #6c757d;
}
</style>
