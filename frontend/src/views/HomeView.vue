<script setup>
</script>

<template>
  <main>
    <section class="hero-creative">
      <div class="container hero-content">
        <div class="text-block">
            <span class="eyebrow">Qualidade & Precisão</span>
            <h1>
                Somos líderes em <br>
                <span class="highlight-text">soluções de bordados</span>
            </h1>
            <p>Transforme a identidade da sua marca com impressões digitais, serigrafia de alta definição e materiais personalizados que impressionam.</p>
            <div class="actions">
               <router-link to="/contactos" class="cta-button primary">Pedir Orçamento</router-link>
               <router-link to="/portfolio" class="cta-button outline">Ver Trabalhos</router-link>
            </div>
        </div>
        <div class="visual-block">
             <div class="creative-circle"></div>
             <div class="creative-card">
                <span class="card-icon">✨</span>
                <strong>Design Premium</strong>
             </div>
             <!-- Using the artistic portrait for a striking creative first impression -->
             <img src="/images/artistic_portrait.png" alt="MadFin Creative" class="hero-img" />
        </div>
      </div>
    </section>
    
    <section class="featured-work">
        <div class="container">
            <div class="section-header">
                <h2>Nosso <span class="highlight-text">Trabalho</span></h2>
                <p>Veja algumas das marcas que transformamos.</p>
            </div>
            <div class="bento-grid">
                <div class="bento-item item-large">
                    <img src="/images/merch_black_gold.png" alt="Brindes Premium" />
                    <div class="overlay">
                        <h4>Brindes Premium</h4>
                        <span>Design & Serigrafia</span>
                    </div>
                </div>
                <div class="bento-item">
                    <img src="/images/merch_fire.png" alt="Fardamentos" />
                    <div class="overlay">
                        <h4>Fardamentos</h4>
                        <span>Sublimação Total</span>
                    </div>
                </div>
                 <div class="bento-item">
                     <img src="/images/merch_red.png" alt="Identidade Visual" />
                     <div class="overlay">
                        <h4>Identidade Corporativa</h4>
                        <span>Design Gráfico</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="partners reveal-on-scroll">
        <div class="container">
            <h3>Empresas que confiam na MADFIN</h3>
            <div class="partners-grid">
                <!-- Using placeholders for now -->
                <div class="partner-logo">LOGO 1</div>
                <div class="partner-logo">LOGO 2</div>
                <div class="partner-logo">LOGO 3</div>
                <div class="partner-logo">LOGO 4</div>
                <div class="partner-logo">LOGO 5</div>
            </div>
        </div>
    </section>

    <section class="team-section reveal-on-scroll">
        <div class="container">
            <div class="section-header">
                <h2>Nossa <span class="highlight-text">Equipe</span></h2>
                <p>Talentos dedicados a fazer sua marca brilhar.</p>
            </div>
            <div class="team-grid">
                <div class="team-card">
                    <div class="avatar-placeholder">S</div>
                    <h4>Stewart</h4>
                    <span class="role">CEO & Fundador</span>
                </div>
                <div class="team-card">
                    <div class="avatar-placeholder">D</div>
                    <h4>Donnie Gane</h4>
                    <span class="role">Diretor Criativo</span>
                </div>
                 <div class="team-card">
                    <div class="avatar-placeholder">J</div>
                    <h4>Joseph</h4>
                    <span class="role">Gestão de Produção</span>
                </div>
                 <div class="team-card">
                    <div class="avatar-placeholder">A</div>
                    <h4>Afonso Domingos</h4>
                    <span class="role">IT & Tecnologia</span>
                </div>
            </div>
        </div>
    </section>

    <section class="intro-section reveal-on-scroll">
        <div class="container split-layout">
            <div class="content">
                <h2>Sobre a <span class="highlight-text">MADFIN</span></h2>
                <p>Somos uma gráfica moçambicana especializada em elevar o padrão da sua comunicação visual. Combinamos tecnologia moderna com acabamento artesanal.</p>
                <ul class="check-list">
                    <li>✓ Atendimento Personalizado</li>
                    <li>✓ Entrega Rápida em Maputo</li>
                    <li>✓ Qualidade Garantida</li>
                </ul>
            </div>
             <div class="image-stack">
                 <!-- Using office/machine shots for the "About" section -->
                 <div class="box box-1"></div>
                 <div class="box box-2"></div>
            </div>
        </div>
    </section>
  </main>
  
  <WhatsAppWidget />
</template>

<script setup>
import { onMounted } from 'vue';
import WhatsAppWidget from '../components/WhatsAppWidget.vue';

// Scroll Animation Logic
onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(section => {
        observer.observe(section);
    });
});
</script>

<style scoped>
/* Scroll Animation Classes */
.reveal-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
}

.reveal-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Hero Creative */
.hero-creative {
  background: radial-gradient(circle at top right, #f4fcf4 0%, #ffffff 60%);
  padding: 8rem 0 6rem;
  position: relative;
  overflow: hidden;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.eyebrow {
    text-transform: uppercase;
    color: var(--color-primary);
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    display: block;
}

h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--color-heading);
}

