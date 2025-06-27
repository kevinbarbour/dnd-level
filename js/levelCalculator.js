// Level Calculator - Utility functions for calculating level-up choices
class LevelCalculator {
    constructor() {
        this.userChoices = {};
        this.loadProgress();
    }

    // Calculate what choices need to be made for leveling up
    calculateLevelUp(className, currentLevel) {
        const classInfo = classData[className];
        if (!classInfo) {
            throw new Error(`Class ${className} not found`);
        }

        if (classInfo.stub) {
            return this.createStubResponse(classInfo, currentLevel);
        }

        const nextLevel = currentLevel + 1;
        if (nextLevel > 20) {
            throw new Error("Maximum level is 20");
        }

        const levelData = classInfo.levels[nextLevel];
        if (!levelData) {
            throw new Error(`Level ${nextLevel} data not found for ${className}`);
        }

        return this.processLevelData(classInfo, currentLevel, nextLevel, levelData);
    }

    // Create response for stubbed classes
    createStubResponse(classInfo, currentLevel) {
        return {
            className: classInfo.name,
            currentLevel: currentLevel,
            nextLevel: currentLevel + 1,
            isStub: true,
            stubMessage: classInfo.stubMessage,
            choices: [],
            features: [],
            totalChoices: 0,
            completedChoices: 0
        };
    }

    // Process level data and create choice structure
    processLevelData(classInfo, currentLevel, nextLevel, levelData) {
        const result = {
            className: classInfo.name,
            currentLevel: currentLevel,
            nextLevel: nextLevel,
            isStub: false,
            choices: [],
            features: [],
            totalChoices: 0,
            completedChoices: 0
        };

        // Process class features
        if (levelData.features) {
            levelData.features.forEach(feature => {
                if (feature.choices) {
                    result.choices.push(this.createChoice(feature, nextLevel));
                    result.totalChoices++;
                } else {
                    result.features.push(feature);
                }
            });
        }

        // Process subclass features
        if (levelData.subclassFeatures) {
            const userSubclass = this.getUserChoice(`${classInfo.name.toLowerCase()}_subclass`);
            if (userSubclass && levelData.subclassFeatures[userSubclass]) {
                levelData.subclassFeatures[userSubclass].forEach(feature => {
                    if (feature.choices) {
                        result.choices.push(this.createChoice(feature, nextLevel, true));
                        result.totalChoices++;
                    } else {
                        result.features.push({
                            ...feature,
                            isSubclass: true,
                            subclassName: classInfo.subclasses[userSubclass].name
                        });
                    }
                });
            }
        }

        // Add level progression info
        result.progressionInfo = this.getProgressionInfo(classInfo, levelData, nextLevel);

        // Calculate completion
        result.completedChoices = this.countCompletedChoices(result.choices);

        return result;
    }

    // Create a choice object
    createChoice(feature, level, isSubclass = false) {
        const choiceId = `${feature.name.toLowerCase().replace(/\s+/g, '_')}_${level}`;
        const userChoice = this.getUserChoice(choiceId);

        return {
            id: choiceId,
            name: feature.name,
            description: feature.description,
            type: feature.choices.type,
            options: feature.choices.options || [],
            count: feature.choices.count || 1,
            required: true,
            isSubclass: isSubclass,
            userChoice: userChoice,
            completed: this.isChoiceCompleted(feature.choices, userChoice)
        };
    }

    // Get progression info (rage uses, weapon mastery, etc.)
    getProgressionInfo(classInfo, levelData, nextLevel) {
        const info = {};
        
        // Hit Points and Hit Dice
        info.hitDie = classInfo.hitDie;
        info.hitDiceCount = nextLevel;
        info.hpIncrease = `Roll ${classInfo.hitDie} + Constitution modifier (or take average: ${this.getAverageHP(classInfo.hitDie)} + Con mod)`;
        
        // Proficiency Bonus
        if (levelData.proficiencyBonus !== undefined) {
            info.proficiencyBonus = levelData.proficiencyBonus;
        }
        
        // Spellcasting progression
        if (levelData.cantrips !== undefined) {
            info.cantrips = levelData.cantrips;
        }
        if (levelData.spellsKnown !== undefined) {
            info.spellsKnown = levelData.spellsKnown;
        }
        if (levelData.preparedSpells !== undefined) {
            info.preparedSpells = levelData.preparedSpells;
        }
        if (levelData.spellSlots !== undefined) {
            info.spellSlots = levelData.spellSlots;
        }
        
        // Class-specific resources
        if (levelData.rageUses !== undefined) {
            info.rageUses = levelData.rageUses;
        }
        if (levelData.rageDamage !== undefined) {
            info.rageDamage = levelData.rageDamage;
        }
        if (levelData.weaponMastery !== undefined) {
            info.weaponMastery = levelData.weaponMastery;
        }
        if (levelData.secondWind !== undefined) {
            info.secondWind = levelData.secondWind;
        }
        if (levelData.sneakAttack !== undefined) {
            info.sneakAttack = levelData.sneakAttack;
        }
        if (levelData.bardicDie !== undefined) {
            info.bardicDie = levelData.bardicDie;
        }
        if (levelData.sorceryPoints !== undefined) {
            info.sorceryPoints = levelData.sorceryPoints;
        }
        if (levelData.invocationsKnown !== undefined) {
            info.invocationsKnown = levelData.invocationsKnown;
        }

        return info;
    }
    
