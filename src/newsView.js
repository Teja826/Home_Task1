import { getAPIData } from "./newsModel.js";

export class pageView {
	constructor(Controller){
		this.control_object = Controller;
		this.selected_channel = "bbc-news";
		this.get_info = ["bbc-news","fox-news","cnbc","reuters"];
		this.get_channel = ["BBC News","FOX News","CNBC","Reuters"];
		this.number_of_fields = 10;
		this.pageOpen();
		
	}
	pageOpen(){
		if(this.control_object.count == 0){
			this.createHeader();
			this.createFooter();
			this.createForm();	
		}
		this.leftBlock();
	};
	//-----------------------Creation Of Header---------------------------------------------------------------
	createHeader(){
		let header_head = document.createElement("h2");
		header_head.innerHTML = "NEWSFEED";
		let header_paragraph = document.createElement("p");
		header_paragraph.innerHTML = "Yet another newsfeed";
		let headLines_button = document.createElement("button");//Creation Of Headlines Button
		headLines_button.innerHTML = "Headlines";
		headLines_button.setAttribute('class','headline_button');
		let body__header = document.getElementsByClassName("body__header")[0];
		headLines_button.addEventListener("click", () => {
			import("./headlines.js").then(module => {
			  new module.fetchHeadLinesData();
			});
		});
		body__header.appendChild(header_head);
		body__header.appendChild(header_paragraph);
		body__header.appendChild(headLines_button);
	}
	//----------------------------------------Creation Of Form-------------------------------------------------
	createForm(){
		let body = document.getElementsByClassName("body__main")[0];
		let form_block = document.createElement("div");
		form_block.setAttribute('class','form_block');

		//------------------Creation Of Dropdown--------------------------------------------------------------
		form_block.innerText = "SELECT CHANNEL";
		let select_option = document.createElement("select");
		select_option.setAttribute('class','drop_down');
		select_option.addEventListener("change", () => {
			this.getResult();
		});	
		for(let position = 0;position < this.get_info.length;position++){
			let option = new Option();
			option.value = position;
			option.text = this.get_channel[position];
			select_option.options.add(option);
		}
		form_block.appendChild(select_option);

		//---------------------Creation Of Subscribe Content-------------------------------------------------
		form_block.appendChild(document.createTextNode("SUBSCRIBE"));
		let input_email = document.createElement("input");//Creation Of Email Input
		input_email.setAttribute('id','email_address');
		input_email.setAttribute('type',"text");
		input_email.setAttribute('placeholder',"Email Address");
		form_block.appendChild(input_email);
		let subscribe_button = document.createElement("button");//Creation Of Subscribe Button
		subscribe_button.setAttribute('class','submit');
		subscribe_button.innerHTML = "SUBSCRIBE";
		subscribe_button.addEventListener("click", () => {
			this.control_object.validateEmail();
		});	
		form_block.appendChild(subscribe_button);
		body.appendChild(form_block);
	}
	//--------------------------------Creation Of Left Block------------------------------------------------
	leftBlock(){
		let body = document.getElementsByClassName("body__main")[0];
		for(let position=0;position < this.number_of_fields;position++){
			let content_block = document.createElement("div");
			content_block.setAttribute('class','content_block');
			let image = document.createElement("img");
			image.setAttribute('class','main_image');
			image.src = this.control_object.getData()[position].urlToImage;
			content_block.appendChild(image);
			let head_text = document.createElement("h2");
			head_text.setAttribute('class','news_title');
			head_text.innerHTML = this.control_object.getData()[position].title;
			content_block.appendChild(head_text);
			let date_category = document.createElement("p");
			date_category.setAttribute('class','content_paragraph');
			date_category.innerHTML = this.control_object.getData()[position].publishedAt+" // Channel: "+this.get_channel[position];
			content_block.appendChild(date_category);
			let news_content = document.createElement("p");
			news_content.setAttribute('class','content_paragraph');
			news_content.innerHTML = this.control_object.getData()[position].description;
			content_block.appendChild(news_content);
			let continue_button = document.createElement("button");
			continue_button.setAttribute('class','continue_button');
			continue_button.addEventListener("click", () => {
				this.readMore(position);
			});	
			continue_button.innerHTML = "Continue Reading";	
			content_block.appendChild(continue_button);
			body.appendChild(content_block);
		}
	}

	//---------------------------------Continue Reading----------------------------------------------------
	readMore(position){
		let body = document.getElementsByClassName("body__main")[0];
		let continue_block = document.createElement("div");
		continue_block.setAttribute('class','continue_block');
		let continue_content = document.createElement("div");
		continue_content.setAttribute('class','continue_content');
		let continue_close = document.createElement("span");
		continue_close.innerHTML = "x";
		continue_close.setAttribute('class','continue_close');
		continue_content.appendChild(continue_close);
		let continue_title = document.createElement("h2");
		continue_title.setAttribute('class','news_title');
		continue_title.innerHTML = this.control_object.getData()[position].title;
		continue_content.appendChild(continue_title);
		let continue_morenews = document.createElement("p");
		continue_morenews.setAttribute('class','content_paragraph');
		continue_morenews.innerHTML = this.control_object.getData()[position].content;
		continue_content.appendChild(continue_morenews);
		continue_block.appendChild(continue_content);
		body.appendChild(continue_block);
		continue_close.onclick = function(){
			continue_block.style.display = "none";
		}
	}
	//----------------------------Result Of Changing Category----------------------------
	getResult(){
		let value = document.getElementsByClassName("drop_down")[0].value;
		let category = Number(value);
		for(let position=0;position < this.number_of_fields;position++){
			let content_block = document.getElementsByClassName("content_block")[0];
			content_block.parentNode.removeChild(content_block);
		}
			this.selected_channel = this.get_info[category];
			new getAPIData(this.selected_channel,this.count = 1);
		
	}
	//---------------------------------Creation Of Footer-----------------------------------------
	createFooter(){
		let body__footer = document.getElementsByClassName("body__footer")[0];
		body__footer.innerHTML = "@ Newsfeed2019";	
	}	
}
