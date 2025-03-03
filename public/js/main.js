document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    setupEventListeners();
});

function initializeNavigation() {
    const withChurchBtn = document.getElementById('with-church-btn');
    const aloneBtn = document.getElementById('alone-btn');
    const startScreen = document.getElementById('start-screen');
    const quizSection = document.getElementById('pspsQuiz');
    const churchSection = document.getElementById('church-section');

    // Handle "Take Alone" button click
    aloneBtn.addEventListener('click', () => {
        playSound('clickSound');
        startScreen.classList.add('animate__animated', 'animate__fadeOut');
        setTimeout(() => {
            startScreen.style.display = 'none';
            quizSection.style.display = 'block';
            quizSection.classList.add('animate__animated', 'animate__fadeIn');
            startQuiz();
        }, 500);
    });

    // Handle "With My Church" button click
    withChurchBtn.addEventListener('click', () => {
        playSound('clickSound');
        startScreen.classList.add('animate__animated', 'animate__fadeOut');
        setTimeout(() => {
            startScreen.style.display = 'none';
            churchSection.style.display = 'block';
            churchSection.classList.add('animate__animated', 'animate__fadeIn');
            loadChurches();
        }, 500);
    });
}

function setupEventListeners() {
    // Church selection form submission
    const churchSelectForm = document.getElementById('church-select-form');
    churchSelectForm.addEventListener('submit', handleChurchSelection);

    // Quiz navigation
    document.getElementById('prev-btn').addEventListener('click', () => switchPage(currentPage - 1));
    document.getElementById('next-btn').addEventListener('click', () => switchPage(currentPage + 1));
    document.getElementById('pspsQuiz').addEventListener('submit', handleQuizSubmission);
}

function playSound(soundId) {
    const sound = document.getElementById(soundId);
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(error => console.log('Sound play failed:', error));
    }
}

function showError(message) {
    const notification = document.createElement('div');
    notification.className = 'error-notification animate__animated animate__fadeIn';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('animate__fadeOut');
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

function showLoading() {
    const loading = document.createElement('div');
    loading.className = 'loading animate__animated animate__fadeIn';
    document.body.appendChild(loading);
}

function hideLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.classList.add('animate__fadeOut');
        setTimeout(() => loading.remove(), 500);
    }
} 