    // Get average HP for a hit die
    getAverageHP(hitDie) {
        const averages = {
            'd6': 4,
            'd8': 5,
            'd10': 6,
            'd12': 7
        };
        return averages[hitDie] || 5;
    }

    // Check if a choice is completed
    isChoiceCompleted(choiceConfig, userChoice) {
        if (!userChoice) return false;

        switch (choiceConfig.type) {
            case 'weaponMastery':
                return Array.isArray(userChoice) && userChoice.length === choiceConfig.count;
            case 'skill':
                return Array.isArray(userChoice) && userChoice.length === choiceConfig.count;
            case 'brutalStrike':
                return Array.isArray(userChoice) && userChoice.length > 0;
            case 'subclass':
            case 'asiOrFeat':
            case 'epicBoon':
                return typeof userChoice === 'string' && userChoice.length > 0;
            default:
                return !!userChoice;
        }
    }

    // Count completed choices
    countCompletedChoices(choices) {
        return choices.filter(choice => choice.completed).length;
    }

    // Save user choice
    saveChoice(choiceId, value) {
        this.userChoices[choiceId] = value;
        this.saveProgress();
    }

    // Get user choice
    getUserChoice(choiceId) {
        return this.userChoices[choiceId];
    }

    // Clear all choices
    clearChoices() {
        this.userChoices = {};
        this.saveProgress();
    }

    // Save progress to localStorage
    saveProgress() {
        try {
            localStorage.setItem('dnd2024_levelup_progress', JSON.stringify(this.userChoices));
        } catch (e) {
            console.warn('Could not save progress to localStorage:', e);
        }
    }

    // Load progress from localStorage
    loadProgress() {
        try {
            const saved = localStorage.getItem('dnd2024_levelup_progress');
            if (saved) {
                this.userChoices = JSON.parse(saved);
            }
        } catch (e) {
            console.warn('Could not load progress from localStorage:', e);
            this.userChoices = {};
        }
    }

    // Generate export summary
    generateSummary(levelUpData) {
        if (levelUpData.isStub) {
            return `${levelUpData.className} Level ${levelUpData.nextLevel}\n\n${levelUpData.stubMessage}`;
        }

        let summary = `${levelUpData.className} Level ${levelUpData.nextLevel} Summary\n`;
        summary += `${'='.repeat(50)}\n\n`;

        // New Features
        if (levelUpData.features.length > 0) {
            summary += "NEW FEATURES:\n";
            levelUpData.features.forEach(feature => {
                const prefix = feature.isSubclass ? `[${feature.subclassName}] ` : '';
                summary += `• ${prefix}${feature.name}: ${feature.description}\n`;
            });
            summary += "\n";
        }

        // Choices Made
        if (levelUpData.choices.length > 0) {
            summary += "CHOICES MADE:\n";
            levelUpData.choices.forEach(choice => {
                if (choice.completed) {
                    const prefix = choice.isSubclass ? '[Subclass] ' : '';
                    summary += `• ${prefix}${choice.name}: `;
                    
                    if (Array.isArray(choice.userChoice)) {
                        summary += choice.userChoice.join(', ');
                    } else {
                        summary += choice.userChoice;
                    }
                    summary += "\n";
                } else {
                    summary += `• ${choice.name}: [NOT SELECTED]\n`;
                }
            });
            summary += "\n";
        }

        // Progression Info
        if (Object.keys(levelUpData.progressionInfo).length > 0) {
            summary += "PROGRESSION UPDATES:\n";
            const info = levelUpData.progressionInfo;
            
            if (info.proficiencyBonus) {
                summary += `• Proficiency Bonus: +${info.proficiencyBonus}\n`;
            }
            if (info.rageUses) {
                summary += `• Rage Uses: ${info.rageUses} per Long Rest\n`;
            }
            if (info.rageDamage) {
                summary += `• Rage Damage Bonus: +${info.rageDamage}\n`;
            }
            if (info.weaponMastery) {
                summary += `• Weapon Mastery: ${info.weaponMastery} weapons\n`;
            }
            summary += "\n";
        }

        summary += `Generated on ${new Date().toLocaleDateString()}\n`;
        summary += "Created with D&D 5e 2024 Level-Up Tool";

        return summary;
    }

    // Get weapon mastery property for display
    getWeaponMasteryProperty(weaponName) {
        return weaponMasteryProperties[weaponName] || 'Unknown';
    }

    // Validate level input
    validateLevel(level) {
        const num = parseInt(level);
        return !isNaN(num) && num >= 1 && num <= 19;
    }

    // Get available epic boons
    getEpicBoons() {
        return epicBoons;
    }
}

// Create global instance
const levelCalculator = new LevelCalculator();
