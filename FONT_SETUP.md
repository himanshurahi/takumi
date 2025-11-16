# Protrakt Variable Font Setup

## Font Installation

To use the Protrakt Variable Regular font in the Hero section, you need to:

1. **Purchase/Download the Font:**
   - Get Protrakt Variable from: https://www.myfonts.com/products/regular-protrakt-variable-287802
   - Or from: https://www.myfonts.com/collections/protrakt-variable-font-arkitype

2. **Add Font Files:**
   - Place the font files in the `public/fonts/` directory:
     - `ProtraktVariable-Regular.woff2` (preferred)
     - `ProtraktVariable-Regular.woff` (fallback)
     - `ProtraktVariable-Regular.ttf` (fallback)

3. **Font Files Structure:**
   ```
   public/
     fonts/
       ProtraktVariable-Regular.woff2
       ProtraktVariable-Regular.woff
       ProtraktVariable-Regular.ttf
   ```

4. **The font is already configured in:**
   - `app/globals.css` - @font-face declaration
   - `tailwind.config.js` - Added as 'protrakt' font family
   - `components/Hero.tsx` - Applied to Takumi text

Once you add the font files, the "Takumi" text will automatically use Protrakt Variable Regular font!

## Alternative: Using Google Fonts or CDN

If you have a CDN link for Protrakt Variable, you can add it to `app/globals.css` instead of using local files.

