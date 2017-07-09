const btns = document.querySelectorAll('.btn-crazy');

function goCrazy(e){
  const offsetLeft = Math.random() * (window.innerWidth - this.clientWidth);
  const offsetTop = Math.random() * (window.innerHeight - this.clientHeight);

  console.log(offsetLeft, offsetTop);

  this.style.top = offsetTop + 'px';
  this.style.left = offsetLeft + 'px';
}

btns.forEach(button => button.addEventListener('mouseenter', goCrazy));
