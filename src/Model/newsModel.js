import { pageView } from "../View/newsView.js";
//-------------------------------------Fetching data-----------------------------------------
export class getAPIData{
	fetchData(selected_channel,count){
		fetch(`https://newsapi.org/v2/everything?q=${selected_channel}&from=2019-08-19&sortBy=publishedAt&apiKey=94a28e3dd8314a2cb51e81a385bb052a`)
		.then(response => {
			return response.json();
		})
		.then(response => {
			let view_object = new pageView();
			view_object.pageOpen(response.articles,count); 
		});
		
	}
}