// D&D 5e 2024 Class Data
const classData = {
    barbarian: {
        name: "Barbarian",
        primaryAbility: "Strength",
        hitDie: "d12",
        savingThrows: ["Strength", "Constitution"],
        skillChoices: ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
        weaponProficiencies: ["Simple weapons", "Martial weapons"],
        armorTraining: ["Light armor", "Medium armor", "Shields"],
        subclassLevel: 3,
        subclasses: {
            "berserker": {
                name: "Path of the Berserker",
                description: "Channel Rage into Violent Fury"
            }
        },
        levels: {
            1: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Rage",
                        description: "Enter a primal fury that grants damage resistance and bonus damage",
                        uses: 2,
                        rageDamage: 2
                    },
                    {
                        name: "Unarmored Defense",
                        description: "AC = 10 + Dex modifier + Con modifier when not wearing armor"
                    },
                    {
                        name: "Weapon Mastery",
                        description: "Use mastery properties of 2 Simple or Martial Melee weapons",
                        choices: {
                            type: "weaponMastery",
                            count: 2,
                            options: [
                                "Battleaxe", "Club", "Dagger", "Dart", "Greataxe", "Greatclub", 
                                "Greatsword", "Handaxe", "Javelin", "Lance", "Longsword", 
                                "Mace", "Maul", "Pike", "Quarterstaff", "Rapier", "Scimitar", 
                                "Shortsword", "Sickle", "Spear", "Trident", "War Pick", "Warhammer"
                            ]
                        }
                    }
                ]
            },
            2: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Danger Sense",
                        description: "Advantage on Dexterity saving throws unless Incapacitated"
                    },
                    {
                        name: "Reckless Attack",
                        description: "Gain Advantage on Strength-based attacks, but enemies have Advantage against you"
                    }
                ],
                rageUses: 2,
                rageDamage: 2,
                weaponMastery: 2
            },
            3: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Barbarian Subclass",
                        description: "Choose your primal path",
                        choices: {
                            type: "subclass",
                            options: ["berserker"]
                        }
                    },
                    {
                        name: "Primal Knowledge",
                        description: "Gain proficiency in one additional skill and use Strength for certain skill checks during Rage",
                        choices: {
                            type: "skill",
                            count: 1,
                            options: ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"]
                        }
                    }
                ],
                subclassFeatures: {
                    berserker: [
                        {
                            name: "Frenzy",
                            description: "When using Reckless Attack during Rage, deal extra damage equal to Rage Damage bonus in d6s"
                        }
                    ]
                },
                rageUses: 3,
                rageDamage: 2,
                weaponMastery: 2
            },
            4: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Ability Score Improvement",
                        description: "Increase ability scores or gain a feat",
                        choices: {
                            type: "asiOrFeat",
                            options: ["Ability Score Improvement", "Feat"]
                        }
                    }
                ],
                rageUses: 3,
                rageDamage: 2,
                weaponMastery: 3
            },
            5: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Extra Attack",
                        description: "Attack twice when you take the Attack action"
                    },
                    {
                        name: "Fast Movement",
                        description: "Speed increases by 10 feet while not wearing Heavy armor"
                    }
                ],
                rageUses: 3,
                rageDamage: 2,
                weaponMastery: 3
            },
            6: {
                proficiencyBonus: 3,
                subclassFeatures: {
                    berserker: [
                        {
                            name: "Mindless Rage",
                            description: "Immunity to Charmed and Frightened conditions while raging"
                        }
                    ]
                },
                rageUses: 4,
                rageDamage: 2,
                weaponMastery: 3
            },
            7: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Feral Instinct",
                        description: "Advantage on Initiative rolls"
                    },
                    {
                        name: "Instinctive Pounce",
                        description: "Move up to half your Speed when entering Rage"
                    }
                ],
                rageUses: 4,
                rageDamage: 2,
                weaponMastery: 3
            },
            8: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Ability Score Improvement",
                        description: "Increase ability scores or gain a feat",
                        choices: {
                            type: "asiOrFeat",
                            options: ["Ability Score Improvement", "Feat"]
                        }
                    }
                ],
                rageUses: 4,
                rageDamage: 2,
                weaponMastery: 3
            },
            9: {
                proficiencyBonus: 4,
                features: [
                    {
                        name: "Brutal Strike",
                        description: "Forgo Advantage on one attack to deal extra 1d10 damage and apply an effect",
                        choices: {
                            type: "brutalStrike",
                            options: ["Forceful Blow", "Hamstring Blow"]
                        }
                    }
                ],
                rageUses: 4,
                rageDamage: 3,
                weaponMastery: 3
            },
            10: {
                proficiencyBonus: 4,
                subclassFeatures: {
                    berserker: [
                        {
                            name: "Retaliation",
                            description: "Make a melee attack as a Reaction when damaged by a creature within 5 feet"
                        }
                    ]
                },
                rageUses: 4,
                rageDamage: 3,
                weaponMastery: 4
            },
            11: {
                proficiencyBonus: 4,
                features: [
                    {
                        name: "Relentless Rage",
                        description: "Make a Constitution save to avoid dropping to 0 HP while raging"
                    }
                ],
                rageUses: 4,
                rageDamage: 3,
                weaponMastery: 4
            },
            12: {
                proficiencyBonus: 4,
                features: [
                    {
                        name: "Ability Score Improvement",
                        description: "Increase ability scores or gain a feat",
                        choices: {
                            type: "asiOrFeat",
                            options: ["Ability Score Improvement", "Feat"]
                        }
                    }
                ],
                rageUses: 5,
                rageDamage: 3,
                weaponMastery: 4
            },
            13: {
                proficiencyBonus: 5,
                features: [
                    {
                        name: "Improved Brutal Strike",
                        description: "Gain additional Brutal Strike options",
                        choices: {
                            type: "brutalStrike",
                            options: ["Forceful Blow", "Hamstring Blow", "Staggering Blow", "Sundering Blow"]
                        }
                    }
                ],
                rageUses: 5,
                rageDamage: 3,
                weaponMastery: 4
            },
            14: {
                proficiencyBonus: 5,
                subclassFeatures: {
                    berserker: [
                        {
                            name: "Intimidating Presence",
                            description: "Frighten creatures in a 30-foot emanation as a Bonus Action"
                        }
                    ]
                },
                rageUses: 5,
                rageDamage: 3,
                weaponMastery: 4
            },
            15: {
                proficiencyBonus: 5,
                features: [
                    {
                        name: "Persistent Rage",
                        description: "Regain all Rage uses when rolling Initiative; Rage lasts 10 minutes"
                    }
                ],
                rageUses: 5,
                rageDamage: 3,
                weaponMastery: 4
            },
            16: {
                proficiencyBonus: 5,
                features: [
                    {
                        name: "Ability Score Improvement",
                        description: "Increase ability scores or gain a feat",
                        choices: {
                            type: "asiOrFeat",
                            options: ["Ability Score Improvement", "Feat"]
                        }
                    }
                ],
                rageUses: 5,
                rageDamage: 4,
                weaponMastery: 4
            },
            17: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Improved Brutal Strike",
                        description: "Brutal Strike damage increases to 2d10 and you can use two effects"
                    }
                ],
                rageUses: 6,
                rageDamage: 4,
                weaponMastery: 4
            },
            18: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Indomitable Might",
                        description: "Use Strength score in place of low Strength checks and saves"
                    }
                ],
                rageUses: 6,
                rageDamage: 4,
                weaponMastery: 4
            },
            19: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Epic Boon",
                        description: "Gain an Epic Boon feat",
                        choices: {
                            type: "epicBoon",
                            options: ["Boon of Irresistible Offense", "Other Epic Boon"]
                        }
                    }
                ],
                rageUses: 6,
                rageDamage: 4,
                weaponMastery: 4
            },
            20: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Primal Champion",
                        description: "Strength and Constitution increase by 4 (max 25)"
                    }
                ],
                rageUses: 6,
                rageDamage: 4,
                weaponMastery: 4
            }
        }
    },

    // Stubbed classes - basic structure for future implementation
    bard: {
        name: "Bard",
        primaryAbility: "Charisma",
        hitDie: "d8",
        savingThrows: ["Dexterity", "Charisma"],
        subclassLevel: 3,
        subclasses: {
            "lore": { name: "College of Lore", description: "Coming Soon" }
        },
        stub: true,
        stubMessage: "Full Bard implementation coming soon! This will include Bardic Inspiration, Spellcasting, and College features."
    },

    cleric: {
        name: "Cleric",
        primaryAbility: "Wisdom",
        hitDie: "d8",
        savingThrows: ["Wisdom", "Charisma"],
        subclassLevel: 3,
        subclasses: {
            "life": { name: "Life Domain", description: "Coming Soon" }
        },
        stub: true,
        stubMessage: "Full Cleric implementation coming soon! This will include Spellcasting, Channel Divinity, and Divine Domain features."
    },

    druid: {
        name: "Druid",
        primaryAbility: "Wisdom",
        hitDie: "d8",
        savingThrows: ["Intelligence", "Wisdom"],
        subclassLevel: 3,
        subclasses: {
            "land": { name: "Circle of the Land", description: "Coming Soon" }
        },
        stub: true,
        stubMessage: "Full Druid implementation coming soon! This will include Spellcasting, Wild Shape, and Circle features."
    },

    fighter: {
        name: "Fighter",
        primaryAbility: "Strength or Dexterity",
        hitDie: "d10",
        savingThrows: ["Strength", "Constitution"],
        subclassLevel: 3,
        subclasses: {
            "champion": { name: "Champion", description: "Coming Soon" }
        },
        stub: true,
        stubMessage: "Full Fighter implementation coming soon! This will include Fighting Style, Action Surge, and Martial Archetype features."
    },

    monk: {
        name: "Monk",
        primaryAbility: "Dexterity and Wisdom",
        hitDie: "d8",
        savingThrows: ["Strength", "Dexterity"],
        subclassLevel: 3,
        subclasses: {
            "openhand": { name: "Warrior of the Open Hand", description: "Coming Soon" }
        },
        stub: true,
        stubMessage: "Full Monk implementation coming soon! This will include Martial Arts, Monk's Focus, and Monastic Tradition features."
    },

    paladin: {
        name: "Paladin",
        primaryAbility: "Strength and Charisma",
        hitDie: "d10",
        savingThrows: ["Wisdom", "Charisma"],
        subclassLevel: 3,
        subclasses: {
            "devotion": { name: "Oath of Devotion", description: "Coming Soon" }
        },
        stub: true,
        stubMessage: "Full Paladin implementation coming soon! This will include Spellcasting, Divine Smite, and Sacred Oath features."
    },

    ranger: {
        name: "Ranger",
        primaryAbility: "Dexterity and Wisdom",
        hitDie: "d10",
        savingThrows: ["Strength", "Dexterity"],
        subclassLevel: 3,
        subclasses: {
            "hunter": { name: "Hunter", description: "Coming Soon" }
        },
        stub: true,
        stubMessage: "Full Ranger implementation coming soon! This will include Spellcasting, Favored Enemy, and Ranger Archetype features."
    },

    rogue: {
        name: "Rogue",
        primaryAbility: "Dexterity",
        hitDie: "d8",
        savingThrows: ["Dexterity", "Intelligence"],
        subclassLevel: 3,
        subclasses: {
            "thief": { name: "Thief", description: "Coming Soon" }
        },
        stub: true,
        stubMessage: "Full Rogue implementation coming soon! This will include Sneak Attack, Thieves' Cant, and Roguish Archetype features."
    },

    sorcerer: {
        name: "Sorcerer",
        primaryAbility: "Charisma",
        hitDie: "d6",
        savingThrows: ["Constitution", "Charisma"],
        subclassLevel: 3,
        subclasses: {
            "draconic": { name: "Draconic Sorcery", description: "Coming Soon" }
        },
        stub: true,
        stubMessage: "Full Sorcerer implementation coming soon! This will include Spellcasting, Metamagic, and Sorcerous Origin features."
    },

    warlock: {
        name: "Warlock",
        primaryAbility: "Charisma",
        hitDie: "d8",
        savingThrows: ["Wisdom", "Charisma"],
        subclassLevel: 3,
        subclasses: {
            "fiend": { name: "Fiend Patron", description: "Coming Soon" }
        },
        stub: true,
        stubMessage: "Full Warlock implementation coming soon! This will include Pact Magic, Eldritch Invocations, and Otherworldly Patron features."
    },

    wizard: {
        name: "Wizard",
        primaryAbility: "Intelligence",
        hitDie: "d6",
        savingThrows: ["Intelligence", "Wisdom"],
        subclassLevel: 3,
        subclasses: {
            "evoker": { name: "Evoker", description: "Coming Soon" }
        },
        stub: true,
        stubMessage: "Full Wizard implementation coming soon! This will include Spellcasting, Ritual Adept, and Arcane Tradition features."
    }
};

