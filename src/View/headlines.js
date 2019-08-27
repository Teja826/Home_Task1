//-------------------------------------Fetching headlines data-----------------------------------------
export class fetchHeadLinesData{

	fetchHeadlines(){
		fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=94a28e3dd8314a2cb51e81a385bb052a`)
		.then(headlines => {
			return headlines.json();
		})
		.then(headlines => {
			this.headLine(headlines.articles);	
		});
	}
	headLine(headData){
		let body = document.getElementsByClassName("body__main")[0];
		let headline_block = document.createElement("div");
		headline_block.setAttribute('class','continue_block');
		let headline_content = document.createElement("div");
		headline_content.setAttribute('class','headline_content');
		let headline_close = document.createElement("span");
		headline_close.innerHTML = "x";
		headline_close.setAttribute('class','continue_close');
		headline_content.appendChild(headline_close);
		for(let position = 0;position < 10;position++){
			let headline_data = document.createElement("h2");
			headline_data.setAttribute('class','head_lines');
			headline_data.innerHTML = headData[position].title;
			headline_content.appendChild(headline_data);
		}
		headline_block.appendChild(headline_content);
		body.appendChild(headline_block);
		headline_close.onclick = function(){
			headline_block.style.display = "none";
		}
	}
}