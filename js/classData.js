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
        skillChoices: ["Choose any 3 skills"],
        weaponProficiencies: ["Simple weapons"],
        armorTraining: ["Light armor"],
        subclassLevel: 3,
        subclasses: {
            "lore": {
                name: "College of Lore",
                description: "Plumb the Depths of Magical Knowledge"
            }
        },
        levels: {
            1: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Bardic Inspiration",
                        description: "Inspire others with a d6 die, usable Charisma modifier times per Long Rest"
                    },
                    {
                        name: "Spellcasting",
                        description: "Cast spells using Charisma. Know 2 cantrips, prepare 4 level 1 spells"
                    }
                ],
                cantrips: 2,
                preparedSpells: 4,
                spellSlots: { 1: 2 },
                bardicDie: "d6"
            },
            2: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Expertise",
                        description: "Double proficiency bonus for 2 skills of your choice",
                        choices: {
                            type: "skill",
                            count: 2,
                            options: ["Performance", "Persuasion", "Any skill you're proficient in"]
                        }
                    },
                    {
                        name: "Jack of All Trades",
                        description: "Add half proficiency bonus to non-proficient ability checks"
                    }
                ],
                cantrips: 2,
                preparedSpells: 5,
                spellSlots: { 1: 3 },
                bardicDie: "d6"
            },
            3: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Bard Subclass",
                        description: "Choose your college",
                        choices: {
                            type: "subclass",
                            options: ["lore"]
                        }
                    }
                ],
                subclassFeatures: {
                    lore: [
                        {
                            name: "Bonus Proficiencies",
                            description: "Gain proficiency with 3 skills of your choice",
                            choices: {
                                type: "skill",
                                count: 3,
                                options: ["Any 3 skills"]
                            }
                        },
                        {
                            name: "Cutting Words",
                            description: "Use Reaction to subtract Bardic Inspiration die from enemy's attack, ability check, or damage roll"
                        }
                    ]
                },
                cantrips: 2,
                preparedSpells: 6,
                spellSlots: { 1: 4, 2: 2 },
                bardicDie: "d6"
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
                cantrips: 3,
                preparedSpells: 7,
                spellSlots: { 1: 4, 2: 3 },
                bardicDie: "d6"
            },
            5: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Font of Inspiration",
                        description: "Regain Bardic Inspiration on Short or Long Rest; expend spell slot to regain use"
                    }
                ],
                cantrips: 3,
                preparedSpells: 9,
                spellSlots: { 1: 4, 2: 3, 3: 2 },
                bardicDie: "d8"
            },
            6: {
                proficiencyBonus: 3,
                subclassFeatures: {
                    lore: [
                        {
                            name: "Magical Discoveries",
                            description: "Learn 2 spells from Cleric, Druid, or Wizard spell lists",
                            choices: {
                                type: "spell",
                                count: 2,
                                options: ["Any Cleric, Druid, or Wizard spell you have slots for"]
                            }
                        }
                    ]
                },
                cantrips: 3,
                preparedSpells: 10,
                spellSlots: { 1: 4, 2: 3, 3: 3 },
                bardicDie: "d8"
            },
            7: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Countercharm",
                        description: "Use Reaction to grant Advantage on saves against Charmed or Frightened"
                    }
                ],
                cantrips: 3,
                preparedSpells: 11,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 1 },
                bardicDie: "d8"
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
                cantrips: 3,
                preparedSpells: 12,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 2 },
                bardicDie: "d8"
            },
            9: {
                proficiencyBonus: 4,
                features: [
                    {
                        name: "Expertise",
                        description: "Gain Expertise in 2 more skills",
                        choices: {
                            type: "skill",
                            count: 2,
                            options: ["Any skill you're proficient in"]
                        }
                    }
                ],
                cantrips: 3,
                preparedSpells: 14,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 },
                bardicDie: "d8"
            },
            10: {
                proficiencyBonus: 4,
                features: [
                    {
                        name: "Magical Secrets",
                        description: "Choose spells from any class when learning new spells"
                    }
                ],
                cantrips: 4,
                preparedSpells: 15,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 },
                bardicDie: "d10"
            },
            11: {
                proficiencyBonus: 4,
                cantrips: 4,
                preparedSpells: 16,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
                bardicDie: "d10"
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
                cantrips: 4,
                preparedSpells: 16,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
                bardicDie: "d10"
            },
            13: {
                proficiencyBonus: 5,
                cantrips: 4,
                preparedSpells: 17,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 },
                bardicDie: "d10"
            },
            14: {
                proficiencyBonus: 5,
                subclassFeatures: {
                    lore: [
                        {
                            name: "Peerless Skill",
                            description: "When you fail an ability check or attack, expend Bardic Inspiration to potentially turn it into a success"
                        }
                    ]
                },
                cantrips: 4,
                preparedSpells: 17,
                spellSlots: { 1: 4, 2: 3, 3: 4, 5: 2, 6: 1, 7: 1 },
                bardicDie: "d10"
            },
            15: {
                proficiencyBonus: 5,
                cantrips: 4,
                preparedSpells: 18,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 },
                bardicDie: "d12"
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
                cantrips: 4,
                preparedSpells: 18,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 },
                bardicDie: "d12"
            },
            17: {
                proficiencyBonus: 6,
                cantrips: 4,
                preparedSpells: 19,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1 },
                bardicDie: "d12"
            },
            18: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Superior Inspiration",
                        description: "Regain uses of Bardic Inspiration when you roll Initiative (minimum of 2)"
                    }
                ],
                cantrips: 4,
                preparedSpells: 20,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1 },
                bardicDie: "d12"
            },
            19: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Epic Boon",
                        description: "Gain an Epic Boon feat",
                        choices: {
                            type: "epicBoon",
                            options: ["Boon of Spell Recall", "Other Epic Boon"]
                        }
                    }
                ],
                cantrips: 4,
                preparedSpells: 21,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1 },
                bardicDie: "d12"
            },
            20: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Words of Creation",
                        description: "Always have Power Word Heal and Power Word Kill prepared; can target second creature within 10 feet"
                    }
                ],
                cantrips: 4,
                preparedSpells: 22,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 2, 8: 1, 9: 1 },
                bardicDie: "d12"
            }
        }
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
        skillChoices: ["Choose 2: Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Persuasion, Perception, or Survival"],
        weaponProficiencies: ["Simple and Martial weapons"],
        armorTraining: ["Light, Medium, and Heavy armor and Shields"],
        subclassLevel: 3,
        subclasses: {
            "champion": {
                name: "Champion",
                description: "Pursue Physical Excellence in Combat"
            }
        },
        levels: {
            1: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Fighting Style",
                        description: "Choose a Fighting Style feat (Defense recommended)",
                        choices: {
                            type: "fightingStyle",
                            options: ["Defense", "Dueling", "Great Weapon Fighting", "Protection", "Archery", "Two-Weapon Fighting"]
                        }
                    },
                    {
                        name: "Second Wind",
                        description: "Regain 1d10 + Fighter level HP as a Bonus Action, 2 uses per Short/Long Rest"
                    },
                    {
                        name: "Weapon Mastery",
                        description: "Use mastery properties of 3 Simple or Martial weapons",
                        choices: {
                            type: "weaponMastery",
                            count: 3,
                            options: [
                                "Battleaxe", "Club", "Dagger", "Dart", "Greataxe", "Greatclub", 
                                "Greatsword", "Handaxe", "Javelin", "Lance", "Longsword", 
                                "Mace", "Maul", "Pike", "Quarterstaff", "Rapier", "Scimitar", 
                                "Shortsword", "Sickle", "Spear", "Trident", "War Pick", "Warhammer"
                            ]
                        }
                    }
                ],
                secondWind: 2,
                weaponMastery: 3
            },
            2: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Action Surge",
                        description: "Take one additional action on your turn, 1 use per Short/Long Rest"
                    },
                    {
                        name: "Tactical Mind",
                        description: "When you fail an ability check, expend Second Wind use to add 1d10 to the roll"
                    }
                ],
                secondWind: 2,
                weaponMastery: 3
            },
            3: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Fighter Subclass",
                        description: "Choose your martial archetype",
                        choices: {
                            type: "subclass",
                            options: ["champion"]
                        }
                    }
                ],
                subclassFeatures: {
                    champion: [
                        {
                            name: "Improved Critical",
                            description: "Critical hits on 19-20 with weapons and Unarmed Strikes"
                        },
                        {
                            name: "Remarkable Athlete",
                            description: "Advantage on Initiative rolls and Strength (Athletics) checks; move half Speed after Critical Hit"
                        }
                    ]
                },
                secondWind: 2,
                weaponMastery: 3
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
                secondWind: 3,
                weaponMastery: 4
            },
            5: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Extra Attack",
                        description: "Attack twice when you take the Attack action"
                    },
                    {
                        name: "Tactical Shift",
                        description: "Move up to half Speed without provoking Opportunity Attacks when using Second Wind"
                    }
                ],
                secondWind: 3,
                weaponMastery: 4
            },
            6: {
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
                secondWind: 3,
                weaponMastery: 4
            },
            7: {
                proficiencyBonus: 3,
                subclassFeatures: {
                    champion: [
                        {
                            name: "Additional Fighting Style",
                            description: "Gain another Fighting Style feat",
                            choices: {
                                type: "fightingStyle",
                                options: ["Defense", "Dueling", "Great Weapon Fighting", "Protection", "Archery", "Two-Weapon Fighting"]
                            }
                        }
                    ]
                },
                secondWind: 3,
                weaponMastery: 4
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
                secondWind: 3,
                weaponMastery: 4
            },
            9: {
                proficiencyBonus: 4,
                features: [
                    {
                        name: "Indomitable",
                        description: "Reroll a failed saving throw with bonus equal to Fighter level, 1 use per Long Rest"
                    },
                    {
                        name: "Tactical Master",
                        description: "Replace weapon mastery property with Push, Sap, or Slow for one attack"
                    }
                ],
                secondWind: 3,
                weaponMastery: 4
            },
            10: {
                proficiencyBonus: 4,
                subclassFeatures: {
                    champion: [
                        {
                            name: "Heroic Warrior",
                            description: "Gain Heroic Inspiration at start of turn during combat if you don't have it"
                        }
                    ]
                },
                secondWind: 4,
                weaponMastery: 5
            },
            11: {
                proficiencyBonus: 4,
                features: [
                    {
                        name: "Two Extra Attacks",
                        description: "Attack three times when you take the Attack action"
                    }
                ],
                secondWind: 4,
                weaponMastery: 5
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
                secondWind: 4,
                weaponMastery: 5
            },
            13: {
                proficiencyBonus: 5,
                features: [
                    {
                        name: "Indomitable (2 uses)",
                        description: "Use Indomitable twice per Long Rest"
                    },
                    {
                        name: "Studied Attacks",
                        description: "Gain Advantage on next attack against a creature you missed"
                    }
                ],
                secondWind: 4,
                weaponMastery: 5
            },
            14: {
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
                secondWind: 4,
                weaponMastery: 5
            },
            15: {
                proficiencyBonus: 5,
                subclassFeatures: {
                    champion: [
                        {
                            name: "Superior Critical",
                            description: "Critical hits on 18-20 with weapons and Unarmed Strikes"
                        }
                    ]
                },
                secondWind: 4,
                weaponMastery: 5
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
                secondWind: 4,
                weaponMastery: 6
            },
            17: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Action Surge (2 uses)",
                        description: "Use Action Surge twice per Short/Long Rest"
                    },
                    {
                        name: "Indomitable (3 uses)",
                        description: "Use Indomitable three times per Long Rest"
                    }
                ],
                secondWind: 4,
                weaponMastery: 6
            },
            18: {
                proficiencyBonus: 6,
                subclassFeatures: {
                    champion: [
                        {
                            name: "Survivor",
                            description: "Advantage on Death Saves; regain 5 + Con modifier HP at start of turn when Bloodied"
                        }
                    ]
                },
                secondWind: 4,
                weaponMastery: 6
            },
            19: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Epic Boon",
                        description: "Gain an Epic Boon feat",
                        choices: {
                            type: "epicBoon",
                            options: ["Boon of Combat Prowess", "Other Epic Boon"]
                        }
                    }
                ],
                secondWind: 4,
                weaponMastery: 6
            },
            20: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Three Extra Attacks",
                        description: "Attack four times when you take the Attack action"
                    }
                ],
                secondWind: 4,
                weaponMastery: 6
            }
        }
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
