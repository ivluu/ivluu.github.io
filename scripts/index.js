
$(document).ready(function() {
  let bday = new Date(1996, 10, 27);
  let diff_ms = Date.now() - bday.getTime();
  let age_dt = new Date(diff_ms);
  let age = Math.abs(age_dt.getUTCFullYear() - 1970);
  myInfo.innerHTML = "<strong>Name:</strong> Ivan Luu</br><strong>Age: </strong>" + age + "</br><strong>Born in: </strong>Los Angeles, CA</br><strong>Lives in: </strong>Rancho Palos Verdes, CA</br><strong>Ethnicity:</strong> Chinese</br><strong>Nationality:</strong> American</br><strong>Languages:</strong> English, Cantonese, HTML, CSS, JavaScript, C</br>";
});
