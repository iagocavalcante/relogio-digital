// Função para atualizar o relógio digital
function atualizarRelogio() {
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, '0');
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const segundos = agora.getSeconds().toString().padStart(2, '0');

  document.getElementById('horas').textContent = horas;
  document.getElementById('minutos').textContent = minutos;
  document.getElementById('segundos').textContent = segundos;
}

// Função para alternar FAQ
function toggleFAQ(faqNumber) {
  const faqAnswer = document.getElementById(`faq-${faqNumber}`);
  const faqQuestion = faqAnswer.previousElementSibling;
  const faqIcon = faqQuestion.querySelector('.faq-icon');

  // Fechar outros FAQs abertos
  const allFaqAnswers = document.querySelectorAll('.faq-answer');
  const allFaqQuestions = document.querySelectorAll('.faq-question');
  const allFaqIcons = document.querySelectorAll('.faq-icon');

  allFaqAnswers.forEach(answer => {
    if (answer !== faqAnswer) {
      answer.classList.remove('active');
    }
  });

  allFaqQuestions.forEach(question => {
    if (question !== faqQuestion) {
      question.classList.remove('active');
    }
  });

  allFaqIcons.forEach(icon => {
    if (icon !== faqIcon) {
      icon.textContent = '+';
    }
  });

  // Alternar o FAQ atual
  faqAnswer.classList.toggle('active');
  faqQuestion.classList.toggle('active');

  if (faqAnswer.classList.contains('active')) {
    faqIcon.textContent = '−';
  } else {
    faqIcon.textContent = '+';
  }
}

// Inicializar o relógio e atualizar a cada segundo
document.addEventListener('DOMContentLoaded', function () {
  atualizarRelogio();
  setInterval(atualizarRelogio, 1000);
});
