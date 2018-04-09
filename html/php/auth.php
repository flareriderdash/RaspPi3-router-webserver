<?php
function WPA_CONNECT(){
	$pass = $_POST['password'];
	$name = $_POST['name'];
	shell_exec("sudo wpa_passphrase \"".$name."\" \"".$pass."\" > /var/www/html/tmp/config.wpa");
	if (file_get_contents("config.wpa") == "Passphrase must be 8..63 characters\n"){
		exit("The password supplied is too short.\nMust be 8-63 characters long");
	}
	shell_exec("sudo wpa_supplicant -Dwext -iwlan2 -c/var/www/html/tmp/config.wpa > /var/www/html/tmp/wpa.log 2>&1 & echo $! > /var/www/html/tmp/wpa_sup.pid");
	sleep(13);
	if (strpos(file_get_contents("wpa.log"),'WRONG_KEY')){
		shell_exec("sudo kill `pgrep wpa_supplicant` && sudo ifconfig wlan2 down && sudo ifconfig wlan2 up");
		exit("The password supplied was incorrect");
	}
	shell_exec("sudo dhclient wlan2 &");
//	echo "<script>window.location='/index.html'</script>";
}
$type = $_POST['type'];
if ($type == "WPA" && $_POST['password'] != ""){
	if (file_get_contents("/var/www/html/tmp/wpa_sup.pid") != ""){
		$pid = file_get_contents("/var/www/html/tmp/wpa_sup.pid");		
		shell_exec("sudo kill `pgrep wpa_supplicant` && sudo ifconfig wlan2 down && sudo ifconfig wlan2 up");
		WPA_CONNECT();
	}else{
		WPA_CONNECT();
	}

}else if( $type == "OPEN" && $_POST['password'] == "NONE"){
	shell_exec("sudo ifconfig wlan2 down && sudo iwconfig wlan2 essid \"". $_POST['name'] . "\" && sudo ifconfig wlan2 up ");
}
//else{
//	echo "<body style='background:black'></body>";
//	echo "<script>alert('No Password was supplied')</script>";
//	echo "<script>window.location='/index.html'</script>";
//}


?>
