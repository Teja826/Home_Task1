import style from "./main.css";
import { getAPIData } from "./Model/newsModel.js";
let model_object = new getAPIData();
model_object.fetchData("bbc-news",0);

