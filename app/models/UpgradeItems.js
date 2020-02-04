export default class UpgradeItems {
  constructor(name, quantity, addsClickPower, price, priceInc) {
    this.name = name;
    this.quantity = quantity;
    this.addsClickPower = addsClickPower;
    this.price = price;
    this.priceInc = priceInc;
    this.saying = `I made a ${this.name}`;
  }

}
