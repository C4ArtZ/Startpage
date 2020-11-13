window.onload = displayClock();
function displayClock() {


    var date = new Date();
    var minutes = (mins = ('0' + date.getMinutes()).slice(-2));
    var hours = date.getHours();
	var seconds = (secs = ('0' + date.getSeconds()).slice(-2));
	var separator = ':'

  
    document.getElementById('hour').innerText = hours;
    document.getElementById('separator').innerHTML = separator;
    document.getElementById('minutes').innerText = minutes;
	document.getElementById('separator2').innerHTML = separator;
	document.getElementById('seconds').innerHTML = seconds;

    setTimeout(displayClock, 1000);
}
