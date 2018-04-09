window.onscroll= function() {myfunction()};
var header = document.getElementById("myheader");
var sticky = header.offsetTop;
if (sticky < 0 ){
	sticky=0;
}
function myfunction(){
      //  if (window.pageYOffset >= sticky){
       //         header.classList.add("sticky");
       // }else{
                //header.classList.remove("sticky");
        //}
		if (window.pageYOffset <= 0){
				header.classList.remove("sticky");
		}else{
				header.classList.add("sticky");
		}
}
