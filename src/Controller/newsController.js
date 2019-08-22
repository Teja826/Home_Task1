import { pageView } from "../View/newsView.js"; 

export class dataControl{
	constructor(Model){
		this.model_object = Model;
		this.count = this.model_object.count;
		new pageView(this);
	}
	getData(){
		return this.model_object.getArticle;
	};
	//---------------------------------Validating Email Address----------------------------
	validateEmail(){
		let email_list = JSON.parse(localStorage.getItem('email_list'));
		let mail = document.getElementById("email_address").value;
	 	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
		{
			if(email_list.includes(mail))
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
	};
}

