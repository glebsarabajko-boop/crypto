document.addEventListener('DOMContentLoaded', function() {
  // 1. Navbar toggler (бургер)
  const toggler = document.querySelector('.navbar-toggler');
  if (toggler) {
    toggler.addEventListener('click', function() {
      const target = document.querySelector(this.getAttribute('data-bs-target') || '.navbar-collapse');
      if (target) {
        target.classList.toggle('show');
      }
    });
  }

  //2. Модальные окна
  const modalTriggers = document.querySelectorAll('[data-bs-toggle="modal"]');
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-bs-target');
      if (targetId) {
        const modal = document.querySelector(targetId);
        if (modal) openModal(modal);
      }
    });
  });

  const modalDismiss = document.querySelectorAll('[data-bs-dismiss="modal"]');
  modalDismiss.forEach(btn => {
    btn.addEventListener('click', function() {
      const modal = this.closest('.modal');
      if (modal) closeModal(modal);
    });
  });

  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) closeModal(this);
    });
  });

  function openModal(modal) {
    modal.classList.add('show');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  function closeModal(modal) {
    modal.classList.remove('show');
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
});