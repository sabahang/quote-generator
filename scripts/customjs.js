
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
		console.log(result.content);
	}
	$.ajax({
	  url : 'https://andruxnet-random-famous-quotes.p.mashape.com/cat={famous}',
	  type: 'POST',
	  dataType : "json",
	  headers : {"X-Mashape-Key":"JvYI0i6ZtnmshKGpIjC37Js1jNArp1AANEDjsnRmZ4yxiVu0Re","Content-Type":"application/x-www-form-urlencoded","Accept":"application/json"},
	  success: showQuote
	});
}