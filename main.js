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

  const likes = document.querySelectorAll(".like-glyph");
  console.log(likes)

    likes.forEach(likeBtn => {
    likeBtn.addEventListener('click', (e) => {
    console.log("Heartbreak!") 
    
    mimicServerCall() //call the fake server func to stimulate a success and errors
    //console.log(mimicServerCall())
    .then( () => {
      console.log("You made it or nah!")
      console.log(e.target)
      console.log(e.target.innerHTML)
        if(e.target.innerHTML == EMPTY_HEART ){
          e.target.className = 'activated-heart'
          e.target.innerHTML = '♥'
       }
       else {
         console.log('Already Loved')
         e.target.classList.remove('activated-heart')
         e.target.innerHTML = '♡'
       }
      })  
    })
  })
}

    //     // else if(EMPTY_HEART == '♡' ) {
    //     //   let heart = document.querySelector('.like-glyph')
    //     //   heart.classList.remove('activated-heart')
    //     //   }
    //     else {
    //     let heart = document.querySelector('.like-glyph')
    //     heart.classList.remove('activated-heart')
    //     }
    //   })
    //   .catch(error => {
    //     console.log("Stimulating fake errors")
    //     const hidden = document.getElementById('modal')

    //     hidden.classList.remove("hidden")

    //       alert('Are you working?')

    //       setTimeout(function(){
    //     const hidden = document.getElementById('modal')
    //       hidden.className = "hidden"
    //       }, 5000);
    //     })
    //   }
    // )
  // }) 
  // })
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