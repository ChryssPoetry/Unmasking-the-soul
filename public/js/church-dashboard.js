document.addEventListener('DOMContentLoaded', function() {
    // Check if church is logged in
    const churchData = JSON.parse(localStorage.getItem('churchData'));
    if (!churchData) {
        window.location.href = '/';
        return;
    }

    // Initialize charts
    initializeCharts();
    
    // Load dashboard data
    loadDashboardData(churchData.id);

    // Logout button
    document.getElementById('logout-btn').addEventListener('click', function() {
        localStorage.removeItem('churchData');
        window.location.href = '/';
    });
});

function initializeCharts() {
    // Soul Distribution Chart
    const soulCtx = document.getElementById('soul-distribution-chart').getContext('2d');
    new Chart(soulCtx, {
        type: 'doughnut',
        data: {
            labels: ['High', 'Medium', 'Low'],
            datasets: [{
                data: [0, 0, 0],
                backgroundColor: [
                    'rgba(255, 215, 0, 0.8)',
                    'rgba(255, 215, 0, 0.5)',
                    'rgba(255, 215, 0, 0.2)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Growth Trends Chart
    const growthCtx = document.getElementById('growth-trends-chart').getContext('2d');
    new Chart(growthCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Members',
                data: [0, 0, 0, 0, 0, 0],
                borderColor: 'rgba(255, 215, 0, 0.8)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Member Engagement Chart
    const engagementCtx = document.getElementById('engagement-chart').getContext('2d');
    new Chart(engagementCtx, {
        type: 'bar',
        data: {
            labels: ['Active', 'Inactive'],
            datasets: [{
                data: [0, 0],
                backgroundColor: [
                    'rgba(255, 215, 0, 0.8)',
                    'rgba(255, 215, 0, 0.3)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

async function loadDashboardData(churchId) {
    try {
        const response = await fetch(`/api/church/dashboard?churchId=${churchId}`);
        const data = await response.json();

        if (response.ok) {
            updateDashboard(data);
        } else {
            showNotification(data.error, 'error');
        }
    } catch (error) {
        showNotification('Error loading dashboard data', 'error');
    }
}

function updateDashboard(data) {
    // Update statistics
    animateValue('total-members', data.stats.totalMembers);
    animateValue('active-members', data.stats.activeMembers);
    animateValue('avg-soul-score', data.stats.avgSoulScore);
    animateValue('completion-rate', data.stats.completionRate + '%');

    // Update member list
    updateMemberList(data.members);

    // Update charts
    updateCharts(data);
}

function animateValue(elementId, value) {
    const element = document.getElementById(elementId);
    const duration = 1000;
    const start = 0;
    const increment = value / (duration / 16);
    let current = start;

    const animate = () => {
        current += increment;
        if (current < value) {
            element.textContent = Math.round(current);
            requestAnimationFrame(animate);
        } else {
            element.textContent = value;
        }
    };

    animate();
}

function updateMemberList(members) {
    const tbody = document.getElementById('member-list-body');
    tbody.innerHTML = '';

    members.forEach(member => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${member.name}</td>
            <td>${new Date(member.joinDate).toLocaleDateString()}</td>
            <td>${member.lastQuiz ? new Date(member.lastQuiz).toLocaleDateString() : 'Never'}</td>
            <td>${member.soulScore}</td>
            <td><span class="status ${member.status}">${member.status}</span></td>
        `;
        tbody.appendChild(row);
    });
}

function updateCharts(data) {
    // Update Soul Distribution Chart
    const soulChart = Chart.getChart('soul-distribution-chart');
    if (soulChart) {
        const soulScores = data.members.map(m => m.soulScore);
        const high = soulScores.filter(s => s >= 70).length;
        const medium = soulScores.filter(s => s >= 40 && s < 70).length;
        const low = soulScores.filter(s => s < 40).length;

        soulChart.data.datasets[0].data = [high, medium, low];
        soulChart.update();
    }

    // Update Growth Trends Chart
    const growthChart = Chart.getChart('growth-trends-chart');
    if (growthChart) {
        // Simulate growth data
        const growthData = Array.from({length: 6}, (_, i) => 
            Math.floor(data.stats.totalMembers * (0.8 + Math.random() * 0.4))
        );
        growthChart.data.datasets[0].data = growthData;
        growthChart.update();
    }

    // Update Member Engagement Chart
    const engagementChart = Chart.getChart('engagement-chart');
    if (engagementChart) {
        engagementChart.data.datasets[0].data = [
            data.stats.activeMembers,
            data.stats.totalMembers - data.stats.activeMembers
        ];
        engagementChart.update();
    }
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
} 