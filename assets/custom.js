document.addEventListener('click', function (e) {
  const btn = e.target.closest('.size-chart-trigger');
  if (!btn) return;

  e.preventDefault();
  e.stopPropagation();

  const id = btn.getAttribute('aria-controls');
  if (!id) return;

  const drawer = document.getElementById(id);
  if (!drawer) return;

  // Most Impact drawers open when "open" attribute is present
  drawer.setAttribute('open', '');
});
