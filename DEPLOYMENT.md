# Deployment Guide

This repository is configured for deployment on multiple hosting platforms. Choose the platform that best fits your needs.

## 🚀 Deployment Options

### 1. GitHub Pages (Recommended)

**Status**: ✅ Fully Configured

GitHub Pages is set up with GitHub Actions for automatic deployment.

#### Configuration Files:
- `.github/workflows/deploy.yml` - GitHub Actions workflow

#### Setup Steps:
1. **Configure Secrets** (Required for API):
   - Go to: Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `GEMINI_API_KEY`
   - Value: Your Gemini API key

2. **Enable GitHub Pages**:
   - Already configured to use GitHub Actions
   - Workflow runs automatically on push to `main` branch
   - Site will be available at: `https://danielbarber11.github.io/vaxtop/`

3. **Manual Trigger** (Optional):
   - Go to Actions tab
   - Select "Deploy to GitHub Pages" workflow
   - Click "Run workflow"

#### Notes:
- First deployment may take 2-3 minutes
- Subsequent deployments are faster (1-2 minutes)
- HTTPS is enforced by default

---

### 2. Vercel

**Status**: ✅ Configuration Ready

Vercel provides fast deployment with edge network.

#### Configuration Files:
- `vercel.json` - Vercel configuration

#### Setup Steps:
1. **Import Repository**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select this GitHub repository

2. **Configure Environment Variables**:
   - Add environment variable:
     - Name: `GEMINI_API_KEY`
     - Value: Your Gemini API key

3. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically detect Vite configuration
   - Build command: `npm run build`
   - Output directory: `dist`

#### Features:
- Automatic deployments on git push
- Preview deployments for pull requests
- Custom domains
- Global CDN
- Instant rollbacks

---

### 3. Netlify

**Status**: ✅ Configuration Ready

Netlify offers simple deployment with continuous deployment.

#### Configuration Files:
- `netlify.toml` - Netlify configuration

#### Setup Steps:
1. **Import Repository**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select this GitHub repository

2. **Build Settings** (Auto-detected from netlify.toml):
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

3. **Configure Environment Variables**:
   - Go to: Site settings → Environment variables
   - Add variable:
     - Key: `GEMINI_API_KEY`
     - Value: Your Gemini API key

4. **Deploy**:
   - Click "Deploy site"
   - Netlify will build and deploy automatically

#### Features:
- Automatic deployments on git push
- Deploy previews for branches
- Custom domains
- Form handling
- Serverless functions
- Instant rollbacks

---

## 📋 Build Configuration

### Package Scripts
```bash
npm install      # Install dependencies
npm run dev      # Run development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Build Output
- **Directory**: `dist/`
- **Framework**: Vite + React
- **Node Version**: 18 (recommended)

---

## 🔐 Environment Variables

All platforms require the following environment variable:

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Your Google Gemini API key | Yes |

**Important**: Never commit your API key to the repository. Always use environment variables or secrets management.

---

## 🐛 Troubleshooting

### GitHub Actions Build Fails
- **Issue**: "Dependencies lock file is not found"
- **Solution**: 
  1. Run `npm install` locally to generate `package-lock.json`
  2. Commit and push the lock file
  
  OR
  
  Remove the `cache: 'npm'` line from `.github/workflows/deploy.yml`

### Build Fails with "GEMINI_API_KEY not found"
- **Solution**: Ensure you've configured the environment variable in your deployment platform's settings (see setup steps above)

### Page Shows 404 After Deployment
- **GitHub Pages**: Wait 2-3 minutes for initial deployment
- **Vercel/Netlify**: Check build logs for errors

---

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/pages)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

## 🎯 Recommended Deployment Flow

1. **For Quick Testing**: Use Vercel (fastest setup)
2. **For Production**: Use GitHub Pages (free, reliable)
3. **For Advanced Features**: Use Netlify (forms, functions)

All three platforms support:
- ✅ Automatic deployments
- ✅ HTTPS
- ✅ Custom domains
- ✅ Environment variables
- ✅ Rollback capabilities
