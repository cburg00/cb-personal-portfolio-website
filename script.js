document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const icon = dropdownBtn.querySelector('i'); 
  
    dropdownBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      dropdownContent.classList.toggle('show');
  
      if (dropdownContent.classList.contains('show')) {
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
      } else {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
      }
    });
  
    document.addEventListener('click', (event) => {
      if (!dropdownContent.contains(event.target) && 
          !dropdownBtn.contains(event.target)) {
        dropdownContent.classList.remove('show');
        
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
      }
    });
  });
  