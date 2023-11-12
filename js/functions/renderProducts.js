function renderProducts(dataArr) {
    dataArr.forEach(function (el) {
        renderProduct(el);
    })
}


function renderProduct(dataObj) {

    const parentEl = document.querySelector('.products');
    const mainClass = 'product';
    const product = document.createElement('div');
    const thumb = document.createElement('img');
    const info = document.createElement('div');
    const title = document.createElement('h4');
    const descr = document.createElement('div');
    const priceBlock = document.createElement('div');
    const price = document.createElement('div')
    const btnAddToCart = document.createElement('button');

    product.className = mainClass;

    thumb.className = `${mainClass}__thumbnail`;
    thumb.src = `img/${dataObj.img}`

    info.className = `${mainClass}__info`;

    title.className = `${mainClass}__title`;
    title.innerHTML = dataObj.title;

    descr.className = `${mainClass}__description`;
    descr.innerHTML = dataObj.description;

    priceBlock.className = `${mainClass}__price-block`;

    price.className = `${mainClass}__price`;
    price.innerHTML = `Price: ${dataObj.price} UAH`;

    btnAddToCart.className = `${mainClass}__add-cart`;
    btnAddToCart.innerHTML = 'buy';

    btnAddToCart.onclick = function () {

        this.classList.toggle('product__add-cart_active');

        if (this.classList.contains('product__add-cart_active')) {
            this.innerHTML = 'In cart';
            cartIndex.innerHTML++;
            renderCart(dataObj);
            // renderTotalPrice();
            const tp = document.querySelector('.cart__total-price');
            cartContainer.append(tp);

        } else {
            cartIndex.innerHTML--;
            this.innerHTML = 'Buy';
            const productId = dataObj.id;
            const cartElementToRemove = document.querySelector(`.cart__element[data-id="${productId}"]`);
            if (cartElementToRemove) {
                cartElementToRemove.remove();
            }
        }
        indexUpdate();

        const quantEl = document.querySelectorAll('.cart__quantEl');

        quantEl.forEach(function (el) {
            el.addEventListener('input', function () {
                const cartElement = el.closest('.cart__element');
                const priceGen = cartElement.querySelector('.cart__price-gen');
                const productPrice = cartElement.querySelector('.cart__price-item').innerText.split(' ')[0];
                priceGen.innerHTML = el.value * productPrice + ' UAH';
                updateTotalPrice();
            });

        });
        updateTotalPrice();
    };

    priceBlock.append(price, btnAddToCart);
    info.append(title, descr);
    product.append(thumb, info, priceBlock);
    parentEl.append(product);
}
