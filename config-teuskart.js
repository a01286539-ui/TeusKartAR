// =====================================================
//  EDIT ONLY THIS FILE. Everything you change is here.
// =====================================================
const CONFIG = {
  title: "TeusKart",
  subtitle: "Tap start, then point your camera at an 👁 icon on the poster",

  // LOADING SCREEN PICTURES (optional). Put the files in the media folder.
  // logo: a PNG with a transparent background works best (keep it under ~200 KB).
  // background: a full-screen photo (JPG, under ~300 KB). Leave "" to use none.
  logo: "media/logo.png",
  background: "",

  // ORDER MATTERS!  Item #1 = the FIRST image you uploaded to the MindAR compiler,
  // item #2 = the SECOND image, and so on.
  // The number of entries below MUST equal the number of images you compiled.
  //
  // RULES: every entry ends with a comma. Use straight quotes "like this".
  //        File names are case-sensitive and live in the media folder: "media/Gel1.jpg".
  targets: [

    // ================= TARGET 1 (active placeholder: replace me) =================
    { title: "TeusKart", type: "image", src: "media/target1.jpg", caption: "Replace this with your content" },


    // =====================================================
    //  TEMPLATES  (copy one, delete the leading //, edit it)
    //  Each one you add = one more image in the MindAR compiler, in the same order.
    // =====================================================

    // ---- SINGLE IMAGE ----
    // { title: "Our Cube", type: "image", src: "media/cube.jpg", caption: "Our prototype" },

    // ---- SINGLE VIDEO (.mp4, a few MB) ----
    // { title: "Demo video", type: "video", src: "media/demo.mp4", caption: "The cube in action" },

    // ---- SINGLE 3D MODEL (.glb) ----
    // scale: size as a fraction of the poster picture width (0.6 = 60%, 1 = full width)
    // y: move up (+) / down (-), in picture widths (e.g. 0.1)
    // spin: true = starts spinning. false = still (user drags, pinches, or presses Spin).
    // If the .glb has an animation, an "Animation" button appears by itself.
    // { title: "A3RO Cube", type: "model", src: "media/cube.glb", caption: "Press Animation to explode it",
    //   scale: 0.5, y: 0, spin: false },

    // ---- GALLERY: MIX OF IMAGE + VIDEO + 3D MODEL ----
    // auto: true = cycles by itself.  seconds = time per item (default for all).
    // Give videos/models their own longer "seconds" so they are not cut off.
    // { title: "Mixed gallery", type: "gallery", auto: true, seconds: 4,
    //   items: [
    //     { type: "image", src: "media/photo1.jpg", caption: "An image" },
    //     { type: "video", src: "media/clip.mp4",   caption: "A video",    seconds: 10 },
    //     { type: "model", src: "media/cube.glb",   caption: "A 3D model", seconds: 15, scale: 0.5, y: 0 },
    //   ] },

    // ---- SIMULATOR (sliders + animated graph; edit the SIM section below) ----
    // { title: "Simulator", type: "simulator", caption: "Move the sliders!" },

    // ---- OPTIONAL SETTING FOR image / video / model / gallery ----
    // overlay: false  -> show it in the bottom panel instead of on top of the poster
    // Example: { title: "Demo video", type: "video", src: "media/demo.mp4", overlay: false },

  ]
};

// ---------------- SIMULATOR (sliders + animated graph) ----------------
const SIM = {
  xlabel: "time (min)", ylabel: "C/C0", xmax: 60, ymax: 1,

  // One slider per input. "id" is the name you use inside model() below.
  sliders: [
    { id: "flow", label: "Flow rate",   unit: "L/min", min: 6,   max: 12,   step: 0.5, value: 9 },
    { id: "temp", label: "Temperature", unit: "°C",    min: 25,  max: 60,   step: 1,   value: 25 },
    { id: "co2",  label: "CO2 inlet",   unit: "ppm",   min: 400, max: 1000, step: 50,  value: 600 }
  ],

  // REPLACE THIS with your own equations (ported from MATLAB).
  // Receives v.flow, v.temp, v.co2. Must return a list of points {x, y}.
  model(v) {
    const cap = 1 - (v.temp - 25) / 120;               // demo: capacity drops with temperature
    const t50 = 20 * cap * (9 / v.flow) * (600 / v.co2); // demo: time to 50% breakthrough
    const w = 3 + v.flow * 0.3;
    const pts = [];
    for (let t = 0; t <= SIM.xmax; t += 0.5)
      pts.push({ x: t, y: 1 / (1 + Math.exp(-(t - t50) / w)) });
    return pts;
  }
};
