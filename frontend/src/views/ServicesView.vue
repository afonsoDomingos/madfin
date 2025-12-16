<template>
  <div class="page-header">
     <div class="container">
         <h1>Nossos <span class="highlight-text">Serviços</span></h1>
         <p>Soluções completas para dar vida à sua marca.</p>
     </div>
  </div>
  
  <div class="container page-content">
    <div class="service-grid">
        <div class="service-card">
            <div class="icon-box">🖌️</div>
            <h3>Serigrafia</h3>
            <p>Impressão de alta durabilidade em tecidos. Ideal para uniformes e camisetas promocionais.</p>
            <a href="#" class="learn-more">Saber mais -></a>
        </div>
        <div class="service-card">
            <div class="icon-box">🖨️</div>
            <h3>Impressão Digital</h3>
            <p>Qualidade fotográfica em grandes formatos: Banners, Vinil, Outdoors e Roll-ups.</p>
            <a href="#" class="learn-more">Saber mais -></a>
        </div>
        <div class="service-card">
            <div class="icon-box">🎨</div>
            <h3>Design Gráfico</h3>
            <p>Criação de logotipos, identidade visual e rebranding corporativo.</p>
            <a href="#" class="learn-more">Saber mais -></a>
        </div>
        <div class="service-card">
            <div class="icon-box">🎁</div>
            <h3>Brindes Personalizados</h3>
            <p>Canetas, agendas, chaveiros e garrafas com a marca da sua empresa.</p>
            <a href="#" class="learn-more">Saber mais -></a>
        </div>
         <div class="service-card">
            <div class="icon-box">🧵</div>
            <h3>Bordados</h3>
            <p>Acabamento premium para bonés, polos e fardamentos corporativos.</p>
            <a href="#" class="learn-more">Saber mais -></a>
        </div>
         <div class="service-card">
            <div class="icon-box">🚗</div>
            <h3>Decoração de Viaturas</h3>
            <p>Leve sua marca para todo lugar com envelopamento profissional de frotas.</p>
            <a href="#" class="learn-more">Saber mais -></a>
        </div>
    </div>
  </div>
</template>

<style scoped>
.page-header {
    background-color: var(--color-background-soft);
    padding: 6rem 0 3rem;
    text-align: center;
}

.page-header h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.page-header p {
    color: var(--color-text-light);
    font-size: 1.2rem;
}

.page-content {
    padding: 4rem 2rem;
}

.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
}

.service-card {
    background: white;
    padding: 3rem 2rem;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    transition: all 0.3s ease;
    border: 1px solid rgba(0,0,0,0.03);
    display: flex;
    flex-direction: column;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-primary);
}

.icon-box {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    background: #f4fcf4;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

.service-card h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.service-card p {
    color: var(--color-text-light);
    margin-bottom: 2rem;
    flex-grow: 1;
}

.learn-more {
    color: var(--color-primary);
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 1px;
}
</style>
