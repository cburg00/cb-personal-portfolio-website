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

  document.querySelectorAll('.skills-con').forEach(container => {
    container.addEventListener('click', () => {
        const info = container.querySelector('.skill-info');
        if (info) {
            if (info.classList.contains('show')) {
                // Collapse
                info.style.maxHeight = null;
                info.classList.remove('show');
            } else {
                // Expand
                info.style.maxHeight = info.scrollHeight + 'px'; // Dynamically set height
                info.classList.add('show');
            }
        }
    });
});

