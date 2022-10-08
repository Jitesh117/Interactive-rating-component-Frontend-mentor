const ratingpage = document.querySelector(".rating");
const thankyou = document.querySelector(".thank");
var submitbutton = document.getElementById("submit");
const ratings = document.querySelectorAll(".num");
const score = document.getElementById("score");
if (submitbutton) {
  submitbutton.addEventListener("click", () => {
    ratingpage.style.display = "none";
    thankyou.classList.remove("hidden");

    ratings.forEach((rating) => {
      rating.addEventListener("click", () => {
        score.innerHTML = rating.innerHTML;
      });
    });
  });
}
