import GameService from "../services/GameService.js";

let _gameService = new GameService()

export default class GameController {
  constructor() {
    console.log("The controller works")
  }

}