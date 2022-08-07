"use strict"

const goods = [
    { title: 'Кофта Celvin Klyan', price: "4900 ₽", url: 'https://www.keng.ru/upload/iblock/b26/b2670e9b5fb7bb147e2a7d6d67c8df54.jpg'},
    { title: 'Кросовки Ribok', price: "7900 ₽" , url: 'https://static.rendez-vous.ru/files/catalog_models/resize_640x630/1/1868764_krossovki_ash_addict_belyy_kozha_natural_naya.JPG'},
    { title: 'Куртка The Forth Nace', price: "50000 ₽", url: 'https://static.street-beat.ru/upload/iblock/fd0/fd0485a6f8849154739bece25de43d44.jpg'},
    { title: 'Носки Huchi', price: "150 ₽" , url: 'https://www.technoavia.ru/img/product_images/1220.png?sc=model_zoom'},
    { title: 'Футболка M&H', price: "1800 ₽" , url: 'https://files.gifts.ru/reviewer/tb/16/tu01b005_2_500.jpg'},
    ];

const renderGoodsItem = ({title = "Товар", price = "Цена неизветсна", url = "https://серебро.рф/img/placeholder.png"}) => {
    return `<div class="goods-item">
        <h3 class="title">
            ${title}
        </h3>
        <img class="picture" src="${url}" alt="${title}">
        <p>
            ${price}
        </p>
    </div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item));
    let goodsListEl = document.querySelector('.goods-list')
    goodsList.forEach(element => {
        goodsListEl.innerHTML += element;
    });
}

renderGoodsList(goods);
    