import UpgradeItems from "../models/UpgradeItems.js"
import UpgradeAutos from "../models/UpgradeAutos.js"

//(name, quantity, addsClickPower, price, priceInc)
let _upgradeShovel = new UpgradeItems("Shovel", 0, 5, 15, 5);

//(name, quantity, quantityMax, addsCount, frequency, price, priceInc)
let _upgradeGnome = new UpgradeAutos("Gnome", 0, 10, 1, 3, 50, 100);


export default class GameService {
  constructor() {
    console.log("The service works")
  }
}

