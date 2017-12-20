
$(document).ready(function(){
	$.ajax(
	{
		url: "https://den-super-crud.herokuapp.com/books"

		})
	.done (function( data ) {
		console.log(data.books);
		for(let i = 0; i < data.books.length; i++){
			let books = $("#books");
			books.append("<li>" + data.books[i].title +"</li>");
			books.append("<li>" + data.books[i].author +"</li>");
			books.append("<li>" + data.books[i].releaseDate +"</li>");
			books.append("<li> <img src=\"" + data.books[i].image +"\"></li>");
		}
 
    });
    $("form").on("submit", function(event){
	    // Stop the form from submitting
	    event.preventDefault();
	    var book = {
	    	title: '',
	    	author: '',
	    	image: '',
	    	releaseDate: '',
	    }
	    book.title = $("#book-title").val();
	    book.author = $("#book-author").val();
	    book.image = $("#book-image").val();
	    book.releaseDate = $("#book-release-date").val();
	    
	    $.ajax(
		{
			url: "https://den-super-crud.herokuapp.com/books",
			method: "POST",
			data: book
		}).success(function(book){
			let books = $("#books");
			books.append("<li>" + book.title +"</li>");
			books.append("<li>" + book.author +"</li>");
			books.append("<li>" + book.releaseDate +"</li>");
			books.append("<li> <img src=\"" + book.image +"\"></li>");
		})
	   
    	});	
})

