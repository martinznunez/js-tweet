// variables//

const listaTweets = document.getElementById('lista-tweets');




// Even Listeners//
eventListeners();


function eventListeners(){
    // cuando se envia el formulario//
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);
    // borrar tweer//
    listaTweets.addEventListener('click', borrarTweer);

    document.addEventListener('DOMContentLoaded',localStorageListo);
 
}




// funciones//


// a;adir tweet del formulario//
function agregarTweet(e){
    e.preventDefault();

    // leer e; va;or de; textarea//
    const tweet =document.getElementById('tweet').value;
    // crear boton de eliminar//
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    
    // crear un elemento y a;adirle el contenido a la lista(li)//
    const li = document.createElement('li');
    li.innerText = tweet;
    // a;ade el X de borrar//
    li.appendChild(botonBorrar);
    // a;ade el tweet a una li//
    listaTweets.appendChild(li);

    agregarTweetLocalStorage(tweet);        
 
   
}

// elimina el tweet del Dom//
 function borrarTweer(e) {
    e.preventDefault();
    if(e.target.className ==='borrar-tweet'){
      e.target.parentElement.remove();
      borrarTweetLocalStorage(e.target.parentElement.innerText);
      
      
    }
}

function localStorageListo(){
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet){
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';
    
        
        // crear un elemento y a;adirle el contenido a la lista(li)//
        const li = document.createElement('li');
        li.innerText = tweet;
        // a;ade el X de borrar//
        li.appendChild(botonBorrar);
        // a;ade el tweet a una li//
        listaTweets.appendChild(li);
    });
}



function agregarTweetLocalStorage (tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage();

    tweets.push(tweet);

    localStorage.setItem('tweets',JSON.stringify(tweets))


}



function obtenerTweetsLocalStorage(){
    let tweets;

    if (localStorage.getItem('tweets')=== null) {
        tweets =[];
    } else{
            tweets = JSON.parse(localStorage.getItem('tweets'));

    }
    return tweets;


}


function borrarTweetLocalStorage(tweet){
    
    let tweets, tweetBorrar;

    tweetBorrar = tweet.substring(0, tweet.length -1);

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index){
        if (tweetBorrar === tweet) {
            tweets.splice(index, 1);
        }

    });

    localStorage.setItem('tweets', JSON.stringify(tweets));
    
}

