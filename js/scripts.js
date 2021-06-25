let modal = document.querySelector('.modal'),
  isModalOpen = false,
  menuItem = document.querySelectorAll('.menu-item');

function modalToggle() {
  console.log(isModalOpen, "!!is modal open");
  if (!isModalOpen) {
    modal.classList.add('show');
    console.log('modal shown');
    isModalOpen = !isModalOpen;
  } else {
    modal.classList.remove('show');
    console.log('modal hidden');
    isModalOpen = !isModalOpen;
  }
}

// open modal when clicking on UI element
menuItem.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log(e.target);
    modalToggle();
  });
})

// click to close modal
document.addEventListener('click', () => {
  if (isModalOpen) {
    modalToggle();
  }
})

// press ESC to close modal
document.addEventListener('keydown', (event => {
  if (event.key === 'Escape' && isModalOpen) {
    modal.classList.remove('show');
    isModalOpen = !isModalOpen;
  }
}))