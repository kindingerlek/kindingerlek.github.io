# Deployment Configuration

This repository is configured to automatically deploy to multiple platforms on every push to the `main` branch.

## GitHub Pages

The site is automatically deployed to GitHub Pages. No additional configuration is required.

## GitHub Releases

Every build automatically creates a GitHub Release with the following features:
- **Automatic Release Creation**: Each successful build creates a new release with a timestamped tag (format: `release-YYYYMMDD-HHMMSS`)
- **Build Artifacts**: The complete site build is packaged as `site-build.zip` and attached to each release
- **Release Retention**: Only the 5 most recent releases are kept. Older releases are automatically deleted to save storage space

## itch.io Deployment (Optional)

The workflow includes optional deployment to itch.io. To enable this feature:

### Setup Instructions

1. **Get your itch.io API Key**
   - Log in to [itch.io](https://itch.io)
   - Go to your [User Settings > API Keys](https://itch.io/user/settings/api-keys)
   - Generate a new API key

2. **Add GitHub Secret**
   - Go to your repository's Settings > Secrets and variables > Actions
   - Click "New repository secret"
   - Name: `ITCH_API_KEY`
   - Value: Your itch.io API key
   - Click "Add secret"

3. **Add GitHub Variable**
   - Go to your repository's Settings > Secrets and variables > Actions > Variables tab
   - Click "New repository variable"
   - Name: `ITCH_GAME`
   - Value: Your itch.io game identifier in the format `username/game-name`
     - Example: `myusername/my-awesome-game`
   - Click "Add variable"

### How it Works

Once configured, the workflow will:
- Package the built site into a zip file
- Upload the zip file to your itch.io game page
- Use the `html5` channel (suitable for web-based games/sites)
- The zip file can be extracted and served by itch.io's HTML5 player

**Note**: The itch.io deployment job only runs if `ITCH_GAME` variable is set. Make sure both the `ITCH_API_KEY` secret and `ITCH_GAME` variable are properly configured before pushing to main, otherwise the job will fail.

## Workflow Details

The deployment workflow consists of four jobs:

1. **build**: Builds the Astro site, creates a release tag, and packages the build as a zip file
2. **deploy**: Deploys the site to GitHub Pages
3. **release**: Creates a GitHub Release with the build artifact and manages release retention
4. **deploy-itch** (optional): Deploys the zip file to itch.io if configured

All jobs run automatically on every push to the `main` branch or can be triggered manually from the Actions tab.
