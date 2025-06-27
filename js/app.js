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
            btn.addEventListener('click', (e) => {
                this.selectClass(e.target.closest('.class-btn'));
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

        // Action buttons
        document.getElementById('save-progress-btn').addEventListener('click', () => {
            this.saveProgress();
        });

        document.getElementById('export-btn').addEventListener('click', () => {
            this.exportSummary();
        });

        document.getElementById('reset-btn').addEventListener('click', () => {
            this.resetProgress();
        });

        document.getElementById('copy-summary-btn').addEventListener('click', () => {
            this.copySummaryToClipboard();
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
            this.hideSection('export-section');

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

        // Update progress
        this.updateProgress();

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

        // Update export button
        document.getElementById('export-btn').disabled = data.totalChoices > 0 && data.completedChoices < data.totalChoices;
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
                <li>Interactive choice selection</li>
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
            const completedIcon = choice.completed ? '✅' : '❓';
            
            let html = `
                <h3>${completedIcon} ${prefix}${choice.name}</h3>
                <p>${choice.description}</p>
            `;

            html += this.createChoiceInput(choice);
            
            choiceDiv.innerHTML = html;
            container.appendChild(choiceDiv);

            // Add event listeners for this choice
            this.addChoiceEventListeners(choice);
        });
    }

    // Create input elements for different choice types
    createChoiceInput(choice) {
        switch (choice.type) {
            case 'subclass':
                return this.createSubclassChoice(choice);
            case 'asiOrFeat':
                return this.createASIOrFeatChoice(choice);
            case 'weaponMastery':
                return this.createWeaponMasteryChoice(choice);
            case 'skill':
                return this.createSkillChoice(choice);
            case 'brutalStrike':
                return this.createBrutalStrikeChoice(choice);
            case 'epicBoon':
                return this.createEpicBoonChoice(choice);
            default:
                return '<p><em>Choice type not implemented yet.</em></p>';
        }
    }

    // Create subclass selection
    createSubclassChoice(choice) {
        let html = '<div class="choice-options">';
        choice.options.forEach(option => {
            const classInfo = classData[document.getElementById('selected-class').value];
            const subclassInfo = classInfo.subclasses[option];
            const checked = choice.userChoice === option ? 'checked' : '';
            
            html += `
                <div class="choice-option">
                    <input type="radio" id="${choice.id}_${option}" name="${choice.id}" value="${option}" ${checked}>
                    <label for="${choice.id}_${option}">
                        <strong>${subclassInfo.name}</strong><br>
                        <small>${subclassInfo.description}</small>
                    </label>
                </div>
            `;
        });
        html += '</div>';
        return html;
    }

    // Create ASI or Feat choice
    createASIOrFeatChoice(choice) {
        let html = '<div class="choice-options">';
        choice.options.forEach(option => {
            const checked = choice.userChoice === option ? 'checked' : '';
            const description = option === 'Ability Score Improvement' 
                ? 'Increase one ability score by 2, or two ability scores by 1 each'
                : 'Gain a feat of your choice';
            
            html += `
                <div class="choice-option">
                    <input type="radio" id="${choice.id}_${option}" name="${choice.id}" value="${option}" ${checked}>
                    <label for="${choice.id}_${option}">
                        <strong>${option}</strong><br>
                        <small>${description}</small>
                    </label>
                </div>
            `;
        });
        html += '</div>';
        return html;
    }

    // Create weapon mastery choice
    createWeaponMasteryChoice(choice) {
        let html = `<p><strong>Choose ${choice.count} weapon${choice.count > 1 ? 's' : ''}:</strong></p>`;
        html += '<div class="choice-options">';
        
        choice.options.forEach(weapon => {
            const property = levelCalculator.getWeaponMasteryProperty(weapon);
            const checked = choice.userChoice && choice.userChoice.includes(weapon) ? 'checked' : '';
            
            html += `
                <div class="choice-option">
                    <input type="checkbox" id="${choice.id}_${weapon}" name="${choice.id}" value="${weapon}" ${checked}>
                    <label for="${choice.id}_${weapon}">
                        <strong>${weapon}</strong> (${property})<br>
                        <small>Mastery property: ${property}</small>
                    </label>
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    }

    // Create skill choice
    createSkillChoice(choice) {
        let html = `<p><strong>Choose ${choice.count} skill${choice.count > 1 ? 's' : ''}:</strong></p>`;
        html += '<div class="choice-options">';
        
        choice.options.forEach(skill => {
            const checked = choice.userChoice && choice.userChoice.includes(skill) ? 'checked' : '';
            
            html += `
                <div class="choice-option">
                    <input type="checkbox" id="${choice.id}_${skill}" name="${choice.id}" value="${skill}" ${checked}>
                    <label for="${choice.id}_${skill}">${skill}</label>
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    }

    // Create brutal strike choice
    createBrutalStrikeChoice(choice) {
        let html = '<p><strong>Available Brutal Strike Effects:</strong></p>';
        html += '<div class="choice-options">';
        
        const descriptions = {
            'Forceful Blow': 'Push target 15 feet away, then move up to half Speed toward them',
            'Hamstring Blow': 'Reduce target\'s Speed by 15 feet until start of your next turn',
            'Staggering Blow': 'Target has Disadvantage on next save and can\'t make Opportunity Attacks',
            'Sundering Blow': 'Next attack against target gains +5 bonus to attack roll'
        };
        
        choice.options.forEach(option => {
            const checked = choice.userChoice && choice.userChoice.includes(option) ? 'checked' : '';
            
            html += `
                <div class="choice-option">
                    <input type="checkbox" id="${choice.id}_${option}" name="${choice.id}" value="${option}" ${checked}>
                    <label for="${choice.id}_${option}">
                        <strong>${option}</strong><br>
                        <small>${descriptions[option] || 'Effect description'}</small>
                    </label>
                </div>
            `;
        });
        
        html += '</div>';
        html += '<p><em>Note: You can learn multiple effects and choose which to use each time.</em></p>';
        return html;
    }

    // Create epic boon choice
    createEpicBoonChoice(choice) {
        let html = '<div class="choice-options">';
        
        const boons = levelCalculator.getEpicBoons();
        boons.forEach(boon => {
            const checked = choice.userChoice === boon ? 'checked' : '';
            
            html += `
                <div class="choice-option">
                    <input type="radio" id="${choice.id}_${boon}" name="${choice.id}" value="${boon}" ${checked}>
                    <label for="${choice.id}_${boon}">${boon}</label>
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    }

    // Add event listeners for choice inputs
    addChoiceEventListeners(choice) {
        const inputs = document.querySelectorAll(`input[name="${choice.id}"]`);
        
        inputs.forEach(input => {
            input.addEventListener('change', () => {
                this.handleChoiceChange(choice, input);
            });
        });
    }

    // Handle choice changes
    handleChoiceChange(choice, input) {
        let value;
        
        if (input.type === 'checkbox') {
            // Handle multiple selections
            const checkedInputs = document.querySelectorAll(`input[name="${choice.id}"]:checked`);
            value = Array.from(checkedInputs).map(inp => inp.value);
            
            // Enforce count limits for certain choice types
            if (choice.type === 'weaponMastery' && value.length > choice.count) {
                input.checked = false;
                value = value.filter(v => v !== input.value);
                this.showError(`You can only select ${choice.count} weapon${choice.count > 1 ? 's' : ''}.`);
                return;
            }
            
            if (choice.type === 'skill' && value.length > choice.count) {
                input.checked = false;
                value = value.filter(v => v !== input.value);
                this.showError(`You can only select ${choice.count} skill${choice.count > 1 ? 's' : ''}.`);
                return;
            }
        } else {
            // Handle single selections
            value = input.value;
        }
        
        // Save the choice
        levelCalculator.saveChoice(choice.id, value);
        
        // Update the current data and refresh display
        this.currentLevelUpData = levelCalculator.calculateLevelUp(
            document.getElementById('selected-class').value,
            parseInt(document.getElementById('current-level').value)
        );
        
        this.updateProgress();
        this.updateExportButton();
    }

    // Update progress bar
    updateProgress() {
        const data = this.currentLevelUpData;
        const percentage = data.totalChoices > 0 ? (data.completedChoices / data.totalChoices) * 100 : 100;
        
        document.getElementById('progress-fill').style.width = `${percentage}%`;
        document.getElementById('progress-text').textContent = 
            `${Math.round(percentage)}% Complete (${data.completedChoices}/${data.totalChoices})`;
    }

    // Update export button state
    updateExportButton() {
        const data = this.currentLevelUpData;
        document.getElementById('export-btn').disabled = 
            data.totalChoices > 0 && data.completedChoices < data.totalChoices;
    }

    // Save progress
    saveProgress() {
        levelCalculator.saveProgress();
        this.showSuccess('Progress saved successfully!');
    }

    // Export summary
    exportSummary() {
        if (!this.currentLevelUpData) return;
        
        const summary = levelCalculator.generateSummary(this.currentLevelUpData);
        document.getElementById('export-content').textContent = summary;
        this.showSection('export-section');
    }

    // Copy summary to clipboard
    async copySummaryToClipboard() {
        const content = document.getElementById('export-content').textContent;
        
        try {
            await navigator.clipboard.writeText(content);
            this.showSuccess('Summary copied to clipboard!');
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = content;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showSuccess('Summary copied to clipboard!');
        }
    }

    // Return to homepage (banner click)
    returnToHomepage() {
        // Hide level-up and export sections
        this.hideSection('level-up-section');
        this.hideSection('export-section');
        
        // Clear selections but keep data
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

    // Reset progress
    resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            levelCalculator.clearChoices();
            this.hideSection('level-up-section');
            this.hideSection('export-section');
            
            // Clear class selection
            document.querySelectorAll('.class-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            document.getElementById('selected-class').value = '';
            document.getElementById('current-level').value = '';
            
            this.updateCalculateButton();
            this.showSuccess('Progress reset successfully!');
        }
    }

    // Utility functions
    showSection(sectionId) {
        document.getElementById(sectionId).classList.remove('hidden');
    }

    hideSection(sectionId) {
        document.getElementById(sectionId).classList.add('hidden');
    }

    showError(message) {
        // Simple error display - could be enhanced with a modal or toast
        alert(`Error: ${message}`);
    }

    showSuccess(message) {
        // Simple success display - could be enhanced with a modal or toast
        alert(message);
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DnDLevelUpApp();
});
