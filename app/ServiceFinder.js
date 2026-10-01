"use client";
import { useRef, useState } from "react";
const options = [
  {
    name: "My Wi-Fi is unreliable",
    service: "Wi-Fi assessment",
    detail:
      "We look at coverage, interference, equipment, and placement before recommending an upgrade.",
  },
  {
    name: "I need a wired connection",
    service: "Ethernet & cabling",
    detail:
      "Tell us where the connection needs to go and what you want to connect. We’ll discuss the route and assess the space.",
  },
  {
    name: "My business network needs help",
    service: "Small business networking",
    detail:
      "We start with the devices, users, and interruptions that affect your work, then identify a practical path forward.",
  },
  {
    name: "I’m not sure what’s wrong",
    service: "Network troubleshooting",
    detail:
      "Describe what happens and when. You don’t need the technical diagnosis before you contact us.",
  },
];
export default function ServiceFinder() {
  const dialog = useRef(null);
  const [choice, setChoice] = useState(null);
  return (
    <>
      <button
        className="button primary"
        onClick={() => {
          setChoice(null);
          dialog.current.showModal();
        }}
      >
        Find your starting point <span>↗</span>
      </button>
      <dialog
        ref={dialog}
        className="finder"
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current.close();
        }}
      >
        <button
          className="close"
          aria-label="Close service finder"
          onClick={() => dialog.current.close()}
        >
          ×
        </button>
        <p className="eyebrow">LET’S NARROW IT DOWN</p>
        <h2>
          What’s getting
          <br />
          in your way?
        </h2>
        {choice === null ? (
          <div className="finder-options">
            {options.map((o, i) => (
              <button key={o.name} onClick={() => setChoice(i)}>
                {o.name}
                <span>↗</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="finder-result">
            <p className="eyebrow">YOUR STARTING POINT</p>
            <h3>{options[choice].service}</h3>
            <p>{options[choice].detail}</p>
            <a
              className="button primary"
              href={
                "/?service=" +
                encodeURIComponent(options[choice].service) +
                "#contact"
              }
              onClick={() => dialog.current.close()}
            >
              Tell us more ↗
            </a>
            <button className="text-button" onClick={() => setChoice(null)}>
              ← Choose a different problem
            </button>
          </div>
        )}
        <p className="small">A starting point, not a diagnosis or a booking.</p>
      </dialog>
    </>
  );
}
