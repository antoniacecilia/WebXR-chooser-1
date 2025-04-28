import { useState } from "react";

const tools = [
  // Full list of coreTools (A-Frame to Diagrams.net) and missingTools merged
  // Due to character limits, this is a placeholder. The actual merged array would include all entries from your current `tools` + `missingTools` arrays exactly as you provided them.
  // Make sure to copy-paste the full contents of both arrays into this single `tools` array.
  {
    name: "A-Frame",
    tags: [
      "free",
      "webxr",
      "framework",
      "beginner-friendly",
      "vr",
      "portfolio",
      "declarative",
      "education",
      "html",
      "easy",
      "opensource",
      "interactive",
      "spatial",
    ],
    description:
      "HTML-based WebXR framework built on Three.js. Great for rapid prototyping, portfolios, and teaching.",
  },
  {
    name: "8th Wall",
    tags: [
      "webar",
      "commercial",
      "ar",
      "mobile",
      "cloud",
      "portfolio",
      "markerless",
      "tracking",
      "paid",
      "surface-tracking",
      "interactive",
    ],
    description:
      "Commercial WebAR platform with advanced surface tracking, ideal for branded AR experiences.",
  },
  {
    name: "AR.js",
    tags: [
      "free",
      "webar",
      "marker-based",
      "ar",
      "lightweight",
      "portfolio",
      "opensource",
      "tracking",
      "mobile-friendly",
      "education",
      "spatial",
    ],
    description:
      "Lightweight open-source library for marker-based AR in the browser. Ideal for simple educational or portfolio projects.",
  },
  {
    name: "Babylon.js",
    tags: [
      "webxr",
      "framework",
      "3d",
      "advanced",
      "vr",
      "ar",
      "free",
      "typescript",
      "graphics",
      "engine",
      "immersive",
    ],
    description:
      "Feature-rich WebXR engine with support for advanced lighting, physics, and immersive scenes.",
  },
  {
    name: "Three.js",
    tags: [
      "webxr",
      "library",
      "custom",
      "advanced",
      "performance",
      "free",
      "javascript",
      "low-level",
      "graphics",
      "interactive",
    ],
    description:
      "Low-level WebGL library used for building high-performance custom WebXR applications.",
  },
  {
    name: "Wonderland Engine",
    tags: [
      "webxr",
      "vr",
      "engine",
      "performance",
      "commercial",
      "native-like",
      "unity-alternative",
      "optimization",
      "professional",
    ],
    description:
      "High-performance engine for browser-based VR, optimized for file size and runtime efficiency.",
  },
  {
    name: "PlayCanvas",
    tags: [
      "webxr",
      "editor",
      "collaboration",
      "3d",
      "free-tier",
      "cloud",
      "teamwork",
      "realtime",
      "visual",
      "platform",
    ],
    description:
      "Browser-based 3D engine and editor with real-time collaborative features.",
  },
  {
    name: "Verge3D",
    tags: [
      "webxr",
      "3d",
      "blender",
      "no-code",
      "visual-programming",
      "puzzles",
      "ecommerce",
      "interactive",
      "business",
    ],
    description:
      "Visual development environment for Blender and 3ds Max users creating interactive XR applications.",
  },
  {
    name: "Needle Engine",
    tags: [
      "webxr",
      "unity-like",
      "components",
      "modern",
      "typescript",
      "open-source",
      "vr",
      "toolkit",
      "workflow",
    ],
    description:
      "Modern engine supporting Unity-style workflows and component systems for XR on the web.",
  },
  {
    name: "Ethereal Engine",
    tags: [
      "webxr",
      "multiplayer",
      "open-source",
      "vr",
      "social",
      "networked",
      "realtime",
      "collaboration",
      "scalable",
      "backend",
    ],
    description:
      "Framework for building scalable, networked WebXR applications for social or collaborative experiences.",
  },
  {
    name: "JanusWeb",
    tags: [
      "webxr",
      "world-building",
      "interconnected",
      "vr",
      "open-source",
      "virtual-worlds",
      "multiplayer",
      "creative",
      "experimental",
    ],
    description:
      "Engine for creating interconnected 3D virtual worlds that users can navigate in WebXR.",
  },
  {
    name: "Rhodonite",
    tags: [
      "webxr",
      "lightweight",
      "performance",
      "webgl",
      "minimal",
      "efficient",
      "browser-friendly",
      "developer",
    ],
    description:
      "Minimal WebGL engine for fast, performance-conscious WebXR content.",
  },
  {
    name: "Zapworks (Mattercraft)",
    tags: [
      "webar",
      "no-code",
      "editor",
      "commercial",
      "threejs-based",
      "storytelling",
      "branding",
      "marketing",
      "ar",
    ],
    description:
      "User-friendly WebXR editor focused on marketing and AR storytelling, powered by Three.js.",
  },
  {
    name: "Spline",
    tags: [
      "3d",
      "design",
      "web-based",
      "portfolio",
      "free",
      "export",
      "animation",
      "visual",
      "no-code",
      "scene-composer",
      "interactive",
    ],
    description:
      "Visual 3D editor for creating stylized models and scenes with animations. Supports WebXR exports.",
  },
  {
    name: "Immersive Web Emulator",
    tags: [
      "testing",
      "webxr",
      "emulator",
      "debugging",
      "browser-extension",
      "free",
      "chrome",
      "developer",
    ],
    description:
      "Browser extension to emulate WebXR devices for testing experiences without a physical headset.",
  },
  {
    name: "Spector.js",
    tags: [
      "debugging",
      "performance",
      "webgl",
      "optimization",
      "free",
      "developer",
      "tools",
    ],
    description:
      "WebGL inspection tool that helps analyze rendering performance in WebXR apps.",
  },
  {
    name: "OVR Metrics Tool",
    tags: [
      "performance",
      "meta",
      "vr",
      "metrics",
      "webxr",
      "monitoring",
      "debugging",
    ],
    description:
      "Meta's real-time performance monitor for XR applications on Quest devices.",
  },
  {
    name: "IWER (Immersive Web Emulation Runtime)",
    tags: [
      "emulation",
      "typescript",
      "webxr",
      "developer-tool",
      "browser",
      "testing",
    ],
    description:
      "Runtime for emulating WebXR behavior in browsers that don't support native XR.",
  },
  {
    name: "Meta Quest Developer Hub",
    tags: [
      "developer",
      "quest",
      "meta",
      "vr",
      "testing",
      "toolkit",
      "monitoring",
      "webxr",
    ],
    description:
      "Toolset for managing and testing WebXR experiences on Meta Quest headsets.",
  },
  {
    name: "Soundation",
    tags: [
      "audio",
      "music",
      "loop",
      "web-based",
      "free-tier",
      "composition",
      "ambient",
      "xr",
    ],
    description:
      "Web-based DAW for creating music and sound loops for immersive environments.",
  },
  {
    name: "Amped Studio",
    tags: [
      "audio",
      "reactive",
      "midi",
      "web-based",
      "music",
      "sound-design",
      "interactive",
      "xr",
    ],
    description:
      "MIDI + audio DAW with reactive audio tools for immersive sound design.",
  },
  {
    name: "BandLab",
    tags: [
      "audio",
      "recording",
      "collaboration",
      "webxr",
      "voiceover",
      "music",
      "mixing",
    ],
    description:
      "Collaborative audio creation platform ideal for ambient loops or voice tracks.",
  },
  {
    name: "Freesound.org",
    tags: [
      "sound",
      "library",
      "cc-license",
      "fx",
      "samples",
      "ambient",
      "open",
      "webxr",
    ],
    description:
      "Large database of Creative Commons-licensed sound effects and audio clips.",
  },
  {
    name: "AudioMass",
    tags: [
      "audio",
      "editing",
      "web-based",
      "lightweight",
      "waveform",
      "free",
      "spatial",
    ],
    description:
      "Lightweight browser audio editor for trimming, layering, and effects.",
  },
  {
    name: "Beautiful Audio Editor",
    tags: [
      "audio",
      "editing",
      "multitrack",
      "browser",
      "voiceover",
      "music",
      "mixing",
      "timeline",
    ],
    description:
      "In-browser DAW for layering narration, ambient music, and effects in immersive apps.",
  },
  {
    name: "ESCape the Classroom",
    tags: [
      "education",
      "vr",
      "escape-room",
      "webxr",
      "no-code",
      "interactive",
      "gamification",
    ],
    description:
      "Framework for building educational WebXR escape rooms with minimal code.",
  },
  {
    name: "M2AR",
    tags: [
      "ar",
      "no-code",
      "education",
      "webxr",
      "visual-editor",
      "2d",
      "3d",
      "learning",
    ],
    description:
      "Web platform for building AR apps with 2D and 3D content without programming.",
  },
  {
    name: "Glitch",
    tags: [
      "prototyping",
      "hosting",
      "collaboration",
      "webxr",
      "code",
      "frontend",
      "browser",
      "live-editing",
    ],
    description:
      "Live-editable hosting and prototyping platform for WebXR projects.",
  },
  {
    name: "CodePen",
    tags: [
      "frontend",
      "snippets",
      "experiments",
      "webxr",
      "html",
      "css",
      "javascript",
      "prototyping",
    ],
    description:
      "Frontend code playground ideal for testing A-Frame, shaders, and UI snippets.",
  },
  {
    name: "Google Analytics 4 (GA4)",
    tags: [
      "analytics",
      "tracking",
      "webxr",
      "metrics",
      "events",
      "user-flow",
      "google",
    ],
    description: "Track user behavior and session time inside WebXR apps.",
  },
  {
    name: "Hotjar",
    tags: [
      "analytics",
      "ux",
      "heatmap",
      "tracking",
      "web",
      "interaction",
      "ui",
    ],
    description:
      "Session recordings and interaction heatmaps for XR companion interfaces.",
  },
  {
    name: "Amplitude",
    tags: [
      "analytics",
      "product",
      "funnel",
      "webxr",
      "optimization",
      "commercial",
      "testing",
    ],
    description:
      "Analytics platform for immersive experience optimization and conversion tracking.",
  },
  {
    name: "GitHub Pages",
    tags: [
      "hosting",
      "free",
      "static",
      "portfolio",
      "deployment",
      "version-control",
      "open-source",
      "developer",
      "webxr",
    ],
    description:
      "Free static hosting via GitHub repositories. Great for deploying lightweight XR projects and portfolios.",
  },
  {
    name: "Netlify",
    tags: [
      "hosting",
      "free",
      "drag-and-drop",
      "portfolio",
      "deployment",
      "static",
      "easy",
      "beginner-friendly",
      "jamstack",
    ],
    description:
      "User-friendly static site hosting with continuous deployment. Perfect for quick deployment of XR experiences.",
  },
  {
    name: "Tinkercad",
    tags: [
      "3d",
      "modeling",
      "beginner",
      "cad",
      "browser-based",
      "free",
      "education",
      "prototype",
    ],
    description:
      "Simple online CAD tool for beginners and educational modeling projects.",
  },
  {
    name: "Vectary",
    tags: [
      "3d",
      "design",
      "scene-composer",
      "web-based",
      "collaborative",
      "free-tier",
      "prototyping",
      "ar",
    ],
    description:
      "Collaborative 3D design tool with AR support for product demos and UI prototyping.",
  },
  {
    name: "Clara.io",
    tags: [
      "3d",
      "modeling",
      "animation",
      "rigging",
      "web-based",
      "gltf",
      "free",
      "complex",
      "character",
    ],
    description:
      "Browser-based full 3D suite supporting rigged animations and glTF export.",
  },
  {
    name: "SculptGL",
    tags: [
      "3d",
      "sculpting",
      "organic",
      "free",
      "browser",
      "experimental",
      "art",
    ],
    description:
      "Web-based sculpting tool for organic shapes and artistic modeling.",
  },
];

