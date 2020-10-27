/*
When the user clicks on the button,
toggle between hiding and showing the dropdown content
 */
let dropDownOption = () => {
  document.getElementById("dropMenu").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("title-bar-nav");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
}

!(function(d){

  const itemClassName = "carousel__photo";
    items = d.getElementsByClassName(itemClassName),
    totalItems = items.length,
    slide = 0,
    moving = true;

  const itemClassName2 = "carousel__photo2";
    items2 = d.getElementsByClassName(itemClassName2),
    totalItems2 = items2.length,
    slide2 = 0;
    moving = true;

    // Set classes
  function setInitialClasses() {
    // Targets the previous, current, and next items
    items[totalItems - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");
  }

  function setInitialClasses2() {
    items2[totalItems2 - 1].classList.add("prev");
    items2[0].classList.add("active");
    items2[1].classList.add("next");
  }

  // Set event listeners
  function setEventListeners() {
    let next = d.getElementsByClassName('carousel__button--next')[0],
        prev = d.getElementsByClassName('carousel__button--prev')[0];
    next.addEventListener('click', moveNext);
    prev.addEventListener('click', movePrev);
  }

  function setEventListeners2() {
    let next2 = d.getElementsByClassName('carousel__button2--next')[0],
        prev2 = d.getElementsByClassName('carousel__button2--prev')[0];
    next2.addEventListener('click', moveNext2);
    prev2.addEventListener('click', movePrev2);
  }

  // Next navigation handler
  function moveNext() {
    // Check if moving
    if (!moving) {
      // If it's the last slide, reset to 0, else +1
      if (slide === (totalItems - 1)) {
        slide = 0;
      } else {
        slide++;
      }
      moveCarouselTo(slide);
    }
  }

  function moveNext2() {
    if(!moving) {
      if (slide2 === (totalItems2 - 1)) {
        slide2=0;
      } else {
        slide2++;
      }
      // Move carousel to updated slide
      moveCarousel2To(slide2);
    }
  }
  // Previous navigation handler
  function movePrev() {
    // Check if moving
    if (!moving) {
      // If it's the first slide, set as the last slide, else -1
      if (slide === 0) {
        slide = (totalItems - 1);
      } else {
        slide--;
      }
      moveCarouselTo(slide);
    }
  }

  function movePrev2() {

    if (!moving) {
      if (slide2 === 0) {
        slide2 = (totalItems2 - 1);
      } else {
        slide2--;
      }
      // Move carousel to updated slide
      moveCarousel2To(slide2);
    }
  }

  function disableInteraction() {
    // Set 'moving' to true for the same duration as our transition.
    // (0.5s = 500ms)

    moving = true;
    // setTimeout runs its function once after the given time
    setTimeout(function(){
      moving = false
    }, 500);
  }

  function moveCarouselTo(slide) {
    // Check if carousel is moving, if not, allow interaction
    if(!moving) {
      // temporarily disable interactivity
      disableInteraction();
      // Update the "old" adjacent slides with "new" ones
      let newPrevious = slide - 1,
          newNext = slide + 1,
          oldPrevious = slide - 2,
          oldNext = slide + 2;
      // Test if carousel has more than three items
      if ((totalItems - 1) > 3) {
        // Checks and updates if the new slides are out of bounds
        if (newPrevious <= 0) {
          oldPrevious = (totalItems - 1);
        } else if (newNext >= (totalItems - 1)){
          oldNext = 0;
        }
        // Checks and updates if slide is at the beginning/end
        if (slide === 0) {
          newPrevious = (totalItems - 1);
          oldPrevious = (totalItems - 2);
          oldNext = (slide + 1);
        } else if (slide === (totalItems -1)) {
          newPrevious = (slide - 1);
          newNext = 0;
          oldNext = 1;
        }
        // Now we've worked out where we are and where we're going,
        // by adding/removing classes we'll trigger the transitions.
        // Reset old next/prev elements to default classes
        items[oldPrevious].className = itemClassName;
        items[oldNext].className = itemClassName;
        // Add new classes
        items[newPrevious].className = itemClassName + " prev";
        items[slide].className = itemClassName + " active";
        items[newNext].className = itemClassName + " next";
      }
    }
  }

  function moveCarousel2To(slide2) {
    // Check if carousel is moving, if not, allow interaction
    if(!moving) {
      // temporarily disable interactivity
      disableInteraction();
      // Update the "old" adjacent slides with "new" ones
      let newPrevious2 = slide2 - 1,
          newNext2 = slide2 + 1,
          oldPrevious2 = slide2 - 2,
          oldNext2 = slide2 + 2;
      // Test if carousel has more than three items
      if ((totalItems2 - 1) > 3) {
        // Checks and updates if the new slides are out of bounds
        if (newPrevious2 <= 0) {
          oldPrevious2 = (totalItems2 - 1);
        } else if (newNext2 >= (totalItems2 - 1)){
          oldNext2 = 0;
        }
        // Checks and updates if slide is at the beginning/end
        if (slide2 === 0) {
          newPrevious2 = (totalItems2 - 1);
          oldPrevious2 = (totalItems2 - 2);
          oldNext2 = (slide2 + 1);
        } else if (slide2 === (totalItems2 -1)) {
          newPrevious2 = (slide2 - 1);
          newNext2 = 0;
          oldNext2 = 1;
        }
        // Now we've worked out where we are and where we're going,
        // by adding/removing classes we'll trigger the transitions.
        // Reset old next/prev elements to default classes
        items2[oldPrevious2].className = itemClassName2;
        items2[oldNext2].className = itemClassName2;
        // Add new classes
        items2[newPrevious2].className = itemClassName2 + " prev";
        items2[slide2].className = itemClassName2 + " active";
        items2[newNext2].className = itemClassName2 + " next";
      }
    }
  }

  function initCarousel() {
    setInitialClasses();
    setInitialClasses2();
    setEventListeners();
    setEventListeners2();
    // Set moving to false so that the carousel becomes interactive
    moving = false;
  }

  initCarousel();
}(document));
