function GetTime(){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    var day = now.getDay();
    var month = now.getMonth();
    var year = now.getFullYear();

    document.getElementById("hour").innerText = hour;
    document.getElementById("munite").innerText = minute;
    document.getElementById("second").innerText = second;
 
    document.getElementById("date").innerText = day + " / " + month + " / " + year
    
}
setInterval(function(){GetTime()},1000);