<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-layout">
    <header class="main-header">
        <div class="container nav-wrapper">
          <div class="logo">
              <!-- Using text for now, could be image -->
              <span>MAD</span><span class="highlight">FIN</span>
          </div>
          <nav>
            <RouterLink to="/">Início</RouterLink>
            <RouterLink to="/servicos">Serviços</RouterLink>
            <RouterLink to="/portfolio">Portfólio</RouterLink>
            <RouterLink to="/contactos">Contactos</RouterLink>
          </nav>
        </div>
    </header>

    <main class="main-content">
      <RouterView />
    </main>

    <footer class="main-footer">
        <div class="container">
            <p>&copy; 2024 MADFIN - Gráfica e Serigrafia. Todos os direitos reservados.</p>
        </div>
    </footer>
  </div>
</template>

<style scoped>
.app-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.main-header {
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    color: var(--color-heading);
    padding: 1.2rem 0;
    box-shadow: var(--shadow-sm);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -1px;
    color: var(--color-heading);
}

.highlight {
    color: var(--color-primary);
}

nav a {
    color: var(--color-text);
    margin-left: 2.5rem;
    font-weight: 600;
    font-size: 1rem;
    position: relative;
    transition: all 0.3s ease;
}

nav a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--color-primary);
    transition: width 0.3s ease;
}

nav a:hover, nav a.router-link-active {
    color: var(--color-primary);
}

nav a:hover::after, nav a.router-link-active::after {
    width: 100%;
}

.main-content {
    flex: 1;
}

.main-footer {
    background: linear-gradient(to top, #ffffff, #f4fcf4);
    color: var(--color-text-light);
    text-align: center;
    padding: 3rem 0;
    margin-top: auto;
    border-top: 1px solid rgba(0,0,0,0.05);
}
</style>
