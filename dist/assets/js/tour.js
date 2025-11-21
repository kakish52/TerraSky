(function() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const titleEl = document.getElementById('tour-title');
  const imgEl = document.getElementById('tour-img');
  const descEl = document.getElementById('tour-desc');
  const priceEl = document.getElementById('tour-price');

  if (!id || !tours[id]) {
    titleEl.textContent = 'Тур не найден';
    descEl.textContent = 'Возможно, вы перешли по неверной ссылке.';
    imgEl.style.display = 'none';
    priceEl.textContent = '';
    return;
  }

  const t = tours[id];
  titleEl.textContent = t.title;
  imgEl.src = t.img;
  imgEl.alt = t.title;
  descEl.textContent = t.desc;
  priceEl.textContent = t.price;
})();