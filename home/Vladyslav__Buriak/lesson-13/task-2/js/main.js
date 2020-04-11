const product = [
    {
        img: '/img/img3.png" alt="shoes" class="shoes__img',
        title: 'Nike SB Stefan Janoski Max',
        text: 'Unisex Skateboarding Shoe',
        cost: 2700,
        amount: 1
    }
]

const draw = () => {
    let out = '';
    for (let key in product) {
        out += `<div class="shoes__photo">`
        out += `<img src="${product[key].img}" class="shoes__img">`
        out += `</div>`
        out += `<div class="shoes__info description">`
        out += `<h3 class="description__name">${product[key].title}</h3>`
        out += ` <p class="description__sub-name">${product[key].text}</p>`
        out += ` <div class="description__mark mark">
    <img src="/img/star.svg" alt="star" class="mark__star">
    <img src="/img/star.svg" alt="star" class="mark__star">
    <img src="/img/star.svg" alt="star" class="mark__star">
    <img src="/img/star 2.svg" alt="star" class="mark__star">
    <img src="/img/star 2.svg" alt="star" class="mark__star">
</div>`
        out += `       <div class="form">
<form method="GET">
    <select name="size" id="size" class="form__select">
        <option>Size </option>
        <option value="42">42</option>
        <option value="43">43</option>
    </select>
    <select name="qty" id="qty" class="form__select">
        <option>Qty</option>
        <option value="10">10</option>
        <option value="3">3</option>
    </select>
    <button class="form__btn" type="submit" data-id=${key}>Add to cart</button>
</form>
</div>`
        out += `</div>`
    }
    document.querySelector('.shoes').innerHTML = out;

}


let cart = {}

function add() {
    document.querySelector('.form__btn').onclick = function (e) {
        e.preventDefault();
        let index = this.dataset.id;
        if (cart[index] != undefined) {
            cart[index]++
        } else {
            cart[index] = 1
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        miniCart();

    }
}

function check() {
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    console.log(cart)
}


function miniCart() {
    // let div = document.createElement('div');
    // div.classList.add('wrap-cart');
    // let wrap = document.querySelector('.cart-body')
    // wrap.appendChild(div);
    // div.style.Width = 330 + 'px';
    // div.style.height = 'auto';
    // div.style.background = '#f5f5f5 ';
    // div.style.borderRadius = 10 + 'px';

    if (cart == null) {
        alert('корзина пуста');
    } else {
        let out = '';
        for (let key in cart) {
            out += `<div class="mini-cart">`
            out += `<h3 class="mini-text">${cart[key]}</h3>`
            out += `<button class="minus" data-minus="${key}">-</button>`
            out += `<img class="mini-img" src="${product[key].img}">`
            out += `<button class="plus" data-plus="${key}">+</button>`
            out += `<h3 class="mini-text">${cart[key] * product[key].cost + 'uah'}</h3>`
            out += `<h3 class="mini-text">${product[key].title}</h3>`
            out += `</div>`
        }
        document.querySelector('.cart-body').innerHTML = out;
        document.querySelector('.plus').onclick = plus;
    }
}

function plus() {
    let index = this.dataset.plus;
    cart[index]++;
    miniCart()
    refresh();
}

function refresh() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

draw();
add();
check();