let InpuTiming = document.querySelectorAll('.timing');
let DisplayTimer = document.querySelector('.timer-button');
let DisplayStopwatch = document.querySelector('.stopwatch-button');

let StopWatchStart =  document.getElementById('StopWatchStart');
let StopWatchStop =  document.getElementById('StopWatchStop');
let StopWatchReset = document.getElementById('StopWatchReset');

let timeStart = document.getElementById('timerStart');
let timeStop = document.getElementById('timerStop');

let timerInterval;

function clock(){
    clearInterval(timerInterval);
    InpuTiming.forEach( inp =>{
        inp.value = "00";
    });

    DisplayTimer.style.display = "none";
    DisplayStopwatch.style.display = "none";
    ClockStart();
}

function stopwatch(){
    clearInterval(timerInterval);
    InpuTiming.forEach( inp =>{
        inp.value = "00";
    });
    
    StopWatchStart.style.display = "";
    StopWatchStop.style.display = "";
    StopWatchReset.style.display = "none";
    DisplayTimer.style.display = "none";
    DisplayStopwatch.style.display = "block";
}

function timer(){
    clearInterval(timerInterval);
    InpuTiming.forEach( inp =>{
        inp.value = "00";
    });
    
    timeStart.style.display = "";
    timeStop.style.display = "";
    DisplayTimer.style.display = "block";
    DisplayStopwatch.style.display = "none";
}

//STOPWATCH

StopWatchReset.style.display = "none";

let startTime;
let elapsedTime = 0;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
	
	InpuTiming[0].value = formattedMM;
	InpuTiming[1].value = formattedSS;
	InpuTiming[2].value = formattedMS;
}

function SWStart() {
	StopWatchStart.style.display = "none";
	StopWatchReset.style.display = "none";
	StopWatchStop.style.display = "";
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      timeToString(elapsedTime);
    }, 10);
}

function SWStop() {
	clearInterval(timerInterval);
	StopWatchReset.style.display = "";
	StopWatchStop.style.display = "none";
	StopWatchStart.style.display = "";
}


function SWReset(){
    clearInterval(timerInterval);
    InpuTiming[0].value = "00";
	InpuTiming[1].value = "00";
	InpuTiming[2].value = "00";
	elapsedTime = 0;
	StopWatchReset.style.display = "none";
	StopWatchStop.style.display = "";
}

//CLOCK

function ClockStart() {

	timerInterval = setInterval(function(){
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	if (h>9){
		InpuTiming[0].value= h;
	}else{
		InpuTiming[0].value= "0"+h;
	}
	if (m>9){
		InpuTiming[1].value= m;
	}else{
		InpuTiming[1].value= "0"+m;
	}
	if (s>9){
		InpuTiming[2].value= s;
	}else{
		InpuTiming[2].value= "0"+s;
	}},1000);

}

//TIMER

let hourse, minutes, seconds;

function sec10(){

hourse = parseInt(InpuTiming[0].value);
minutes = parseInt(InpuTiming[1].value);
seconds = parseInt(InpuTiming[2].value);

if (seconds+10 <60){
	InpuTiming[2].value = seconds+10;
}
if(seconds+10 >= 60){
	InpuTiming[2].value = "0"+0;
	seconds = 0;
	if (minutes <9){
		InpuTiming[1].value = "0"+(minutes+1);
	    }else if(minutes+1 >= 60){
		    InpuTiming[1].value = "0"+0;
	        minutes = 0;
		    InpuTiming[0].value = "0"+(hourse+1);
			 
	    }else{
		    InpuTiming[1].value = minutes+1;
	    }
	
    }
}

function min1(){

hourse = parseInt(InpuTiming[0].value);
minutes = parseInt(InpuTiming[1].value);
seconds = parseInt(InpuTiming[2].value);

	if (minutes+1 <60){
		if (minutes<9){
			InpuTiming[1].value = "0"+(minutes+1);
		} else{
			InpuTiming[1].value = minutes+1;
		}
	}else if(minutes+1 >= 59){
		InpuTiming[1].value = "0"+0;
		minutes = 0;
		if (hourse<9)
		InpuTiming[0].value = "0"+(hourse+1);
		else
		InpuTiming[0].value = hourse+1;
	}
	if (hourse > 24 || hourse+1 >24){
		InpuTiming[0].value = "0"+0;
		hourse=0;
	
	}
		
}


function sec30(){

    hourse = parseInt(InpuTiming[0].value);
    minutes = parseInt(InpuTiming[1].value);
    seconds = parseInt(InpuTiming[2].value);

	if (seconds+30 <60){
		InpuTiming[2].value = seconds+30;
		
	}
	if(seconds+30 >= 60){
		InpuTiming[2].value = "0"+0;
		seconds = 0;
		if (minutes <9){
			InpuTiming[1].value = "0"+(minutes+1);
		}else if(minutes+1 >= 60){
			 InpuTiming[1].value = "0"+0;
		     minutes = 0;
		     InpuTiming[0].value = "0"+(hourse+1);
			 
		}else{
			InpuTiming[1].value = minutes+1;
		}
  }
		
}

function timerStart(){

	timeStart.style.display = "none";

	timerInterval = setInterval(function(){
		hourse = parseInt(InpuTiming[0].value);
        minutes = parseInt(InpuTiming[1].value);
        seconds = parseInt(InpuTiming[2].value);

		if (seconds != 0){
			if (seconds<11){
				InpuTiming[2].value = "0"+(seconds-1);
			}else{
				InpuTiming[2].value = seconds-1;
			}	
		}

		if (seconds == 0 && minutes != 0){
			if (minutes<11){
				InpuTiming[1].value = "0"+(minutes-1);
			}else{
				InpuTiming[1].value = minutes-1;
			}	
			InpuTiming[2].value = 59;
		}

		if (seconds == 0 && minutes == 0 && hourse != 0){
			if (hourse<11){
				InpuTiming[0].value = "0"+(hourse-1);
			}else{
				InpuTiming[0].value = hourse-1;
			}	
			 InpuTiming[1].value = 59;
			 InpuTiming[2].value = 59;
		}

		if (seconds == 0 && minutes == 0 && hourse == 0){
			alert ("Wake Up");
			clearInterval(timerInterval);
			timeStart.style.display = "";
		}
	}, 1000);
}

function timerStop(){
	timeStart.style.display = "";
	clearInterval(timerInterval);
	InpuTiming[2].value = "00";
	InpuTiming[1].value = "00";
	InpuTiming[0].value = "00";

}