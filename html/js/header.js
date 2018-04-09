

//BUTTON SHOW/HIDE PASSWORD JAVASCRIPT
passshown=0;
function showpass(){
	if (passshown == 1){
		passshown=0;
		var tmp = document.getElementById("pass");
		var tmp_button=document.getElementById("butpass");
		tmp.innerHTML="Password: ********";
		tmp_button.innerHTML="Show Password";	
	}else if(passshown ==0){
		passshown=1;
		var tmp=document.getElementById("pass");
		var tmp_button=document.getElementById("butpass");
		tmp.innerHTML="Password: "+ap_name.split(";")[1];
		tmp_button.innerHTML="Hide Password";
	}
};


function header_func( ap_name){
	//DISCONNECT BUTTON CREATION
	var HEAD=document.getElementById("headchild");
	var HEAD2=document.getElementById("headchild2");
	var disbutton=document.createElement("button");
	disbutton.id="disbtn";
	disbutton.style="display:none;margin-left:20px;";
	disbutton.innerHTML="Disconnect";

	//USES AJAX TO SEND DISCONNECT SIGNAL TO INDEX.PHP
	disbutton.onclick=function(){
		var tmp_var = document.getElementById("disbtn");
		//MAKES BUTTON TELL USER DISCONNECTING
		tmp_var.innerHTML="Disconnecting...";
		var test=0;
		var xhr_tmp=0;
		xhr_tmp=new XMLHttpRequest();
		xhr_tmp.onreadystatechange=function(){
			//BELOW IF STATMENTS ARE ABUTRARY
			if (xhr_tmp.readyState ==4){
				if(xhr_tmp.status==200){
					test=JSON.parse(xhr_tmp.responseText);
				}
			}	
		};
		xhr_tmp.open("GET","php/index.php?disconnect=1",true);
		xhr_tmp.send(null);
	};
	//VARIABLE CLEANSING (FROM WEBPAGE SCOPE)
	currentwifi=currentwifi.trim(); 
	ap_name=ap_name.trim();
	// CHECKS IF WIFI IS CONNECTED VIA HTML ELEMENTS AND CREATES A DISCONNECT BUTTON
	if (HEAD.innerHTML != "Wifi Name: " && HEAD.innerHTML != "Wifi Name: Not Connected" && document.getElementById("disbtn") == null){
		disbutton.style="display:inline;margin-left:20px;";
		HEAD.after(disbutton);
	// IF ABOVE FAILS CHECKS TO SEE IF BUTTON EXISTS
	// AND IF THE WIFI (GOTTEN FROM THE HTML ELEMENTS THAT
	// HOLD THAT DATA) IS NOT CONNECTED
	}else if (document.getElementById("disbtn") != null && HEAD.innerHTML == "Wifi Name: " || document.getElementById("disbtn")!=null && HEAD.innerHTML == "Wifi Name: Not Connected"){
		var tmp_34=document.getElementById("disbtn");
		HEAD.parentElement.removeChild(tmp_34);
	}
		
	// VARIABLE SET UP AND AP_NAME SETUP (GOTTEN FROM WEBPAGE SCOPE)
	if (ap_name.split(";").length > 1 && document.getElementById("pass") == null){
		var pass=ap_name.split(";")[1];
        var ap_name=ap_name.split(";")[0];
        HEAD2.innerHTML="AP Name: " + ap_name
	//
	//DIV, BUTTON , AND HEADER SETUP
        var HEAD3=document.createElement("h3");
		var div_tmp = document.createElement("div");
		var button_tmp=document.createElement("button");
		button_tmp.style="margin-left:20px;";
		button_tmp.innerHTML="Show Password";
		button_tmp.onclick=function(){showpass();};
		button_tmp.id="butpass";
		div_tmp.style="display:inline;";
		div_tmp.appendChild(HEAD3);
		div_tmp.appendChild(button_tmp);
		HEAD3.id="pass";
        HEAD3.innerHTML="Password: ********";
        HEAD3.style="display:inline;margin-top:5px;";
        HEAD2.parentElement.appendChild(div_tmp);
	//
	//CHECKS IF PASS (Password: ********) AND IF RASPI HAS A PASSWORD
	//((wpa=lamepassword) in hostapd.conf )
	}else if ( ap_name.split(";").length > 1 && document.getElementById("pass") != null){
		var head_tmp = document.getElementById("pass");
		if (passshown != 0){
		head_tmp.innerHTML="Password: " + ap_name.split(";")[1];
		}
	//ELSE DONT PLACE PASSWORD DIVS & BUTTON
    }else{
		HEAD2.innerHTML="AP Name: "+ap_name.split(";")[0];
    }   

	//CHANGE DEPENDING IF THE PI IS CONNECTED TO WIFI
    if (currentwifi != "" && currentwifi != "off/any"){
        HEAD.innerHTML="Wifi Name: "+currentwifi;
    }else{
		HEAD.innerHTML="Wifi Name: Not Connected";
    }
};


//RUN THE ABOVE FUNCTION EVERY 3 SECONDS ONLY AFTER HAVING BEEN CALLED 10 SECONDS EARLIER
setTimeout(function(){setInterval(function(){header_func(ap_name)},3000)},1);
