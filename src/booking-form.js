// ---------------- Booking section ---------------------//
// ---------------- form Validation ---------------------//
export function bookingform() {
  // ---------------- FAQ Ques ---------------------//
  let questions = document.querySelectorAll(".question");

  questions.forEach((ques) => {
    ques.onclick = function (e) {
      questions.forEach((r) => {
        if (e.currentTarget != r) {
          r.parentElement.classList.remove("show-text");
        }
      });
      ques.parentElement.classList.toggle("show-text");
    };
  });
}
