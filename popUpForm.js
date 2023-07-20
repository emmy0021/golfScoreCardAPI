  // Add an event listener to the input fields
  const nameInput = document.getElementById("nameInput");
  const groupIDInput = document.getElementById("groupIDInput");
  
  function handleInput(event) {
    const input = event.target;
    const label = input.previousElementSibling;
    
    if (input.value.trim() === "") {
      label.style.top = "50%";
      label.style.fontSize = "16px";
      label.style.color = "#888";
      label.style.backgroundColor = "";
      label.style.padding = "";
      label.style.borderRadius = '';
      label.style.border = "none";
    } else {
      label.style.top = "-4px";
      label.style.fontSize = "16px";
      label.style.color = "#000";
      label.style.backgroundColor = "rgb(148 204 223)";
      label.style.padding = "3px 8px 3px";
      label.style.borderRadius = '4px';
      label.style.border = "1px solid #ccc";
      label.style.borderBottom = 'none';
    }
  }
  

function popUpForm() {
    const popupForm = document.getElementById("popupForm");
  
    // Show the pop-up form with animation
    popupForm.style.display = "block";
    popupForm.style.animation = "fadeIn 0.5s";
    
    const groupIDInput = document.getElementById("groupIDInput");
    groupIDInput.value = groupId;    
    groupIDInput.dispatchEvent(new Event('input'));

    // Add a delay to remove animation class after the animation is complete
    setTimeout(() => {
      popupForm.style.animation = "";
    }, 500);
  }
  
  function closePopUpForm() {
    const popUpForm = document.querySelector('.popup-form');
    popUpForm.style.display = 'none';
  }
  


nameInput.addEventListener("input", handleInput);
groupIDInput.addEventListener("input", handleInput);

