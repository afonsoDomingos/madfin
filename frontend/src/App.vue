<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import FooterSection from './components/FooterSection.vue'

const mobileMenuOpen = ref(false)
const router = useRouter()

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMenu = () => {
  mobileMenuOpen.value = false
}

// Close menu on route change
router.afterEach(() => {
  closeMenu()
})
</script>

<template>
  <div class="app-layout">
    <header class="main-header">
        <div class="container nav-wrapper">
          <RouterLink to="/" class="logo">
              <span>MAD</span><span class="highlight">FIN</span>
          </RouterLink>
          
          <!-- Desktop Nav -->
          <nav class="desktop-nav">
            <RouterLink to="/">Início</RouterLink>
            <RouterLink to="/servicos">Serviços</RouterLink>
            <RouterLink to="/portfolio">Portfólio</RouterLink>
            <RouterLink to="/contactos">Contactos</RouterLink>
          </nav>
          
          <!-- Mobile Menu Button -->
          <button class="mobile-menu-btn" @click="toggleMenu" :class="{ 'active': mobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
    </header>
    
    <!-- Mobile Nav Overlay -->
    <div class="mobile-nav-overlay" :class="{ 'open': mobileMenuOpen }" @click="closeMenu"></div>
    
    <!-- Mobile Nav Drawer -->
    <nav class="mobile-nav" :class="{ 'open': mobileMenuOpen }">
      <div class="mobile-nav-header">
        <span class="mobile-logo">MAD<span class="highlight">FIN</span></span>
        <button class="close-btn" @click="closeMenu">×</button>
      </div>
      <div class="mobile-nav-links">
        <RouterLink to="/" @click="closeMenu">Início</RouterLink>
        <RouterLink to="/servicos" @click="closeMenu">Serviços</RouterLink>
        <RouterLink to="/portfolio" @click="closeMenu">Portfólio</RouterLink>
        <RouterLink to="/contactos" @click="closeMenu">Contactos</RouterLink>
      </div>
      <div class="mobile-nav-footer">
        <a href="https://wa.me/258862737770" class="whatsapp-link" target="_blank">
          📱 Falar no WhatsApp
        </a>
      </div>
    </nav>

    <main class="main-content">
      <RouterView />
    </main>

    <FooterSection />
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
    text-decoration: none;
}

.highlight {
    color: var(--color-primary);
}

/* Desktop Nav */
.desktop-nav a {
    color: var(--color-text);
    margin-left: 2.5rem;
    font-weight: 600;
    font-size: 1rem;
    position: relative;
    transition: all 0.3s ease;
}

.desktop-nav a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--color-primary);
    transition: width 0.3s ease;
}

.desktop-nav a:hover, .desktop-nav a.router-link-active {
    color: var(--color-primary);
}

.desktop-nav a:hover::after, .desktop-nav a.router-link-active::after {
    width: 100%;
}

/* Mobile Menu Button (Hamburger) */
.mobile-menu-btn {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1002;
}

.mobile-menu-btn span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #111;
    border-radius: 3px;
    transition: all 0.3s ease;
}

.mobile-menu-btn.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-btn.active span:nth-child(2) {
    opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Nav Overlay */
.mobile-nav-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 998;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.mobile-nav-overlay.open {
    opacity: 1;
    visibility: visible;
}

/* Mobile Nav Drawer */
.mobile-nav {
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100%;
    background-color: #ffffff;
    z-index: 999;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
    transform: translateX(100%);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
}

.mobile-nav.open {
    transform: translateX(0);
}

.mobile-nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid #eee;
    background-color: #ffffff;
}

.mobile-logo {
    font-size: 1.5rem;
    font-weight: 800;
    color: #111;
}

.close-btn {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #111;
    line-height: 1;
}

.mobile-nav-links {
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;
    flex-grow: 1;
    background-color: #ffffff;
}

.mobile-nav-links a {
    display: block;
    padding: 1rem 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: #111111;
    border-bottom: 1px solid #f0f0f0;
    text-decoration: none;
}

.mobile-nav-links a:hover, .mobile-nav-links a.router-link-active {
    color: #8CC63F;
}

.mobile-nav-footer {
    padding: 1.5rem;
    border-top: 1px solid #eee;
    background-color: #ffffff;
}

.whatsapp-link {
    display: block;
    background: #25d366;
    color: white;
    text-align: center;
    padding: 1rem;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
}

.main-content {
    flex: 1;
}

/* Responsive - Show mobile menu on smaller screens */
@media (max-width: 768px) {
    .desktop-nav {
        display: none;
    }
    
    .mobile-menu-btn {
        display: flex;
    }
}
</style>
