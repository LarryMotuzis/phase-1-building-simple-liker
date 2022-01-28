// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likeButtons = document.getElementsByClassName('like');

function addlikeButton(array){
  for (const elemten of likeButtons) {
    elemten.addEventListener('click', (e) => {
        if (e.target.style.color !== 'red') {
          e.target.style.color ='red'
        } else if(e.target.style.color === 'red'){
          e.target.style.color = 'black'
        }
    })
    
  }
}
addlikeButton(likeButtons)







//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
