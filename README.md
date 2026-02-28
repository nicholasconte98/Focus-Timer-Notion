# Focus-Timer-Notion
Focus Timer (For Notion Dashboard)

This repository contains a simple web-based countdown timer designed to be embedded in a Notion page via an `iframe`. It uses a dark theme with a black background and white/grey accents.

## Project Structure

- `index.html` – the main page for the timer
- `css/style.css` – styling with dark theme
- `js/script.js` – countdown logic in vanilla JavaScript

## Building & Running

No build step is required; the timer is a static web page. You can run it locally by opening `index.html` in your browser or by serving the directory with a simple static server (e.g. `npx serve .` or `python -m http.server`).

### Embedding in Notion

1. Host the `index.html` somewhere accessible (GitHub Pages, Vercel, Netlify, etc.).
2. In Notion, add an `Embed` block and paste the public URL.

Example:

```
<iframe src="https://your-hosted-url/index.html" width="400" height="300"></iframe>
```

The timer is responsive and should fit nicely in a dashboard.

## Usage

- Enter the number of minutes and click **Start**.
- Click **Reset** to stop and clear the timer.

