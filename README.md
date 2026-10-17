# Rohitha S – Portfolio

React + Vite portfolio. All content is in `src/data/portfolio.js`.

## 1. Install Node.js
Download the LTS version from https://nodejs.org and install it. Check with `node -v` (v18 or newer).

## 2. Open in Visual Studio Code
Unzip the project. In VS Code choose **File > Open Folder** and select `rohitha-portfolio`. Open the terminal with **Terminal > New Terminal**.

## 3. Install dependencies
```
npm install
```

## 4. Run locally
```
npm run dev
```
Open the address shown (usually http://localhost:5173). Stop with `Ctrl + C`.

## 5. Replace the resume PDF
Copy your resume into the `public` folder and name it exactly `Rohitha_S_Resume.pdf`. Until you do, the Download Resume buttons will not find a file.

## 6. Add project screenshots
Put images in `public/projects/` (for example `public/projects/clinical.png`). Add `image: '/projects/clinical.png'` to the project in `src/data/portfolio.js`, then show it in `src/sections/Projects.jsx` at the top of `.project-body` with `<img src={p.image} alt="Screenshot of ..." loading="lazy" />`.

## 7–8. Add GitHub and Live Demo links
In `src/data/portfolio.js`, set `github: 'https://github.com/...'` and `live: 'https://...'` on a project. The buttons appear only when a link is set.

## 9. Customize colors and text
Colors and fonts are CSS variables at the top of `src/index.css`. Text, skills, projects and certifications are in `src/data/portfolio.js`. For certificates, set `image` and `url` on a certification.

## 10. Publish with Vercel
1. Run `npm run build` to confirm the build works.
2. Push the project to a GitHub repository.
3. Sign in at https://vercel.com with GitHub, click **Add New > Project**, import the repository and click **Deploy**. Vercel detects Vite automatically (build command `npm run build`, output folder `dist`).

## 11. Connect to LinkedIn and your resume
- LinkedIn: add your Vercel URL under **Contact info > Website** and in the **Featured** section.
- Resume: add the portfolio URL to your resume header next to your LinkedIn link.

## Contact form
The form validates input and opens the visitor's email app (`mailto:`). It does not send messages through a server. To receive messages directly, connect a service such as Formspree or EmailJS later.
