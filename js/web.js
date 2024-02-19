// Correct answer (you can customize this)
const correctAnswer = "Mount Everest is the highest peak in the world.";

// Get the form and textarea elements
const form = document.getElementsByClassName("answerForm");
const answerTextarea = document.getElementById("question");
const feedback = document.getElementById("feedback");

// Event listener for form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the user's answer from the textarea
    const userAnswer = answerTextarea.value.trim();

    // Check if the user's answer matches the correct answer
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        feedback.textContent = "Correct! Well done!";
    } else {
        feedback.textContent = "Oops! Try again.";
     }
});
