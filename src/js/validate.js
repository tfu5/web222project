function validate(event) {
  var x;
  var y;
  x = document.getElementById("Latitude").value;
  y = document.getElementById("Longitude").value;

  if ((isNaN(x) || x < -90 || x > 90) && (isNaN(y) || y < -180 || y > 180))
  {
      text = "must be a valid Latitude";
  } else 

 console.log('OK');
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
