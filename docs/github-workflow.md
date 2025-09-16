# GitHub Workflow and Strategies

This guide covers GitHub-specific features and collaborative workflows that make working with teams effective and organized.

## Understanding GitHub

GitHub is a platform built on top of Git that adds:
- **Remote repositories** - Store your code in the cloud
- **Collaboration tools** - Issues, Pull Requests, Reviews
- **Project management** - Project boards, milestones
- **Automation** - Actions, webhooks
- **Social features** - Following, starring, forking

## Fork and Pull Request Workflow

This is the most common workflow for contributing to open source projects:

### 1. Fork the Repository
- Click "Fork" button on the original repository
- This creates your own copy on GitHub
- You have full control over your fork

### 2. Clone and Set Up
```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/missingsem-2025.git
cd missingsem-2025

# Add original repository as upstream
git remote add upstream https://github.com/saikhurana98/missingsem-2025.git

# Verify remotes
git remote -v
```

### 3. Create Feature Branch
```bash
# Always create a new branch for your changes
git checkout -b add-string-utils
```

### 4. Make Changes and Test
```bash
# Edit files, add new features
# Run tests to make sure everything works
cd python && python3 test_calculator.py
cd ../javascript && node utils.test.js
```

### 5. Commit and Push
```bash
git add .
git commit -m "Add string manipulation utilities"
git push origin add-string-utils
```

### 6. Create Pull Request
- Go to your fork on GitHub
- Click "Compare & pull request"
- Fill out the template with details
- Submit for review

## GitHub Features for Collaboration

### Issues
Use issues to:
- Report bugs
- Request features
- Ask questions
- Plan work

Example issue titles:
- "Bug: Calculator division by zero crashes"
- "Feature: Add factorial function"
- "Question: How to run tests?"

### Pull Requests
Pull requests are where code review happens:
- Describe what you changed and why
- Reference related issues (`Fixes #123`)
- Be ready to make changes based on feedback
- Keep discussions respectful and constructive

### Code Review
When reviewing others' code:
- Be kind and constructive
- Ask questions if something is unclear
- Suggest improvements
- Approve good changes
- Test the changes locally

### Project Management
- Use **Projects** to organize work
- Set **Milestones** for releases
- Add **Labels** to categorize issues and PRs
- Assign **Reviewers** to pull requests

## Branch Protection and Team Workflows

### Branch Protection Rules
- Require pull request reviews
- Require status checks (tests must pass)
- Restrict who can push to main
- Require up-to-date branches

### Team Strategies

#### 1. Feature Branch Strategy
- `main` branch is always stable
- Create feature branches for new work
- Merge via pull requests only
- Delete branches after merging

#### 2. Git Flow
- `main` - production ready code
- `develop` - integration branch
- `feature/*` - new features
- `hotfix/*` - urgent fixes
- `release/*` - preparing releases

#### 3. GitHub Flow (Recommended for this project)
- `main` branch is deployable
- Create feature branches
- Open pull request early for discussion
- Merge after review and tests pass

## Keeping Your Fork Updated

```bash
# Fetch latest changes from original repository
git fetch upstream

# Switch to main branch
git checkout main

# Merge upstream changes
git merge upstream/main

# Push updated main to your fork
git push origin main

# Update your feature branch (if needed)
git checkout your-feature-branch
git rebase main
```

## Common GitHub Workflows

### Working on an Issue
1. Comment on the issue that you're working on it
2. Create a branch named after the issue: `git checkout -b fix-issue-42`
3. Make your changes
4. Reference the issue in your commit: `git commit -m "Fix calculator bug - closes #42"`
5. Create pull request

### Collaborative Features
1. Draft pull requests for work in progress
2. Request reviews from specific people
3. Use GitHub suggestions for small changes
4. Link pull requests to issues

### Release Management
1. Use tags for version releases: `git tag v1.0.0`
2. Create releases on GitHub with release notes
3. Use semantic versioning (major.minor.patch)

## GitHub Etiquette

### Do:
- Write clear commit messages and PR descriptions
- Respond to review feedback promptly
- Test your changes before submitting
- Keep pull requests focused and small
- Be patient with the review process

### Don't:
- Force push to shared branches
- Commit secrets or sensitive data
- Make unrelated changes in the same PR
- Take review feedback personally
- Work directly on main branch

## Advanced GitHub Features

### GitHub Actions (CI/CD)
- Automatically run tests on pull requests
- Deploy when code is merged
- Check code style and quality

### Security Features
- Dependabot for dependency updates
- Secret scanning
- Security advisories

### Integrations
- Connect with project management tools
- Slack notifications
- Code quality tools

## Resources

- [GitHub Guides](https://guides.github.com/)
- [GitHub Skills](https://skills.github.com/)
- [GitHub Documentation](https://docs.github.com/)
- [Git and GitHub Learning Resources](https://try.github.io/)

## Practice Exercises

1. **Fork this repository** and make a simple change
2. **Create an issue** describing a bug or feature idea
3. **Review someone else's pull request** constructively
4. **Collaborate on a feature** by working on the same branch
5. **Practice rebasing** to keep history clean

Remember: GitHub is a social platform for code. The more you participate in the community, the more you'll learn and grow as a developer!