// In your JavaScript or TypeScript code, not within a React component
let isHeartRed = false;

const handleHeartClick = () => {
  isHeartRed = !isHeartRed;
  const heartIcon = document.getElementById('heart-icon');

  if (heartIcon) {
    heartIcon.innerHTML = isHeartRed
      ? '<img src="/assets/heart-filled.svg" alt="heart" width="24" height="24" class="cursor-pointer object-contain" />'
      : '<img src="/assets/heart-gray.svg" alt="heart" width="24" height="24" class="cursor-pointer object-contain" />';
  }
};

// Add an event listener to handle clicks
const heartIcon = document.getElementById('heart-icon');
if (heartIcon) {
  heartIcon.addEventListener('click', handleHeartClick);
}
