// Theme Manager
class ThemeManager {
    constructor() {
        this.theme = this.getStoredTheme() || this.getSystemTheme();
        this.applyTheme();
        this.initializeToggle();
        this.watchSystemTheme();
    }
    
    getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    getStoredTheme() {
        try {
            return localStorage.getItem('theme');
        } catch (e) {
            console.warn('Could not access localStorage:', e);
            return null;
        }
    }
    
    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
    }
    
    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme();
        this.saveTheme();
    }
    
    saveTheme() {
        try {
            localStorage.setItem('theme', this.theme);
        } catch (e) {
            console.warn('Could not save theme to localStorage:', e);
        }
    }
    
    initializeToggle() {
        const toggleButton = document.querySelector('.theme-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => this.toggleTheme());
        }
    }
    
    watchSystemTheme() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (e) => {
            // Only update if user hasn't manually set a preference
            if (!this.getStoredTheme()) {
                this.theme = e.matches ? 'dark' : 'light';
                this.applyTheme();
            }
        });
    }
}

// Main Application Logic
class DnDLevelUpApp {
    constructor() {
        this.currentLevelUpData = null;
        this.themeManager = new ThemeManager();
        this.initializeEventListeners();
        this.updateCalculateButton();
        this.parseURLParameters();
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
            this.updateURL();
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
        
        // Update URL
        this.updateURL();
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

        // Display progression info (always show for non-stub classes)
        this.displayProgressionInfo(contentDiv, data.progressionInfo);

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
        
        // Hit Points and Hit Dice
        if (info.hpIncrease) {
            html += `<div class="feature-item mb-sm"><strong>Hit Points:</strong> ${info.hpIncrease}</div>`;
        }
        if (info.hitDiceCount) {
            html += `<div class="feature-item mb-sm"><strong>Hit Dice:</strong> ${info.hitDiceCount}${info.hitDie}</div>`;
        }
        
        // Proficiency Bonus
        if (info.proficiencyBonus) {
            html += `<div class="feature-item mb-sm"><strong>Proficiency Bonus:</strong> +${info.proficiencyBonus}</div>`;
        }
        
        // Spellcasting progression
        if (info.cantrips !== undefined) {
            html += `<div class="feature-item mb-sm"><strong>Cantrips Known:</strong> ${info.cantrips}</div>`;
        }
        if (info.spellsKnown !== undefined) {
            html += `<div class="feature-item mb-sm"><strong>Spells Known:</strong> ${info.spellsKnown}</div>`;
        }
        if (info.preparedSpells !== undefined) {
            html += `<div class="feature-item mb-sm"><strong>Prepared Spells:</strong> ${info.preparedSpells}</div>`;
        }
        if (info.spellSlots) {
            const slotLevels = Object.keys(info.spellSlots);
            
            // Use inline format for single spell level (like Warlock), table for multiple levels
            if (slotLevels.length === 1) {
                const level = slotLevels[0];
                const slots = info.spellSlots[level];
                html += `<div class="feature-item mb-sm"><strong>Spell Slots:</strong> ${level}${this.getOrdinalSuffix(level)} level: ${slots}</div>`;
            } else {
                html += `<div class="feature-item mb-sm"><strong>Spell Slots:</strong></div>`;
                html += '<div class="spell-slots-table">';
                html += '<table class="slots-table">';
                html += '<thead><tr>';
                
                // Create header row
                Object.keys(info.spellSlots).forEach(level => {
                    html += `<th>${level}${this.getOrdinalSuffix(level)}</th>`;
                });
                html += '</tr></thead>';
                
                // Create data row
                html += '<tbody><tr>';
                Object.values(info.spellSlots).forEach(slots => {
                    html += `<td>${slots}</td>`;
                });
                html += '</tr></tbody>';
                
                html += '</table>';
                html += '</div>';
            }
        }
        
        // Class-specific resources
        if (info.rageUses) {
            html += `<div class="feature-item mb-sm"><strong>Rage Uses:</strong> ${info.rageUses} per Long Rest</div>`;
        }
        if (info.rageDamage) {
            html += `<div class="feature-item mb-sm"><strong>Rage Damage Bonus:</strong> +${info.rageDamage}</div>`;
        }
        if (info.weaponMastery) {
            html += `<div class="feature-item mb-sm"><strong>Weapon Mastery:</strong> ${info.weaponMastery} weapons</div>`;
        }
        if (info.secondWind) {
            html += `<div class="feature-item mb-sm"><strong>Second Wind Uses:</strong> ${info.secondWind} per Short/Long Rest</div>`;
        }
        if (info.sneakAttack) {
            html += `<div class="feature-item mb-sm"><strong>Sneak Attack:</strong> ${info.sneakAttack}</div>`;
        }
        if (info.bardicDie) {
            html += `<div class="feature-item mb-sm"><strong>Bardic Inspiration Die:</strong> ${info.bardicDie}</div>`;
        }
        if (info.sorceryPoints) {
            html += `<div class="feature-item mb-sm"><strong>Sorcery Points:</strong> ${info.sorceryPoints}</div>`;
        }
        if (info.invocationsKnown) {
            html += `<div class="feature-item mb-sm"><strong>Eldritch Invocations Known:</strong> ${info.invocationsKnown}</div>`;
        }
        if (info.wildShapeUses) {
            html += `<div class="feature-item mb-sm"><strong>Wild Shape Uses:</strong> ${info.wildShapeUses} per Short/Long Rest</div>`;
        }
        if (info.wildShapeCR) {
            html += `<div class="feature-item mb-sm"><strong>Wild Shape Max CR:</strong> ${info.wildShapeCR}</div>`;
        }
        if (info.martialArtsDie) {
            html += `<div class="feature-item mb-sm"><strong>Martial Arts Die:</strong> ${info.martialArtsDie}</div>`;
        }
        if (info.focusPoints) {
            html += `<div class="feature-item mb-sm"><strong>Focus Points:</strong> ${info.focusPoints}</div>`;
        }
        if (info.layOnHands) {
            html += `<div class="feature-item mb-sm"><strong>Lay on Hands Pool:</strong> ${info.layOnHands} HP</div>`;
        }
        
        progressDiv.innerHTML = html;
        container.appendChild(progressDiv);
    }
    
