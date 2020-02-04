export default class UpgradeAutos {
  constructor(name, quantity, quantityMax, addsCount, frequency, price, priceInc) {
    this.name = name,
      this.quantity = quantity,
      this.quantityMax = quantityMax,
      this.addsCount = addsCount,
      this.frequency = frequency * 1000,
      this.price = price,
      this.priceInc = priceInc,
      this.saying = `I made a ${this.name}`
  }
}