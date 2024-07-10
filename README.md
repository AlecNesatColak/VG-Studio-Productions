# VG-Studio-Productions

Starting template for VG Studio project
# Pull changes from the remote repository:
git pull origin <branch-name> !!

# Create a New Branch
git branch <branch-name>

# Switch to the New Branch
git checkout <branch-name>

# Stage your changes:
git add .
git commit -m "Your commit message"
git push origin <branch-name>

# Merge a branch into your current branch (make sure to checkout into the current/main branch for merging):
git merge branch-name

# Push to the main branch:
git push origin main

# Resolve any merge conflicts (if necessary)
If there are any merge conflicts, Git will prompt you to resolve them. After resolving the conflicts, you need to add the resolved files and commit the merge:
git add <resolved-files>
git commit -m "Resolved merge conflicts"

# To see current branch (local and remote):
git branch

# To see all branches (local and remote):
git branch -a

# To delete a branch:
git branch -d <branch-name>

# View commit history: 
git log


# Fetch changes from the remote repository:
git fetch origin

