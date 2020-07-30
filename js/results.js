const eatResults = document.getElementsByClassName('eat-results');

eatResults.addEventListener('click', (showEat));

function showEat() { 
  const show = document.getElementsByClassName('eat-results-images');
    if (show.style.display === 'none') {
    show.style.display = 'block';
    } else {
    show.style.display = 'none';
    }
}



