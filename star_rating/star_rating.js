(function(){

  const starContainer = document.getElementById('star-container');
  let currentRating;

  const updateStars = (count) => {
    const stars = document.getElementsByClassName('star');

    for (var i = 0; i < count; i++) {
      stars[i].setAttribute('src', 'yellow-star.svg');
    }

    for (var j = i; j < 5; j++) {
      stars[j].setAttribute('src', 'plain-star.svg');
    }
  };

  const handleClick = (event) => {
    const starCount = event.target.getAttribute("data-rating");
    currentRating = starCount;

    if (starCount !== null) {
      updateStars(starCount);
    }
  };

  const handleMouseOver = (event) => {
    const starCount = event.target.getAttribute("data-rating");

    if (starCount !== null) {
      updateStars(starCount);
    }
  };

  const handleMouseOut = (event) => {
    if (event.target.id === 'star-container') {
      updateStars(currentRating);
    }
  };

  starContainer.addEventListener('click', handleClick);
  starContainer.addEventListener('mouseover', handleMouseOver);
  starContainer.addEventListener('mouseout', handleMouseOut);

})();