// Weapon Mastery Properties for reference
const weaponMasteryProperties = {
    "Battleaxe": "Topple",
    "Club": "Slow",
    "Dagger": "Nick",
    "Dart": "Vex",
    "Greataxe": "Cleave",
    "Greatclub": "Push",
    "Greatsword": "Graze",
    "Handaxe": "Vex",
    "Javelin": "Slow",
    "Lance": "Topple",
    "Longsword": "Sap",
    "Mace": "Sap",
    "Maul": "Topple",
    "Pike": "Push",
    "Quarterstaff": "Topple",
    "Rapier": "Vex",
    "Scimitar": "Nick",
    "Shortsword": "Vex",
    "Sickle": "Nick",
    "Spear": "Sap",
    "Trident": "Topple",
    "War Pick": "Sap",
    "Warhammer": "Push"
};

// Epic Boon options
const epicBoons = [
    "Boon of Combat Prowess",
    "Boon of Dimensional Travel",
    "Boon of Energy Resistance",
    "Boon of Fate",
    "Boon of Fortitude",
    "Boon of Irresistible Offense",
    "Boon of Recovery",
    "Boon of Skill",
    "Boon of Speed",
    "Boon of Spell Recall",
    "Boon of the Night Spirit",
    "Boon of Truesight"
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { classData, weaponMasteryProperties, epicBoons };
}
