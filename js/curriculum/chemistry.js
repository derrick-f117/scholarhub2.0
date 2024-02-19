// Correct answers
const correctAnsI1 = "14";
const correctAnsI2 = "14";
const correctAnsII1 = "14";
const correctAnsII2 = "14";

// Get form elements
const form1 = document.getElementById("formIchem");
const form2 = document.getElementById("formIIchem");

// Get textarea elements
const ansI1 = getElementById("questionI1");
const ansI2 = getElementById("questionI2");
const ansII1 = getElementById("questionII1");
const ansII2 = getElementById("questionII2");

// Event listener for checking answers
form1.addEventListener(function (event) {
    event.preventDefault(); // prevent form submission

    // get usr's answr
    const usrAnsI1 = ansI1.value.trim();
    const usrAnsI2 = ansI2.value.trim();
    const usrAnsII1 = ansII1.value.trim();
    const usrAnsII2 = ansII2.value.trim();

    // get feedback elements
    const feedbackI1 = getElementById("feedbackI1");
    const feedbackI2 = getElementById("feedbackI2");
    const feedbackII1 = getElementById("feedbackII1");
    const feedbackII2 = getElementById("feedbackII2");

    //check if user's answr matches correct answer
    if (usrAnsI1.toLowerCase() === correctAnsI1.toLowerCase()) {
        feedbackI1.textContent = "Correct!";
    }
    else {
        feedbackI1.textContent = "Wrong!";
    }
})