function timeOut(){     
    var time = new Date();
        hours = time.getHours();
        Minutes = time.getMinutes();  
        seconds = time.getSeconds();
        if (hours < 10 ){
            hours = "0" +hours;
        }
    
        if ( Minutes < 10 ){
            Minutes= "0" + Minutes;
        }
    
        if (seconds< 10 ){
            seconds = "0" +seconds;
        }
    
    document.getElementById("div").textContent= hours + ":" + Minutes + ":" + seconds;
    }
    
    window.onload = function(){
        "use strict";
        setInterval(timeOut,500);
    }