# Git Basics for Beginners

This guide covers essential Git commands and concepts you'll need for contributing to this project.

## What is Git?

Git is a version control system that tracks changes in your files over time. Think of it as a powerful "save" system that lets you:
- Save snapshots of your project at different points
- See what changed between versions
- Collaborate with others without overwriting each other's work
- Revert to previous versions if something goes wrong

## Essential Git Commands

### Setting Up
```bash
# Configure Git with your name and email
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Clone this repository
git clone https://github.com/YOUR_USERNAME/missingsem-2025.git
cd missingsem-2025
```

### Daily Workflow
```bash
# Check the status of your files
git status

# See what changes you've made
git diff

# Add files to staging area
git add filename.py           # Add specific file
git add .                     # Add all changed files

# Commit your changes
git commit -m "Your descriptive message"

# Push changes to GitHub
git push origin branch-name
```

### Working with Branches
```bash
# Create and switch to a new branch
git checkout -b feature-branch-name

# Switch between branches
git checkout main
git checkout feature-branch-name

# List all branches
git branch

# Merge a branch (usually done via Pull Request)
git checkout main
git merge feature-branch-name
```

### Getting Updates
```bash
# Fetch latest changes from GitHub
git fetch origin

# Pull latest changes into current branch
git pull origin main

# Update your fork from the original repository
git remote add upstream https://github.com/saikhurana98/missingsem-2025.git
git fetch upstream
git checkout main
git merge upstream/main
```

## Git Workflow for This Project

1. **Fork the repository** on GitHub
2. **Clone your fork** to your computer
3. **Create a new branch** for your feature
4. **Make your changes** and test them
5. **Commit your changes** with a clear message
6. **Push to your fork** on GitHub
7. **Create a Pull Request** to the main repository

## Common Git Scenarios

### Oops, I made a mistake in my last commit
```bash
# If you haven't pushed yet
git commit --amend -m "Corrected commit message"

# If you need to unstage files
git reset HEAD filename
```

### I want to see the history
```bash
# View commit history
git log --oneline

# See changes in a specific commit
git show commit-hash
```

### I want to discard changes
```bash
# Discard changes to a specific file
git checkout -- filename

# Discard all uncommitted changes (be careful!)
git reset --hard HEAD
```

## Best Practices

1. **Commit often** - Small, frequent commits are better than large ones
2. **Write good commit messages** - Future you will thank you
3. **Use branches** - Keep main branch clean
4. **Pull before you push** - Stay up to date with others' changes
5. **Test before committing** - Make sure your code works

## Resources for Learning More

- [Official Git Tutorial](https://git-scm.com/docs/gittutorial)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)
- [GitHub's Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [Oh My Git! - Game to learn Git](https://ohmygit.org/)

Remember: Git can seem overwhelming at first, but you only need a few commands to get started. The more you use it, the more natural it becomes!