// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
.add({
  targets: '.ml12 .letter',
  translateX: [0,-30],
  opacity: [1,0],
  easing: "easeInExpo",
  duration: 1,
})
.add({
  duration:500
})
.add({
  targets: '.ml12 .letter',
  translateX: [50,0],
  translateZ: 0,
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 3000,
  delay: (el, i) => 500 + 30 * i
});