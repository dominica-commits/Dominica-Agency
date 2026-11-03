# Obiefuna Dominica — Portfolio website

A modern Next.js portfolio using the requested coral `#E49182` and black palette.

## Add your portrait
1. Open the `public` folder in this project.
2. Upload your chosen portrait and name the file exactly `profile.jpg`.
3. In `app/page.tsx`, replace the photo placeholder inside `.photo-placeholder` with:
   `<Image src="/profile.jpg" alt="Obiefuna Dominica" fill priority className="profile-photo" />`
4. Add this CSS rule to `app/globals.css`:
   `.profile-photo { object-fit: cover; object-position: center top; }`
   (The Image import is already included.)

## Before publishing
- Replace the sample project visuals and descriptions with genuine project screenshots, links and outcomes.
- Review all service descriptions and personal details.
- Add any project-specific testimonials only with permission.
- The WhatsApp link is set to +234 805 146 9197 and the email/LinkedIn links are set to the details supplied.

## Run locally
Install Node.js, then run:
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy
Push this project to GitHub, then import that repository in Vercel. Vercel detects Next.js automatically.
