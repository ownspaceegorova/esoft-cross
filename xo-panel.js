const cells = document.querySelectorAll('.cell');
let clickCount = 0;
cells.forEach((cells) => {
  const child = cells.querySelector('.hod');

  cells.addEventListener('click', () => {
    if (!cells.classList.contains('cross-active') && !cells.classList.contains('zero-active')) {
    clickCount++;
    if (clickCount % 2 === 0) {
      child.classList.add('zero-active');
      cells.classList.add('zero-active');
      document.getElementById('game-step').innerHTML='Ходит&nbsp;<img src="image/x.svg"/>&nbsp;Екатерина Плюшкина';
    } else {
      child.classList.add('cross-active');
      cells.classList.add('cross-active');
      document.getElementById('game-step').innerHTML='Ходит&nbsp;<img src="image/zero.svg"/>&nbsp;Владлен Пупкин';
    }
}
  });
});



