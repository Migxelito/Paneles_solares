function maxPanels(a, b, x, y) {
  function countPanels(width, height, spaceWidth, spaceHeight) {
    const panelsHorizontally = Math.floor(spaceWidth / width);
    const panelsVertically = Math.floor(spaceHeight / height);
    return panelsHorizontally * panelsVertically;
  }

  const panelsNormal = countPanels(a, b, x, y);
  const panelsRotated = countPanels(b, a, x, y);
  const panelsNormalRotated = countPanels(a, b, y, x);
  const panelsRotatedRotated = countPanels(b, a, y, x);

  return Math.max(
    panelsNormal,
    panelsRotated,
    panelsNormalRotated,
    panelsRotatedRotated
  );
}

function calculatePanels() {
  const a = parseInt(document.getElementById("a").value);
  const b = parseInt(document.getElementById("b").value);
  const x = parseInt(document.getElementById("x").value);
  const y = parseInt(document.getElementById("y").value);

  if (isNaN(a) || isNaN(b) || isNaN(x) || isNaN(y)) {
    alert("Por favor, ingrese valores válidos.");
    return;
  }

  const result = maxPanels(a, b, x, y);
  alert(
    `La cantidad máxima de paneles solares que caben en el techo es: ${result}`
  );
}
