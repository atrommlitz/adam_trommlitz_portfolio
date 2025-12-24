# Git Terminal Commands Guide

## 📋 1. SEE ALL FILES WITH CHANGES

### View all changes (staged and unstaged):
```bash
git status
```
**What it shows:**
- Files staged for commit (green, under "Changes to be committed")
- Files modified but not staged (red, under "Changes not staged for commit")
- Untracked files (new files not yet added to git)

### View only modified files (short format):
```bash
git status --short
# or
git status -s
```
**Output format:**
- `M ` = Modified (staged)
- ` M` = Modified (unstaged)
- `A ` = Added (staged)
- `D ` = Deleted (staged)
- `??` = Untracked file

### See what changed in files:
```bash
# See changes in unstaged files
git diff

# See changes in staged files
git diff --staged
# or
git diff --cached

# See changes in a specific file
git diff filename.txt
```

---

## 📦 2. STAGE FILES

### Stage all changes (recommended):
```bash
git add -A
# or
git add .
```
**What it does:** Stages ALL changes (modified, deleted, new files)

### Stage specific files:
```bash
# Stage one file
git add filename.txt

# Stage multiple files
git add file1.txt file2.txt file3.txt

# Stage all files in a directory
git add public/images/

# Stage all files matching a pattern
git add *.js
git add public/images/*.jpg
```

### Stage only modified/deleted files (not new files):
```bash
git add -u
```

### Unstage files (if you staged too much):
```bash
# Unstage all files
git reset

# Unstage a specific file
git reset filename.txt

# Unstage but keep changes
git restore --staged filename.txt
```

---

## 💾 3. COMMIT CHANGES

### Commit staged changes:
```bash
git commit -m "Your commit message here"
```

### Commit with a detailed message:
```bash
git commit -m "Short summary" -m "Longer description of what changed"
```

### Commit all changes without staging first:
```bash
git commit -am "Your message"
```
**Note:** Only works for modified/deleted files, NOT new files

### Examples:
```bash
git commit -m "Optimize images: reduce size by 82.6%"
git commit -m "Update npm packages to latest versions"
git commit -m "Fix bug in image optimization script"
```

---

## 📤 4. PUSH CHANGES

### Push to remote repository:
```bash
git push
```
**What it does:** Uploads your commits to GitHub/GitLab/etc.

### Push to specific branch:
```bash
git push origin main
# or
git push origin master
```

### Push and set upstream (first time):
```bash
git push -u origin main
```

### Force push (⚠️ use with caution):
```bash
git push --force
# or
git push -f
```
**Warning:** Only use if you know what you're doing. Can overwrite others' work.

---

## 📥 5. PULL CHANGES

### Pull latest changes from remote:
```bash
git pull
```
**What it does:** Downloads and merges changes from remote repository

### Pull from specific branch:
```bash
git pull origin main
```

### Pull without merging (just fetch):
```bash
git fetch
```
**What it does:** Downloads changes but doesn't merge them yet

### See what would be pulled:
```bash
git fetch
git log HEAD..origin/main
```

---

## 🔄 COMPLETE WORKFLOW EXAMPLE

### Typical workflow:
```bash
# 1. Check what changed
git status

# 2. Stage all changes
git add -A

# 3. Commit with message
git commit -m "Optimize images and update packages"

# 4. Pull latest changes (to avoid conflicts)
git pull

# 5. Push your changes
git push
```

### Quick one-liner (if you're sure):
```bash
git add -A && git commit -m "Your message" && git push
```

---

## 🛠️ USEFUL TIPS

### See commit history:
```bash
git log
git log --oneline  # Compact view
git log --graph --oneline --all  # Visual branch view
```

### See what branch you're on:
```bash
git branch
```

### Switch branches:
```bash
git checkout branch-name
# or (newer syntax)
git switch branch-name
```

### Create new branch:
```bash
git checkout -b new-branch-name
# or
git switch -c new-branch-name
```

### Discard changes (⚠️ be careful):
```bash
# Discard changes in unstaged file
git restore filename.txt

# Discard ALL unstaged changes
git restore .
```

---

## 🚨 COMMON SCENARIOS

### Scenario 1: Made changes, want to commit and push
```bash
git add -A
git commit -m "Description of changes"
git push
```

### Scenario 2: Someone else pushed changes, you need to pull first
```bash
git pull
# If conflicts occur, resolve them, then:
git add -A
git commit -m "Merge remote changes"
git push
```

### Scenario 3: Accidentally staged wrong files
```bash
git reset                    # Unstage all
git add correct-file.txt     # Stage only what you want
git commit -m "Fixed commit"
```

### Scenario 4: Want to see what you're about to push
```bash
git log origin/main..HEAD    # See commits not yet pushed
git diff origin/main..HEAD   # See code differences
```

---

## 📝 QUICK REFERENCE

| Action | Command |
|--------|---------|
| See changes | `git status` |
| Stage all | `git add -A` |
| Stage file | `git add filename` |
| Commit | `git commit -m "message"` |
| Push | `git push` |
| Pull | `git pull` |
| Unstage | `git reset` |
| See diff | `git diff` |




