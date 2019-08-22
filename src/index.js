import style from "./main.css";
import { getAPIData } from "./Model/newsModel.js";
class Webnews {
  constructor() {
    new getAPIData("bbc-news",0);
  }
}
new Webnews();

