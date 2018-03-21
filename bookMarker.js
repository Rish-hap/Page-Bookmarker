document.getElementById('myForm').addEventListener('submit',saveBookmark);

function saveBookmark(e){
	//prevent default routine
 	e.preventDefault();
	console.log('it Works')
	//get form Values
	var siteName = document.getElementById('siteName').value;
	var siteUrl = document.getElementById('siteUrl').value;
  	var bookmark = {
  		name: siteName,
  		url: siteUrl
  	}
  	$('siteUrl').attr("placeholder"," ")

// to enable access to localStorage in chrome switch off "Block Third Party cookies" 

// check if bookMarks array is null
if(localStorage.getItem('bookMarks')==null)
{   
	// init the array
	var bookMarks = [];
	// Add to array
	bookMarks.push(bookmark);
	// add to localStorage
	localStorage.setItem('bookMarks',JSON.stringify(bookMarks));
}
else
{
	// get bookmarks from locaStorage
 var bookMarks =JSON.parse(localStorage.getItem('bookMarks'));
 // add bookmark to aaray
 	bookMarks.push(bookmark);
 // add to localStorage
  	localStorage.setItem('bookMarks',JSON.stringify(bookMarks));
}
fetchBookmark();
location.reload();
}
// localStorage accesing methods
/*
localStorage.setItem('name','Rishav Upadhayay');  // to store in localStorage
console.log(localStorage.getItem('name'));    //to get From localStorage
localStorage.removeItem('test') //to remove From localStorage
*/ 

//delete bookmark
function deleteBookmark(url){
	var bookMarks =JSON.parse(localStorage.getItem('bookMarks'));
	for(var i in bookMarks)
	{
		if(bookMarks[i].url == url)
		{
			console.log(bookMarks[i]);
			bookMarks.splice(i,1);
		}
	}
	localStorage.setItem('bookMarks',JSON.stringify(bookMarks));
	console.log("deleteBookmark executed next statement is fetchBookmark");
	fetchBookmark();
	console.log("deleteBookmark completely executed")
}




// adding booknark to dom
function fetchBookmark(){
	//
	var bookMarks =JSON.parse(localStorage.getItem('bookMarks'));
   //get output id
   var bookmarksResult = document.getElementById('bookmarksResults');
   bookmarksResult.innerHTML = '';
   for(var i=0;i<bookMarks.length;i++){
   	var name = bookMarks[i].name;
   	var url = bookMarks[i].url;
   	// build output
   	 bookmarksResult.innerHTML += '<div class="well">'+
   	                               '<h3>'+name+
   	                               '<a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>'+
   	                               '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" target="" href="#">Delete</a>'+
   									'</h3>'+
   									'</div>';
   }
   console.log('fetchBookmark executed:')								
}

// )"

//"<div class='well'>"+"<h3>"+name+"<a class='btn btn-default' target='_blank' href='"+url+">Visit</a>"+"</h3"+"</div>"