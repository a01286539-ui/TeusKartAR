// =====================================================
//  EDIT ONLY THIS FILE. Everything you change is here.
// =====================================================
const CONFIG = {
  title: "A3RO",
  subtitle: "Tap start, then point your camera at an 👁 icon on the poster",

  // ORDER MATTERS!  Item #1 = the FIRST image you uploaded to the MindAR compiler,
  // item #2 = the SECOND image, and so on.
  // type can be: "image" | "video" | "slideshow" | "model" | "simulator"
  targets: [  
    { title: "Our Aerogel Synthesis", type: "slideshow", auto: false, seconds: 4,
      slides:   ["media/Gel1.jpg", "media/Chiller1.jpg", "media/Liofi1.jpg","media/AerogelCel.jpg","media/CALSES1.jpg" ],
      captions: ["Step 1: Gel Formation", "Step 2: Chiller Setup", "Step 3: Liofilization", "Step 4: Cellulose Aerogel", "Step 5: Carbon Aerogel"] },
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
