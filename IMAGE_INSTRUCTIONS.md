# How to Add Your Profile Image

## Steps:

1. **Prepare your image:**

   - Recommended size: 512x512px or higher (square aspect ratio works best)
   - Supported formats: JPG, PNG, WEBP
   - Rename your image to: `profile.jpg`

2. **Add the image:**

   - Place `profile.jpg` in the `/public` folder
   - Path should be: `c:\codes\portfolio\public\profile.jpg`

3. **The image will automatically display** in the hero section on the right side!

## Current Fallback:

- If no image is found, a placeholder icon will display
- The fallback has the same styling to maintain design consistency

## Alternative Approach:

If you want to use a different filename:

1. Place your image in the `/public` folder (e.g., `my-photo.png`)
2. Update line 178 in `src/App.tsx`:
   ```tsx
   src = "/profile.jpg";
   ```
   Change to:
   ```tsx
   src = "/my-photo.png";
   ```
