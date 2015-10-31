
 $(document).ready( function() {
     $('#famous_quote_button').click(getQuoteFromAndruxnetAPI);
 });

//https://github.com/gophergala/wisdom
/*function getQuoteFromWisdomAPI(){
	function showQuote(result){
		$('#quote_text').html(result.content);
		$('#quote_author').html(result.author.name);
		console.log(result.content);
	}
	$.getJSON('https://wisdomapi.herokuapp.com/v1/random', showQuote);
}*/
//https://market.mashape.com/andruxnet/random-famous-quotes
function getQuoteFromAndruxnetAPI(){
	function showQuote(result){
		$('#quote_text').html(result.quote);
		$('#quote_author').html(result.author);
		generateTweetLink(result.quote);
	}
	$.ajax({
	  url : 'https://andruxnet-random-famous-quotes.p.mashape.com/cat={famous}',
	  type: 'POST',
	  dataType : "json",
	  headers : {"X-Mashape-Key":"JvYI0i6ZtnmshKGpIjC37Js1jNArp1AANEDjsnRmZ4yxiVu0Re","Content-Type":"application/x-www-form-urlencoded","Accept":"application/json"},
	  success: showQuote
	});
}
function generateTweetLink(quote){
    var link = "https://twitter.com/intent/tweet?text=";
    //var text = quote.replace(/(<([^>]+)>)/gi, "");
    var shortQuote = quote.substring(0, 99);
    link += shortQuote + "...";
    link = encodeURI(link);
    link += "&url=http%3A%2F%2Fsabahang.github.io%2Fquote-generator%2F&via=SabaAhang"
    var linkElement = '<a class="twitter-share-button" href="' + link + '" data-size="large">Tweet</a>'
    $('#twitter').children().replaceWith(linkElement);
    twttr.widgets.load();
}