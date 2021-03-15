// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

/**
 * Create a func called test
 * Target all the likes on the page to add an addEventListenert to each like in order to call the fake mimicServerCall() to stimulate errors or success
 * .then() will stimulate success
 * - When server response w/ success if EMPTY_HEART, Add the `.activated-heart` class to make the heart appear red 
 * .catch() will stimulate failures
 * -When server response w/ failure remove the hidden class on the modal to appear on the page, then use setTimeout() to add the hidden class back into the modal to remove it from the page after 5 secs
 */
function test() {

  const likes = document.querySelectorAll(".like");

  likes.forEach(likeBtn => {
    likeBtn.addEventListener('click', () => {
    //console.log(mimicServerCall()) 
      mimicServerCall() //call the fake server func to stimulate a success and errors
      .then(() => {
        console.log("You made it or nah!")
        if(EMPTY_HEART){
          let heart = document.querySelector('.like-glyph')
          let span = document.querySelector('span.like-glyph')
          heart.className = 'activated-heart'
          span.innerHTML = FULL_HEART
        }
        else {
        let heart = document.querySelector('.like-glyph')
        heart.classList.remove('activated-heart')
        }
      })
      .catch(error => {
        console.log("Stimulating fake errors")
        const hidden = document.getElementById('modal')

        hidden.classList.remove("hidden")

          alert('Are you working?')

          setTimeout(function(){
        const hidden = document.getElementById('modal')
          hidden.className = "hidden"
          }, 5000);
        })
      }
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
