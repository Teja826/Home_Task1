import style from "./main.css";
import { getAPIData } from "./newsModel.js";
class Webnews {
  constructor() {
    new getAPIData("bbc-news",0);
  }
}
new Webnews();

