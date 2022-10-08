/*==================== SHOW MENU ====================*/
const showMenunavbar = (togleId, navId) =>{
    const toggle = document.getElementById(togleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenunavbar('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
  const navLink = document.querySelectorAll('.nav__link')

 function linkAction(){
     const navMenu = document.getElementById('nav-menu')
     // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
 }
 navLink.forEach(n => n.addEventListener('click', linkAction))




/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
 const darkTheme = 'dark-theme'
 const iconTheme = 'bx-sun'

 //Previously selected topic (if user selected)
 const selectedTheme = localStorage.getItem('selected-theme')
 const selectedIcon = localStorage.getItem('selected-icon')
//We obtain the current theme that the interface has by validating the dark-theme class
  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// // We validate if the user previously chose a topic
 if (selectedTheme) {
//       // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
//  }
 // Activate / deactivate the theme manually with the button
 themeButton.addEventListener('click', () => {
        // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
     themeButton.classList.toggle(iconTheme)
//    // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
   localStorage.setItem('selected-icon', getCurrentIcon())
 })
 }

 function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 3){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 20){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length <=8){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 140){
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }

// set the index of the picture in the slideshow to 1
var slideIndex = 1;

// Calls the main function 'showSlides', and passes in the 1 
// from above
showSlides(slideIndex);

//calling of functions to let the slide move to the next picture
// This function probably gets called when user clicks the next
// button. It adds n to the index, and calls the main function 'showSlides' again.
function plusSlides(n) {
    showSlides(slideIndex += n);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main function, takes a number argument for the slide number
// to show, and assigns this number to the variable 'n'
function showSlides(n) {
//  This variable is for iterating (adding)
    var i;

// This variable selects the mySlides element from the DOM HTML
    var slides = document.getElementsByClassName("mySlides");

// This variable selects the dot element from the DOM HTML
    var dots = document.getElementsByClassName("dot");

// If the number passed into the main function is greater_than 
// the number of slides, then set the variable slideIndex to 1.
    if ( n > slides.length) {slideIndex = 1}

// If the number passed into the main function is less_than 
// the number of slides, then set the variable slideIndex to the number of slides.
    if (n < 1) {slideIndex = slides.length}

// Iterate through all of the slides, and do what's in the {} 
// to each slide. Set the display style to none to hide them.
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

// Iterate through all of the dots, and do what's in the {} 
// to each dot element. Remove the class name 'active' for CSS.
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

// Set the display style of the slide before (-1) to 'block'
// This makes it visible
    slides[slideIndex-1].style.display= "block";

// Set the class name of the dot before (-1) to 'active'
// This is probably styled in the CSS
    dots[slideIndex-1].className += " active";
}