    // Helper function to get ordinal suffix
    getOrdinalSuffix(num) {
        const j = num % 10;
        const k = num % 100;
        if (j == 1 && k != 11) {
            return "st";
        }
        if (j == 2 && k != 12) {
            return "nd";
        }
        if (j == 3 && k != 13) {
            return "rd";
        }
        return "th";
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
        const className = document.getElementById('selected-class').value;
        const classInfo = classData[className];
        
        let html = '<div class="choice-display">';
        html += '<h4>Available Subclasses:</h4>';
        html += '<ul class="choice-list">';
        
        choice.options.forEach(option => {
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
    
    // Get appropriate subclass instruction text for each class
    getSubclassInstructionText(className) {
        const instructions = {
            'barbarian': 'Choose your primal path',
            'bard': 'Choose your college',
            'cleric': 'Choose your divine domain',
            'druid': 'Choose your circle',
            'fighter': 'Choose your martial archetype',
            'monk': 'Choose your monastic tradition',
            'paladin': 'Choose your sacred oath',
            'ranger': 'Choose your ranger archetype',
            'rogue': 'Choose your roguish archetype',
            'sorcerer': 'Choose your sorcerous origin',
            'warlock': 'Choose your otherworldly patron',
            'wizard': 'Choose your arcane tradition'
        };
        
        return instructions[className] || 'Choose your subclass';
    }

    // Create ASI or Feat display
    createASIOrFeatDisplay(choice) {
        let html = '<div class="choice-display">';
        html += '<p class="choice-instruction">Choose to increase your ability scores or gain a feat</p>';
        html += '<h4>Available Options:</h4>';
        html += '<ul class="choice-list">';
        
        choice.options.forEach(option => {
            if (option === 'Ability Score Improvement') {
                html += `
                    <li>
                        <strong>${option}:</strong> Increase one ability score by 2, or two ability scores by 1 each
                    </li>
                `;
            } else if (option === 'Feat') {
                html += `
                    <li>
                        <strong>${option}:</strong> Gain a feat of your choice
                    </li>
                `;
            }
        });
        
        html += '</ul>';
        
        // Add feat list if "Feat" is an option
        if (choice.options.includes('Feat')) {
            html += '<h4>Available Feats:</h4>';
            html += '<div class="feat-list">';
            
            const feats = levelCalculator.getFeats();
            feats.forEach(feat => {
                html += `
                    <div class="feat-item">
                        <strong>${feat.name}:</strong> ${feat.description}
                    </div>
                `;
            });
            
            html += '</div>';
        }
        
        html += '</div>';
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
        
        // Clear URL parameters
        this.updateURL();
        
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

    // Parse URL parameters on page load
    parseURLParameters() {
        const params = new URLSearchParams(window.location.search);
        const className = params.get('class');
        const level = params.get('level');
        
        if (className && this.isValidClass(className)) {
            // Find and select the class button
            const button = document.querySelector(`[data-class="${className}"]`);
            if (button) {
                this.selectClass(button);
            }
        }
        
        if (level && levelCalculator.validateLevel(level)) {
            document.getElementById('current-level').value = level;
            this.updateCalculateButton();
        }
        
        // Auto-calculate if both parameters are present and valid
        if (className && level && this.isValidClass(className) && levelCalculator.validateLevel(level)) {
            // Small delay to ensure DOM is ready
            setTimeout(() => {
                const calculateBtn = document.getElementById('calculate-btn');
                if (!calculateBtn.disabled) {
                    this.calculateLevelUp();
                }
            }, 100);
        }
    }

    // Update URL with current selections
    updateURL() {
        const className = document.getElementById('selected-class').value;
        const level = document.getElementById('current-level').value;
        
        const params = new URLSearchParams();
        if (className) params.set('class', className);
        if (level && levelCalculator.validateLevel(level)) params.set('level', level);
        
        // Update URL without page reload
        const newURL = params.toString() ? `${window.location.pathname}?${params}` : window.location.pathname;
        window.history.replaceState({}, '', newURL);
    }

    // Check if class name is valid
    isValidClass(className) {
        return classData.hasOwnProperty(className);
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DnDLevelUpApp();
});
