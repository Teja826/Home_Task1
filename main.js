//------------------------Creation Of Global Variables----------------------

let all = 'All';
let change = 10;
let frm = 0;
let channels = ['BBC World News','Fox News','CNN','Sky News','MSNBC','Al Jazeera','Euronews','Al Arabiya','Geo News','NDTV India'];
let news = ['Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.','Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.','Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.','Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.','Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.','Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.','Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.','Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.','Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.','Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis.Consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravidasus commodo.'];
let dates = ['Posted on 29 June,2019 //Category:Category One','Posted on 29 June,2019 //Category:Category One','Posted on 29 June,2019 //Category:Category One','Posted on 29 June,2019 //Category:Category One','Posted on 29 June,2019 //Category:Category One','Posted on 29 June,2019 //Category:Category One','Posted on 29 June,2019 //Category:Category One','Posted on 29 June,2019 //Category:Category One','Posted on 29 June,2019 //Category:Category One','Posted on 29 June,2019 //Category:Category One'];
let morenews = ['Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'];
let email_list;
if (localStorage.getItem("email_list") === null)
{
    email_list=[];
}
else
{
    email_list = JSON.parse(localStorage.getItem('email_list'));
}

//-----------Creation Of Webpage By Loading createbody()------------------------

function createbody(){

	createheader();
	for(i=0;i<10;i++){
		createmain(i);
	}
	createfooter();
}

//--------------------------Creation Of Main Content------------------------------

function createmain(x){

	//--------------------Creation Of Left Block Of Main--------------------------

	var mn = document.getElementsByClassName("mn")[0];
	var main = document.createElement("div");
	main.setAttribute('class','main');
	var div = document.createElement("div");
	div.setAttribute('id','div')
	main.appendChild(div);
	div.style.backgroundColor = "#c7ccccf3";
	div.style.width = "15%";
	div.style.height = "170px";
	div.style.margin = "2%";
	div.style.float = "left";	

	//----------------------------------Creation Of Form---------------------------

	if(frm==0){

		//--------------------------------Select Category-------------------------------

		var div2 = document.createElement("div");
		div2.setAttribute('class','div2');
		var lbl = document.createElement("label");
		var t7 = document.createTextNode("SELECT CATEGORY");
		var str = document.createElement("strong");
		str.appendChild(t7);
		lbl.appendChild(str);
		div2.appendChild(lbl);

		//-------------------------------Select Options------------------------------

		var select = document.createElement("select");
		select.setAttribute("class","dropdown");
		select.setAttribute("name","category");
		select.setAttribute("onchange","getresult()");
		select.value = all;
		var op = new Option();
		var op1 = new Option();
		var op2 = new Option();
		var op3 = new Option();
		var op4 = new Option();
		var op5 = new Option();
		var op6 = new Option();
		var op7 = new Option();
		var op8 = new Option();
		var op9 = new Option();
		var op10 = new Option();

		op.value = "All";
		op1.value = "One";
		op2.value = "Two";
		op3.value = "Three";
		op4.value = "Four";
		op5.value = "Five";
		op6.value = "Six";
		op7.value = "Seven";
		op8.value = "Eight";
		op9.value = "Nine";
		op10.value = "Ten";

		op.text = "All";
		op1.text = "BBC World News";
		op2.text = "Fox News";
		op3.text = "CNN";
		op4.text = "Sky News";
		op5.text = "MSNBC";
		op6.text = "Al Jazeera";
		op7.text = "Euronews";
		op8.text = "Al Arabiya";
		op9.text = "Geo News";
		op10.text = "NDTV India";

		select.options.add(op);
		select.options.add(op1);
		select.options.add(op2);
		select.options.add(op3);
		select.options.add(op4);
		select.options.add(op5);
		select.options.add(op6);
		select.options.add(op7);
		select.options.add(op8);
		select.options.add(op9);
		select.options.add(op10);

		div2.appendChild(select);

		//-----------------------------Subscribe--------------------------------------

		var lbl1 = document.createElement("label");
		lbl1.setAttribute('id','lbl1');
		var t8 = document.createTextNode("SUBSCRIBE");
		var br = document.createElement("br");
		var str1 = document.createElement("strong");
		str1.appendChild(t8);
		lbl1.appendChild(str1);
		lbl1.appendChild(br);
		div2.appendChild(lbl1);

		//--------------------------Email Subscribe------------------------------------

		var input = document.createElement("input");
		input.setAttribute('id','email')
		input.setAttribute('type',"text");
		input.setAttribute('placeholder',"Email Address");
		div2.appendChild(input);
		
		var button = document.createElement("button");
		button.setAttribute('onclick','validateEmail()');
		button.setAttribute('class','submit');
		var t9 = document.createTextNode("SUBSCRIBE");
		button.appendChild(t9);
		div2.appendChild(button);
		main.appendChild(div2);
		frm = 1;
	}

	//--------------------Creation Of News Article--------------------------

	var h3 = document.createElement("h3");
	var t3 = document.createTextNode(channels[x]);
	var p2 = document.createElement("p");
	var t4 = document.createTextNode(dates[x]);
	var p3 = document.createElement("p");
	var t5 = document.createTextNode(news[x]);
	h3.appendChild(t3);
	p2.appendChild(t4);
	p3.appendChild(t5);
		
	var bt1 = document.createElement("button");
	var t6 = document.createTextNode("Continue Reading");
	bt1.appendChild(t6);
	bt1.setAttribute("onclick","readMore("+x+")");
	var art = document.createElement("article");
	art.appendChild(h3);
	art.appendChild(p2);
	art.appendChild(p3);
	art.appendChild(bt1);
	art.setAttribute('id','art');
	main.appendChild(art);

	art.style.backgroundColor = "white";
	art.style.marginTop = "2%";
	art.style.width = "50%";
	art.style.float = "left";
	art.style.height = "170px";
	art.style.marginBottom = "2%";

	h3.style.color = "#1f4061";
	h3.style.marginTop = "1px";
	h3.style.lineHeight = "15px";

	p2.style.lineHeight = "0px";
	p3.style.marginBottom = "7px";

	bt1.style.backgroundColor = "#e0380ee7";
	bt1.style.width = "140px";
	bt1.style.height = "25px";
	bt1.style.color = "white";
	bt1.style.marginTop = "-15px";
	bt1.style.border = "0px";
	bt1.style.cursor='pointer';

	//-------------------Creation Of Right Block Of Main-------------------

	if(x!=0){
	var div3 = document.createElement("div");
	div3.setAttribute('class','div2');
	main.appendChild(div3);
	div3.style.backgroundColor = "white";
	div3.style.width = "27%";
	div3.style.height = "170px";
	div3.style.margin = "2%";
	div3.style.float = "right";
	}
	mn.appendChild(main);
	return mn;
}

