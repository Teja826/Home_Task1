import { dataControl } from "../Controller/newsController.js";
//-------------------------------------Fetching data-----------------------------------------
export class getAPIData{
	constructor(selected_channel,count){
		this.getArticle = [];
		this.selected_channel = selected_channel;
		this.fetchData();
		this.count = count;
	}
	fetchData(){
		fetch(`https://newsapi.org/v2/everything?q=${this.selected_channel}&from=2019-08-19&sortBy=publishedAt&apiKey=94a28e3dd8314a2cb51e81a385bb052a`)
		.then(response => {
			return response.json();
		})
		.then(response => {
			this.getArticle = response.articles;
			new dataControl(this);
		});
		
	}
}