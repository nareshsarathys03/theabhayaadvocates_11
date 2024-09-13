// Handling form submissions for notifications and profile settings
document.getElementById('notification-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Notification preferences saved!');
  });
  
  document.getElementById('profile-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Profile updated successfully!');
  });
  