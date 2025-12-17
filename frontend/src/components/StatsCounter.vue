<template>
  <div class="stats-section reveal-on-scroll">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item" v-for="stat in stats" :key="stat.label">
          <div class="stat-number">
            <span class="counter" :data-target="stat.value">0</span>
            <span class="suffix">{{ stat.suffix }}</span>
          </div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const stats = [
  { value: 500, suffix: '+', label: 'Projetos Realizados' },
  { value: 150, suffix: '+', label: 'Clientes Satisfeitos' },
  { value: 8, suffix: '', label: 'Anos de Experiência' },
  { value: 24, suffix: 'h', label: 'Suporte Dedicado' },
];

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const section = document.querySelector('.stats-section');
  if (section) observer.observe(section);
});

function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    updateCounter();
  });
}
</script>

<style scoped>
.stats-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  text-align: center;
}

.stat-item {
  position: relative;
}

.stat-item::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 60%;
  background: rgba(255,255,255,0.2);
}

.stat-item:last-child::after {
  display: none;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.suffix {
  font-size: 2rem;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .stats-section {
    padding: 3rem 0;
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1rem;
  }
  .stat-number { 
    font-size: 2rem; 
  }
  .suffix {
    font-size: 1.2rem;
  }
  .stat-label {
    font-size: 0.8rem;
  }
  .stat-item::after { 
    display: none; 
  }
}

@media (max-width: 400px) {
  .stat-number { 
    font-size: 1.8rem; 
  }
  .stat-label {
    font-size: 0.7rem;
  }
}
</style>
