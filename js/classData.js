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
        skillChoices: ["Choose 2: History, Insight, Medicine, Persuasion, or Religion"],
        weaponProficiencies: ["Simple weapons"],
        armorTraining: ["Light and Medium armor and Shields"],
        subclassLevel: 3,
        subclasses: {
            "life": {
                name: "Life Domain",
                description: "Preserve Life and Heal the Wounded"
            }
        },
        levels: {
            1: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Spellcasting",
                        description: "Cast spells using Wisdom. Know 3 cantrips, prepare 2 level 1 spells + Wisdom modifier"
                    },
                    {
                        name: "Divine Order",
                        description: "Choose Protector or Thaumaturge",
                        choices: {
                            type: "divineOrder",
                            options: ["Protector (Heavy armor + Martial weapons)", "Thaumaturge (Blessed Strikes cantrip)"]
                        }
                    }
                ],
                cantrips: 3,
                preparedSpells: "2 + Wis mod",
                spellSlots: { 1: 2 }
            },
            2: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Channel Divinity",
                        description: "Use divine energy for Turn Undead and domain features, 1 use per Short/Long Rest"
                    },
                    {
                        name: "Turn Undead",
                        description: "Force Undead within 30 feet to make Wisdom saves or be Turned"
                    }
                ],
                cantrips: 3,
                preparedSpells: "3 + Wis mod",
                spellSlots: { 1: 3 }
            },
            3: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Cleric Subclass",
                        description: "Choose your divine domain",
                        choices: {
                            type: "subclass",
                            options: ["life"]
                        }
                    }
                ],
                subclassFeatures: {
                    life: [
                        {
                            name: "Domain Spells",
                            description: "Always have Cure Wounds and Healing Word prepared (don't count against limit)"
                        },
                        {
                            name: "Disciple of Life",
                            description: "Healing spells restore additional HP equal to 2 + spell level"
                        },
                        {
                            name: "Preserve Life",
                            description: "Channel Divinity to heal creatures within 30 feet for 5 × Cleric level HP total"
                        }
                    ]
                },
                cantrips: 3,
                preparedSpells: "4 + Wis mod",
                spellSlots: { 1: 4, 2: 2 }
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
                cantrips: 4,
                preparedSpells: "5 + Wis mod",
                spellSlots: { 1: 4, 2: 3 }
            },
            5: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Sear Undead",
                        description: "When you Turn Undead, deal Radiant damage equal to Wisdom modifier"
                    }
                ],
                cantrips: 4,
                preparedSpells: "6 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 2 }
            },
            6: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Channel Divinity (2 uses)",
                        description: "Use Channel Divinity twice per Short/Long Rest"
                    }
                ],
                subclassFeatures: {
                    life: [
                        {
                            name: "Blessed Healer",
                            description: "When you heal others with level 1+ spells, regain 2 + spell level HP"
                        }
                    ]
                },
                cantrips: 4,
                preparedSpells: "7 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3 }
            },
            7: {
                proficiencyBonus: 3,
                cantrips: 4,
                preparedSpells: "8 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 1 }
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
                    },
                    {
                        name: "Blessed Strikes or Potent Spellcasting",
                        description: "Choose enhancement for attacks or spells",
                        choices: {
                            type: "divineStrike",
                            options: ["Blessed Strikes (weapon/cantrip +Wis mod Radiant)", "Potent Spellcasting (cantrips +Wis mod)"]
                        }
                    }
                ],
                subclassFeatures: {
                    life: [
                        {
                            name: "Divine Strike",
                            description: "Weapon attacks deal extra 1d8 Radiant damage (increases to 2d8 at level 14)"
                        }
                    ]
                },
                cantrips: 4,
                preparedSpells: "9 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 2 }
            },
            9: {
                proficiencyBonus: 4,
                cantrips: 4,
                preparedSpells: "10 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 }
            },
            10: {
                proficiencyBonus: 4,
                features: [
                    {
                        name: "Divine Intervention",
                        description: "Call upon deity for aid, 1 use per Long Rest"
                    }
                ],
                cantrips: 5,
                preparedSpells: "11 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 }
            },
            11: {
                proficiencyBonus: 4,
                cantrips: 5,
                preparedSpells: "12 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 }
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
                cantrips: 5,
                preparedSpells: "12 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 }
            },
            13: {
                proficiencyBonus: 5,
                cantrips: 5,
                preparedSpells: "13 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 }
            },
            14: {
                proficiencyBonus: 5,
                features: [
                    {
                        name: "Improved Blessed Strikes or Potent Spellcasting",
                        description: "Enhancement improves based on level 8 choice"
                    }
                ],
                cantrips: 5,
                preparedSpells: "13 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 }
            },
            15: {
                proficiencyBonus: 5,
                cantrips: 5,
                preparedSpells: "14 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 }
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
                cantrips: 5,
                preparedSpells: "14 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 }
            },
            17: {
                proficiencyBonus: 6,
                subclassFeatures: {
                    life: [
                        {
                            name: "Supreme Healing",
                            description: "When you roll healing dice, treat any 1s as 2s"
                        }
                    ]
                },
                cantrips: 5,
                preparedSpells: "15 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1 }
            },
            18: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Channel Divinity (3 uses)",
                        description: "Use Channel Divinity three times per Short/Long Rest"
                    }
                ],
                cantrips: 5,
                preparedSpells: "15 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1 }
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
                cantrips: 5,
                preparedSpells: "15 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1 }
            },
            20: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Greater Divine Intervention",
                        description: "Divine Intervention automatically succeeds and can be used again after 2d4 Long Rests"
                    }
                ],
                cantrips: 5,
                preparedSpells: "15 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 2, 8: 1, 9: 1 }
            }
        }
    },

    druid: {
        name: "Druid",
        primaryAbility: "Wisdom",
        hitDie: "d8",
        savingThrows: ["Intelligence", "Wisdom"],
        skillChoices: ["Choose 2: Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, or Survival"],
        weaponProficiencies: ["Simple weapons"],
        armorTraining: ["Light and Medium armor and Shields (nonmetal only)"],
        subclassLevel: 3,
        subclasses: {
            "land": {
                name: "Circle of the Land",
                description: "Draw Power from the Land Itself"
            }
        },
        levels: {
            1: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Spellcasting",
                        description: "Cast spells using Wisdom. Know 2 cantrips, prepare 2 level 1 spells + Wisdom modifier"
                    },
                    {
                        name: "Druidcraft",
                        description: "Know the Druidcraft cantrip (doesn't count against cantrips known)"
                    },
                    {
                        name: "Primal Order",
                        description: "Choose Magician or Warden",
                        choices: {
                            type: "primalOrder",
                            options: ["Magician (Arcana proficiency + cantrip)", "Warden (Heavy armor + Martial weapons)"]
                        }
                    }
                ],
                cantrips: 2,
                preparedSpells: "2 + Wis mod",
                spellSlots: { 1: 2 }
            },
            2: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Wild Shape",
                        description: "Transform into Beast with CR 1/4 or lower, 2 uses per Short/Long Rest"
                    },
                    {
                        name: "Wild Companion",
                        description: "Cast Find Familiar as a ritual, familiar must be a Fey"
                    }
                ],
                cantrips: 2,
                preparedSpells: "3 + Wis mod",
                spellSlots: { 1: 3 },
                wildShapeUses: 2,
                wildShapeCR: "1/4"
            },
            3: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Druid Subclass",
                        description: "Choose your circle",
                        choices: {
                            type: "subclass",
                            options: ["land"]
                        }
                    }
                ],
                subclassFeatures: {
                    land: [
                        {
                            name: "Circle Spells",
                            description: "Always have certain spells prepared based on chosen land type",
                            choices: {
                                type: "landType",
                                options: ["Arid", "Coastal", "Forest", "Grassland", "Mountain", "Swamp", "Underdark"]
                            }
                        },
                        {
                            name: "Land's Aid",
                            description: "Regain expended spell slot when you finish a Short Rest, once per Long Rest"
                        }
                    ]
                },
                cantrips: 2,
                preparedSpells: "4 + Wis mod",
                spellSlots: { 1: 4, 2: 2 },
                wildShapeUses: 2,
                wildShapeCR: "1/2"
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
                    },
                    {
                        name: "Wild Shape Improvement",
                        description: "Can transform into creatures with Swim Speed"
                    }
                ],
                cantrips: 3,
                preparedSpells: "5 + Wis mod",
                spellSlots: { 1: 4, 2: 3 },
                wildShapeUses: 2,
                wildShapeCR: "1/2"
            },
            5: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Wild Resurgence",
                        description: "Regain expended use of Wild Shape when you cast a level 1+ spell"
                    }
                ],
                cantrips: 3,
                preparedSpells: "6 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 2 },
                wildShapeUses: 2,
                wildShapeCR: "1"
            },
            6: {
                proficiencyBonus: 3,
                subclassFeatures: {
                    land: [
                        {
                            name: "Natural Recovery",
                            description: "Regain spell slots totaling half Druid level during Short Rest, once per Long Rest"
                        }
                    ]
                },
                cantrips: 3,
                preparedSpells: "7 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3 },
                wildShapeUses: 2,
                wildShapeCR: "1"
            },
            7: {
                proficiencyBonus: 3,
                cantrips: 3,
                preparedSpells: "8 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 1 },
                wildShapeUses: 2,
                wildShapeCR: "1"
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
                    },
                    {
                        name: "Wild Shape Improvement",
                        description: "Can transform into creatures with Fly Speed"
                    }
                ],
                cantrips: 3,
                preparedSpells: "9 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 2 },
                wildShapeUses: 2,
                wildShapeCR: "1"
            },
            9: {
                proficiencyBonus: 4,
                cantrips: 3,
                preparedSpells: "10 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 },
                wildShapeUses: 2,
                wildShapeCR: "2"
            },
            10: {
                proficiencyBonus: 4,
                subclassFeatures: {
                    land: [
                        {
                            name: "Nature's Ward",
                            description: "Immunity to Poison damage and Poisoned condition; resistance to one damage type"
                        }
                    ]
                },
                cantrips: 4,
                preparedSpells: "11 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 },
                wildShapeUses: 2,
                wildShapeCR: "2"
            },
            11: {
                proficiencyBonus: 4,
                cantrips: 4,
                preparedSpells: "12 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
                wildShapeUses: 2,
                wildShapeCR: "2"
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
                preparedSpells: "12 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
                wildShapeUses: 2,
                wildShapeCR: "2"
            },
            13: {
                proficiencyBonus: 5,
                cantrips: 4,
                preparedSpells: "13 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 },
                wildShapeUses: 2,
                wildShapeCR: "2"
            },
            14: {
                proficiencyBonus: 5,
                subclassFeatures: {
                    land: [
                        {
                            name: "Nature's Sanctuary",
                            description: "Beasts and Plants have Disadvantage on attacks against you; spend spell slot to charm attacking creature"
                        }
                    ]
                },
                cantrips: 4,
                preparedSpells: "13 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 },
                wildShapeUses: 2,
                wildShapeCR: "2"
            },
            15: {
                proficiencyBonus: 5,
                features: [
                    {
                        name: "Improved Wild Shape",
                        description: "No limit on transformation duration; regain half max HP when reverting"
                    }
                ],
                cantrips: 4,
                preparedSpells: "14 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 },
                wildShapeUses: 2,
                wildShapeCR: "3"
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
                preparedSpells: "14 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 },
                wildShapeUses: 2,
                wildShapeCR: "3"
            },
            17: {
                proficiencyBonus: 6,
                cantrips: 4,
                preparedSpells: "15 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1 },
                wildShapeUses: 2,
                wildShapeCR: "4"
            },
            18: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Beast Spells",
                        description: "Cast spells while in Wild Shape form"
                    }
                ],
                cantrips: 4,
                preparedSpells: "15 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1 },
                wildShapeUses: 2,
                wildShapeCR: "4"
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
                preparedSpells: "15 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1 },
                wildShapeUses: 2,
                wildShapeCR: "4"
            },
            20: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Archdruid",
                        description: "Unlimited Wild Shape uses; cast level 1-3 spells without expending spell slots"
                    }
                ],
                cantrips: 4,
                preparedSpells: "15 + Wis mod",
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 2, 8: 1, 9: 1 },
                wildShapeUses: "Unlimited",
                wildShapeCR: "4"
            }
        }
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
        skillChoices: ["Choose 2: Acrobatics, Athletics, History, Insight, Religion, or Stealth"],
        weaponProficiencies: ["Simple weapons and Martial weapons that have the Light property"],
        armorTraining: ["None"],
        subclassLevel: 3,
        subclasses: {
            "openhand": {
                name: "Warrior of the Open Hand",
                description: "Master Unarmed Combat Techniques"
            }
        },
        levels: {
            1: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Martial Arts",
                        description: "Use Dexterity for attack/damage with Monk weapons and Unarmed Strikes; deal 1d6 damage; Bonus Action Unarmed Strike after Attack action"
                    },
                    {
                        name: "Unarmored Defense",
                        description: "AC = 10 + Dex modifier + Wis modifier when not wearing armor or using a shield"
                    }
                ],
                martialArtsDie: "1d6",
                focusPoints: 0
            },
            2: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Monk's Focus",
                        description: "Gain 2 Focus Points to fuel Monk features"
                    },
                    {
                        name: "Patient Defense",
                        description: "Spend 1 Focus Point to take Dodge action as Bonus Action"
                    },
                    {
                        name: "Step of the Wind",
                        description: "Spend 1 Focus Point to take Dash or Disengage as Bonus Action; jump distance doubled"
                    },
                    {
                        name: "Uncanny Metabolism",
                        description: "Regain all Focus Points when you finish a Short or Long Rest"
                    }
                ],
                martialArtsDie: "1d6",
                focusPoints: 2
            },
            3: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Monk Subclass",
                        description: "Choose your monastic tradition",
                        choices: {
                            type: "subclass",
                            options: ["openhand"]
                        }
                    },
                    {
                        name: "Deflect Attacks",
                        description: "Reduce damage from one attack per turn as Reaction; spend Focus Point to redirect as ranged attack"
                    }
                ],
                subclassFeatures: {
                    openhand: [
                        {
                            name: "Open Hand Technique",
                            description: "When you hit with Flurry of Blows, choose: knock Prone, push 15 feet, or prevent reactions until end of next turn"
                        }
                    ]
                },
                martialArtsDie: "1d6",
                focusPoints: 3
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
                    },
                    {
                        name: "Slow Fall",
                        description: "Reduce falling damage by 5 × Monk level when not Incapacitated"
                    }
                ],
                martialArtsDie: "1d8",
                focusPoints: 4
            },
            5: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Extra Attack",
                        description: "Attack twice when you take the Attack action"
                    },
                    {
                        name: "Stunning Strike",
                        description: "Spend 1 Focus Point when you hit to force Constitution save or be Stunned until end of next turn"
                    }
                ],
                martialArtsDie: "1d8",
                focusPoints: 5
            },
            6: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Empowered Strikes",
                        description: "Unarmed Strikes count as magical for overcoming resistances"
                    }
                ],
                subclassFeatures: {
                    openhand: [
                        {
                            name: "Wholeness of Body",
                            description: "Regain HP equal to Monk level as Bonus Action, once per Long Rest"
                        }
                    ]
                },
                martialArtsDie: "1d8",
                focusPoints: 6
            },
            7: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Evasion",
                        description: "Take no damage on successful Dex saves, half damage on failures"
                    },
                    {
                        name: "Stillness of Mind",
                        description: "End Charmed or Frightened condition on yourself as Bonus Action"
                    }
                ],
                martialArtsDie: "1d8",
                focusPoints: 7
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
                martialArtsDie: "1d8",
                focusPoints: 8
            },
            9: {
                proficiencyBonus: 4,
                features: [
                    {
                        name: "Acrobatic Movement",
                        description: "Move along vertical surfaces and across liquids without falling during the move"
                    }
                ],
                martialArtsDie: "1d8",
                focusPoints: 9
            },
            10: {
                proficiencyBonus: 4,
                features: [
                    {
                        name: "Heightened Focus",
                        description: "Regain 1 Focus Point when you roll Initiative if you have no Focus Points"
                    },
                    {
                        name: "Self-Restoration",
                        description: "End one condition on yourself when you regain Focus Points on Short/Long Rest"
                    }
                ],
                martialArtsDie: "1d10",
                focusPoints: 10
            },
            11: {
                proficiencyBonus: 4,
                subclassFeatures: {
                    openhand: [
                        {
                            name: "Fleet Step",
                            description: "When you take Step of the Wind, you can also make one Unarmed Strike as part of the Bonus Action"
                        }
                    ]
                },
                martialArtsDie: "1d10",
                focusPoints: 11
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
                martialArtsDie: "1d10",
                focusPoints: 12
            },
            13: {
                proficiencyBonus: 5,
                features: [
                    {
                        name: "Deflect Energy",
                        description: "Deflect Attacks now works against ranged spell attacks; spend Focus Point to redirect"
                    }
                ],
                martialArtsDie: "1d10",
                focusPoints: 13
            },
            14: {
                proficiencyBonus: 5,
                features: [
                    {
                        name: "Disciplined Survivor",
                        description: "Gain proficiency in all saving throws; reroll failed saves by spending 1 Focus Point"
                    }
                ],
                martialArtsDie: "1d10",
                focusPoints: 14
            },
            15: {
                proficiencyBonus: 5,
                features: [
                    {
                        name: "Perfect Focus",
                        description: "Regain all Focus Points when you roll Initiative"
                    }
                ],
                martialArtsDie: "1d12",
                focusPoints: 15
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
                martialArtsDie: "1d12",
                focusPoints: 16
            },
            17: {
                proficiencyBonus: 6,
                subclassFeatures: {
                    openhand: [
                        {
                            name: "Quivering Palm",
                            description: "Spend 4 Focus Points to force Constitution save or be reduced to 0 HP; target can end effect with action"
                        }
                    ]
                },
                martialArtsDie: "1d12",
                focusPoints: 17
            },
            18: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Superior Defense",
                        description: "At start of turn, gain resistance to all damage until start of next turn if you're not Incapacitated"
                    }
                ],
                martialArtsDie: "1d12",
                focusPoints: 18
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
                martialArtsDie: "1d12",
                focusPoints: 19
            },
            20: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Body and Mind",
                        description: "Dexterity and Wisdom increase by 4 (max 25); regain 4 Focus Points when you roll Initiative"
                    }
                ],
                martialArtsDie: "1d12",
                focusPoints: 20
            }
        }
    },

    paladin: {
        name: "Paladin",
        primaryAbility: "Strength and Charisma",
        hitDie: "d10",
        savingThrows: ["Wisdom", "Charisma"],
        skillChoices: ["Choose 2: Athletics, Insight, Intimidation, Medicine, Persuasion, or Religion"],
        weaponProficiencies: ["Simple and Martial weapons"],
        armorTraining: ["Light, Medium, and Heavy armor and Shields"],
        subclassLevel: 3,
        subclasses: {
            "devotion": {
                name: "Oath of Devotion",
                description: "Uphold the Ideals of Justice and Honor"
            }
        },
        levels: {
            1: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Lay on Hands",
                        description: "Heal HP equal to 5 × Paladin level per Long Rest as an action"
                    },
                    {
                        name: "Weapon Mastery",
                        description: "Use mastery properties of 2 Simple or Martial weapons",
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
                ],
                layOnHands: 5,
                weaponMastery: 2
            },
            2: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Fighting Style",
                        description: "Choose a Fighting Style feat",
                        choices: {
                            type: "fightingStyle",
                            options: ["Defense", "Dueling", "Great Weapon Fighting", "Protection", "Blessed Warrior"]
                        }
                    },
                    {
                        name: "Spellcasting",
                        description: "Cast spells using Charisma. Prepare 2 level 1 spells"
                    },
                    {
                        name: "Divine Smite",
                        description: "Expend spell slot when hitting with weapon attack to deal extra 2d8 + 1d8 per slot level Radiant damage"
                    }
                ],
                preparedSpells: 2,
                spellSlots: { 1: 2 },
                layOnHands: 10,
                weaponMastery: 2
            },
            3: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Paladin Subclass",
                        description: "Choose your sacred oath",
                        choices: {
                            type: "subclass",
                            options: ["devotion"]
                        }
                    },
                    {
                        name: "Divine Health",
                        description: "Immunity to disease"
                    }
                ],
                subclassFeatures: {
                    devotion: [
                        {
                            name: "Oath Spells",
                            description: "Always have Protection from Evil and Good and Sanctuary prepared (don't count against limit)"
                        },
                        {
                            name: "Sacred Weapon",
                            description: "Channel Divinity to make weapon magical and shed bright light for 1 minute"
                        },
                        {
                            name: "Turn the Unholy",
                            description: "Channel Divinity to Turn Fiends and Undead within 30 feet"
                        }
                    ]
                },
                preparedSpells: 3,
                spellSlots: { 1: 3 },
                layOnHands: 15,
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
                preparedSpells: 3,
                spellSlots: { 1: 3 },
                layOnHands: 20,
                weaponMastery: 2
            },
            5: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Extra Attack",
                        description: "Attack twice when you take the Attack action"
                    },
                    {
                        name: "Faithful Steed",
                        description: "Cast Find Steed as a ritual"
                    }
                ],
                preparedSpells: 4,
                spellSlots: { 1: 4, 2: 2 },
                layOnHands: 25,
                weaponMastery: 2
            },
            6: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Aura of Protection",
                        description: "You and allies within 10 feet add your Charisma modifier to saving throws"
                    }
                ],
                preparedSpells: 4,
                spellSlots: { 1: 4, 2: 2 },
                layOnHands: 30,
                weaponMastery: 2
            },
            7: {
                proficiencyBonus: 3,
                subclassFeatures: {
                    devotion: [
                        {
                            name: "Aura of Devotion",
                            description: "You and allies within 10 feet are immune to Charmed condition"
                        }
                    ]
                },
                preparedSpells: 5,
                spellSlots: { 1: 4, 2: 3 },
                layOnHands: 35,
                weaponMastery: 2
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
                preparedSpells: 5,
                spellSlots: { 1: 4, 2: 3 },
                layOnHands: 40,
                weaponMastery: 2
            },
            9: {
                proficiencyBonus: 4,
                preparedSpells: 6,
                spellSlots: { 1: 4, 2: 3, 3: 2 },
                layOnHands: 45,
                weaponMastery: 2
            },
            10: {
                proficiencyBonus: 4,
                features: [
                    {
                        name: "Aura of Courage",
                        description: "You and allies within 10 feet are immune to Frightened condition"
                    }
                ],
                preparedSpells: 7,
                spellSlots: { 1: 4, 2: 3, 3: 2 },
                layOnHands: 50,
                weaponMastery: 2
            },
            11: {
                proficiencyBonus: 4,
                features: [
                    {
                        name: "Radiant Strikes",
                        description: "Weapon attacks deal extra 1d8 Radiant damage"
                    }
                ],
                preparedSpells: 8,
                spellSlots: { 1: 4, 2: 3, 3: 3 },
                layOnHands: 55,
                weaponMastery: 2
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
                preparedSpells: 8,
                spellSlots: { 1: 4, 2: 3, 3: 3 },
                layOnHands: 60,
                weaponMastery: 2
            },
            13: {
                proficiencyBonus: 5,
                preparedSpells: 9,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 1 },
                layOnHands: 65,
                weaponMastery: 2
            },
            14: {
                proficiencyBonus: 5,
                features: [
                    {
                        name: "Restoring Touch",
                        description: "Use Lay on Hands to end one condition: Blinded, Charmed, Deafened, Frightened, Paralyzed, or Stunned"
                    }
                ],
                preparedSpells: 10,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 1 },
                layOnHands: 70,
                weaponMastery: 2
            },
            15: {
                proficiencyBonus: 5,
                subclassFeatures: {
                    devotion: [
                        {
                            name: "Purity of Spirit",
                            description: "Always under effects of Protection from Evil and Good spell"
                        }
                    ]
                },
                preparedSpells: 11,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 2 },
                layOnHands: 75,
                weaponMastery: 2
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
                preparedSpells: 11,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 2 },
                layOnHands: 80,
                weaponMastery: 2
            },
            17: {
                proficiencyBonus: 6,
                preparedSpells: 12,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 },
                layOnHands: 85,
                weaponMastery: 2
            },
            18: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Aura Improvements",
                        description: "Aura of Protection and other auras extend to 30 feet"
                    }
                ],
                preparedSpells: 13,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 },
                layOnHands: 90,
                weaponMastery: 2
            },
            19: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Epic Boon",
                        description: "Gain an Epic Boon feat",
                        choices: {
                            type: "epicBoon",
                            options: ["Boon of Truesight", "Other Epic Boon"]
                        }
                    }
                ],
                preparedSpells: 14,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 },
                layOnHands: 95,
                weaponMastery: 2
            },
            20: {
                proficiencyBonus: 6,
                subclassFeatures: {
                    devotion: [
                        {
                            name: "Holy Nimbus",
                            description: "Transform for 1 minute: 60-foot bright light, 10 Radiant damage to enemies starting turn within 10 feet, Advantage on saves vs spells"
                        }
                    ]
                },
                preparedSpells: 14,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 },
                layOnHands: 100,
                weaponMastery: 2
            }
        }
    },

    ranger: {
        name: "Ranger",
        primaryAbility: "Dexterity and Wisdom",
        hitDie: "d10",
        savingThrows: ["Strength", "Dexterity"],
        skillChoices: ["Choose 3: Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, or Survival"],
        weaponProficiencies: ["Simple and Martial weapons"],
        armorTraining: ["Light and Medium armor and Shields"],
        subclassLevel: 3,
        subclasses: {
            "hunter": {
                name: "Hunter",
                description: "Master the Art of Tracking and Combat"
            }
        },
        levels: {
            1: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Favored Enemy",
                        description: "Choose a creature type to gain advantages against",
                        choices: {
                            type: "favoredEnemy",
                            options: ["Beasts", "Fey", "Humanoids", "Monstrosities", "Undead"]
                        }
                    },
                    {
                        name: "Weapon Mastery",
                        description: "Use mastery properties of 2 Simple or Martial weapons",
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
                ],
                weaponMastery: 2
            },
            2: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Deft Explorer",
                        description: "Choose Canny, Roving, or Tireless",
                        choices: {
                            type: "deftExplorer",
                            options: ["Canny (Expertise + language)", "Roving (+5 Speed, Climb/Swim)", "Tireless (Temp HP + exhaustion recovery)"]
                        }
                    },
                    {
                        name: "Fighting Style",
                        description: "Choose a Fighting Style feat",
                        choices: {
                            type: "fightingStyle",
                            options: ["Archery", "Defense", "Dueling", "Two-Weapon Fighting", "Druidcraft"]
                        }
                    },
                    {
                        name: "Spellcasting",
                        description: "Cast spells using Wisdom. Prepare 2 level 1 spells"
                    }
                ],
                preparedSpells: 2,
                spellSlots: { 1: 2 },
                weaponMastery: 2
            },
            3: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Ranger Subclass",
                        description: "Choose your ranger archetype",
                        choices: {
                            type: "subclass",
                            options: ["hunter"]
                        }
                    },
                    {
                        name: "Primeval Awareness",
                        description: "Detect presence of favored enemies within 1 mile"
                    }
                ],
                subclassFeatures: {
                    hunter: [
                        {
                            name: "Hunter's Prey",
                            description: "Choose a combat technique against your quarry",
                            choices: {
                                type: "huntersPrey",
                                options: ["Colossus Slayer", "Giant Killer", "Horde Breaker"]
                            }
                        }
                    ]
                },
                preparedSpells: 3,
                spellSlots: { 1: 3 },
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
                preparedSpells: 3,
                spellSlots: { 1: 3 },
                weaponMastery: 2
            },
            5: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Extra Attack",
                        description: "Attack twice when you take the Attack action"
                    }
                ],
                preparedSpells: 4,
                spellSlots: { 1: 4, 2: 2 },
                weaponMastery: 2
            },
            6: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Deft Explorer Improvement",
                        description: "Choose another Deft Explorer option",
                        choices: {
                            type: "deftExplorer",
                            options: ["Canny (Expertise + language)", "Roving (+5 Speed, Climb/Swim)", "Tireless (Temp HP + exhaustion recovery)"]
                        }
                    },
                    {
                        name: "Favored Enemy",
                        description: "Choose an additional creature type",
                        choices: {
                            type: "favoredEnemy",
                            options: ["Aberrations", "Celestials", "Constructs", "Dragons", "Elementals", "Fiends", "Giants", "Oozes", "Plants"]
                        }
                    }
                ],
                preparedSpells: 4,
                spellSlots: { 1: 4, 2: 2 },
                weaponMastery: 2
            },
            7: {
                proficiencyBonus: 3,
                subclassFeatures: {
                    hunter: [
                        {
                            name: "Hunter's Defense",
                            description: "Choose a defensive technique",
                            choices: {
                                type: "huntersDefense",
                                options: ["Escape the Horde", "Multiattack Defense", "Steel Will"]
                            }
                        }
                    ]
                },
                preparedSpells: 5,
                spellSlots: { 1: 4, 2: 3 },
                weaponMastery: 2
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
                    },
                    {
                        name: "Land's Stride",
                        description: "Move through difficult terrain without penalty; advantage on saves against plants"
                    }
                ],
                preparedSpells: 5,
                spellSlots: { 1: 4, 2: 3 },
                weaponMastery: 2
            },
            9: {
                proficiencyBonus: 4,
                preparedSpells: 6,
                spellSlots: { 1: 4, 2: 3, 3: 2 },
                weaponMastery: 2
            },
            10: {
                proficiencyBonus: 4,
                features: [
                    {
                        name: "Deft Explorer Mastery",
                        description: "Choose the final Deft Explorer option",
                        choices: {
                            type: "deftExplorer",
                            options: ["Canny (Expertise + language)", "Roving (+5 Speed, Climb/Swim)", "Tireless (Temp HP + exhaustion recovery)"]
                        }
                    },
                    {
                        name: "Hide in Plain Sight",
                        description: "Become invisible when you don't move on your turn"
                    }
                ],
                preparedSpells: 7,
                spellSlots: { 1: 4, 2: 3, 3: 2 },
                weaponMastery: 2
            },
            11: {
                proficiencyBonus: 4,
                subclassFeatures: {
                    hunter: [
                        {
                            name: "Hunter's Multiattack",
                            description: "Choose an advanced combat technique",
                            choices: {
                                type: "huntersMultiattack",
                                options: ["Volley", "Whirlwind Attack"]
                            }
                        }
                    ]
                },
                preparedSpells: 8,
                spellSlots: { 1: 4, 2: 3, 3: 3 },
                weaponMastery: 2
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
                preparedSpells: 8,
                spellSlots: { 1: 4, 2: 3, 3: 3 },
                weaponMastery: 2
            },
            13: {
                proficiencyBonus: 5,
                preparedSpells: 9,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 1 },
                weaponMastery: 2
            },
            14: {
                proficiencyBonus: 5,
                features: [
                    {
                        name: "Favored Enemy",
                        description: "Choose a third creature type",
                        choices: {
                            type: "favoredEnemy",
                            options: ["Any remaining creature type"]
                        }
                    },
                    {
                        name: "Vanish",
                        description: "Take Hide action as Bonus Action; can't be tracked except by magical means"
                    }
                ],
                preparedSpells: 10,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 1 },
                weaponMastery: 2
            },
            15: {
                proficiencyBonus: 5,
                subclassFeatures: {
                    hunter: [
                        {
                            name: "Hunter's Superior Defense",
                            description: "Choose an ultimate defensive technique",
                            choices: {
                                type: "huntersSuperiorDefense",
                                options: ["Evasion", "Stand Against the Tide", "Uncanny Dodge"]
                            }
                        }
                    ]
                },
                preparedSpells: 11,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 2 },
                weaponMastery: 2
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
                preparedSpells: 11,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 2 },
                weaponMastery: 2
            },
            17: {
                proficiencyBonus: 6,
                preparedSpells: 12,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 },
                weaponMastery: 2
            },
            18: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Feral Senses",
                        description: "Detect invisible creatures within 30 feet; no disadvantage on attacks against unseen creatures"
                    }
                ],
                preparedSpells: 13,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 },
                weaponMastery: 2
            },
            19: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Epic Boon",
                        description: "Gain an Epic Boon feat",
                        choices: {
                            type: "epicBoon",
                            options: ["Boon of Dimensional Travel", "Other Epic Boon"]
                        }
                    }
                ],
                preparedSpells: 14,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 },
                weaponMastery: 2
            },
            20: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Foe Slayer",
                        description: "Add Wisdom modifier to attack or damage rolls against favored enemies"
                    }
                ],
                preparedSpells: 14,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 },
                weaponMastery: 2
            }
        }
    },

    rogue: {
        name: "Rogue",
        primaryAbility: "Dexterity",
        hitDie: "d8",
        savingThrows: ["Dexterity", "Intelligence"],
        skillChoices: ["Choose 4: Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Persuasion, Sleight of Hand, or Stealth"],
        weaponProficiencies: ["Simple weapons and Martial weapons that have the Finesse or Light property"],
        armorTraining: ["Light armor"],
        subclassLevel: 3,
        subclasses: {
            "thief": {
                name: "Thief",
                description: "Hunt for Treasure as a Classic Adventurer"
            }
        },
        levels: {
            1: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Expertise",
                        description: "Gain Expertise in 2 skills (Sleight of Hand and Stealth recommended)",
                        choices: {
                            type: "skill",
                            count: 2,
                            options: ["Sleight of Hand", "Stealth", "Any skill you're proficient in"]
                        }
                    },
                    {
                        name: "Sneak Attack",
                        description: "Deal extra 1d6 damage once per turn with Finesse or Ranged weapons when you have Advantage"
                    },
                    {
                        name: "Thieves' Cant",
                        description: "Know Thieves' Cant and one other language"
                    },
                    {
                        name: "Weapon Mastery",
                        description: "Use mastery properties of 2 weapons with which you have proficiency",
                        choices: {
                            type: "weaponMastery",
                            count: 2,
                            options: ["Dagger", "Shortbow", "Scimitar", "Shortsword", "Rapier"]
                        }
                    }
                ],
                sneakAttack: "1d6"
            },
            2: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Cunning Action",
                        description: "Take Dash, Disengage, or Hide as a Bonus Action"
                    }
                ],
                sneakAttack: "1d6"
            },
            3: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Rogue Subclass",
                        description: "Choose your roguish archetype",
                        choices: {
                            type: "subclass",
                            options: ["thief"]
                        }
                    },
                    {
                        name: "Steady Aim",
                        description: "Gain Advantage on next attack as Bonus Action if you haven't moved (Speed becomes 0)"
                    }
                ],
                subclassFeatures: {
                    thief: [
                        {
                            name: "Fast Hands",
                            description: "Use Sleight of Hand checks, Utilize action, or Magic action with magic items as Bonus Action"
                        },
                        {
                            name: "Second-Story Work",
                            description: "Gain Climb Speed equal to Speed; use Dexterity for jump distance"
                        }
                    ]
                },
                sneakAttack: "2d6"
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
                sneakAttack: "2d6"
            },
            5: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Cunning Strike",
                        description: "Add effects to Sneak Attack by forgoing damage dice",
                        choices: {
                            type: "cunningStrike",
                            options: ["Poison (1d6)", "Trip (1d6)", "Withdraw (1d6)"]
                        }
                    },
                    {
                        name: "Uncanny Dodge",
                        description: "Halve damage from one attack per turn as a Reaction"
                    }
                ],
                sneakAttack: "3d6"
            },
            6: {
                proficiencyBonus: 3,
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
                sneakAttack: "3d6"
            },
            7: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Evasion",
                        description: "Take no damage on successful Dex saves, half damage on failures"
                    },
                    {
                        name: "Reliable Talent",
                        description: "Treat d20 rolls of 9 or lower as 10 for skill and tool checks"
                    }
                ],
                sneakAttack: "4d6"
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
                sneakAttack: "4d6"
            },
            9: {
                proficiencyBonus: 4,
                subclassFeatures: {
                    thief: [
                        {
                            name: "Supreme Sneak",
                            description: "Gain Stealth Attack Cunning Strike option (1d6): Hide action's Invisible condition doesn't end if you end turn behind cover"
                        }
                    ]
                },
                sneakAttack: "5d6"
            },
            10: {
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
                sneakAttack: "5d6"
            },
            11: {
                proficiencyBonus: 4,
                features: [
                    {
                        name: "Improved Cunning Strike",
                        description: "Use up to 2 Cunning Strike effects when dealing Sneak Attack damage"
                    }
                ],
                sneakAttack: "6d6"
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
                sneakAttack: "6d6"
            },
            13: {
                proficiencyBonus: 5,
                subclassFeatures: {
                    thief: [
                        {
                            name: "Use Magic Device",
                            description: "Attune to 4 magic items; roll d6 when using charges (6 = no charge expended); use any Spell Scroll with Intelligence"
                        }
                    ]
                },
                sneakAttack: "7d6"
            },
            14: {
                proficiencyBonus: 5,
                features: [
                    {
                        name: "Devious Strikes",
                        description: "Gain additional Cunning Strike options",
                        choices: {
                            type: "cunningStrike",
                            options: ["Daze (2d6)", "Knock Out (6d6)", "Obscure (3d6)", "Poison (1d6)", "Trip (1d6)", "Withdraw (1d6)"]
                        }
                    }
                ],
                sneakAttack: "7d6"
            },
            15: {
                proficiencyBonus: 5,
                features: [
                    {
                        name: "Slippery Mind",
                        description: "Gain proficiency in Wisdom and Charisma saving throws"
                    }
                ],
                sneakAttack: "8d6"
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
                sneakAttack: "8d6"
            },
            17: {
                proficiencyBonus: 6,
                subclassFeatures: {
                    thief: [
                        {
                            name: "Thief's Reflexes",
                            description: "Take two turns in first round of combat (normal Initiative and Initiative - 10)"
                        }
                    ]
                },
                sneakAttack: "9d6"
            },
            18: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Elusive",
                        description: "No attack roll can have Advantage against you unless you're Incapacitated"
                    }
                ],
                sneakAttack: "9d6"
            },
            19: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Epic Boon",
                        description: "Gain an Epic Boon feat",
                        choices: {
                            type: "epicBoon",
                            options: ["Boon of the Night Spirit", "Other Epic Boon"]
                        }
                    }
                ],
                sneakAttack: "10d6"
            },
            20: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Stroke of Luck",
                        description: "Turn a failed D20 Test into a 20, once per Short/Long Rest"
                    }
                ],
                sneakAttack: "10d6"
            }
        }
    },

    sorcerer: {
        name: "Sorcerer",
        primaryAbility: "Charisma",
        hitDie: "d6",
        savingThrows: ["Constitution", "Charisma"],
        skillChoices: ["Choose 2: Arcana, Deception, Insight, Intimidation, Persuasion, or Religion"],
        weaponProficiencies: ["Simple weapons"],
        armorTraining: ["None"],
        subclassLevel: 3,
        subclasses: {
            "draconic": {
                name: "Draconic Sorcery",
                description: "Channel the Magic of Dragons"
            }
        },
        levels: {
            1: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Spellcasting",
                        description: "Cast spells using Charisma. Know 4 cantrips and 2 level 1 spells"
                    },
                    {
                        name: "Innate Sorcery",
                        description: "Add Charisma modifier to one damage roll of Sorcerer cantrips"
                    }
                ],
                cantrips: 4,
                spellsKnown: 2,
                spellSlots: { 1: 2 },
                sorceryPoints: 0
            },
            2: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Font of Magic",
                        description: "Gain 2 Sorcery Points to fuel Metamagic and create spell slots"
                    },
                    {
                        name: "Metamagic",
                        description: "Choose 2 Metamagic options to modify spells",
                        choices: {
                            type: "metamagic",
                            count: 2,
                            options: ["Careful Spell", "Distant Spell", "Empowered Spell", "Extended Spell", "Heightened Spell", "Quickened Spell", "Subtle Spell", "Twinned Spell"]
                        }
                    }
                ],
                cantrips: 4,
                spellsKnown: 3,
                spellSlots: { 1: 3 },
                sorceryPoints: 2
            },
            3: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Sorcerer Subclass",
                        description: "Choose your sorcerous origin",
                        choices: {
                            type: "subclass",
                            options: ["draconic"]
                        }
                    }
                ],
                subclassFeatures: {
                    draconic: [
                        {
                            name: "Draconic Resilience",
                            description: "HP maximum increases by 1 per Sorcerer level; AC = 13 + Dex modifier when not wearing armor"
                        },
                        {
                            name: "Draconic Ancestor",
                            description: "Choose a dragon type for damage resistance and spell affinity",
                            choices: {
                                type: "dragonAncestor",
                                options: ["Black (Acid)", "Blue (Lightning)", "Brass (Fire)", "Bronze (Lightning)", "Copper (Acid)", "Gold (Fire)", "Green (Poison)", "Red (Fire)", "Silver (Cold)", "White (Cold)"]
                            }
                        }
                    ]
                },
                cantrips: 4,
                spellsKnown: 4,
                spellSlots: { 1: 4, 2: 2 },
                sorceryPoints: 3
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
                cantrips: 5,
                spellsKnown: 5,
                spellSlots: { 1: 4, 2: 3 },
                sorceryPoints: 4
            },
            5: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Sorcerous Restoration",
                        description: "Regain 4 Sorcery Points when you finish a Long Rest"
                    }
                ],
                cantrips: 5,
                spellsKnown: 6,
                spellSlots: { 1: 4, 2: 3, 3: 2 },
                sorceryPoints: 5
            },
            6: {
                proficiencyBonus: 3,
                subclassFeatures: {
                    draconic: [
                        {
                            name: "Elemental Affinity",
                            description: "Add Charisma modifier to damage rolls of spells that deal your draconic ancestor's damage type"
                        }
                    ]
                },
                cantrips: 5,
                spellsKnown: 7,
                spellSlots: { 1: 4, 2: 3, 3: 3 },
                sorceryPoints: 6
            },
            7: {
                proficiencyBonus: 3,
                cantrips: 5,
                spellsKnown: 8,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 1 },
                sorceryPoints: 7
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
                cantrips: 5,
                spellsKnown: 9,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 2 },
                sorceryPoints: 8
            },
            9: {
                proficiencyBonus: 4,
                cantrips: 5,
                spellsKnown: 10,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 },
                sorceryPoints: 9
            },
            10: {
                proficiencyBonus: 4,
                features: [
                    {
                        name: "Metamagic",
                        description: "Learn 1 additional Metamagic option",
                        choices: {
                            type: "metamagic",
                            count: 1,
                            options: ["Careful Spell", "Distant Spell", "Empowered Spell", "Extended Spell", "Heightened Spell", "Quickened Spell", "Subtle Spell", "Twinned Spell"]
                        }
                    }
                ],
                cantrips: 6,
                spellsKnown: 11,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 },
                sorceryPoints: 10
            },
            11: {
                proficiencyBonus: 4,
                cantrips: 6,
                spellsKnown: 12,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
                sorceryPoints: 11
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
                cantrips: 6,
                spellsKnown: 12,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
                sorceryPoints: 12
            },
            13: {
                proficiencyBonus: 5,
                cantrips: 6,
                spellsKnown: 13,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 },
                sorceryPoints: 13
            },
            14: {
                proficiencyBonus: 5,
                subclassFeatures: {
                    draconic: [
                        {
                            name: "Dragon Wings",
                            description: "Sprout dragon wings as a Bonus Action, gaining 60-foot Fly Speed for 1 hour"
                        }
                    ]
                },
                cantrips: 6,
                spellsKnown: 13,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 },
                sorceryPoints: 14
            },
            15: {
                proficiencyBonus: 5,
                cantrips: 6,
                spellsKnown: 14,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 },
                sorceryPoints: 15
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
                cantrips: 6,
                spellsKnown: 14,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 },
                sorceryPoints: 16
            },
            17: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Metamagic",
                        description: "Learn 1 additional Metamagic option",
                        choices: {
                            type: "metamagic",
                            count: 1,
                            options: ["Careful Spell", "Distant Spell", "Empowered Spell", "Extended Spell", "Heightened Spell", "Quickened Spell", "Subtle Spell", "Twinned Spell"]
                        }
                    }
                ],
                cantrips: 6,
                spellsKnown: 15,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1 },
                sorceryPoints: 17
            },
            18: {
                proficiencyBonus: 6,
                subclassFeatures: {
                    draconic: [
                        {
                            name: "Draconic Presence",
                            description: "Emanate 60-foot aura of awe or fear as a Bonus Action, affecting creatures of your choice"
                        }
                    ]
                },
                cantrips: 6,
                spellsKnown: 15,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1 },
                sorceryPoints: 18
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
                cantrips: 6,
                spellsKnown: 15,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1 },
                sorceryPoints: 19
            },
            20: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Sorcerous Restoration",
                        description: "Regain 4 Sorcery Points when you finish a Short Rest"
                    }
                ],
                cantrips: 6,
                spellsKnown: 15,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 2, 8: 1, 9: 1 },
                sorceryPoints: 20
            }
        }
    },

    warlock: {
        name: "Warlock",
        primaryAbility: "Charisma",
        hitDie: "d8",
        savingThrows: ["Wisdom", "Charisma"],
        skillChoices: ["Choose 2: Arcana, Deception, History, Intimidation, Investigation, Nature, or Religion"],
        weaponProficiencies: ["Simple weapons"],
        armorTraining: ["Light armor"],
        subclassLevel: 3,
        subclasses: {
            "fiend": {
                name: "Fiend Patron",
                description: "Make a Pact with a Fiendish Being"
            }
        },
        levels: {
            1: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Pact Magic",
                        description: "Cast spells using Charisma. Know 2 cantrips and 2 level 1 spells, 1 spell slot"
                    },
                    {
                        name: "Otherworldly Patron",
                        description: "Choose the entity you've made a pact with",
                        choices: {
                            type: "subclass",
                            options: ["fiend"]
                        }
                    }
                ],
                subclassFeatures: {
                    fiend: [
                        {
                            name: "Dark One's Blessing",
                            description: "Gain temporary HP equal to Charisma modifier + spell level when you reduce a hostile creature to 0 HP"
                        }
                    ]
                },
                cantrips: 2,
                spellsKnown: 2,
                spellSlots: { 1: 1 },
                invocationsKnown: 0
            },
            2: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Eldritch Invocations",
                        description: "Choose 2 Eldritch Invocations to customize your abilities",
                        choices: {
                            type: "invocation",
                            count: 2,
                            options: ["Armor of Shadows", "Beast Speech", "Beguiling Influence", "Devil's Sight", "Eldritch Sight", "Eyes of the Rune Keeper", "Fiendish Vigor", "Gaze of Two Minds"]
                        }
                    }
                ],
                cantrips: 2,
                spellsKnown: 3,
                spellSlots: { 1: 2 },
                invocationsKnown: 2
            },
            3: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Pact Boon",
                        description: "Choose a supernatural gift from your patron",
                        choices: {
                            type: "pactBoon",
                            options: ["Pact of the Blade", "Pact of the Chain", "Pact of the Tome"]
                        }
                    }
                ],
                cantrips: 2,
                spellsKnown: 4,
                spellSlots: { 2: 2 },
                invocationsKnown: 2
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
                spellsKnown: 5,
                spellSlots: { 2: 2 },
                invocationsKnown: 2
            },
            5: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Eldritch Invocations",
                        description: "Learn 1 additional Eldritch Invocation",
                        choices: {
                            type: "invocation",
                            count: 1,
                            options: ["Maddening Hex", "Mire the Mind", "One with Shadows", "Sign of Ill Omen", "Thief of Five Fates", "Thirsting Blade"]
                        }
                    }
                ],
                subclassFeatures: {
                    fiend: [
                        {
                            name: "Dark One's Own Luck",
                            description: "Add d10 to one ability check or saving throw per Short/Long Rest"
                        }
                    ]
                },
                cantrips: 3,
                spellsKnown: 6,
                spellSlots: { 3: 2 },
                invocationsKnown: 3
            },
            6: {
                proficiencyBonus: 3,
                subclassFeatures: {
                    fiend: [
                        {
                            name: "Fiendish Resilience",
                            description: "Choose one damage type to resist when you finish a Short/Long Rest"
                        }
                    ]
                },
                cantrips: 3,
                spellsKnown: 7,
                spellSlots: { 3: 2 },
                invocationsKnown: 3
            },
            7: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Eldritch Invocations",
                        description: "Learn 1 additional Eldritch Invocation",
                        choices: {
                            type: "invocation",
                            count: 1,
                            options: ["Bewitching Whispers", "Dreadful Word", "Sculptor of Flesh"]
                        }
                    }
                ],
                cantrips: 3,
                spellsKnown: 8,
                spellSlots: { 4: 2 },
                invocationsKnown: 4
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
                spellsKnown: 9,
                spellSlots: { 4: 2 },
                invocationsKnown: 4
            },
            9: {
                proficiencyBonus: 4,
                features: [
                    {
                        name: "Eldritch Invocations",
                        description: "Learn 1 additional Eldritch Invocation",
                        choices: {
                            type: "invocation",
                            count: 1,
                            options: ["Ascendant Step", "Minions of Chaos", "Otherworldly Leap", "Whispers of the Grave"]
                        }
                    }
                ],
                cantrips: 3,
                spellsKnown: 10,
                spellSlots: { 5: 2 },
                invocationsKnown: 5
            },
            10: {
                proficiencyBonus: 4,
                subclassFeatures: {
                    fiend: [
                        {
                            name: "Fiendish Resilience",
                            description: "Resistance to two damage types instead of one"
                        }
                    ]
                },
                cantrips: 4,
                spellsKnown: 10,
                spellSlots: { 5: 2 },
                invocationsKnown: 5
            },
            11: {
                proficiencyBonus: 4,
                features: [
                    {
                        name: "Mystic Arcanum (6th level)",
                        description: "Choose one 6th-level spell to cast once per Long Rest",
                        choices: {
                            type: "mysticArcanum",
                            level: 6,
                            options: ["Any 6th-level Warlock spell"]
                        }
                    }
                ],
                cantrips: 4,
                spellsKnown: 11,
                spellSlots: { 5: 3 },
                invocationsKnown: 5
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
                    },
                    {
                        name: "Eldritch Invocations",
                        description: "Learn 1 additional Eldritch Invocation",
                        choices: {
                            type: "invocation",
                            count: 1,
                            options: ["Chains of Carceri", "Lifedrinker", "Master of Myriad Forms"]
                        }
                    }
                ],
                cantrips: 4,
                spellsKnown: 11,
                spellSlots: { 5: 3 },
                invocationsKnown: 6
            },
            13: {
                proficiencyBonus: 5,
                features: [
                    {
                        name: "Mystic Arcanum (7th level)",
                        description: "Choose one 7th-level spell to cast once per Long Rest",
                        choices: {
                            type: "mysticArcanum",
                            level: 7,
                            options: ["Any 7th-level Warlock spell"]
                        }
                    }
                ],
                cantrips: 4,
                spellsKnown: 12,
                spellSlots: { 5: 3 },
                invocationsKnown: 6
            },
            14: {
                proficiencyBonus: 5,
                subclassFeatures: {
                    fiend: [
                        {
                            name: "Hurl Through Hell",
                            description: "Banish a creature to the lower planes when you hit with an attack, dealing 10d10 Psychic damage"
                        }
                    ]
                },
                cantrips: 4,
                spellsKnown: 12,
                spellSlots: { 5: 3 },
                invocationsKnown: 6
            },
            15: {
                proficiencyBonus: 5,
                features: [
                    {
                        name: "Mystic Arcanum (8th level)",
                        description: "Choose one 8th-level spell to cast once per Long Rest",
                        choices: {
                            type: "mysticArcanum",
                            level: 8,
                            options: ["Any 8th-level Warlock spell"]
                        }
                    },
                    {
                        name: "Eldritch Invocations",
                        description: "Learn 1 additional Eldritch Invocation",
                        choices: {
                            type: "invocation",
                            count: 1,
                            options: ["Visions of Distant Realms", "Witch Sight"]
                        }
                    }
                ],
                cantrips: 4,
                spellsKnown: 13,
                spellSlots: { 5: 3 },
                invocationsKnown: 7
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
                spellsKnown: 13,
                spellSlots: { 5: 3 },
                invocationsKnown: 7
            },
            17: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Mystic Arcanum (9th level)",
                        description: "Choose one 9th-level spell to cast once per Long Rest",
                        choices: {
                            type: "mysticArcanum",
                            level: 9,
                            options: ["Any 9th-level Warlock spell"]
                        }
                    }
                ],
                cantrips: 4,
                spellsKnown: 14,
                spellSlots: { 5: 4 },
                invocationsKnown: 7
            },
            18: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Eldritch Invocations",
                        description: "Learn 1 additional Eldritch Invocation",
                        choices: {
                            type: "invocation",
                            count: 1,
                            options: ["Any Eldritch Invocation"]
                        }
                    }
                ],
                cantrips: 4,
                spellsKnown: 14,
                spellSlots: { 5: 4 },
                invocationsKnown: 8
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
                spellsKnown: 15,
                spellSlots: { 5: 4 },
                invocationsKnown: 8
            },
            20: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Eldritch Master",
                        description: "Regain all expended Pact Magic spell slots when you finish a Short Rest, once per Long Rest"
                    }
                ],
                cantrips: 4,
                spellsKnown: 15,
                spellSlots: { 5: 4 },
                invocationsKnown: 8
            }
        }
    },

    wizard: {
        name: "Wizard",
        primaryAbility: "Intelligence",
        hitDie: "d6",
        savingThrows: ["Intelligence", "Wisdom"],
        skillChoices: ["Choose 2: Arcana, History, Insight, Investigation, Medicine, Nature, or Religion"],
        weaponProficiencies: ["Simple weapons"],
        armorTraining: ["None"],
        subclassLevel: 3,
        subclasses: {
            "evoker": {
                name: "Evoker",
                description: "Create Explosive Elemental Effects"
            }
        },
        levels: {
            1: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Spellcasting",
                        description: "Cast spells using Intelligence. Know 3 cantrips, prepare 4 level 1 spells from spellbook"
                    },
                    {
                        name: "Ritual Adept",
                        description: "Cast any Ritual spell from your spellbook without preparing it"
                    },
                    {
                        name: "Arcane Recovery",
                        description: "Regain spell slots on Short Rest (total level ≤ half Wizard level, max level 5)"
                    }
                ],
                cantrips: 3,
                preparedSpells: 4,
                spellSlots: { 1: 2 }
            },
            2: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Scholar",
                        description: "Gain Expertise in one skill: Arcana, History, Investigation, Medicine, Nature, or Religion",
                        choices: {
                            type: "skill",
                            count: 1,
                            options: ["Arcana", "History", "Investigation", "Medicine", "Nature", "Religion"]
                        }
                    }
                ],
                cantrips: 3,
                preparedSpells: 5,
                spellSlots: { 1: 3 }
            },
            3: {
                proficiencyBonus: 2,
                features: [
                    {
                        name: "Wizard Subclass",
                        description: "Choose your arcane tradition",
                        choices: {
                            type: "subclass",
                            options: ["evoker"]
                        }
                    }
                ],
                subclassFeatures: {
                    evoker: [
                        {
                            name: "Evocation Savant",
                            description: "Add 2 Evocation spells to spellbook for free; gain 1 free Evocation spell each time you gain new spell slot levels"
                        },
                        {
                            name: "Potent Cantrip",
                            description: "Damaging cantrips deal half damage on missed attacks or successful saves"
                        }
                    ]
                },
                cantrips: 3,
                preparedSpells: 6,
                spellSlots: { 1: 4, 2: 2 }
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
                cantrips: 4,
                preparedSpells: 7,
                spellSlots: { 1: 4, 2: 3 }
            },
            5: {
                proficiencyBonus: 3,
                features: [
                    {
                        name: "Memorize Spell",
                        description: "Replace one prepared spell with another from spellbook on Short Rest"
                    }
                ],
                cantrips: 4,
                preparedSpells: 9,
                spellSlots: { 1: 4, 2: 3, 3: 2 }
            },
            6: {
                proficiencyBonus: 3,
                subclassFeatures: {
                    evoker: [
                        {
                            name: "Sculpt Spells",
                            description: "Choose creatures equal to 1 + spell level to automatically succeed on saves against your Evocation spells"
                        }
                    ]
                },
                cantrips: 4,
                preparedSpells: 10,
                spellSlots: { 1: 4, 2: 3, 3: 3 }
            },
            7: {
                proficiencyBonus: 3,
                cantrips: 4,
                preparedSpells: 11,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 1 }
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
                cantrips: 4,
                preparedSpells: 12,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 2 }
            },
            9: {
                proficiencyBonus: 4,
                cantrips: 4,
                preparedSpells: 14,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 }
            },
            10: {
                proficiencyBonus: 4,
                subclassFeatures: {
                    evoker: [
                        {
                            name: "Empowered Evocation",
                            description: "Add Intelligence modifier to one damage roll of Wizard Evocation spells"
                        }
                    ]
                },
                cantrips: 5,
                preparedSpells: 15,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 }
            },
            11: {
                proficiencyBonus: 4,
                cantrips: 5,
                preparedSpells: 16,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 }
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
                cantrips: 5,
                preparedSpells: 16,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 }
            },
            13: {
                proficiencyBonus: 5,
                cantrips: 5,
                preparedSpells: 17,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 }
            },
            14: {
                proficiencyBonus: 5,
                subclassFeatures: {
                    evoker: [
                        {
                            name: "Overchannel",
                            description: "Deal maximum damage with level 1-5 Wizard spells (first use safe, subsequent uses deal 2d12+ Necrotic per spell level)"
                        }
                    ]
                },
                cantrips: 5,
                preparedSpells: 18,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 }
            },
            15: {
                proficiencyBonus: 5,
                cantrips: 5,
                preparedSpells: 19,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 }
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
                cantrips: 5,
                preparedSpells: 21,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 }
            },
            17: {
                proficiencyBonus: 6,
                cantrips: 5,
                preparedSpells: 22,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1 }
            },
            18: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Spell Mastery",
                        description: "Choose one level 1 and one level 2 spell to cast at will",
                        choices: {
                            type: "spellMastery",
                            count: 2,
                            options: ["Any level 1 spell from spellbook", "Any level 2 spell from spellbook"]
                        }
                    }
                ],
                cantrips: 5,
                preparedSpells: 23,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1 }
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
                cantrips: 5,
                preparedSpells: 24,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1 }
            },
            20: {
                proficiencyBonus: 6,
                features: [
                    {
                        name: "Signature Spells",
                        description: "Choose two level 3 spells to cast once each per Short/Long Rest without expending spell slots",
                        choices: {
                            type: "signatureSpells",
                            count: 2,
                            options: ["Any level 3 spell from spellbook"]
                        }
                    }
                ],
                cantrips: 5,
                preparedSpells: 25,
                spellSlots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 2, 8: 1, 9: 1 }
            }
        }
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

