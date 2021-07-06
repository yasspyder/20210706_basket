import idGenerator from "idGenerator";

export default class Good {
    constructor(title, description, image, price) {
        this_id =
            this._title = title;
        this._description = description;
        this._image = image;
        this._price = price;
        this._discount = discount;
    }

    getPrice() {
        return this._price - this._discount;
    }
}