.hero-creative p {
  font-size: 1.15rem;
  color: var(--color-text-light);
  margin-bottom: 2.5rem;
  max-width: 500px;
  line-height: 1.8;
}

.actions {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.cta-button {
  padding: 1rem 2.5rem;
  border-radius: 50px; /* Pillow shape */
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1.1rem;
}

.cta-button.primary {
  background-color: var(--color-primary);
  color: white;
  box-shadow: var(--shadow-lg);
}

.cta-button.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(140, 198, 63, 0.4);
}

.cta-button.outline {
  border: 2px solid #e0e0e0;
  color: var(--color-heading);
}

.cta-button.outline:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
}

/* Visual Block (Right Side) */
.visual-block {
    position: relative;
    height: 600px;
    display: none; /* Hidden on massive mobile but simplified */
}

@media (min-width: 900px) {
    .visual-block { display: block; }
}

.hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    position: relative;
    z-index: 2;
}

.creative-circle {
    position: absolute;
    top: -50px;
    right: -50px;
    width: 300px;
    height: 300px;
    background-color: #f0f9e8;
    border-radius: 50%;
    z-index: 1;
}

.creative-card {
    position: absolute;
    bottom: 60px;
    left: -40px;
    background: white;
    padding: 1.5rem;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 1rem;
    animation: float 4s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

/* Features Strip */
.features {
    padding: 2rem 0; /* Reduced padding mobile */
    margin-top: -2rem;
    z-index: 5;
    position: relative;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.feature-item {
    background: white;
    padding: 2.5rem;
    box-shadow: var(--shadow-sm);
    border-radius: var(--radius-md);
    transition: all 0.3s;
    border: 1px solid transparent;
}

.feature-item.active, .feature-item:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-md);
    transform: translateY(-5px);
}

.feature-item h3 {
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
}

/* Featured Work (Bento Grid) */
.featured-work {
    padding: 6rem 0;
    background-color: var(--color-background-soft);
}

.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.section-header h2 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.bento-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    height: auto;
}

@media (min-width: 768px) {
    .bento-grid {
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 250px 250px;
        height: 500px;
    }
    
    .item-large {
        grid-row: span 2;
    }
}

.bento-item {
    position: relative;
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    background: #e0e0e0;
}

.bento-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.bento-item:hover img {
    transform: scale(1.05);
}

.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    color: white;
    padding: 2rem;
    opacity: 0;
    transition: opacity 0.3s;
}

.bento-item:hover .overlay {
    opacity: 1;
}

/* Partners Section */
.partners {
    padding: 4rem 0;
    text-align: center;
    background: white;
}

.partners h3 {
    color: var(--color-text-light);
    font-weight: 500;
    margin-bottom: 2rem;
}

.partners-grid {
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
    opacity: 0.6;
}

.partner-logo {
    font-weight: 700;
    font-size: 1.5rem;
    color: #ccc;
}

/* Team Section */
.team-section {
    padding: 6rem 0;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
}

.team-card {
    background: white;
    padding: 2rem;
    border-radius: var(--radius-md);
    text-align: center;
    box-shadow: var(--shadow-sm);
    transition: transform 0.3s;
}

.team-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
}

.avatar-placeholder {
    width: 80px;
    height: 80px;
    background: var(--color-background-soft);
    color: var(--color-primary);
    font-size: 2rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 auto 1rem;
}

.team-card h4 {
    margin-bottom: 0.2rem;
    font-size: 1.1rem;
}

.role {
    font-size: 0.9rem;
    color: var(--color-text-light);
}

/* Intro Section */
.intro-section {
    padding: 6rem 0;
}

.split-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    align-items: center;
}

@media (min-width: 900px) {
    .split-layout {
        grid-template-columns: 1fr 1fr;
    }
}

.check-list {
    list-style: none;
    margin-top: 2rem;
}

.check-list li {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-weight: 500;
}

.image-stack {
    position: relative;
    height: 400px;
    display: none;
}

@media (min-width: 768px) {
    .image-stack { display: block; }
}

.box {
    position: absolute;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    background-size: cover;
    background-position: center;
}

.box-1 {
    width: 80%;
    height: 80%;
    right: 0;
    top: 0;
    background-image: url('/images/large_printer.png');
    z-index: 2;
}

.box-2 {
    width: 80%;
    height: 80%;
    left: 0;
    bottom: 0;
    background-image: url('/images/embroidery_machine.png');
    z-index: 1;
    filter: brightness(0.7);
}

@media (max-width: 900px) {
    .hero-creative { padding: 6rem 0 4rem; }
    .hero-content { grid-template-columns: 1fr; text-align: center; }
    .actions { justify-content: center; }
    .hero-creative p { margin: 0 auto 2.5rem; }
    .visual-block { margin-top: 3rem; height: 300px; display: block; }
    .creative-card { display: none; }
    .image-stack { height: 300px; display: block; margin-top: 2rem; }
}
</style>
