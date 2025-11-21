const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  let current = document.documentElement.getAttribute('data-theme');
  let newTheme = current === 'light' ? 'dark' : 'light';

  document.documentElement.setAttribute('data-theme', newTheme);

  localStorage.setItem('theme', newTheme);
});
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
}