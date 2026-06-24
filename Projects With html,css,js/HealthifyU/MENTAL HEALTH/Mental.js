  // Mobile Menu Toggle
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuButton = document.querySelector('.mobile-menu-button');
            const mobileMenu = document.querySelector('.mobile-menu');
            
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
            
            // Mood Tracker
            const moodButtons = document.querySelectorAll('.mood-btn');
            const saveMoodBtn = document.getElementById('save-mood-btn');
            const moodNotes = document.getElementById('mood-notes');
            const moodHistory = document.getElementById('mood-history');
            
            let selectedMood = null;
            let moodData = JSON.parse(localStorage.getItem('moodData')) || [];
            
            moodButtons.forEach(button => {
                button.addEventListener('click', function() {
                    moodButtons.forEach(btn => btn.classList.remove('ring-2', 'ring-offset-2', 'ring-indigo-500'));
                    this.classList.add('ring-2', 'ring-offset-2', 'ring-indigo-500');
                    selectedMood = parseInt(this.dataset.mood);
                });
            });
            
            saveMoodBtn.addEventListener('click', function() {
                if (!selectedMood) {
                    alert('Please select your mood first');
                    return;
                }
                
                const entry = {
                    date: new Date().toISOString().split('T')[0],
                    mood: selectedMood,
                    notes: moodNotes.value
                };
                
                moodData.push(entry);
                localStorage.setItem('moodData', JSON.stringify(moodData));
                
                alert('Mood saved successfully!');
                updateMoodChart();
                moodHistory.classList.remove('hidden');
            });
            
            // Breathing Exercise
            const startBreathingBtn = document.getElementById('start-breathing');
            const breathText = document.getElementById('breath-text');
            const cycleCount = document.getElementById('cycle-count');
            const breathCycle = document.getElementById('breath-cycle');
            
            let isBreathing = false;
            let cycle = 0;
            let breathInterval;
            
            startBreathingBtn.addEventListener('click', function() {
                if (isBreathing) {
                    clearInterval(breathInterval);
                    isBreathing = false;
                    breathText.textContent = 'Breathe In';
                    startBreathingBtn.textContent = 'Start Breathing Exercise';
                    breathCycle.classList.add('hidden');
                    cycle = 0;
                    return;
                }
                
                isBreathing = true;
                startBreathingBtn.textContent = 'Stop Exercise';
                breathCycle.classList.remove('hidden');
                cycleCount.textContent = '0';
                cycle = 0;
                
                let step = 0;
                const steps = [
                    { text: 'Breathe In', duration: 4000 },
                    { text: 'Hold', duration: 7000 },
                    { text: 'Breathe Out', duration: 8000 }
                ];
                
                breathInterval = setInterval(() => {
                    breathText.textContent = steps[step].text;
                    
                    if (step === steps.length - 1) {
                        step = 0;
                        cycle++;
                        cycleCount.textContent = cycle;
                        
                        if (cycle >= 4) {
                            clearInterval(breathInterval);
                            isBreathing = false;
                            breathText.textContent = 'Exercise Complete!';
                            startBreathingBtn.textContent = 'Start Breathing Exercise';
                            setTimeout(() => {
                                breathText.textContent = 'Breathe In';
                                breathCycle.classList.add('hidden');
                                cycle = 0;
                            }, 3000);
                        }
                    } else {
                        step++;
                    }
                }, steps[step].duration);
            });
            
            // Initialize Mood Chart if data exists
            if (moodData.length > 0) {
                moodHistory.classList.remove('hidden');
                updateMoodChart();
            }
            
            function updateMoodChart() {
                const ctx = document.getElementById('mood-chart').getContext('2d');
                
                // Group mood data by date (simplified)
                const groupedData = moodData.reduce((acc, entry) => {
                    if (!acc[entry.date]) {
                        acc[entry.date] = [];
                    }
                    acc[entry.date].push(entry.mood);
                    return acc;
                }, {});
                
                const labels = Object.keys(groupedData);
                const averages = labels.map(date => {
                    const moods = groupedData[date];
                    return moods.reduce((sum, mood) => sum + mood, 0) / moods.length;
                });
                
                if (window.moodChart) {
                    window.moodChart.destroy();
                }
                
                window.moodChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Mood (1-5 scale)',
                            data: averages,
                            backgroundColor: 'rgba(79, 70, 229, 0.2)',
                            borderColor: 'rgba(79, 70, 229, 1)',
                            borderWidth: 2,
                            tension: 0.3,
                            pointBackgroundColor: 'rgba(79, 70, 229, 1)',
                            pointRadius: 4
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: false,
                                min: 1,
                                max: 5,
                                ticks: {
                                    stepSize: 1
                                }
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
            }
        });