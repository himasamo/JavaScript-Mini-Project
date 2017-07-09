const priceInput = document.querySelector('[name=price]');
const quantityInput = document.querySelector('[name=quantity]');
const total = document.querySelector('.total');
const quantityLabel = document.querySelector('.quantity-label');

function  calcPriceCost(){
  const price = priceInput.value;
  const quantity = quantityInput.value;
  const cost = price * quantity;
  console.log(cost);
  total.innerText = '$' + cost.toFixed(2);
}

function updateQuantity(){
  const quantity = quantityInput.value;
  quantityLabel.innerText = quantity;
}
priceInput.addEventListener('input', calcPriceCost);
quantityInput.addEventListener('input', calcPriceCost);
quantityInput.addEventListener('input', updateQuantity);
