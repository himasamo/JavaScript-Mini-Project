const accordion = document.querySelector('.accordion');
const item = accordion.querySelectorAll('li');
const question = accordion.querySelectorAll('.question');
function toggleAcco(){
  const thisItem = this.parentNode;
  item.forEach(item => {
    if(thisItem == item){
      thisItem.classList.toggle('open')
      return;
    }
    item.classList.remove('open')
  });
}
question.forEach(question => question.addEventListener('click', toggleAcco));
