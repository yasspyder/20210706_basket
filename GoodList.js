export default class GoodList {
    constructor(goods) {
        this.goods = goods;
    }

    add(good) {
        this.goods.push(good);
    }

    remove(id) {
        const id = this.goods.findIndex(good => good.id === id);
        this.goods.splice(id, 1);
    }
}