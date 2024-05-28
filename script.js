/**
 * Función para calcular el máximo número de paneles solares que caben en un techo.
 * @param {number} a - Ancho del panel solar.
 * @param {number} b - Altura del panel solar.
 * @param {number} x - Ancho del techo.
 * @param {number} y - Altura del techo.
 * @return {number} - Máximo número de paneles que caben en el techo.
 */
function maxPanels(a, b, x, y) {
  // Función para calcular cuántos rectángulos de tamaño `width` x `height` caben en un espacio de `spaceWidth` x `spaceHeight`
  function countPanels(width, height, spaceWidth, spaceHeight) {
      // Cantidad de paneles que caben en la dirección horizontal
      const panelsHorizontally = Math.floor(spaceWidth / width);
      // Cantidad de paneles que caben en la dirección vertical
      const panelsVertically = Math.floor(spaceHeight / height);
      // Retornar el producto de ambos para obtener el total de paneles que caben
      return panelsHorizontally * panelsVertically;
  }

  // Calcular la cantidad de paneles en las dos orientaciones posibles
  // Orientación 1: panel de `a` x `b` en un espacio de `x` x `y`
  const panelsNormal = countPanels(a, b, x, y);
  // Orientación 2: panel de `b` x `a` en un espacio de `x` x `y`
  const panelsRotated = countPanels(b, a, x, y);
  
  // Orientación 3: panel de `a` x `b` en un espacio de `y` x `x` (techo rotado)
  const panelsNormalRotated = countPanels(a, b, y, x);
  // Orientación 4: panel de `b` x `a` en un espacio de `y` x `x` (techo rotado)
  const panelsRotatedRotated = countPanels(b, a, y, x);

  // Devolver el máximo de las cuatro posibilidades
  return Math.max(panelsNormal, panelsRotated, panelsNormalRotated, panelsRotatedRotated);
}

// Ejemplo de uso:
const a = 2, b = 2, x = 1, y = 10;
console.log(maxPanels(a, b, x, y));
