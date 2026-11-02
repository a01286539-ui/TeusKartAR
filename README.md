# A3RO AR: baby-step guide

## 1. Make the tracking file (targets.mind)
1. Open the MindAR image compiler (search "MindAR image targets compiler", from the mind-ar-js docs).
2. Crop ONE picture per thing you want to scan from your poster file (cube photo, graph, diagram...).
   Each crop must look DIFFERENT from the others. Do NOT use the eye icon itself (see below).
3. Drag them all in, IN THE ORDER you want. Click Start, wait, click Download.
4. Put the downloaded `targets.mind` in this folder (next to index.html).

## 2. Add your content
1. Put pictures/videos in the `media` folder.
2. Open `config.js`. Item #1 in `targets` = first image you uploaded to the compiler, #2 = second...
3. Change `src:` file names, titles and captions. Types: image, video, slideshow, model, simulator.
4. Videos: .mp4 (H.264), under ~10 MB (use HandBrake). 3D: a .glb file (Blender: File > Export > glTF).

## 3. Sliders + your MATLAB model
In `config.js`, section SIM:
- `sliders`: add/remove lines (id, label, unit, min, max, step, value).
- `model(v)`: replace the demo equations with yours. Use `v.flow`, `v.temp`, `v.co2` (your slider ids).
  Return a list of {x, y} points. The page animates the curve by itself.
Tip: paste your MATLAB equations into Claude and ask "convert this to a JavaScript model(v) function".

## 4. Put it online (easiest way)
1. Go to app.netlify.com/drop, drag this WHOLE folder in. You get an https link.
   (Or use GitHub Pages.) Camera only works on https.
2. Make a QR code of that link (qrcode-monkey.com), print it on the poster.
3. Test on an iPhone AND an Android BEFORE printing the poster.
