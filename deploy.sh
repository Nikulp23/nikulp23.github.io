#!/bin/bash

# Deployment script for personal portfolio
# Usage: ./deploy.sh "Your commit message"

set -e  # Exit on error

# Check if commit message is provided
if [ -z "$1" ]; then
    echo "Error: Please provide a commit message"
    echo "Usage: ./deploy.sh \"Your commit message\""
    exit 1
fi

COMMIT_MESSAGE="$1"

echo "Starting deployment process..."
echo ""

# Step 1: Git add
echo "Adding changes to git..."
git add .

# Step 2: Git commit
echo "Committing changes..."
git commit -m "$COMMIT_MESSAGE"

# Step 3: Git push
echo "⬆Pushing to GitHub..."
git push origin main

# Step 4: Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
cd website
npm run deploy

echo ""
echo "Deployment complete!"
echo "Website will be live at https://nikulp23.github.io in a few minutes"