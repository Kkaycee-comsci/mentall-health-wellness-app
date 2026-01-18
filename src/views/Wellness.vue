<template>
  <div class="wellness-page">
    <h2>Daily Wellness Tips</h2>

    <div class="featured-tip">
      <span class="badge">Tip of the Day</span>
      <h3>{{ tips[0].icon }} {{ tips[0].title }}</h3>
      <p>{{ tips[0].desc }}</p>
    </div>

    <div class="tips-grid">
      <div v-for="tip in tips.slice(1)" :key="tip.id" class="tip-card">
        <div class="icon-circle">{{ tip.icon }}</div>
        <h3>{{ tip.title }}</h3>
        <p>{{ tip.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WellnessView',
  data() {
    return {
      tips: [
        {
          id: 1,
          icon: '💧',
          title: 'Hydration',
          desc: 'Drink at least 8 glasses of water a day to keep your mind sharp and skin glowing.',
        },
        {
          id: 2,
          icon: '🚶',
          title: 'Movement',
          desc: 'A short 10-minute walk can significantly boost your mood and energy levels.',
        },
        {
          id: 3,
          icon: '😴',
          title: 'Sleep',
          desc: 'Aim for 7-9 hours of restful sleep to help your brain recharge and process emotions.',
        },
        {
          id: 4,
          icon: '🧘',
          title: 'Mindfulness',
          desc: 'Practice 5 minutes of meditation to reduce cortisol levels and find your center.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.wellness-page {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.featured-tip {
  background: linear-gradient(135deg, #e0f2f1 0%, #ffffff 100%);
  padding: 2rem;
  border-radius: 20px;
  margin-bottom: 3rem;
  border: 2px solid #42b983;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.badge {
  background: #42b983;
  color: white;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.tip-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tip-card:hover {
  transform: translateY(-5px);
}

.icon-circle {
  font-size: 2rem;
  background: #f0fdf4;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 1rem;
}

h3 {
  margin: 0.5rem 0;
  color: #2c3e50;
}

p {
  color: #64748b;
  line-height: 1.6;
}
</style>