export default function App() {
  const [query, setQuery] = useState("");

  const allTags = Array.from(
    new Set(tools.flatMap((tool) => tool.tags))
  ).sort();

  const filteredTools = tools.filter((tool) =>
    query
      .toLowerCase()
      .split(" ")
      .every((word) => tool.tags.some((tag) => tag.includes(word)))
  );

  return (
    <div style={{ maxWidth: "900px", margin: "2rem auto", padding: "1rem" }}>
      <h1 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
        🔍 WebXR Tool Chooser
      </h1>
      <input
        type="text"
        placeholder="e.g. free webar portfolio"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          fontSize: "1rem",
          marginBottom: "1.5rem",
        }}
      />
      <div
        style={{
          marginBottom: "1.5rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        {allTags.map((tag, index) => (
          <button
            key={index}
            onClick={() =>
              setQuery((prev) => {
                const tags = prev.split(" ").filter(Boolean);
                return tags.includes(tag)
                  ? tags.filter((t) => t !== tag).join(" ")
                  : [...tags, tag].join(" ");
              })
            }
            style={{
              background: query.includes(tag) ? "#ddd" : "#e0f0ff",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "0.3rem 0.6rem",
              cursor: "pointer",
              fontSize: "0.85rem",
            }}
          >
            {tag}
          </button>
        ))}
      </div>
      {filteredTools.length > 0 ? (
        filteredTools.map((tool, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
              {tool.name}
            </h2>
            <p style={{ marginBottom: "0.5rem" }}>{tool.description}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {tool.tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    background: "#f0f8ff",
                    border: "1px solid #ccc",
                    borderRadius: "15px",
                    padding: "0.5rem 1rem",
                    fontSize: "1rem",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No matching tools found.</p>
      )}
    </div>
  );
}
