# RaspPi3-router-webserver
A Html, javascript,php,python, and systemd webserver that functions to connect to open and wpa networks allowing also for ping 
tests from the pi itself. showing of the wifiname being broadcasted by the pi and a toggleable show password button that is set 
to a default of Hide. Is run off of the default noobs raspberry pi image.

Requirements:
  -dnsmasq
  -hostapd
  -3 wireless interfaces (moniter mode not required)
  -apache2
  -php 7.0.27 (tested minimum)
  -python 2.7 (standard python installation on most linux boxes. default on raspberry pi)


To setup the server is to just place the folders into the corresponding folders in raspbian linux directories and merge.

html/ -> /var/www/
etc/system/systemd -> /etc/system/
lib/dhcpcd/dhcpcd-hooks -> lib/dhcpcd/
etc/dnsmasq.d/ -> /etc/dnsmasq.d/
etc/hostapd/ -> /etc/hostapd/

etc/system/systemd/ contents:
  -A custom "service" or "systemctl" "script" that initiates the constant wifi scan and sorting
    -The sorting python script allows for more dev expandablility as it sorts with excess information from "iwlist scan wlan0"
    
lib/dhcpcd/dhcpcd-hooks contents:
  -A edited 10-wpa_supplicant file that stops the raspberry pi from managing any of the three wifi interfaces expected
   wlan0,wlan1,and wlan2. ( This removes the ability to use the graphical interfaces through vnc or HDMI as it stops 
   any wpa_supplicant processes to run on these interfaces without invokation by the website)

html/ contents:
  -The js, python,php,and html code that makes up the website itself
  
etc/dnsmasq.d/ contents:
  -The dhcp server config file to allow the users to get a ip assigned when connecting to the hotspot

etc/hostapd/ contents:
  -The AP config file 

-----------------------------------------------------------------------------------------------------------------------------
Also you need to add these few entries into the sudoers files to allow the webserver to run these programs without root access
(do this using the "visudo" command while root)

ALL ALL=NOPASSWD: /var/www/html/wifi_scan
www-data ALL=NOPASSWD: /var/www/html/wifi_scan
www-data ALL=NOPASSWD: /usr/bin/wpa_passphrase
www-data ALL=NOPASSWD: /sbin/wpa_supplicant
www-data ALL=NOPASSWD: /bin/kill
www-data ALL=NOPASSWD: /usr/bin/killall
www-data ALL=NOPASSWD: /sbin/ifconfig
www-data ALL=NOPASSWD: /sbin/iwconfig

Last thing. 
run "update-rc.d enable wifi_scan 2 3 4 5" as root to allow the wifi scanning at boot
And run "update-rc.d enable dnsmasq 2 3 4 5" as root to allow for the dhcp server to start at boot

BUGS-------------------------

The scaling on the connect button when the corresponding wifi network is of the type "OPEN"
doesn't match up with the connect and password fields when the type is "WPA" on many web broswer
with different resultions specifically when the width of the screen is different
(you'll see what I mean when it doesn't work)

The ping test button doesn't always work the first time. although if it doesn't it will show you an
error and an instruction to press again then it should work properly.Also the text may be extreamly small
on some resultions due to my incompetence to make the resulting "ping test text" bigger without it overflowing the 
header portion of the website

Webiste uses http and has no certifercate verification. although, I didn't expect you to use it on a typical laptop ;)

The wifi scaning portion I had to make a bit janky with the systemctl service as there was no other reliable way I could
find to make it so I could initiate the scaning process from the php code. so I made it two parts. The website. And the 
wifi scaning/connected wifi name retreval/sorting/broadcasting ap password retreval part of the website. These are all
placed into the html/setup directory except for the service it self as that is placed in /etc/systemd/system/.
