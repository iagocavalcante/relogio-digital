// Variável para controlar o formato do relógio (true = 24h, false = 12h)
let formato24h = true;

// Função para atualizar o relógio digital
function atualizarRelogio() {
  const agora = new Date();
  let horas = agora.getHours();
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const segundos = agora.getSeconds().toString().padStart(2, '0');
  
  let periodo = '';
  
  if (!formato24h) {
    // Formato 12h
    periodo = horas >= 12 ? ' PM' : ' AM';
    horas = horas % 12;
    horas = horas ? horas : 12; // Se for 0, mostrar 12
  }
  
  const horasFormatadas = horas.toString().padStart(2, '0');

  document.getElementById('horas').textContent = horasFormatadas;
  document.getElementById('minutos').textContent = minutos;
  document.getElementById('segundos').textContent = segundos;
  document.getElementById('periodo').textContent = periodo;
}

// Função para alternar entre formato 24h e 12h
function toggleFormato() {
  formato24h = !formato24h;
  const formatoTexto = formato24h ? '24h' : '12h';
  document.getElementById('formatoAtual').textContent = formatoTexto;
  atualizarRelogio();
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
  
  // Adicionar evento ao botão de toggle
  document.getElementById('toggleFormato').addEventListener('click', toggleFormato);
});
