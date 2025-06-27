// Main Application Logic
class DnDLevelUpApp {
    constructor() {
        this.currentLevelUpData = null;
        this.initializeEventListeners();
        this.updateCalculateButton();
    }

    // Initialize all event listeners
    initializeEventListeners() {
        // Header click to return to homepage
        document.querySelector('.header').addEventListener('click', () => {
            this.returnToHomepage();
        });

        // Class button selection
        document.querySelectorAll('.class-btn').forEach(btn => {
            // Add click event
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.selectClass(e.target.closest('.class-btn'));
            });
            
            // Add touch events for iOS Safari
            btn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                btn.style.transform = 'translateY(-2px)';
            });
            
            btn.addEventListener('touchend', (e) => {
                e.preventDefault();
                btn.style.transform = '';
                this.selectClass(e.target.closest('.class-btn'));
            });
            
            btn.addEventListener('touchcancel', (e) => {
                e.preventDefault();
                btn.style.transform = '';
            });
        });

        // Level selection
        document.getElementById('current-level').addEventListener('input', () => {
            this.updateCalculateButton();
        });

        // Calculate button
        document.getElementById('calculate-btn').addEventListener('click', () => {
            this.calculateLevelUp();
        });
    }

    // Handle class button selection
    selectClass(button) {
        // Remove selected class from all buttons
        document.querySelectorAll('.class-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Add selected class to clicked button
        button.classList.add('selected');
        
        // Update hidden input
        const selectedClass = button.getAttribute('data-class');
        document.getElementById('selected-class').value = selectedClass;
        
        // Update calculate button
        this.updateCalculateButton();
    }

    // Update the calculate button state
    updateCalculateButton() {
        const selectedClass = document.getElementById('selected-class').value;
        const levelInput = document.getElementById('current-level');
        const calculateBtn = document.getElementById('calculate-btn');

        const hasClass = selectedClass !== '';
        const hasValidLevel = levelCalculator.validateLevel(levelInput.value);

        calculateBtn.disabled = !(hasClass && hasValidLevel);
    }

    // Main calculation function
    calculateLevelUp() {
        try {
            const className = document.getElementById('selected-class').value;
            const currentLevel = parseInt(document.getElementById('current-level').value);

            this.currentLevelUpData = levelCalculator.calculateLevelUp(className, currentLevel);
            this.displayLevelUpChoices();
            this.showSection('level-up-section');

        } catch (error) {
            this.showError(error.message);
        }
    }

    // Display the level-up choices
    displayLevelUpChoices() {
        const data = this.currentLevelUpData;
        
        // Update title
        document.getElementById('level-title').textContent = 
            `${data.className} Level ${data.nextLevel}`;

        // Clear and populate content
        const contentDiv = document.getElementById('level-content');
        contentDiv.innerHTML = '';

        if (data.isStub) {
            this.displayStubMessage(contentDiv, data);
            return;
        }

        // Display new features
        if (data.features.length > 0) {
            this.displayFeatures(contentDiv, data.features);
        }

        // Display progression info
        if (Object.keys(data.progressionInfo).length > 0) {
            this.displayProgressionInfo(contentDiv, data.progressionInfo);
        }

        // Display choices
        if (data.choices.length > 0) {
            this.displayChoices(contentDiv, data.choices);
        } else if (!data.isStub) {
            const noChoicesDiv = document.createElement('div');
            noChoicesDiv.className = 'choice-group';
            noChoicesDiv.innerHTML = '<h3>🎉 No Choices Required</h3><p>This level grants new features automatically!</p>';
            contentDiv.appendChild(noChoicesDiv);
        }
    }

    // Display stub message for incomplete classes
    displayStubMessage(container, data) {
        const stubDiv = document.createElement('div');
        stubDiv.className = 'choice-group';
        stubDiv.innerHTML = `
            <h3>🚧 ${data.className} - Coming Soon!</h3>
            <p>${data.stubMessage}</p>
            <p><strong>What you can expect:</strong></p>
            <ul>
                <li>Complete level progression from 1-20</li>
                <li>All class features and abilities</li>
                <li>Subclass options and features</li>
                <li>Spell progression (for spellcasters)</li>
                <li>Reference information for character sheets</li>
            </ul>
            <p><em>Check back soon for the full ${data.className} implementation!</em></p>
        `;
        container.appendChild(stubDiv);
    }

    // Display new features
    displayFeatures(container, features) {
        const featuresDiv = document.createElement('div');
        featuresDiv.className = 'choice-group';
        
        let html = '<h3>✨ New Features</h3>';
        features.forEach(feature => {
            const prefix = feature.isSubclass ? `<strong>[${feature.subclassName}]</strong> ` : '';
            html += `
                <div class="feature-item mb-sm">
                    <strong>${prefix}${feature.name}:</strong> ${feature.description}
                </div>
            `;
        });
        
        featuresDiv.innerHTML = html;
        container.appendChild(featuresDiv);
    }

    // Display progression info
    displayProgressionInfo(container, info) {
        const progressDiv = document.createElement('div');
        progressDiv.className = 'choice-group';
        
        let html = '<h3>📈 Progression Updates</h3>';
        
        if (info.proficiencyBonus) {
            html += `<div class="feature-item mb-sm"><strong>Proficiency Bonus:</strong> +${info.proficiencyBonus}</div>`;
        }
        if (info.rageUses) {
            html += `<div class="feature-item mb-sm"><strong>Rage Uses:</strong> ${info.rageUses} per Long Rest</div>`;
        }
        if (info.rageDamage) {
            html += `<div class="feature-item mb-sm"><strong>Rage Damage Bonus:</strong> +${info.rageDamage}</div>`;
        }
        if (info.weaponMastery) {
            html += `<div class="feature-item mb-sm"><strong>Weapon Mastery:</strong> ${info.weaponMastery} weapons</div>`;
        }
        
        progressDiv.innerHTML = html;
        container.appendChild(progressDiv);
    }

    // Display choices that need to be made
    displayChoices(container, choices) {
        choices.forEach(choice => {
            const choiceDiv = document.createElement('div');
            choiceDiv.className = 'choice-group';
            
            const prefix = choice.isSubclass ? '[Subclass] ' : '';
            
            let html = `
                <h3>📝 ${prefix}${choice.name}</h3>
                <p>${choice.description}</p>
            `;

            html += this.createChoiceDisplay(choice);
            
            choiceDiv.innerHTML = html;
            container.appendChild(choiceDiv);
        });
    }

    // Create display for different choice types (no interactivity)
    createChoiceDisplay(choice) {
        switch (choice.type) {
            case 'subclass':
                return this.createSubclassDisplay(choice);
            case 'asiOrFeat':
                return this.createASIOrFeatDisplay(choice);
            case 'weaponMastery':
                return this.createWeaponMasteryDisplay(choice);
            case 'skill':
                return this.createSkillDisplay(choice);
            case 'brutalStrike':
                return this.createBrutalStrikeDisplay(choice);
            case 'epicBoon':
                return this.createEpicBoonDisplay(choice);
            default:
                return '<p><em>Choice type not implemented yet.</em></p>';
        }
    }

    // Create subclass display
    createSubclassDisplay(choice) {
        let html = '<div class="choice-display">';
        html += '<p class="choice-instruction">Choose your primal path</p>';
        html += '<h4>Available Subclasses:</h4>';
        html += '<ul class="choice-list">';
        
        choice.options.forEach(option => {
            const classInfo = classData[document.getElementById('selected-class').value];
            const subclassInfo = classInfo.subclasses[option];
            
            html += `
                <li>
                    <strong>${subclassInfo.name}:</strong> ${subclassInfo.description}
                </li>
            `;
        });
        
        html += '</ul></div>';
        return html;
    }

    // Create ASI or Feat display
    createASIOrFeatDisplay(choice) {
        let html = '<div class="choice-display">';
        html += '<p class="choice-instruction">Gain proficiency in one additional skill and use Strength for certain skill checks during Rage</p>';
        html += '<h4>Choose 1 skill to gain proficiency:</h4>';
        html += '<ul class="choice-list">';
        
        choice.options.forEach(option => {
            const description = option === 'Ability Score Improvement' 
                ? 'Increase one ability score by 2, or two ability scores by 1 each'
                : 'Gain a feat of your choice';
            
            html += `
                <li>
                    <strong>${option}:</strong> ${description}
                </li>
            `;
        });
        
        html += '</ul></div>';
        return html;
    }

    // Create weapon mastery display
    createWeaponMasteryDisplay(choice) {
        let html = '<div class="choice-display">';
        html += `<p class="choice-instruction">Choose ${choice.count} weapon${choice.count > 1 ? 's' : ''} to master:</p>`;
        html += '<ul class="choice-list">';
        
        choice.options.forEach(weapon => {
            const property = levelCalculator.getWeaponMasteryProperty(weapon);
            
            html += `
                <li>
                    <strong>${weapon}</strong> - Mastery: ${property}
                </li>
            `;
        });
        
        html += '</ul></div>';
        return html;
    }

    // Create skill display
    createSkillDisplay(choice) {
        let html = '<div class="choice-display">';
        html += `<p class="choice-instruction">Choose ${choice.count} skill${choice.count > 1 ? 's' : ''} to gain proficiency:</p>`;
        html += '<ul class="choice-list">';
        
        choice.options.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        
        html += '</ul></div>';
        return html;
    }

    // Create brutal strike display
    createBrutalStrikeDisplay(choice) {
        let html = '<div class="choice-display">';
        html += '<p class="choice-instruction">Available Brutal Strike Effects to learn:</p>';
        html += '<ul class="choice-list">';
        
        const descriptions = {
            'Forceful Blow': 'Push target 15 feet away, then move up to half Speed toward them',
            'Hamstring Blow': 'Reduce target\'s Speed by 15 feet until start of your next turn',
            'Staggering Blow': 'Target has Disadvantage on next save and can\'t make Opportunity Attacks',
            'Sundering Blow': 'Next attack against target gains +5 bonus to attack roll'
        };
        
        choice.options.forEach(option => {
            html += `
                <li>
                    <strong>${option}:</strong> ${descriptions[option] || 'Effect description'}
                </li>
            `;
        });
        
        html += '</ul>';
        html += '<p class="choice-note">Note: You can learn multiple effects and choose which to use each time.</p>';
        html += '</div>';
        return html;
    }

    // Create epic boon display
    createEpicBoonDisplay(choice) {
        let html = '<div class="choice-display">';
        html += '<p class="choice-instruction">Available Epic Boons:</p>';
        html += '<ul class="choice-list">';
        
        const boons = levelCalculator.getEpicBoons();
        boons.forEach(boon => {
            html += `<li>${boon}</li>`;
        });
        
        html += '</ul></div>';
        return html;
    }

    // Return to homepage (banner click)
    returnToHomepage() {
        // Hide level-up section
        this.hideSection('level-up-section');
        
        // Clear selections
        document.querySelectorAll('.class-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        document.getElementById('selected-class').value = '';
        document.getElementById('current-level').value = '';
        
        // Update button state
        this.updateCalculateButton();
        
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Utility functions
    showSection(sectionId) {
        document.getElementById(sectionId).classList.remove('hidden');
    }

    hideSection(sectionId) {
        document.getElementById(sectionId).classList.add('hidden');
    }

    showError(message) {
        alert(`Error: ${message}`);
    }

    showSuccess(message) {
        alert(message);
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DnDLevelUpApp();
});
