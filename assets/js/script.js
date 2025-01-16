'use strict';

// Função para alternar a classe 'active' de um elemento
const elementToggleFunc = function (elem) {
  elem.classList.toggle('active');
};

// Variáveis da barra lateral
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

// Alternar visibilidade da barra lateral ao clicar no botão
sidebarBtn.addEventListener('click', function () {
  elementToggleFunc(sidebar);
});

// Ativar a barra lateral automaticamente em telas menores que 480px
if (window.innerWidth < 480) {
  sidebar.classList.add('active');
}

// Variáveis relacionadas ao modal
const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

// Variáveis de conteúdo do modal
const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

// Função para alternar a visibilidade do modal
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle('active');
  overlay.classList.toggle('active');
};

// Adicionar eventos de clique nos itens de depoimentos
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener('click', function () {
    // Preencher o modal com os dados do item clicado
    modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
    modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
    modalTitle.innerHTML = this.querySelector(
      '[data-testimonials-title]'
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      '[data-testimonials-text]'
    ).innerHTML;

    testimonialsModalFunc(); // Abrir o modal
  });
}

// Adicionar eventos para fechar o modal
modalCloseBtn.addEventListener('click', testimonialsModalFunc);
overlay.addEventListener('click', testimonialsModalFunc);

// custom select variables
// Variáveis relacionadas ao menu de seleção
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-selecct-value]');

// Alternar visibilidade do menu ao clicar
select.addEventListener('click', function () {
  elementToggleFunc(this);
});

// Adicionar evento em cada item do menu
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener('click', function () {
    let selectedValue = this.innerText.toLowerCase(); // Pega o valor selecionado
    selectValue.innerText = this.innerText; // Atualiza o valor exibido no menu
    elementToggleFunc(select); // Fecha o menu
    filterFunc(selectedValue); // Filtra os itens com base no valor selecionado
  });
}

// Variáveis de filtro
const filterItems = document.querySelectorAll('[data-filter-item]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === 'todos') {
      filterItems[i].classList.add('active');
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add('active');
    } else {
      filterItems[i].classList.remove('active');
    }
  }
};

// Adicionar evento nos botões de filtro para telas maiores
let lastClickedBtn = filterBtn[0]; // Mantém referência ao último botão clicado

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener('click', function () {
    let selectedValue = this.innerText.toLowerCase(); // Pega o valor do botão clicado
    selectValue.innerText = this.innerText; // Atualiza o valor exibido no menu
    filterFunc(selectedValue); // Aplica o filtro

    lastClickedBtn.classList.remove('active'); // Remove a classe do botão anterior
    this.classList.add('active'); // Adiciona a classe ao botão atual
    lastClickedBtn = this; // Atualiza o último botão clicado
  });
}

// Variáveis do formulário
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

// Adicionar evento para verificar validação em todos os campos do formulário
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener('input', function () {
    // Verificar se o formulário é válido
    if (form.checkValidity()) {
      formBtn.removeAttribute('disabled'); // Habilitar botão de envio
    } else {
      formBtn.setAttribute('disabled', ''); // Desabilitar botão de envio
    }
  });
}
