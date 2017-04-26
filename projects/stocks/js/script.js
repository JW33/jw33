
(function($, window, document) {
	var data = "";
	$.when(
		$.getJSON("http://finance.google.com/finance/info?client=ig&q=NASDAQ%3AAAPL,JPM,CAT,MSFT&callback=?", function(response) {
			data = response;
			console.log("call succcessful");
		})

	).then(function () {
		console.log(data);
		parseAAPL(data[0]);
		parseJPM(data[1]);
		parseCAT(data[2]);
		parseMSFT(data[3]);
	});
}(window.jQuery, window, document));

function parseAAPL(data) {
	$("#aaplPrice").text("$" + data.l);
	$("#aaplChange").text(data.c);
	$("#aaplCP").text(data.cp);
	$("#aaplDY").text(data.yld);
	$("#aaplLU").text(data.elt);
}

function parseJPM(data) {
	$("#jpmPrice").text("$" + data.l);
	$("#jpmChange").text(data.c);
	$("#jpmCP").text(data.cp);
	$("#jpmDY").text(data.yld);
	$("#jpmLU").text(data.elt);
}

function parseCAT(data) {
	$("#catPrice").text("$" + data.l);
	$("#catChange").text(data.c);
	$("#catCP").text(data.cp);
	$("#catDY").text(data.yld);
	$("#catLU").text(data.elt);
}

function parseMSFT(data) {
	$("#msftPrice").text("$" + data.l);
	$("#msftChange").text(data.c);
	$("#msftCP").text(data.cp);
	$("#msftDY").text(data.yld);
	$("#msftLU").text(data.elt);
}
