let currentPage = 0;
let answers = new Array(questions.length).fill(null);

function startQuiz() {
    currentPage = 0;
    answers = new Array(questions.length).fill(null);
    updateNavigation();
    showPage(currentPage);
}

function showPage(pageIndex) {
    const pages = document.querySelectorAll('.quiz-page');
    pages.forEach((page, index) => {
        if (index === pageIndex) {
            page.style.display = 'block';
            page.classList.add('animate__animated', 'animate__fadeIn');
        } else {
            page.style.display = 'none';
        }
    });
    updateNavigation();
}

function updateNavigation() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');

    prevBtn.style.display = currentPage === 0 ? 'none' : 'block';
    nextBtn.style.display = currentPage === questions.length - 1 ? 'none' : 'block';
    submitBtn.style.display = currentPage === questions.length - 1 ? 'block' : 'none';
}

function switchPage(pageIndex) {
    if (pageIndex >= 0 && pageIndex < questions.length) {
        playSound('transitionSound');
        currentPage = pageIndex;
        showPage(currentPage);
    }
}

function handleAnswer(questionIndex, answer) {
    answers[questionIndex] = answer;
    playSound('clickSound');
}

function handleQuizSubmission(event) {
    event.preventDefault();
    showLoading();

    const quizData = {
        answers: answers,
        timestamp: new Date().toISOString()
    };

    fetch('/api/quiz/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(quizData)
    })
    .then(response => response.json())
    .then(data => {
        hideLoading();
        if (data.success) {
            showResults(data.results);
        } else {
            showError(data.message || 'Failed to submit quiz');
        }
    })
    .catch(error => {
        hideLoading();
        showError('An error occurred while submitting the quiz');
        console.error('Quiz submission error:', error);
    });
}

function showResults(results) {
    const quizSection = document.getElementById('pspsQuiz');
    const resultsSection = document.getElementById('results');
    
    quizSection.classList.add('animate__animated', 'animate__fadeOut');
    setTimeout(() => {
        quizSection.style.display = 'none';
        resultsSection.style.display = 'block';
        resultsSection.classList.add('animate__animated', 'animate__fadeIn');
        
        // Update results content
        document.getElementById('soul-score').textContent = results.soulScore;
        document.getElementById('spirit-score').textContent = results.spiritScore;
        document.getElementById('body-score').textContent = results.bodyScore;
        document.getElementById('vibe-result').textContent = results.vibe;
        
        // Animate scores
        animateValue('soul-score', 0, results.soulScore, 1000);
        animateValue('spirit-score', 0, results.spiritScore, 1000);
        animateValue('body-score', 0, results.bodyScore, 1000);
    }, 500);
}

function animateValue(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const animate = () => {
        current += increment;
        element.textContent = Math.round(current);
        if (current < end) {
            requestAnimationFrame(animate);
        }
    };

    animate();
} 