// D&D 5e 2024 Feats
const feats = [
    {
        name: "Alert",
        description: "Always ready for danger. +5 to Initiative, can't be surprised while conscious."
    },
    {
        name: "Athlete",
        description: "Physically exceptional. Climbing and swimming don't cost extra movement, standing from prone costs only 5 feet."
    },
    {
        name: "Actor",
        description: "Skilled at mimicry and dramatics. Advantage on Deception and Performance checks when trying to pass yourself off as someone else."
    },
    {
        name: "Charger",
        description: "Devastating when charging into battle. After Dash action, make one melee attack or shove as bonus action."
    },
    {
        name: "Chef",
        description: "Master of cuisine and cooking. Cook special food during rests to provide temporary HP and other benefits."
    },
    {
        name: "Crossbow Expert",
        description: "Expert with crossbows. Ignore loading property, no disadvantage in melee, bonus action hand crossbow attack."
    },
    {
        name: "Crusher",
        description: "Master of bludgeoning damage. Move creatures when you deal bludgeoning damage, critical hits give allies advantage."
    },
    {
        name: "Defensive Duelist",
        description: "Skilled at parrying attacks. Use reaction to add proficiency bonus to AC against one melee attack."
    },
    {
        name: "Dual Wielder",
        description: "Master of fighting with two weapons. +1 AC while dual wielding, can use two-weapon fighting with non-light weapons."
    },
    {
        name: "Dungeon Delver",
        description: "Experienced in underground exploration. Advantage on Perception and Investigation for secret doors, resistance to trap damage."
    },
    {
        name: "Durable",
        description: "Hardy and resilient. Regain additional HP when you roll Hit Dice to recover HP."
    },
    {
        name: "Elemental Adept",
        description: "Deep understanding of elemental magic. Choose damage type: ignore resistance, treat 1s as 2s on damage dice."
    },
    {
        name: "Fey Touched",
        description: "Touched by fey magic. Learn Misty Step and one 1st-level spell, cast each once per long rest."
    },
    {
        name: "Fighting Initiate",
        description: "Trained in a particular fighting style. Learn one Fighting Style feat of your choice."
    },
    {
        name: "Great Weapon Master",
        description: "Master of large weapons. Bonus action attack on critical hit or reducing creature to 0 HP, -5/+10 power attack option."
    },
    {
        name: "Healer",
        description: "Skilled at healing others. Use healer's kit to restore HP, stabilize dying creatures more effectively."
    },
    {
        name: "Heavy Armor Master",
        description: "Trained to master heavy armor. Reduce bludgeoning, piercing, and slashing damage by 3 while wearing heavy armor."
    },
    {
        name: "Inspiring Leader",
        description: "Natural leader who inspires others. Give temporary HP to allies equal to your level + Charisma modifier."
    },
    {
        name: "Keen Mind",
        description: "Exceptional memory and reasoning. Always know which way is north, what time it is, and can recall anything from the past month."
    },
    {
        name: "Lightly Armored",
        description: "Trained in light armor use. Gain proficiency with light armor and shields."
    },
    {
        name: "Lucky",
        description: "Inexplicably fortunate. Reroll three d20s per long rest, choose which result to use."
    },
    {
        name: "Mage Slayer",
        description: "Trained to fight spellcasters. Opportunity attacks against spellcasters, advantage on saves against spells at close range."
    },
    {
        name: "Magic Initiate",
        description: "Learned basic magic. Choose a class: learn 2 cantrips and 1 1st-level spell, cast the spell once per long rest."
    },
    {
        name: "Martial Adept",
        description: "Studied martial techniques. Learn 2 maneuvers from Battle Master fighter, gain 1 superiority die."
    },
    {
        name: "Medium Armor Master",
        description: "Master of medium armor. No disadvantage on Stealth in medium armor, +3 max Dex bonus instead of +2."
    },
    {
        name: "Metamagic Adept",
        description: "Studied sorcerous magic. Learn 2 Metamagic options, gain 2 sorcery points."
    },
    {
        name: "Mobile",
        description: "Exceptionally speedy and agile. +10 speed, no opportunity attacks from creatures you've attacked, ignore difficult terrain when dashing."
    },
    {
        name: "Moderately Armored",
        description: "Trained in armor use. Gain proficiency with medium armor and shields."
    },
    {
        name: "Mounted Combatant",
        description: "Skilled at fighting while mounted. Advantage on attacks against unmounted creatures, redirect attacks from mount to you."
    },
    {
        name: "Observant",
        description: "Quick to notice details. +5 bonus to passive Perception and Investigation, can read lips if you know the language."
    },
    {
        name: "Piercer",
        description: "Master of piercing damage. Reroll one damage die per turn, critical hits deal extra damage die."
    },
    {
        name: "Poisoner",
        description: "Expert with poisons. Proficiency with poisoner's kit, ignore poison resistance, apply poison as bonus action."
    },
    {
        name: "Polearm Master",
        description: "Master of polearms. Bonus action attack with opposite end, opportunity attacks when creatures enter reach."
    },
    {
        name: "Resilient",
        description: "Developed resilience. Choose an ability score: gain proficiency in that saving throw, increase the score by 1."
    },
    {
        name: "Ritual Caster",
        description: "Learned to cast ritual spells. Choose a class: learn 2 ritual spells, can learn more by finding them."
    },
    {
        name: "Savage Attacker",
        description: "Brutal in combat. Reroll weapon damage dice once per turn, use either result."
    },
    {
        name: "Sentinel",
        description: "Master of opportunity attacks. Opportunity attacks stop movement, attack when allies are attacked nearby."
    },
    {
        name: "Shadow Touched",
        description: "Touched by shadow magic. Learn Invisibility and one 1st-level spell, cast each once per long rest."
    },
    {
        name: "Sharpshooter",
        description: "Master of ranged combat. No disadvantage at long range, ignore cover, -5/+10 power attack option."
    },
    {
        name: "Shield Master",
        description: "Expert with shields. Bonus action shove with shield, add shield AC to Dex saves, no damage on successful Dex save."
    },
    {
        name: "Skill Expert",
        description: "Developed expertise in skills. Gain proficiency in one skill, expertise in one skill, increase one ability score by 1."
    },
    {
        name: "Skilled",
        description: "Talented in many areas. Gain proficiency in any combination of 3 skills or tools."
    },
    {
        name: "Skulker",
        description: "Expert at hiding and sniping. Hide when lightly obscured, no disadvantage on Perception in dim light, missing with ranged attack doesn't reveal position."
    },
    {
        name: "Slasher",
        description: "Master of slashing damage. Reduce target's speed, critical hits impose disadvantage on attacks."
    },
    {
        name: "Spell Sniper",
        description: "Expert at casting spells at range. Double spell range, ignore cover, learn one cantrip."
    },
    {
        name: "Telekinetic",
        description: "Learned to move things with your mind. Mage Hand cantrip, bonus action shove with telekinesis."
    },
    {
        name: "Telepathic",
        description: "Awakened telepathic abilities. Detect thoughts once per long rest, telepathic communication."
    },
    {
        name: "Tough",
        description: "Exceptionally hardy. +2 HP per level (including previous levels)."
    },
    {
        name: "War Caster",
        description: "Practiced at casting in armor. Advantage on Constitution saves for concentration, cast spells as opportunity attacks, perform somatic components with hands full."
    },
    {
        name: "Weapon Master",
        description: "Trained with various weapons. Gain proficiency with 4 weapons of your choice, increase Strength or Dexterity by 1."
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { classData, weaponMasteryProperties, epicBoons };
}
