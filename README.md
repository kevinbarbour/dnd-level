# D&D 5e 2024 Level-Up Tool ⚔️

A comprehensive character leveling tool for Dungeons & Dragons 5th Edition 2024 rules. This tool helps players understand exactly what happens when their character levels up, including new features, spell progression, and choices to make.

## 🎯 Features

### Complete Class Coverage
- **All 12 D&D 5e 2024 Classes** fully implemented
- **Level 1-20 progression** for every class
- **Accurate 2024 rules** implementation
- **Subclass integration** with proper timing

### Classes Included
- 🗡️ **Barbarian** (Path of the Berserker)
- 🎵 **Bard** (College of Lore)
- ⛪ **Cleric** (Life Domain)
- 🌿 **Druid** (Circle of the Land)
- 🛡️ **Fighter** (Champion)
- 👊 **Monk** (Warrior of the Open Hand)
- ✨ **Paladin** (Oath of Devotion)
- 🏹 **Ranger** (Hunter)
- 🗡️ **Rogue** (Thief)
- 🔮 **Sorcerer** (Draconic Sorcery)
- 👁️ **Warlock** (Fiend Patron)
- 📚 **Wizard** (Evoker)

### What You Get When Leveling Up
- **Hit Points**: Clear roll or average calculations
- **Hit Dice**: Updated total count
- **New Features**: All abilities gained at each level
- **Spell Progression**: Cantrips, prepared spells, spell slots
- **Class Resources**: Rage uses, Focus Points, Lay on Hands, etc.
- **Choice Guidance**: Subclasses, ASIs, feats, weapon mastery
- **Professional Display**: Clean, easy-to-read format

## 🚀 Live Demo

Visit the live tool: [D&D 5e 2024 Level-Up Tool](https://dnd-level-up-tool.vercel.app)

## 🛠️ Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with medieval theme
- **Fonts**: Google Fonts (Cinzel, Crimson Text)
- **Deployment**: Vercel
- **No Dependencies**: Completely self-contained

## 📱 Features

### Smart Interface
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Medieval Theme**: Parchment background with gold accents
- **Clean Typography**: Easy-to-read fonts and layout
- **Interactive Elements**: Hover effects and smooth transitions

### Spell Slots Display
- **Smart Formatting**: Table format for multiple spell levels
- **Compact Display**: Inline format for single spell levels (like Warlock)
- **Professional Appearance**: Matches D&D aesthetic

### User Experience
- **One-Click Class Selection**: Visual class buttons with emojis
- **Level Input Validation**: Ensures valid level ranges (1-19)
- **Clear Progression Info**: Everything needed for character sheets
- **Mobile Optimized**: Touch-friendly interface

## 🏗️ Local Development

### Prerequisites
- Modern web browser
- Local web server (optional, but recommended)

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/kevinbarbour/dnd-level.git
   cd dnd-level
   ```

2. Serve locally (choose one):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. Open your browser to `http://localhost:8000`

### File Structure
```
dnd-level/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styling
├── js/
│   ├── classData.js        # D&D class data and progression
│   ├── levelCalculator.js  # Level-up calculation logic
│   └── app.js              # Main application logic
├── vercel.json             # Vercel deployment configuration
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🚀 Deployment

### Deploy to Vercel
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to configure your deployment

### Deploy to Other Platforms
This is a static site that can be deployed to:
- **GitHub Pages**
- **Netlify**
- **Vercel** (recommended)
- **Firebase Hosting**
- Any static hosting service

## 📖 Usage

1. **Select Your Class**: Click on any of the 12 available D&D classes
2. **Enter Current Level**: Input your character's current level (1-19)
3. **Calculate Level-Up**: Click the calculate button to see what happens next
4. **Review Information**: See new features, spell progression, and choices to make
5. **Update Character Sheet**: Use the provided information to level up your character

## 🎲 D&D 5e 2024 Rules Compliance

This tool implements the official D&D 5e 2024 rules including:
- **Updated class progressions** from the 2024 Player's Handbook
- **New subclass features** and timing
- **Revised spellcasting rules** and spell slot progressions
- **Updated weapon mastery** system
- **New feat and ASI** options

## 📄 Legal

D&D and all related content are property of Wizards of the Coast. This tool uses content from the System Reference Document (SRD) under the Open Game License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Areas for contribution:
- Additional subclasses
- UI/UX improvements
- Bug fixes
- Mobile optimization
- Accessibility improvements

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Wizards of the Coast** for creating D&D
- **The D&D Community** for feedback and support
- **SRD Content** used under the Open Game License

---

**Happy Adventuring!** 🐉⚔️🏰
