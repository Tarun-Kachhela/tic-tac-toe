$(function () {
	var displayXO = "X";
	var count = 1;
	var pattern = [123, 369, 987, 741, 456, 258, 159, 357];/*orignal pattern (maximum pattern in this game are store)*/
	var matchClickedPattern  = [000, 000, 000, 000, 000, 000, 000, 000];/*when clicks are occur then pattern is created*/
	var rem,rem1;
	$("#start-button").click(function () {
		location.reload();
	});
	$("#1").click(function () {
		matchClickedPattern[0] += 100;
		matchClickedPattern[3] += 1;
		matchClickedPattern[6] += 100;
		count++;
	});
	$("#2").click(function () {
		matchClickedPattern[0] += 20;
		matchClickedPattern[5] += 200;
		count++;
	});
	$("#3").click(function () {
		matchClickedPattern[0] += 3;
		matchClickedPattern[1] += 300;
		matchClickedPattern[7] += 300;
		count++;
	});
	$("#4").click(function () {
		matchClickedPattern[3] += 40;
		matchClickedPattern[4] += 400;
		count++;
	});
	$("#5").click(function () {
		matchClickedPattern[4] += 50;
		matchClickedPattern[5] += 50;
		matchClickedPattern[6] += 50;
		matchClickedPattern[7] += 50;
		count++;
	});
	$("#6").click(function () {
		matchClickedPattern[1] += 60;
		matchClickedPattern[4] += 6;
		count++;
	});
	$("#7").click(function () {
		matchClickedPattern[2] += 7;
		matchClickedPattern[3] += 700;
		matchClickedPattern[7] += 7;
		count++;
	});
	$("#8").click(function () {
		matchClickedPattern[2] += 80;
		matchClickedPattern[5] += 8;
		count++;
	});
	$("#9").click(function () {
		matchClickedPattern[1] += 9;
		matchClickedPattern[2] += 900;
		matchClickedPattern[6] += 9;
		count++;
	});
	/**************it is call when the one of the 9 div are clicked****************/
	$(".inside").click(function () {
		var divId = $(this).attr("id");
		$("#" + divId + " .text").addClass("bounceInDown");
		if(displayXO!="")
			$("#" + divId).css("background", "#353F4A");
		if($("#" + divId + " .text").text()==""){
			$("#" + divId + " .text").text(displayXO);
			if (displayXO == "X")
				displayXO = "O";
			else
				displayXO = "X";
		}
	/***********this will run when 5 clicks are completed & it also check the click with our patterns & if the pattern[](orignalPattern) or clicks is match then the those X or O wins ********************/ 
		for (var i = 0; i < pattern.length && count>5; i++) {
			if (pattern[i] == matchClickedPattern[i]) {
				var que= pattern[i];
				for(var j=0;j<2;j++){
					if(j!=1){
						rem=que%10;
						que =que/10;
					}
					rem1 = que%10;
					que= que/10;
					if($("#" + Math.trunc(rem)).text() != $("#" +Math.trunc(rem1)).text())
						 break;
					else{
						if(j==1){
							$(".result").text($("#" + rem).text() + " is won");
							i=pattern.length-1;
							displayXO = "";
							break;
						}
					}
				}
			}
		}
	});
});
