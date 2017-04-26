/*jslint browser:true */
"use strict";

function addMonths(elem) {
	var annualkWUsage = 0;
	var months = document.getElementById(elem).getElementsByTagName('input');

	for(var i = 0; i < months.length; i++) {
		var x = Number(months[i].value);
		annualkWUsage += x;
	}

	var daysInYear = 365
	return annualkWUsage / daysInYear;
}

function sunHours() {
	var hours;
	var theZone = document.forms.solarForm.zone.selectedIndex;
	theZone += 1; //add so first is not 0

	switch(theZone)
	{
		case 1:
			hours = 6;
			break;
		case 2:
			hours = 5.5;
			break;
		case 3:
			hours = 5;
			break;
		case 4:
			hours = 4.5;
			break;
		case 5:
			hours = 4.2;
			break;
		case 6:
			hours = 3.5;
			break;
		default:
			hours = 0;
			break;
	}
	return hours;
}

function calculatePanel() {
	var userChoice = document.forms.solarForm.panel.selectedIndex;
	var panelOptions = document.forms.solarForm.panel.options;
	var power = panelOptions[userChoice].value;
	var name = panelOptions[userChoice].text;

	var x = [power, name];
	return x;
}



function calculateSolar() {
	var dailykWUsage = addMonths('mpc');

	var sunHoursPerDay = sunHours();

	var minkWNeeds = dailykWUsage / sunHoursPerDay;
	
	//increased due to clouds and rain
	var realkWNeeds = minkWNeeds * 1.25;

	//conversion from kW to Watts
	var realWattNeeds = realkWNeeds * 1000;

	var panelInfo = calculatePanel();
	var panelOutput = panelInfo[0];
	var panelName = panelInfo[1];

	var panelsNeeded = Math.ceil(realWattNeeds / panelOutput);
	
	var feedback = "";
	feedback += "<p>Based on your average daily use of " + Math.round(dailykWUsage) + " kWh, you will need to purchase " + panelsNeeded + " " + panelName + " solar panels to offset 100% of your electricity bill.";
	feedback += "<h2>Additional Details</h2>";
	feedback += "<p>Your average daily electricity consumption: " + Math.round(dailykWUsage) + " Kwh per day.";
	feedback += "<p>Average sunshine hours per day in your zone: " + sunHoursPerDay + " hours</p>";
	feedback += "<p>Realistic watts needed: " + Math.round(realWattNeeds) + " watts per hour";
	feedback += "<p>The " + panelName + " panel you selected generates about " + panelOutput + " watts per hour";

	document.getElementById('feedback').innerHTML = feedback;
}


