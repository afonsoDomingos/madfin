<template>
  <div class="testimonials-section">
    <div class="container">
      <div class="section-header">
        <h2>O Que Dizem os <span class="highlight-text">Nossos Clientes</span></h2>
        <p>Histórias de sucesso de quem confia na MADFIN.</p>
      </div>
      
      <div class="testimonials-wrapper">
        <div class="testimonials-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="quote-icon">"</div>
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <div class="testimonial-author">
              <div class="author-avatar">{{ testimonial.name.charAt(0) }}</div>
              <div class="author-info">
                <strong>{{ testimonial.name }}</strong>
                <span>{{ testimonial.company }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="slider-dots">
        <button 
          v-for="(_, index) in testimonials" 
          :key="index"
          :class="{ active: currentSlide === index }"
          @click="currentSlide = index"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentSlide = ref(0);
let interval = null;

const testimonials = [
  {
    text: "A qualidade dos uniformes e o atendimento superaram todas as expectativas. A equipe da MADFIN entende realmente o que significa branding.",
    name: "Maria Santos",
    company: "Hotel Polana"
  },
  {
    text: "Entregaram nossos banners e roll-ups em tempo recorde, com uma qualidade impressionante. Recomendo a todos!",
    name: "Carlos Mondlane",
    company: "Eventos Maputo"
  },
  {
    text: "Profissionalismo do início ao fim. Os brindes personalizados foram um sucesso na nossa conferência.",
    name: "Ana Nhamitambo",
    company: "TechMz"
  }
];

onMounted(() => {
  interval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % testimonials.length;
  }, 5000);
});

onUnmounted(() => {
  if (interval) clearInterval(interval);
});
</script>

<style scoped>
.testimonials-section {
  padding: 6rem 0;
  background: var(--color-background-soft);
  overflow: hidden;
}

.testimonials-wrapper {
  overflow: hidden;
  margin: 0 -1rem;
}

.testimonials-track {
  display: flex;
  transition: transform 0.5s ease;
}

.testimonial-card {
  flex: 0 0 100%;
  padding: 3rem;
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  margin: 0 1rem;
  position: relative;
}

.quote-icon {
  position: absolute;
  top: 1rem;
  left: 2rem;
  font-size: 6rem;
  color: var(--color-primary);
  opacity: 0.1;
  font-family: Georgia, serif;
  line-height: 1;
}

.testimonial-text {
  font-size: 1.25rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 50px;
  height: 50px;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-info strong {
  font-size: 1rem;
  color: var(--color-heading);
}

.author-info span {
  font-size: 0.85rem;
  color: var(--color-text-light);
}

.slider-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.slider-dots button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #ddd;
  transition: all 0.3s;
}

.slider-dots button.active {
  background: var(--color-primary);
  transform: scale(1.2);
}
</style>
