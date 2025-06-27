# D&D 5e 2024 Level-Up Tool

A comprehensive character leveling tool for Dungeons & Dragons 5th Edition using the updated 2024 rules. This tool helps players make informed decisions when leveling up their characters by presenting all available choices in an organized, interactive interface.

## Features

### ✨ Current Implementation
- **Barbarian Class**: Fully implemented with all 20 levels
  - Complete feature progression
  - Path of the Berserker subclass
  - Weapon Mastery choices
  - Brutal Strike options
  - Rage progression tracking
  - Epic Boon selection at level 19

### 🚧 Coming Soon
- **11 Additional Classes**: Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Warlock, Wizard
- **Spellcasting Integration**: Spell selection and progression for caster classes
- **Additional Subclasses**: Multiple subclass options for each class
- **Enhanced Features**: More detailed feat descriptions and spell information

### 🎯 Core Functionality
- **Interactive Choice Selection**: Radio buttons, checkboxes, and dropdowns for different choice types
- **Progress Tracking**: Visual progress bar showing completion status
- **Local Storage**: Automatically saves progress between sessions
- **Export Summary**: Generate and copy character advancement summaries
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Medieval Theme**: Dark, atmospheric styling with D&D aesthetics

## Usage

### Getting Started
1. **Select Your Class**: Choose from the dropdown (Barbarian is fully available)
2. **Enter Current Level**: Input your character's current level (1-19)
3. **Calculate Level-Up**: Click the button to see what choices you need to make
4. **Make Decisions**: Select from available options using the interactive interface
5. **Track Progress**: Watch the progress bar fill as you complete choices
6. **Export Summary**: Generate a text summary of your level-up decisions

### Choice Types
- **Ability Score Improvement vs Feat**: Choose between increasing ability scores or gaining a feat
- **Subclass Selection**: Pick your character's specialization path
- **Weapon Mastery**: Select weapons to master (with mastery properties displayed)
- **Skill Proficiencies**: Choose additional skills for your character
- **Class-Specific Features**: Brutal Strike options, Epic Boons, and more

### Example Workflow
```
Barbarian Level 2 → Level 3:
1. Choose Subclass: Path of the Berserker
2. Select Primal Knowledge Skill: Choose from available options
3. Review new features: Frenzy ability from subclass
4. Check progression: Rage uses increase to 3
5. Export summary for character sheet
```

## Technical Details

### Architecture
- **Frontend Only**: Pure HTML, CSS, and JavaScript
- **No Dependencies**: No frameworks or libraries required
- **GitHub Pages Ready**: Static files for easy deployment
- **Modular Design**: Separate files for data, logic, and presentation

### File Structure
```
├── index.html              # Main application page
├── css/
│   └── styles.css          # Medieval-themed styling
├── js/
│   ├── app.js             # Main application logic
│   ├── classData.js       # D&D class and feature data
│   └── levelCalculator.js # Level-up calculation utilities
└── README.md              # This file
```

### Data Structure
Classes are defined with:
- Basic information (hit die, saving throws, etc.)
- Level-by-level feature progression
- Choice definitions with types and options
- Subclass features and progression
- Validation rules and requirements

### Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **JavaScript Features**: ES6+ classes, async/await, localStorage
- **CSS Features**: CSS Grid, Flexbox, CSS custom properties

## Development

### Adding New Classes
1. **Create Class Data**: Add class definition to `classData.js`
2. **Define Levels**: Specify features and choices for each level
3. **Add Subclasses**: Include subclass features and progression
4. **Test Integration**: Verify choices work correctly in the UI

### Extending Features
- **New Choice Types**: Add handlers in `app.js` and `levelCalculator.js`
- **Additional Validation**: Extend validation logic for complex rules
- **Enhanced UI**: Improve styling and user experience
- **Data Export**: Add more export formats (JSON, PDF, etc.)

## Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)
4. Access via `https://username.github.io/repository-name`

### Local Development
1. Clone or download the repository
2. Open `index.html` in a web browser
3. No build process or server required

## D&D 5e 2024 Rules

This tool implements the updated 2024 rules including:
- **Weapon Mastery**: New weapon properties and progression
- **Revised Class Features**: Updated abilities and mechanics
- **Epic Boons**: Level 19 feat options
- **Streamlined Progression**: Simplified choice presentation
- **Updated Subclasses**: Revised subclass features and timing

## Contributing

### Reporting Issues
- Use GitHub Issues for bug reports
- Include browser information and steps to reproduce
- Provide screenshots for UI-related issues

### Feature Requests
- Suggest new classes or features via GitHub Issues
- Describe the desired functionality clearly
- Reference official D&D 2024 rules when applicable

### Code Contributions
- Fork the repository and create a feature branch
- Follow existing code style and structure
- Test thoroughly before submitting pull requests
- Update documentation as needed

## License

This project is created for educational and personal use. D&D 5e rules and content are property of Wizards of the Coast. This tool is not affiliated with or endorsed by Wizards of the Coast.

## Acknowledgments

- **Wizards of the Coast**: For creating D&D 5th Edition
- **D&D Community**: For feedback and testing
- **Open Source**: Built with web standards and open technologies

---

**Version**: 1.0.0  
**Last Updated**: December 2024  
**Status**: Barbarian Complete, Other Classes In Development
