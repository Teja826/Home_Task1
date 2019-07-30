//------------------------------------Global Variables----------------------------------
let channel_one,channel_two,channel_three,channel_four;
let selected_channel = "bbc-news";
let channel_id = 0;
let images = new Array();
let title = new Array();
let postdate = new Array();
let description = new Array();
let morenews = new Array();
//-------------------------------------Fetching data-----------------------------------------
function getAPIData(){
	fetch(`https://newsapi.org/v2/everything?q=${selected_channel}&from=2019-07-15&sortBy=publishedAt&apiKey=94a28e3dd8314a2cb51e81a385bb052a`)
	.then(response => {
		return response.json();
	})
	.then(response => {
		for(let position=0; position<10; position++){
			title.push(response.articles[position].title);
			description.push(response.articles[position].description);
			images.push(response.articles[position].urlToImage);
			postdate.push(response.articles[position].publishedAt);
			morenews.push(response.articles[position].content);
		}
		leftBlock(channel_id);
	})
}
window.onload = function() {
	createHeader();
	getAPIData();
	createForm();
	createFooter();
  };
function getData(index){
	channel_one = {"Name": "BBC News","selected_channel":"bbc-news","id": 0};
	channel_two = {"Name": "Fox News","selected_channel":"fox-news","id": 1};
	channel_three = {"Name": "CNBC","selected_channel":"cnbc","id": 2};
	channel_four = {"Name": "Reuters","selected_channel":"reuters","id": 3};
	const get_info  = [channel_one,channel_two,channel_three,channel_four];
	return get_info[index];
}
//-----------------------Creation Of Header---------------------------------------
function createHeader(){
	let header_head = document.createElement("h2");
	header_head.innerHTML = "NEWSFEED";
	let header_paragraph = document.createElement("p");
	header_paragraph.innerHTML = "Yet another newsfeed";
	let body__header = document.getElementsByClassName("body__header")[0];
	body__header.appendChild(header_head);
	body__header.appendChild(header_paragraph);
}
//--------------------------Creation Of Main Content------------------------------
//-------Creation Of Form----------
function createForm(){
	let body = document.getElementsByClassName("body__main")[0];
	let form_block = document.createElement("div");
	form_block.setAttribute('class','form_block');
	form_block.innerText = "SELECT CHANNEL";
	let select_option = document.createElement("select");//Creation Of Dropdown
	select_option.setAttribute('class','drop_down');
	select_option.setAttribute("onchange","getResult()");	
	for(let index = 0;index < 4;index++){
		let data_object = getData(index);
		let option = new Option();
		option.value = data_object["id"];
		option.text = data_object["Name"];
		select_option.options.add(option);
	}
	form_block.appendChild(select_option);
	form_block.appendChild(document.createTextNode("SUBSCRIBE"));
	let input_email = document.createElement("input");//Creation Of Email Input
	input_email.setAttribute('class','email_address');
	input_email.setAttribute('type',"text");
	input_email.setAttribute('placeholder',"Email Address");
	form_block.appendChild(input_email);
	let subscribe_button = document.createElement("button");//Creation Of Subscribe Button
	subscribe_button.innerHTML = "SUBSCRIBE";
	subscribe_button.setAttribute('onclick','validateEmail()');
	subscribe_button.setAttribute('class','submit');
	form_block.appendChild(subscribe_button);
	body.appendChild(form_block);
}
//-----------Creation Of Left Block-----------
function leftBlock(value){
	let body = document.getElementsByClassName("body__main")[0];
	for(let index=0;index<10;index++){
		let content_block = document.createElement("div");
		content_block.setAttribute('class','content_block');
		let data_object = getData(value);
		let image = document.createElement("img");
		image.setAttribute('class','main_image');
		image.src = images[index];
		content_block.appendChild(image);
		let head_text = document.createElement("h2");
		head_text.setAttribute('class','news_title');
		head_text.innerHTML = title[index];
		content_block.appendChild(head_text);
		let date_category = document.createElement("p");
		date_category.setAttribute('class','content_paragraph');
		date_category.innerHTML = postdate[index]+" // Channel: "+data_object["Name"];
		content_block.appendChild(date_category);
		let news_content = document.createElement("p");
		news_content.setAttribute('class','content_paragraph');
		news_content.innerHTML = description[index];
		content_block.appendChild(news_content);
		let continue_button = document.createElement("button");
		continue_button.setAttribute('class','continue_button');
		continue_button.setAttribute("onclick","readMore("+index+")");
		continue_button.innerHTML = "Continue Reading";	
		content_block.appendChild(continue_button);
		body.appendChild(content_block);
	}
}
//----------------------------Result Of Changing Category----------------------------
function getResult(){
	let value = document.getElementsByClassName("drop_down")[0].value;
	let category = Number(value);
	for(let index=0;index<10;index++){
		let content_block = document.getElementsByClassName("content_block")[0];
		content_block.parentNode.removeChild(content_block);
	}
	selected_channel = getData(category)["selected_channel"];
	channel_id = category;
	images = [];
	title = [];
	postdate = [];
	description = [];
	morenews = [];
	getAPIData();
}
//--------------------------Creation Of Footer---------------------------
function createFooter(){
	let body__footer = document.getElementsByClassName("body__footer")[0];
	body__footer.innerHTML = "@ Newsfeed2019";	
}
//---------------------------------Continue Reading-------------------------------------------
function readMore(position)
{
	let body = document.getElementsByClassName("body__main")[0];
	let continue_block = document.createElement("div");
	continue_block.setAttribute('class','continue_block');
	let continue_content = document.createElement("div");
	continue_content.setAttribute('class','continue_content');
	let continue_title = document.createElement("h2");
	continue_title.setAttribute('class','news_title');
	continue_title.innerHTML = title[position];
	continue_content.appendChild(continue_title);
	let continue_close = document.createElement("span");
	continue_close.innerHTML = "x";
	continue_close.setAttribute('class','continue_close');
	continue_content.appendChild(continue_close);
	let continue_morenews = document.createElement("p");
	continue_morenews.setAttribute('class','content_paragraph');
	continue_morenews.innerHTML = morenews[position];
	continue_content.appendChild(continue_morenews);
	continue_block.appendChild(continue_content);
	body.appendChild(continue_block);
	continue_close.onclick = function(){
		continue_block.style.display = "none";
	}
}
//--------------------------Validating Email Address----------------------------
let email_list;
let json_obj = JSON;
email_list = json_obj.parse(localStorage.getItem('email_list'));
function validateEmail(){
	let mail = document.getElementsByClassName("email_address")[0].value;
 	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  	{
    	if(email_list.includes(mail))
    	{
        	alert('this email is already subscribed!');
      	}
    	else{
			email_list.push(mail);
			localStorage.setItem('email_list', json_obj.stringify(email_list));
			alert('Successfully Subscribed');
      	}

    	return (true);
  	}
    alert("You have entered an invalid email address!");
    return (false);
}