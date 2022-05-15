/* Get the number of available
   buttons using the .drum class
   (in this case, the "length" 
   of the list of .drum buttons) */

var numberOfButtons = document.querySelectorAll(".drum").length;

/* for each item in that list, add an
   event listener to it that listens
   for the button to be clicked on. */
for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        /* Don't ask me to explain
        "this".  It works.  Thats all
        I know.  Switch changes the
        script to whatever button is
        clicked and activates that
        specific drum sound */
        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                let tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
                case "s":
                    let tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
                case "d":
                    let tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;
                case "j":
                    let snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
                case "k":
                    let kick = new Audio("sounds/kick-bass.mp3");
                    kick.play();
                    break;
                case "l":
                    let crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    break;
                default: console.log();
        }
    })
}

// TODO: Add keyboard eventlisteners!
// Add Constructor(s)?  See below vvv
/* Lessons learned so far: 
    - I've learned how to use
    QuerySelectorAll to manipulate
    objects.
    - I've learned what Objects are
    (not to be confused with
         'objects'
         - I've learned what Constructors
         are, even though we haven't 
         used them yet so I expect
         that soon.
         - I've learned that "this" is
         a thing that exists, that I
         can tap into to manipulate
         items.  For example:
            this.style.color="white"
            - just learned that the
            lesson on Constructors was
            to get a handle on how
            "new Audio()" functions */