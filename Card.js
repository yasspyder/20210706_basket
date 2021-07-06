export default class Card {
    constructor(good) {
        this._data = good;
    }

    getHtml() {
        return '<div class="single-product-wrapper">

            < div class="product-img" >
                <img src="img/product-img/${this._data.img}" alt="">

                    <img class="hover-img" src="img/product-img/product-6.jpg" alt="">


                        <div class="product-badge offer-badge">
                            <span>-30%</span>
                        </div>


                        <div class="product-favourite">
                            <a href="#" class="favme fa fa-heart"></a>
                        </div>
        </div>

                    <div class="product-description">
                        <span>${this._data.title}</span>
                        <a href="single-product-details.html">
                            <h6>${this._data.description}
                                <p class="product-price"><span class="old-price">$75.00</span>${this._data.getPrice()}</p>

                                <div class="hover-content">

                                    <div class="add-to-cart-btn">
                                        <a href="#" class="btn essence-btn">Add to Cart</a>
                                    </div>
                                </div>
                    </div>
    </div>'
    }

                        render($container, target = 'beforeend') {
                            $container.insertAdjacentHTML(target, this.getHtml());
                        }
}