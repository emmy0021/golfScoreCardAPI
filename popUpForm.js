function popUpForm() {
    const popupForm = document.getElementById("popupForm");
  
    // Show the pop-up form with animation
    popupForm.style.display = "block";
    popupForm.style.animation = "fadeIn 0.5s";
  
    // Add a delay to remove animation class after the animation is complete
    setTimeout(() => {
      popupForm.style.animation = "";
    }, 500);
  }
  
  function closePopUpForm() {
    const popUpForm = document.querySelector('.popup-form');
    popUpForm.style.display = 'none';
  }
  