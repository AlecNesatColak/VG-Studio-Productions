# VG-Studio-Productions

**VG-Studio-Productions** is the starting template for VG Studio project. This guide outlines steps for managing branches, handling commits, resolving merge conflicts, and adding new routes to the project. It also contains important notes about environment variables (`.env`).

---

## Table of Contents

- [VG-Studio-Productions](#vg-studio-productions)
  - [Table of Contents](#table-of-contents)
  - [Pulling Changes from Remote](#pulling-changes-from-remote)
  - [Branch Management](#branch-management)
    - [Create a New Branch](#create-a-new-branch)
    - [Switch to the New Branch](#switch-to-the-new-branch)
  - [Committing Changes](#committing-changes)
  - [Pushing Changes to Remote](#pushing-changes-to-remote)
  - [Merge Branches](#merge-branches)
  - [Handling Merge Conflicts](#handling-merge-conflicts)
  - [Viewing Branches](#viewing-branches)
    - [View Current Branch](#view-current-branch)
    - [View All Branches](#view-all-branches)
  - [Deleting Branches](#deleting-branches)
  - [Commit History](#commit-history)
  - [Fetching Changes](#fetching-changes)
  - [Page Routing](#page-routing)
    - [Adding a New Page](#adding-a-new-page)
  - [Important Notes](#important-notes)
    - [1. Branch Switching and `.env` Files](#1-branch-switching-and-env-files)
    - [2. Common Git Commands](#2-common-git-commands)

---

## Pulling Changes from Remote

Before making any changes to the project, ensure you pull the latest updates from the remote repository.

```bash
git pull origin <branch-name>
```

Replace `<branch-name>` with the branch you want to pull updates from

---

## Branch Management

### Create a New Branch

To create a new branch:

```bash
git branch <branch-name>
```

This creates a new branch locally.

### Switch to the New Branch

Once you've created the new branch, switch to it using:

```bash
git checkout <branch-name>
```

---

## Committing Changes

After making changes, stage and commit your changes as follows:

1. **Stage Changes**:

   ```bash
   git add .
   ```

   This stages all changes you’ve made.

2. **Commit Changes**:

   ```bash
   git commit -m "Your commit message"
   ```

   Add a descriptive commit message to explain the changes you’ve made.

---

## Pushing Changes to Remote

Once you've committed your changes, push the changes to the remote repository on the same branch:..

```bash
git push origin <branch-name>
```

If pushing to the `main` branch after a merge or final changes:

```bash
git push origin main
```

---

## Merge Branches

To merge a branch into your current branch (make sure you have checked out the branch you want to merge into, such as `main`):

```bash
git merge <branch-name>
```

This merges the changes from `<branch-name>` into your current branch.

---

## Handling Merge Conflicts

If there are any merge conflicts, Git will notify you. To resolve the conflicts:

1. Open the files Git highlights as conflicting.
2. Manually resolve the conflicts by editing the code.
3. After resolving conflicts, add the resolved files:

   ```bash
   git add <resolved-files>
   ```

4. Commit the merge:

   ```bash
   git commit -m "Resolved merge conflicts"
   ```

---

## Viewing Branches

### View Current Branch

To see the current branch you're on:

```bash
git branch
```

### View All Branches

To see all branches (both local and remote):

```bash
git branch -a
```

---

## Deleting Branches

To delete a branch locally:

```bash
git branch -d <branch-name>
```

This deletes the specified branch after it's merged.

---

## Commit History

To view the commit history for the current branch:

```bash
git log
```

This will display a list of previous commits and their associated messages.

---

## Fetching Changes

To fetch changes from the remote repository without merging them into your current branch:

```bash
git fetch origin
```

---

## Page Routing

In this project, there are two separate UI parts: **admin panel** and the **main project**. Each part has its own `route.js` file where routes are defined.

### Adding a New Page

To add a new page to either the admin panel or the main project:

1. Locate the respective `route.js` file in the project.
2. Add the new route by specifying:
   - **Path**: The URL path for the new page.
   - **Element**: The component or page that will be rendered for this path.

Example:

```javascript
{
  path: '/new-page',
  element: <NewPageComponent />
}
```

---

## Important Notes

### 1. Branch Switching and `.env` Files

When switching branches, the `.env` file in the `backend` directory may be deleted. You must recreate the `.env` file after switching branches to ensure proper environment variable configuration.

To avoid issues:

- Keep a backup of your `.env` file or recreate it manually after switching branches.

### 2. Common Git Commands

- **Creating a branch**: `git branch <branch-name>`
- **Switching branches**: `git checkout <branch-name>`
- **Pushing changes**: `git push origin <branch-name>`
- **Merging branches**: `git merge <branch-name>`
- **Viewing branches**: `git branch -a`
- **Resolving conflicts**: `git add <resolved-files>` and `git commit -m "Resolved merge conflicts"`

---
