LEARNPATH FIREBASE AUTH SETUP
1. Copy firebase-config.js, auth.html, auth.js, and auth-guard.js into the same folder as index.html and lesson.html.
2. In BOTH index.html and lesson.html, add this inside <head> (keep existing styles):
   <style>body { visibility: hidden; }</style>
3. In BOTH files, add this immediately before </body>, after existing scripts:
   <script type="module" src="auth-guard.js"></script>
4. Firebase Console > Authentication > Settings: add your exact Vercel domain to Authorized domains. Add localhost only if testing through a local server.
5. Test on your Vercel HTTPS URL or local development server, not by double-clicking HTML files.
6. Commit and push changes to the GitHub branch connected to Vercel.
Existing progress and notes remain in browser localStorage; they are not synced to Firebase accounts. This client-side guard is a navigation gate, not server-side authorization. Never put private keys in these files.
Vercel deployment sync test.
