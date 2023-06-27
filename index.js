const firstRedDot = document.getElementById("red-dot-1");
const redDotHover = document.getElementById("red-dot-hover-1");

firstRedDot.addEventListener('mouseenter', function() {
  redDotHover.style.visibility = 'visible';
  redDotHover.style.opacity = '1';
  redDotHover.style.transform = 'translateY(0)';
});

firstRedDot.addEventListener('mouseleave', function() {
  redDotHover.style.visibility = 'hidden';
  redDotHover.style.opacity = '0';
  redDotHover.style.transform = 'translateY(10px)';
  setTimeout(function() {
    redDotHover.style.visibility = 'hidden';
  }, 300);
});
