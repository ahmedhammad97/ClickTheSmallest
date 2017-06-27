$(document).ready(function(){

	if ($(window).width() < 777) {
   	alert('Sorry! This game may not perform so well on mobile phone as it is for testing purposes .. please switch to a wider screen aka. laptop if possible!');
	}

	console.log($(window).width());

	var start=false;
	var min=9999;
	var minIndex=4;
	var score=-1;

	/*for(var i = 0 ; i<9 ; i++){
	var value = Math.floor((Math.random() * 100) + 1);
	$("#box" + i).html("<br>" + value);
	if(value<min){min=value;minIndex=i;}
	}*/

	$(".box").click(function(){
		
		if($(this).attr('id') == "box" + minIndex){
		score++;
		$("#score").text("Score : " + score);
		

		min=9999;
	 	minIndex=10;

	 	var array = [];
	 	for(var i = 0 ; i<9 ; i++){
		do{
			var value = Math.floor((Math.random() * 100) + 1);
		}while($.inArray(value,array) != -1)
		array.push(value);
		$("#box" + i).html("<br>" + value);
		if(value<min){min=value;minIndex=i;console.log(minIndex);}

	}
		array.length = 0;

	}
	})
	
	
	
function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

$("#box4").click(function () {
    var minutes = 60 * 1,
        display = document.querySelector('#time');
    	if(start==false){startTimer(minutes, display);start=true;

    	setTimeout(function(){
    	$("#finalScore").text("Your Score : " + score);
		$("#time").fadeOut(2000);
		
		$("#curtains").fadeIn(2000)



		},58000);

    	}

    	/*console.log($("#time").text());*/

    	$("#zorar").click(function(){
    		location.reload();
    	})
});










})




	