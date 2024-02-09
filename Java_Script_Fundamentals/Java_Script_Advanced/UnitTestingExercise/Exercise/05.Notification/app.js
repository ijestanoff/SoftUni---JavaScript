function notify(message) {
  const notificationRef = document.getElementById("notification");
  if (notificationRef.style.display == 'none' || notificationRef.style.display == '') {
    notificationRef.style.display = "block";
  } 
  notificationRef.textContent = message;
  notificationRef.addEventListener("click", hideMessage);

  function hideMessage (e) {
    notificationRef.style.display = "none";
  }
}