//----------------------------Result Of Changing Category----------------------------

function getresult(){
	all = document.getElementsByClassName("dropdown")[0].value;
	if(all==="All"){
			for(i=0;i<change;i++){
				var main = document.getElementsByClassName("main")[0];
				main.parentNode.removeChild(main);
			}
			frm = 0;
			for(i=0;i<10;i++){
				createmain(i);
			}
		change = 10;
	}
	if(all ==="One"){
		for(i=0;i<change;i++){
			var main = document.getElementsByClassName("main")[0];
			main.parentNode.removeChild(main);
		}
		change = 1;
		frm = 0;
		createmain(0);
		
	}
	if(all ==="Two"){
		for(i=0;i<change;i++){
			var main = document.getElementsByClassName("main")[0];
			main.parentNode.removeChild(main);
		}
		change = 1;
		frm = 0;
		createmain(1);
	}
	if(all ==="Three"){
		for(i=0;i<change;i++){
			var main = document.getElementsByClassName("main")[0];
			main.parentNode.removeChild(main);
		}
		change = 1;
		frm = 0;
		createmain(2);
	}
	if(all ==="Four"){
		for(i=0;i<change;i++){
			var main = document.getElementsByClassName("main")[0];
			main.parentNode.removeChild(main);
		}
		change = 1;
		frm = 0;
		createmain(3);
	}
	if(all ==="Five"){
		for(i=0;i<change;i++){
			var main = document.getElementsByClassName("main")[0];
			main.parentNode.removeChild(main);
		}
		change = 1;
		frm = 0;
		createmain(4);
	}
	if(all ==="Six"){
		for(i=0;i<change;i++){
			var main = document.getElementsByClassName("main")[0];
			main.parentNode.removeChild(main);
		}
		change = 1;
		frm = 0;
		createmain(5);
	}
	if(all ==="Seven"){
		for(i=0;i<change;i++){
			var main = document.getElementsByClassName("main")[0];
			main.parentNode.removeChild(main);
		}
		change = 1;
		frm = 0;
		createmain(6);
	}
	if(all ==="Eight"){
		for(i=0;i<change;i++){
			var main = document.getElementsByClassName("main")[0];
			main.parentNode.removeChild(main);
		}
		change = 1;
		frm = 0;
		createmain(7);
	}
	if(all ==="Nine"){
		for(i=0;i<change;i++){
			var main = document.getElementsByClassName("main")[0];
			main.parentNode.removeChild(main);
		}
		change = 1;
		frm = 0;
		createmain(8);
	}
	if(all ==="Ten"){
		for(i=0;i<change;i++){
			var main = document.getElementsByClassName("main")[0];
			main.parentNode.removeChild(main);
		}
		change = 1;
		frm = 0;
		createmain(9);
	}

}

