# MissingSem 2025 - GitHub Learning Boilerplate

Welcome to your collaborative learning repository! This project is designed to help you practice Git, GitHub, and collaborative development workflows in a safe, educational environment.

## 🎯 Learning Objectives

By contributing to this repository, you'll learn:
- Git fundamentals (clone, commit, push, pull, merge)
- GitHub workflows (fork, pull requests, code review)
- Collaborative development practices
- Testing and code quality
- Open source contribution patterns

## 📁 Repository Structure

```
├── README.md              # This file - project overview
├── .gitignore            # Files to ignore in Git
├── .vscode/              # VS Code workspace settings
│   └── settings.json     # Editor configuration
├── .github/              # GitHub templates and workflows
│   ├── ISSUE_TEMPLATE.md # Template for reporting bugs
│   └── PULL_REQUEST_TEMPLATE.md # Template for PRs
├── python/               # Python examples and exercises
│   ├── calculator.py     # Simple calculator with basic operations
│   └── test_calculator.py # Unit tests for the calculator
├── javascript/           # JavaScript examples and exercises  
│   ├── utils.js          # Utility functions
│   └── utils.test.js     # Tests for utility functions
└── docs/                 # Documentation and guides
    ├── contributing.md   # How to contribute guide
    ├── git-basics.md     # Git commands and concepts
    └── github-workflow.md # GitHub features and workflows
```

## 🚀 Quick Start

### For Students (First Time)

1. **Fork this repository** - Click the "Fork" button above
2. **Clone your fork** to your computer:
   ```bash
   git clone https://github.com/YOUR_USERNAME/missingsem-2025.git
   cd missingsem-2025
   ```
3. **Read the documentation** in the `docs/` folder
4. **Try running the examples**:
   ```bash
   # Python
   cd python
   python3 calculator.py
   python3 test_calculator.py
   
   # JavaScript  
   cd ../javascript
   node utils.test.js
   ```
5. **Make your first contribution** - see [Contributing Guide](docs/contributing.md)

### For Instructors

This repository provides a minimal but complete environment for teaching:
- **Git fundamentals** - branching, merging, conflict resolution
- **GitHub workflows** - forking, pull requests, code review
- **Collaborative practices** - issue tracking, project management
- **Code quality** - testing, documentation, style guides

## 🧪 Testing Your Changes

### Python
```bash
cd python
python3 calculator.py          # Run demo
python3 test_calculator.py     # Run tests
```

### JavaScript
```bash
cd javascript
node utils.test.js             # Run tests
```

## 📚 Learning Resources

- **[Contributing Guide](docs/contributing.md)** - How to make your first contribution
- **[Git Basics](docs/git-basics.md)** - Essential Git commands and concepts  
- **[GitHub Workflow](docs/github-workflow.md)** - Advanced GitHub features and strategies

## 🤝 How to Contribute

We welcome all types of contributions:

### 🟢 Beginner Friendly
- Fix typos in documentation
- Add comments to existing code
- Add new test cases
- Improve error messages

### 🟡 Intermediate
- Add new utility functions
- Improve code structure
- Enhance documentation with examples
- Add input validation

### 🔴 Advanced
- Set up GitHub Actions for CI/CD
- Add code quality tools (linting, formatting)
- Create more complex examples
- Optimize performance

## 📋 Exercise Ideas

1. **Git Practice**:
   - Create a branch for a new feature
   - Make commits with good messages
   - Handle merge conflicts
   - Use interactive rebase

2. **GitHub Practice**:
   - Open and respond to issues
   - Create detailed pull requests  
   - Review others' code constructively
   - Use project boards for planning

3. **Code Practice**:
   - Add functions to `calculator.py` or `utils.js`
   - Write comprehensive tests
   - Improve documentation
   - Fix bugs and edge cases

## 🎮 Gamification Ideas

- **Points System**: Award points for different types of contributions
- **Challenges**: Weekly coding challenges using the repository
- **Code Review Olympics**: Best code review feedback
- **Documentation Derby**: Improve and expand documentation

## 🔧 Development Setup

### VS Code (Recommended)
1. Open the repository in VS Code
2. Install recommended extensions (prompt will appear)
3. Settings are pre-configured in `.vscode/settings.json`

### Command Line
```bash
# Check Python version
python3 --version

# Check Node.js version  
node --version

# Run all tests
cd python && python3 test_calculator.py
cd ../javascript && node utils.test.js
```

## 🤔 Need Help?

- 📖 Check the [documentation](docs/)
- 🐛 [Open an issue](../../issues/new) if you find a bug
- 💡 [Start a discussion](../../discussions) for questions
- 👥 Ask your classmates or instructor

## 📜 License

This project is intended for educational purposes. Feel free to use, modify, and share!

---

**Happy Learning!** 🎓 Remember, the best way to learn Git and GitHub is by doing. Don't be afraid to experiment and make mistakes - that's how we learn!