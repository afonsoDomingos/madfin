<template>
  <footer class="main-footer">
    <div class="footer-main">
      <div class="container footer-grid">
        <div class="footer-brand">
          <div class="logo"><span>MAD</span><span class="highlight">FIN</span></div>
          <p>Gráfica & Serigrafia líder em Moçambique. Transformamos ideias em realidade visual.</p>
          <div class="social-links">
            <a href="https://www.facebook.com/profile.php?id=100066710771686" target="_blank" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="https://www.instagram.com/madfin.oficial" target="_blank" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://wa.me/258862737770" target="_blank" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            </a>
          </div>
        </div>
        
        <div class="footer-links">
          <h4>Links Rápidos</h4>
          <ul>
            <li><router-link to="/">Início</router-link></li>
            <li><router-link to="/servicos">Serviços</router-link></li>
            <li><router-link to="/portfolio">Portfólio</router-link></li>
            <li><router-link to="/contactos">Contactos</router-link></li>
          </ul>
        </div>
        
        <div class="footer-services">
          <h4>Serviços</h4>
          <ul>
            <li>Serigrafia</li>
            <li>Impressão Digital</li>
            <li>Bordados</li>
            <li>Brindes Personalizados</li>
          </ul>
        </div>
        
        <div class="footer-contact">
          <h4>Contacto</h4>
          <ul>
            <li>📍 Rua da Resistência Nº1631, Bairro Central</li>
            <li>📞 +258 86 273 7770</li>
            <li>📧 geral@madfin.co.mz</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container footer-bottom-content">
        <p>&copy; {{ currentYear }} MADFIN - Gráfica & Serigrafia. Todos os direitos reservados.</p>
        <p class="credits">Desenvolvido com ❤️ por <a href="#">Afonso Domingos</a></p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.main-footer {
  background: #111;
  color: #aaa;
}

.footer-main {
  padding: 4rem 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
}

.footer-brand .logo {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: white;
}

.highlight {
  color: var(--color-primary);
}

.footer-brand p {
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s;
}

.social-links a:hover {
  background: var(--color-primary);
  transform: translateY(-3px);
}

h4 {
  color: white;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

ul {
  list-style: none;
}

ul li {
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
}

ul li a {
  color: #aaa;
  transition: color 0.3s;
}

ul li a:hover {
  color: var(--color-primary);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 1.5rem 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
}

.credits a {
  color: var(--color-primary);
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  .footer-brand {
    grid-column: span 2;
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .footer-main {
    padding: 3rem 0;
  }
  
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    text-align: center;
  }
  
  .footer-brand {
    grid-column: span 2;
  }
  
  .footer-brand p {
    font-size: 0.85rem;
  }
  
  h4 {
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }
  
  ul li {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.75rem;
  }
}
</style>
