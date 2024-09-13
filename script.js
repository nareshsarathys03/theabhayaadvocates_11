// Smooth scroll functionality for the 'Get Started' button
document.querySelector('.get-started').addEventListener('click', function () {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });
  