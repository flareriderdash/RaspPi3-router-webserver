<?php

// THIS FILE SEEMS TO BE A GOOD PLACE TO HAVE A COMMAND AND
// CONTROL CENTER AS IT IS WHERE WE GET THE NAME OF CURRENT WIFI, THE
// NAME OF THE AP WE ARE RUNNING AND A DISCONNECT SCRIPT, WHILE BEING THE
// LAST OPTION WITH THE ELSE STATEMENT GIVING THE LIST OF WIFI GATHERED BY THE
// PI'S WIFI INTERFACES

$contents=file_get_contents("/var/www/html/setup/wifinets");
$contents=explode("\n",$contents);
//$contents[count($contents)-1] = explode("\n",$contents[count($contents)-1])[0];
array_pop($contents);
$response['wifilist']=json_encode($contents);
header('Content-type: application/json');

if (isset($_GET["name"])){
	//USED BY HEADER.JS , CALLED BY INDEX.HTML
	exit(json_encode(file_get_contents("/var/www/html/setup/currentwifi")));
}else if (isset($_GET["wifiname"])){
	//USED BY HEADER.JS , CALLED BY INDEX.HTML
	exit(json_encode(file_get_contents("/var/www/html/setup/APNAME")));
}else if (isset($_GET["disconnect"])){
	//USED BY HEADER.JS WITH AJAX DICONNECT BUTTON
	shell_exec("sudo ifconfig wlan2 down && sudo ifconfig wlan2 up");
	shell_exec("sudo killall wpa_supplicant");
	shell_exec("sudo ifconfig wlan2 down && sudo ifconfig wlan2 up");
	exit(json_encode(1));
}else if (isset($_GET["ip"])){
	$ping=shell_exec("ping -c 4 8.8.8.8");
	$ping=explode("\n",$ping);
	exit(json_encode($ping));
/*}else if (isset($_GET["vpnon"])){
	shell_exec("service openvpn start && iptables -t nat -F && iptables -t nat -A POSTROUTING -o tun0 -j MASQUEDARE && iptables -F && iptables -A FORWARD -i wlan1 -o tun0 -j ACCEPT");
	exit("VPN ON");
}else if (isset($_GET["vpnoff"])){
	shell_exec("service openvpn stop && iptables -t nat -F && iptables -F && iptables -t nat -A POSTROUTING -o tun0 -j MASQUERADE && iptables -A FORWARD -i wlan1 -o wlan2 -j ACCEPT");
	exit("VPN OFF NOTE: NOT RECOMMENDED");
*/
}else {
	//USED BY BOXUPDATE.JS
	exit($response['wifilist']);
}
?>

