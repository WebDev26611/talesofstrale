// Toggle dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function() {
      const dropdownDisplay = this.nextElementSibling;
      dropdownDisplay.classList.toggle('show');
      this.classList.toggle('open');
    });
  });
});