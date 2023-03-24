let code = document.getElementById('colorcode');
let btn = document.getElementById('btn');

changecode = function () {
  let num = Math.floor(Math.random() * 16777215);
  let color = '#' + num.toString(16);
  code.textContent = color;
  document.body.style.background = color;
};

btn.addEventListener('click', changecode);
