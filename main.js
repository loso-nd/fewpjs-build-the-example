// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function test() {
//Call all the like buttons and add an e.listener to the like func
  const likes = document.querySelectorAll(".like");

  likes.forEach(likeBtn => {
    likeBtn.addEventListener('click', () => {
    //console.log(mimicServerCall()) 
    mimicServerCall() //call the fake server func to stimulate a success and errors
    .then(() => {console.log("You made it or nah!")})
    .catch(error => {
        console.log(error)
        const hidden = document.getElementById('model')
        hidden.classList.remove("hidden")
    } )}
    )
  }) 
  

}
test()

//we can do a forEach on a node
//add and event listener on the document and targer the like buttons 

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
