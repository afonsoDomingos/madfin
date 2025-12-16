<template>
  <div class="container page-content">
    <h1>Contacte-nos</h1>
    <div class="contact-info">
        <p><strong>Telefone:</strong> +258 86 273 7770</p>
        <p><strong>Instagram:</strong> madfin.oficial</p>
        <p><strong>Facebook:</strong> <a href="https://www.facebook.com/profile.php?id=100066710771686" target="_blank">MADFIN</a></p>
    </div>
    
    <div class="contact-form">
        <h2>Pedir Orçamento</h2>
        <form @submit.prevent="submitForm">
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Telefone" />
            <textarea placeholder="Detalhes do Pedido" required></textarea>
            <button type="submit" class="submit-btn">Enviar Pedido</button>
        </form>
    </div>
  </div>
</template>

<script setup>
const submitForm = () => {
    alert('Funcionalidade de envio em breve!');
}
</script>

<style scoped>
.page-content {
    padding: 2rem;
}
.contact-form {
    max-width: 600px;
    margin-top: 2rem;
}
input, textarea {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.submit-btn {
    background-color: var(--color-primary);
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>
