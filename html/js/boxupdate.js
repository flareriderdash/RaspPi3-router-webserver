
// GRAB ELEMENT OF THE CONTAINER FOR THE
// BOXES. THIS ONE IS RUN 12 SECONDS AFTER
// THE PAGE START TO ALLOW FOR WIFILIST CALIBRATION.
// IT ALSO DOES THE 'BOOTSTRAPING' OF THE 'BOX'
// LISTS BY CREATING THE INITAL BOXES AT START.
var containers = document.getElementById("container");
var wifi_object_list=[];
function BoxCreate(){
	if (filtered_list != undefined){
		
		filtered_list.forEach(function(item){
		var type=item.split(";")[1];
		var name=item.split(";")[0];
		var box = new Box(name,type);
		containers.appendChild(box.box);
		wifi_object_list.push(item);
		});
	}
}
window.onload=function(){setTimeout(function(){BoxCreate();},1)};

// THE BELOW FUNCTIONS SET AN INTERVAL LOOP
// THAT ALLOW FOR THE UPDATING OF THE 'BOX'
// CONTAINER (REMOVING AND ADDING BOXES AS NEW WIFI
// HOTSPOTS COME AND GO) THE ONE BELOW IS
// FOR CREATING THE NEW 'BOXES' AND INDEXING THEM
// IN A LIST CALLED 'WIFI_OBJECT_LIST'.
setTimeout(function(){setInterval(function(){
	//'BOX' ADD UPDATE FUNCTION
	filtered_list.forEach(function(item){
		if ((wifi_object_list.indexOf(item) > -1) == false && document.getElementById(item.split(";")[0]) == null ){	
			var newbox=new Box(item.split(";")[0],item.split(";")[1]);
			wifi_object_list.push(item);
			containers.appendChild(newbox.box);
		}
	});
	//'BOX' REMOVE UPDATE FUNCTION
	wifi_object_list.forEach(function(item){
		if ((filtered_list.indexOf(item) > -1) == false && document.getElementById(item.split(";")[0]) != null){
			var remove_obj=document.getElementById(item.split(";")[0]);
			var index = wifi_object_list.indexOf(item);	
			if (index > -1) wifi_object_list.splice(index,1);
			remove_obj.parentElement.removeChild(remove_obj);
		}
	});
},250);},1);
