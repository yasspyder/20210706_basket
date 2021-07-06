function Good(title, price) {
    this._title = title;
    this._price = price;

    this.render = function () {
        return '<div class="goods-item"><h3>${this._title}</h3><p>${this._price}</p></div>';
    }
}

const goods = [
    new Good('Shirt', 150),
    new Good('Socks', 50),
    new Good('Jacket', 350),
    new Good('Shoes', 250),
];


const $goodsList = document.querySelector('.goods-list');

/*const renderGoodsItem = ({ title, price }) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};*/

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
        item => item.render()
    ).join(' ');

    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}

renderGoodsList();

// ======================================
/*
const good = {
    _title: 'Shirt',
    _price: 500,
    _discount: 5,
    getPrice() {
        return this.price - this._discount;
    },
    render() {
        return '<div class="goods-item"><h3>${this._title}</h3><p>${this._price}</p></div>;'
    }
} */
