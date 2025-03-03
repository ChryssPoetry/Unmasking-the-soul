document.addEventListener('DOMContentLoaded', function() {
    // Church Registration Form
    const churchRegistrationForm = document.getElementById('church-registration-form');
    if (churchRegistrationForm) {
        churchRegistrationForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('church-name').value,
                adminName: document.getElementById('admin-name').value,
                adminEmail: document.getElementById('admin-email').value,
                adminPassword: document.getElementById('admin-password').value
            };

            try {
                const response = await fetch('/api/church/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const data = await response.json();

                if (response.ok) {
                    // Show success message
                    showNotification(data.message, 'success');
                    
                    // Store church data
                    localStorage.setItem('churchData', JSON.stringify(data.church));
                    
                    // Redirect to dashboard after 2 seconds
                    setTimeout(() => {
                        window.location.href = '/church/dashboard';
                    }, 2000);
                } else {
                    showNotification(data.error, 'error');
                }
            } catch (error) {
                showNotification('An error occurred during registration', 'error');
            }
        });
    }

    // Church Selection Form
    const churchSelectForm = document.getElementById('church-select-form');
    if (churchSelectForm) {
        // Load churches into select dropdown
        loadChurches();

        churchSelectForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = {
                username: document.getElementById('username').value,
                churchId: document.getElementById('church-select').value
            };

            try {
                // Store user data
                localStorage.setItem('userData', JSON.stringify(formData));
                
                // Show quiz section
                document.getElementById('start-screen').style.display = 'none';
                document.getElementById('church-section').style.display = 'none';
                document.getElementById('quiz-section').style.display = 'block';
                
                // Initialize quiz
                initializeQuiz();
            } catch (error) {
                showNotification('An error occurred', 'error');
            }
        });
    }

    // Load churches into select dropdown
    async function loadChurches() {
        try {
            const response = await fetch('/api/churches');
            const churches = await response.json();
            
            const select = document.getElementById('church-select');
            churches.forEach(church => {
                const option = document.createElement('option');
                option.value = church._id;
                option.textContent = church.name;
                select.appendChild(option);
            });
        } catch (error) {
            console.error('Error loading churches:', error);
        }
    }

    // Show notification
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}); 