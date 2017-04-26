/*
 * --- Random Daily Quote (API call to 'they said so') ---
 *
 */

//this is executed as soon as the file is served up
(function($, window, document) {
		$('#daily').text('Loading . . .');
		$('#dailyB').text('Loading . . .');
	 	var dailyQuoteUrl = "http://quotes.rest/qod.json";
		var dailyBibleVerse = "http://quotes.rest/bible/vod.json";
	 	$(function () {
		 	var getQuote = $.ajax ({
			 	type: "GET",
			 	url: dailyQuoteUrl,
				datatype: "jsonp",
			 	success: function(response) {
			 		$('#daily').text('');

					$('#daily').append(displayQuoteAndAuthor(response));

					//updateBackgroundImage(response);
				}
			});
		 });
		$(function () {
		 	var getQuote = $.ajax ({
			 	type: "GET",
			 	url: dailyBibleVerse,
				datatype: "jsonp",
			 	success: function(response) {
			 		$('#dailyB').text('');

					$('#dailyB').append(displayBibleVerse(response));
				}
			});
		 });
		


	}(window.jQuery, window, document));

//parse response for the quote and author
function displayQuoteAndAuthor(response) {

	var quote = JSON.stringify(response.contents.quotes[0].quote);
	var display = quote.replace(/"/g,"") + " ";

	var author = JSON.stringify(response.contents.quotes[0].author);
	display += " - " + author.replace(/"/g,"");

	return display;
}

//parse response for background url and display it (style.css has a fall back image just in case)
function updateBackgroundImage(response) {
	var backgroundUrl = JSON.stringify(response.contents.quotes[0].background);

	backgroundUrl = backgroundUrl.replace(/"/g,"");

	$('html').css('background', 'url(' + backgroundUrl + ') no-repeat center center fixed');
	$('html').css('background-size', 'cover');
	$('html').css('-webkit-background-size', 'cover');
	$('html').css('-moz-background-size', 'cover');
	$('html').css('-o-background-size', 'cover');
	$('html').css('opacity', '0.7');
}

//parse response for the quote and author
function displayBibleVerse(response) {

	var verse = JSON.stringify(response.contents.verse);
	var display = verse.replace(/"/g,"") + " ";

	var book = JSON.stringify(response.contents.book);
	var bookCleanup = book.replace(/"/g,"") + " ";

	var chapter = JSON.stringify(response.contents.chapter);
	var chapterCleanup = chapter.replace(/"/g,"");

	var verseNumber = JSON.stringify(response.contents.number);
	var verseNumberCleanup = verseNumber.replace(/"/g,"");

	display += " - " + bookCleanup + " " + chapterCleanup + ":" + verseNumberCleanup;

	return display;
}

/*
 * --- Random Quote (randomly chosen from the list below) ---
 *
 */
function generate() {
	
	//will continue to grow (will one day be in a database)
	var quotes = [
      "You can do anything, but not everything. - David Allen",
      "The richest man is not he who has the most, but he who needs the least. - Unknown",
	  "If you stand for nothing, you'll fall for anything. - Unknown",
      "You miss 100 percent of the shots you never take. - Wayne Gretzky",
      "You must be the change you wish to see in the world. - Gandhi", //5th
      "We are what we repeatedly do; Excellence, then, is not an act but a habit. - Aristotle",
      "A wise man gets more use from his enemies than a fool from his friends. - Baltasar Gracian",
      "Do not seek to follow in the footsteps of the men of old; Seek what they sought. - Basho",
      "Even if you're on the right track, you'll get run over if you just sit there. - Will Rogers",
	  "Don't cry because it's over, smile because it happened. - Dr. Seuss", //10th
	  "Be yourself; everyone else is already taken. - Oscar Wilde", 
	  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein", 
	  "You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Dr. Seuss", 
	  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
   	  "A friend is someone who knows all about you and still loves you. - Elbert Hubbard", //15th
	  "Always forgive your enemies; nothing annoys them so much. - Oscar Wilde", 
	  "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde", 
   	  "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison", 
	  "Glory is fleeting, but obscurity is forever. - Napolean Bonaparte", //19th
	  "Death smiles at us but all a man can do is smile back. - Marcus Aurelius",
	  "War does not determine who is right, only who is left. - Unknown",
	  "Pressure makes dimaonds. - George Patton",
	  "I'd rather have the German army in front of me than the French army behind me - George Patton",
	  "If you don't know where you are going, you will wind up somewhere else. - Yogi Berra", //24th
	  "A little more persistence, a little more effort, and what seemed like a hopeless failure may turn to glorious success. - Elbert Hubbard",
	  "I don't measure a man's success by how high he climbs but how high he bounces when he hits bottom. - George Patton",
	  "Adaptability is one of the best skills one should have in today's world - Unknown",
	  "Vision without action is merely a dream. Action without vision just passes the time. Vision with action can change the world. - Joel Barker",
	  "The road to success is dotted with many tempting parking places. - Will Rogers",
	  "When the world says, 'Give up,' Hope whispers, 'Try it one more time.' - Unknown", //30th
	  "You cannot temper steel without giving it a good beating first. - Unknown",
	  "Only a real risk tests the reality of a belief. - Unknown",
	  "A negative mind will never give you a positive life. - Unknown",
	  "If you live for someone's praise, you'll die by their rejection. - Unknown",
	  "He who conquers others is strong; he who conquers himself is mighty. - Lao Tzu", //35th
	  "True greatness always requires regular, consistent, small, and sometimes ordinary and mudane steps over a long period of time. - Howard Hunter",
	  "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self. - Ernest Hemingway",
	  "When everything seems like an uphill struggle, just think of the view from the top. - Unknown",
	  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
	  "A river cuts through rock, not because of its power, but because of its persistance. - Jim Watkins", //40th
	  "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish. - John Quincy Adams",
	  "The enemy wins not by fighting harder than you, but by convincing you that victory isn't worth winning. - Unknown",
	  "Faithless is he that says farewell when the road darkens. - J.R.R. Tolkien",
	  "Care about what other people think and you will always be their prisoner. - Lao Tzu",
	  "If you are not willing to risk the usual, you will have to settle for the ordinary. - Jim Rohn", //45th
	  "Obstacles are those frightful things when you take your eyes off your goal. - Henry Ford",
	  "You must never give into despair. Allow yourself to slip down that road and you surrender to your lowest instincts. In the darkest times, hope is something you give yourself. That is the meaning of inner strength. - Uncle Iroh"
    ];
	
	var randomNum = randomNumber(quotes.length);

	$("#random").text(quotes[randomNum]);
}

function randomNumber(max) {
	var parse = parseInt(max);
	return (Math.random() * parse | 0);
}

//Kick off the random quote generation
generate();
