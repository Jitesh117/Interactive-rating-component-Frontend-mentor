var button = document.querySelector("#submit");
var ratings_btn = document.querySelectorAll(".num");
var rating_state = document.querySelector(".rating");
var thanks_state = document.querySelector(".thank");
var selection_rating = document.querySelector("#score");

var ratingvalue;
ratings_btn.forEach((element) => {
  element.addEventListener("click", () => {
    ratingvalue = element.innerText;
  });
});
button.addEventListener("click", () => {
  if (!ratingvalue) {
    alert("Select a rating");
    return;
  }

  rating_state.style.display = "none";
  thanks_state.style.display = "block";
  selection_rating.innerText = ratingvalue;
});