//--------------------------Validating Email Address----------------------------

function validateEmail() {
	mail=document.getElementById("email").value;
 	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value))
  	{
    	if(email_list.indexOf(mail) > -1)
    	{
        	alert('this email is already subscribed!');
      	}
    	else{
			email_list.push(mail);
			localStorage.setItem('email_list', JSON.stringify(email_list));
			alert('Successfully Subscribed');
      	}

    	return (true);
  	}
    alert("You have entered an invalid email address!");
    return (false);
}

//--------------------------Creation Of Footer---------------------------

function createfooter(){
	var p = document.createElement("p");
	var t = document.createTextNode("@ Newsfeed2019");
	p.appendChild(t);
	var ftr = document.getElementsByClassName("fr")[0];
	var div3 = document.createElement("div");
	div3.setAttribute('id','div3');
	div3.appendChild(p)
	ftr.appendChild(div3);	
}

//-----------------------Creation Of Header--------------------------------

function createheader(){
	var h2 = document.createElement("h2");
	var t1 = document.createTextNode("NEWSFEED");
    h2.appendChild(t1);
	var pre = document.createElement("pre");
	var sp = document.createTextNode("     ");
	pre.appendChild(sp);
	var para = document.createElement("p");
	var t2 = document.createTextNode("Yet another newsfeed");
	var i = document.createElement("i");
	i.appendChild(t2);
	para.appendChild(i);
	var header = document.getElementsByClassName("hd")[0];
	var div1 = document.createElement("div");
	div1.setAttribute('id','div1');
	div1.appendChild(h2);
	div1.appendChild(pre);
	div1.appendChild(para);
	header.appendChild(div1);
	pre.style.display = "inline";
	para.style.display = "inline";	
}

//---------------------------------Continue Reading-------------------------------------------

function continueReading(position)
{
   
    var elem1 = document.getElementsByClassName('overlay')[0];
    if(elem1!=undefined)
    {
        elem1.parentNode.removeChild(elem1);
    }

    var overlay = document.createElement('div');
    overlay.setAttribute('class','overlay');

    var close = document.createElement('a');
    close.setAttribute('class','closenbtn');
    close.setAttribute('onclick','closeNav()');
    var text = document.createTextNode('X');
	close.appendChild(text);
	close.style.cursor = "pointer";

    var continu = document.createElement('div');
    continu.setAttribute('class','continue-reading');

    var heading = document.createElement('h1');
    heading.setAttribute('class','continue-heading');
    text = document.createTextNode(channels[position]);
   
    heading.appendChild(text);
    var fulltext = document.createElement('p');
    fulltext.setAttribute('class','extended-content');
    text = document.createTextNode(news[position].repeat(5));
    fulltext.appendChild(text);
    continu.appendChild(heading);
    continu.appendChild(fulltext);

    overlay.appendChild(close);
    overlay.appendChild(continu);
    return overlay;
}

//---------------------------------------User Events-----------------------------------------

function readMore(position)
{
    var main = document.getElementsByClassName('main')[0];
    var overlay = continueReading(position);
    main.appendChild(overlay);
    document.getElementsByClassName("overlay")[0].style.width = "69%";

}
function closeNav() {
	var over = document.getElementsByClassName("overlay")[0];
	over.parentNode.removeChild(over);
}


