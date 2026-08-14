# Project JG

Static HTML/CSS/JavaScript prototype for Joe Galotti's interactive career portfolio.

## Preview locally

Open `index.html` in a web browser. For the most reliable local preview, run a tiny local web server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new public GitHub repository, for example `project-jg`.
2. Upload the contents of this folder to the repository root. `index.html` must remain at the root.
3. Commit the files to the `main` branch.
4. Open the repository's **Settings**.
5. Select **Pages** under **Code and automation**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select the `main` branch and `/ (root)` folder, then click **Save**.
8. GitHub will publish the site. For a project repository named `project-jg`, the default address is normally:
   `https://YOUR-USERNAME.github.io/project-jg/`

If you instead create a repository named exactly `YOUR-USERNAME.github.io`, GitHub uses it as your account-level Pages site and the address is `https://YOUR-USERNAME.github.io/`.

## Before publishing

GitHub Pages is public. Review every image and piece of text before uploading. Do not publish internal email addresses, private customer information, unpublished company information, internal-only performance data, private pricing, or sensitive screenshots.

This prototype intentionally includes only two public-facing social screenshots. More approved screenshots can be added later under `assets/`.
