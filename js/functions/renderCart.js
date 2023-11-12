const cartContainer = document.querySelector('.cart__container');
const cartEl = document.querySelector('.cart');
// console.log(cartContainer);

cartEl.onclick = function () {
    cartContainer.classList.toggle('cart__container_active');
}

function renderCart(dataObj) {

    const renderCartEl = document.createElement('div');
    const indexEl = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('div');
    const quantContainer = document.createElement('div');
    const quantEl = document.createElement('input')
    const quantElItem = document.createElement('div');
    const priceBlock = document.createElement('div');
    const priceX = document.createElement('div');
    const priceItem = document.createElement('div');
    const priceEq = document.createElement('div');
    const priceGenLabel = document.createElement('label')
    const btnDel = document.createElement('button');

    renderCartEl.className = 'cart__element'
    renderCartEl.dataset.id = dataObj.id;

    indexEl.className = 'cart__index';
    img.className = 'cart__img';
    title.className = 'cart__title';
    quantEl.className = 'cart__quantEl';

    quantContainer.className = 'cart__quant-container';
    quantEl.type = 'number';
    quantEl.min = 0;
    quantEl.max = dataObj.quantity;
    quantEl.value = 1;
    if (dataObj.quantity === 0) {
        quantEl.value = 0;
    }
    quantElItem.className = 'cart__quantElItem'
    quantElItem.innerHTML = `Good in stock: ${dataObj.quantity} `;


    priceBlock.className = 'cart__price';
    priceX.className = 'cart__price-X';
    priceItem.className = 'cart__price-item'
    priceEq.className = 'cart__price-eq';
    priceGenLabel.className = 'cart__price-gen';
    priceGenLabel.innerHTML = `${dataObj.price} UAH`;

    btnDel.className = 'cart__delete';
    btnDel.innerHTML = 'Delete'

    title.innerHTML = dataObj.title;
    img.src = `img/${dataObj.img}`
    priceX.innerHTML = 'x';
    priceItem.innerHTML = `${dataObj.price} UAH`;
    priceEq.innerHTML = '='

    cartContainer.append(renderCartEl);
    renderCartEl.append(indexEl, img, title, quantContainer, priceBlock, btnDel);
    quantContainer.append(quantEl, quantElItem);
    priceBlock.append(priceX, priceItem, priceEq, priceGenLabel);

    btnDel.onclick = function () {
        renderCartEl.remove()
        updateTotalPrice();
        indexUpdate()

        const btn = document.querySelectorAll('.product__add-cart');
        // удаление класса у кнопок из главной страницы
        btn[dataObj.id - 1].classList.remove('product__add-cart_active');
        cartIndex.innerHTML--;
    }
}

function indexUpdate() {
    const indexEl = document.querySelectorAll('.cart__index');
    indexEl.forEach(function (el, ind) {
        el.innerHTML = ind + 1;
    })
}
asaasdsd
function updateTotalPrice() {
    const totalPrice = document.querySelector('.cart__total-price');
    let total = 0;
    const priceGen = document.querySelectorAll('.cart__price-gen');

    priceGen.forEach(function (el) {
        total += Number(el.textContent.split(' ')[0]);
    });

    totalPrice.innerHTML = `Total price: ${total} UAH`;
}