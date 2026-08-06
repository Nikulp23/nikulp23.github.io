#!/bin/bash

# Deployment script for personal portfolio
# Usage: ./deploy.sh "Your commit message"
#
# Pushing to main is all that's needed — .github/workflows/deploy.yml
# builds the site and publishes it to GitHub Pages automatically.

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

echo "Adding changes to git..."
git add .

echo "Committing changes..."
git commit -m "$COMMIT_MESSAGE"

echo "Pushing to GitHub..."
git push origin main

echo ""
echo "Pushed. GitHub Actions is now building and deploying."
echo "Watch it here: https://github.com/Nikulp23/nikulp23.github.io/actions"
echo "Website will be live at https://nikulp23.github.io in a few minutes"
