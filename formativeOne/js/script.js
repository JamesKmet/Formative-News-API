

var topHeadLinesButton = document.getElementById('topHeadLines')
topHeadLinesButton.onclick = function() {
  $.ajax({
    url : 'https://newsapi.org/v2/everything?' +
        'q=Apple&' +
        'from=2021-08-05&' +
        'sortBy=popularity&' +
        'apiKey=31ecd86eaab54bfdadf0e8a81d0024de',
        data: 'json',
      success: function(data){
         document.getElementById('objects').innerHTML = ''
        console.log(data);
         var i;
        for (i=0;i<data.articles.length;i++){
           document.getElementById('objects').innerHTML +=
           '<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"> ' +
              '<div class="card mt-3 ml-5" style="width: 18rem;">' +
                '<div class="list-group list-group-flush">'+
                  '<img src="'+ data.articles[i].urlToImage +'" class="card-img-top" alt="...">' +
                 '<p class="list-group-item">'+
                  'title: '+ data.articles[i].title + '<br>'+
                   'author: '+ data.articles[i].author + '<br>' +
                    'publishedAt: '+ data.articles[i].publishedAt+'</p>'+
               '</div>'+
              '</div>'+
           '</div>';
        } //for loop
      },  //success
      error : function(){
        console.log('error');
      } //error
    }); //ajax
};



var topEntertainmentButton = document.getElementById('topEntertainment')
topEntertainmentButton.onclick = function() {
  $.ajax({
    url :  'https:newsapi.org/v2/everything?q=entertainment&from=2021-08-04&to=2021-08-04&sortBy=popularity&apiKey=31ecd86eaab54bfdadf0e8a81d0024de',
      data: 'json',
      success: function(data){
         document.getElementById('objects').innerHTML = ''
        console.log(data);
         var i;
        for (i=0;i<data.articles.length;i++){
           document.getElementById('objects').innerHTML +=
           '<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"> ' +
              '<div class="card mt-3 ml-5" style="width: 18rem;">' +
                '<div class="list-group list-group-flush">'+
                  '<img src="'+ data.articles[i].urlToImage +'" class="card-img-top" alt="...">' +
                 '<p class="list-group-item">'+
                  'title: '+ data.articles[i].title + '<br>'+
                   'author: '+ data.articles[i].author + '<br>' +
                    'publishedAt: '+ data.articles[i].publishedAt+'</p>'+
               '</div>'+
              '</div>'+
           '</div>';
        } //for loop
      },  //success
      error : function(){
        console.log('error');
      } //error
    }); //ajax
};


var topSportsButton = document.getElementById('topSports')
topSportsButton.onclick = function() {
  $.ajax({
    url :  'https:newsapi.org/v2/everything?q=sports&from=2021-08-04&to=2021-08-04&sortBy=popularity&apiKey=31ecd86eaab54bfdadf0e8a81d0024de',
      data: 'json',
      success: function(data){
         document.getElementById('objects').innerHTML = ''
        console.log(data);
         var i;
        for (i=0;i<data.articles.length;i++){
           document.getElementById('objects').innerHTML +=
           '<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"> ' +
              '<div class="card mt-3 ml-5" style="width: 18rem;">' +
                '<div class="list-group list-group-flush">'+
                  '<img src="'+ data.articles[i].urlToImage +'" class="card-img-top" alt="...">' +
                 '<p class="list-group-item">'+
                  'title: '+ data.articles[i].title + '<br>'+
                   'author: '+ data.articles[i].author + '<br>' +
                    'publishedAt: '+ data.articles[i].publishedAt+'</p>'+
               '</div>'+
              '</div>'+
           '</div>';
        } //for loop
      },  //success
      error : function(){
        console.log('error');
      } //error
    }); //ajax
};


var topTechnologyButton = document.getElementById('topTechnology')
topTechnologyButton.onclick = function() {
  $.ajax({
    url :  'https:newsapi.org/v2/everything?q=technology&from=2021-08-04&to=2021-08-04&sortBy=popularity&apiKey=31ecd86eaab54bfdadf0e8a81d0024de',
      data: 'json',
      success: function(data){
 document.getElementById('objects').innerHTML = ''
        console.log(data);
         var i;
        for (i=0;i<data.articles.length;i++){
           document.getElementById('objects').innerHTML +=
           '<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"> ' +
              '<div class="card mt-3 ml-5" style="width: 18rem;">' +
                '<div class="list-group list-group-flush">'+
                  '<img src="'+ data.articles[i].urlToImage +'" class="card-img-top" alt="...">' +
                 '<p class="list-group-item">'+
                  'title: '+ data.articles[i].title + '<br>'+
                   'author: '+ data.articles[i].author + '<br>' +
                    'publishedAt: '+ data.articles[i].publishedAt+'</p>'+
               '</div>'+
              '</div>'+
           '</div>';
        } //for loop
      },  //success
      error : function(){
        console.log('error');
      } //error
    }); //ajax
};



// var for each input and output for the API
var searchForm = document.querySelector('.search');
var input = document.querySelector('.input');
var newsList = document.querySelector('.news-list');

// addEventListener tag for the button to work
searchForm.addEventListener('submit', retrieve);

function retrieve(e) {

//innerHTML '' to clear the div upon a new
newsList.innerHTML = ''

  e.preventDefault()
  //connecting the URL to whatever the user types into the input div on the home page.
  let topic = input.value;
  let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=31ecd86eaab54bfdadf0e8a81d0024de`

//fetch tag to get information from the API and turn it into readable JSON format
  fetch(url).then((res)=>{
    return  res.json()
  }).then((data)=>{
  // creating new elements for the unseen Div that will have the response list in it
    data.articles.forEach(article => {
    let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute('href',article.url);
        a.setAttribute('target','_blank');
        a.textContent = article.title;
        li.appendChild(a);
        newsList.appendChild(li);
    })
    });
  };
