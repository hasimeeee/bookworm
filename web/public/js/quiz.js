function checkAnswers() {
    let score = 0;

    // Question 1
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    if (q1Answer && q1Answer.value === 'b') {
        score++;
    }

    // Question 2
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    if (q2Answer && q2Answer.value === 'c') {
        score++;
    }

    // Question 3
    const q3Answer = document.querySelector('input[name="q3"]:checked');
    if (q3Answer && q3Answer.value === 'a') {
        score++;
    }

    // Display results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<h3>Your Score: ${score}/3</h3>`;

    // Check if all questions are answered
    const allAnswered = q1Answer && q2Answer && q3Answer;
    if (allAnswered) {
        if (score === 3) {
            // Redirect to certificate page if all answers are correct
            resultsDiv.innerHTML = `<h3>YOU PASSED THE EXAM</h3>`;
        } else {
            // Display message if not all answers are correct
            resultsDiv.innerHTML += `<p>You failed the exam.</p>`;
        }
    } else {
        resultsDiv.innerHTML += `<p>Please answer all questions.</p>`;
    }
}

function redirectToPage() {
    let score = 0;

    // Question 1
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    if (q1Answer && q1Answer.value === 'b') {
        score++;
    }

    // Question 2
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    if (q2Answer && q2Answer.value === 'c') {
        score++;
    }

    // Question 3
    const q3Answer = document.querySelector('input[name="q3"]:checked');
    if (q3Answer && q3Answer.value === 'a') {
        score++;
    }

    // Check if all questions are answered
    const allAnswered = q1Answer && q2Answer && q3Answer;
    if (allAnswered && score === 3) {
        // Redirect to certificate page if all answers are correct
        window.location.href = 'sertifika.html';
    } else {
        // Display message if not all answers are correct or not all questions are answered
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `<p>Please complete the quiz first and answer all questions correctly.</p>`;
    }
}