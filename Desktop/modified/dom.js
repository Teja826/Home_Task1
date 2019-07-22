//------------------------------------Global Variables----------------------------------
let One,Two,Three,Four,Five,Six,Seven,Eight,Nine,Ten;
let index;
let all = "All";
let previus_count = 10;
window.onload = function() {
	createHeader();
	createMain();
	createFooter();
  };
function getData(index){
	One = {"Image": "BBC_World_News.png","Title": "BBC World News","Postdate": "Posted on 29 June,2019","Category": "Category:Category One","Description": "Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.","id": 0};
	
	Two = {"Image": "FOX_News_Channel.png","Title": "Fox News","Postdate": "Posted on 29 June,2019","Category" : "Category:Category Two","Description": "Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.","id": 1};
	
	Three = {"Image": "cnn.png","Title": "CNN","Postdate": "Posted on 29 June,2019","Category" : "Category:Category Three","Description": "Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.","id": 2};
	
	Four = {"Image": "sky news.jpg","Title": "Sky News","Postdate": "Posted on 29 June,2019","Category" : "Category:Category Four","Description": "Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.","id": 3};
	
	Five = {"Image": "MSNBC.png","Title": "MSNBC","Postdate": "Posted on 29 June,2019","Category" : "Category:Category Five","Description": "Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.","id": 4};
	
	Six = {"Image": "Al Jazeera.png","Title": "Al Jazeera","Postdate": "Posted on 29 June,2019","Category" : "Category:Category Six","Description": "Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.","id": 5};
	
	Seven = {"Image": "Euronews.png","Title": "Euronews","Postdate": "Posted on 29 June,2019","Category" : "Category:Category Seven","Description": "Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.","id": 6};
	
	Eight = {"Image": "Al Arabiya.png","Title": "Al Arabiya","Postdate": "Posted on 29 June,2019","Category" : "Category:Category Eight","Description": "Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.","id": 7};
	
	Nine = {"Image": "geo news.png","Title": "Geo News","Postdate": "Posted on 29 June,2019","Category" : "Category:Category Nine","Description": "Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.","id": 8};
	
	Ten = {"Image": "NDTV_India.png","Title": "NDTV India","Postdate": "Posted on 29 June,2019","Category" : "Category:Category Ten","Description": "Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.","id": 9};
	const get_info  = [One,Two,Three,Four,Five,Six,Seven,Eight,Nine,Ten];
	return get_info[index];
}
//-----------------------Creation Of Header--------------------------------
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
function createMain(){
	let body = document.getElementsByClassName("body__main")[0];
	//----------------------------------Creation Of Form---------------------------
	let form_block = document.createElement("div");
	form_block.setAttribute('class','form_block');
	form_block.innerText = "SELECT CATEGORY";
	let select_option = document.createElement("select");//Creation Of Dropdown
	select_option.setAttribute('class','drop_down');
	select_option.setAttribute("onchange","getResult()");
	let option = new Option();
	let data_object;
	option.value = "10";
	option.text = "All";
	select_option.options.add(option);
	for(index = 0;index < 10;index++){
		data_object = getData(index);
		option = new Option();
		option.value = data_object["id"];
		option.text = data_object["Title"];
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
	for(index = 0;index < 10;index++){
		leftBlock(index);
	}	
}
//-------------------Creation Of Left Block-------------------
function leftBlock(index){
	let body = document.getElementsByClassName("body__main")[0];
	let content_block = document.createElement("div");
	content_block.setAttribute('class','content_block');
	let data_object = getData(index);
	let image = document.createElement("img");
	image.setAttribute('class','main_image');
	image.src = data_object["Image"];
	content_block.appendChild(image);
	let head_text = document.createElement("h2");
	head_text.setAttribute('class','news_title');
	head_text.innerHTML = data_object["Title"];
	content_block.appendChild(head_text);
	let date_category = document.createElement("p");
	date_category.setAttribute('class','content_paragraph');
	date_category.innerHTML = data_object["Postdate"]+" // "+data_object["Category"];
	content_block.appendChild(date_category);
	let news_content = document.createElement("p");
	news_content.setAttribute('class','content_paragraph');
	news_content.innerHTML = data_object["Description"];
	content_block.appendChild(news_content);
	let continue_button = document.createElement("button");
	continue_button.setAttribute('class','continue_button');
	continue_button.setAttribute("onclick","readMore("+index+")");
	continue_button.innerHTML = "Continue Reading";	
	content_block.appendChild(continue_button);
	body.appendChild(content_block);
}
//----------------------------Result Of Changing Category----------------------------
function getResult(){
	let value = document.getElementsByClassName("drop_down")[0].value;
	let category = Number(value);
	for(index=0;index<previus_count;index++){
		let content_block = document.getElementsByClassName("content_block")[0];
		content_block.parentNode.removeChild(content_block);
	}
	previus_count = 1;
	if(category == 10){
		for(index = 0;index<10;index++){
			leftBlock(index);
			previus_count = 10;
		}
	}
	else{	
		leftBlock(category);
	}
}
//--------------------------Creation Of Footer---------------------------
function createFooter(){
	let body__footer = document.getElementsByClassName("body__footer")[0];
	body__footer.innerHTML = "@ Newsfeed2019";	
}
//---------------------------------------User Events-----------------------------------------
function readMore(position)
{
	let body = document.getElementsByClassName("body__main")[0];
    let overlay = continueReading(position);
    body.appendChild(overlay);
    document.getElementsByClassName("overlay")[0].style.width = "70%";
}
function closeNav() {
	let over = document.getElementsByClassName("overlay")[0];
	over.parentNode.removeChild(over);
}
//---------------------------------Continue Reading-------------------------------------------
function continueReading(position)
{
    let elem1 = document.getElementsByClassName('overlay')[0];
    if(elem1!=undefined)
    {
        elem1.parentNode.removeChild(elem1);
    }
	let data_object = getData(position);
    let overlay = document.createElement('div');
    overlay.setAttribute('class','overlay');
    let close = document.createElement('a');
    close.setAttribute('class','closenbtn');
    close.setAttribute('onclick','closeNav()');
    let text = document.createTextNode('X');
	close.appendChild(text);
	close.style.cursor = "pointer";
    let continu = document.createElement('div');
    continu.setAttribute('class','continue-reading');
    let heading = document.createElement('h1');
    heading.setAttribute('class','continue-heading');
    text = document.createTextNode(data_object["Title"]); 
    heading.appendChild(text);
    let fulltext = document.createElement('p');
    fulltext.setAttribute('class','extended-content');
    text = document.createTextNode(data_object["Description"].repeat(5));
    fulltext.appendChild(text);
    continu.appendChild(heading);
    continu.appendChild(fulltext);
    overlay.appendChild(close);
    overlay.appendChild(continu);
    return overlay;
}
//--------------------------Validating Email Address----------------------------
let email_list;
let json_obj = JSON;
email_list = json_obj.parse(localStorage.getItem('email_list'));
function validateEmail(){
	let mail = document.getElementsByClassName("email_address")[0].value;
 	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  	{
    	if(email_list.indexOf(mail) > -1)
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

