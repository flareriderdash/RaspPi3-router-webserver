
class Box {
	constructor(name,type){
		this.name=name;
		this.type=type;
		this.box= document.createElement("div");
		this.whitearea = document.createElement("div");
		this.form_div = document.createElement("div");
		this.form = document.createElement("form") 
		this.wifiname = document.createElement("p");
		this.wifitype=document.createElement("p");
		this.submit_btn = document.createElement("input");
		this.passwd_box = document.createElement("input");		
		this.type_form = document.createElement("input");
		this.name_form = document.createElement("input");
		
		// LARGE CONNECT BUTTON SCALING
		// GOAL: TO MAKE THE CONNECT BUTTON FOR
		// OPEN NETWORKS TO SCALE PROPERLY AND ALINE WITH
		// THE WPA CONNECT AND PASSOWRD BUTTONS. LOOK BELOW
		// FOR CODE	
		this.fullScreen=window.screen.width;
		this.sizeofformdiv=this.fullScreen * 24.791666666666666666666666666667 / 100;
		this.sizeofpass=154 * 100 /this.sizeofformdiv;
		this.sizeofbtn=(this.sizeofformdiv * this.sizeofpass / 100 )+ (this.sizeofformdiv * 31.932773109243697478991596638655 / 100) + (this.sizeofformdiv *  10  / 100);
		//END OF SCALING CODE

		this.box.classList="box";
		this.box.id=name;
		
		this.mobilecheck=function(){
			var check = false;
			(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);				
			return check;
		};
		

		if(this.mobilecheck() == true){
			this.whitearea.style="padding-left:10px;margin-left:15px;float:left;background:white;width:50%;color: black;border-radius:5px;";
		}else{
			this.whitearea.style="padding-left:10px;margin-left:15px;float:left;background:white;width:60%;color: black;border-radius:5px;";
		}
		this.wifiname.innerHTML=this.name;
		this.wifiname.style="margin:0;padding-left:10%; float: left;";
		this.wifitype.style="float : right; padding-right :10%; margin:0px;";
		this.wifitype.innerHTML=this.type;

		this.form.id=name+"form";
		//this.form.action="http://10.1.1.1/auth.php";
		//this.form.method="post";
		if (this.mobilecheck() == true){
			this.form_div.style="margin-left:65%;";
		}else{
			this.form_div.style="margin-left:75%;";
		}
		this.submit_btn.type="submit";
		this.submit_btn.value="Connect";
		this.submit_btn.id="connect";
		this.submit_btn.name="connect";
		this.type_form.type="hidden";
		this.name_form.type="hidden";
		this.name_form.name="name";
		this.type_form.name="type";
		this.type_form.value=this.type;
		this.name_form.value=this.name;

		if (this.type == "OPEN"){
		this.submit_btn.style=" width: " +this.sizeofbtn+ "px";
		}else{
			this.submit_btn.style="margin-right : 10% ;width: 32%;";
		}
		if (this.type == "WPA" ){
			this.form.onsubmit=function(evt){ 
				this.connect.value="Connecting...";
				evt.preventDefault();
				var xhr_term=new XMLHttpRequest(); 
				var url="php/auth.php"; 
				var params = "connect=Connect&password="+this.passboxs.value+"&type="+this.type.value+"&name="+this.name.value;
				this.passboxs.value="";
				xhr_term.open("POST",url,true); 
				xhr_term.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				xhr_term.onreadystatechange=function(){ 
				  if (xhr_term.readyState == 4 && xhr_term.status ==200 && xhr_term.responseText != ""){ 
						alert(xhr_term.responseText); 
					} 
				};
				xhr_term.send(params);
				setTimeout(function(){this.connect.value="Connect";},2000);
			};
		}else if (this.type == "OPEN"){
			this.form.onsubmit=function(evt){
				evt.preventDefault();
				this.connect.value="Connecting...";
				var xhr_term=new XMLHttpRequest();
				var url="php/auth.php";
				var params="connect=Connect&password=NONE&type=OPEN&name="+this.name.value;
				xhr_term.open("POST",url,true);
				xhr_term.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				xhr_term.onreadystatechange=function(){
					if(xhr_term.readyState == 4 && xhr_term.status == 200 && xhr_term.responseText != ""){
						alert(xhr_term.responseText);
					}
				};
				xhr_term.send(params);
				setTimeout(function(){this.connect.value="Connect";},2000);
			};
		}
		this.passwd_box.type="password"; 
		this.passwd_box.id="passboxs";
		this.passwd_box.name="password";
		
		this.whitearea.appendChild(this.wifiname);
		this.whitearea.appendChild(this.wifitype);

		this.form.appendChild(this.submit_btn);
		if (this.type == "WPA"){
			this.form.appendChild(this.passwd_box);
		}
		this.form.appendChild(this.type_form);
		this.form.appendChild(this.name_form);

		this.form_div.appendChild(this.form);
		
		this.box.appendChild(this.whitearea);
		this.box.appendChild(this.form_div);
		
	}
}
