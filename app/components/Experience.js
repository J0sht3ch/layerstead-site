"use client";
import { useEffect, useRef, useState } from "react";

const environments = ["Home", "Small business", "Church"];
const problems = [
  { title: "Weak Wi-Fi", service: "Weak Wi-Fi", summary: "Coverage that fits your space.", body: "We look at access point placement, interference, and the layout of your building to understand where your connection falls short.", checks: ["Coverage & dead zones", "Access point placement", "Interference & equipment"] },
  { title: "Cable installation", service: "Cable installation", summary: "A dependable path for every connection.", body: "Plan wired connections around the equipment you use, the routes available, and where you need room to grow.", checks: ["Cable routes & access", "Device locations", "Termination & labeling"] },
  { title: "Network setup", service: "Network setup", summary: "Build a network that makes sense.", body: "Start with your devices and daily needs. We help plan the router, switches, and Wi-Fi that bring everything together.", checks: ["Equipment & capacity", "Guest network needs", "Configuration & handoff"] },
  { title: "Troubleshooting", service: "Troubleshooting", summary: "Find the cause. Make a practical plan.", body: "Intermittent outages, slow connections, or devices that will not cooperate? We trace the symptoms and explain the next steps.", checks: ["Connection path", "Device configuration", "ISP versus local issues"] },
];
export function ServiceFinder({ onSelect }) {
  const [environment, setEnvironment] = useState("Home");
  const [problem, setProblem] = useState(0);
  const selected = problems[problem];
  return <section className="finder-section" id="find-your-fit" aria-labelledby="finder-title">
    <div className="wrap">
      <div className="experience-heading"><p className="eyebrow">Start with your space</p><h2 id="finder-title">What is getting in your way?</h2><p>Two quick choices. A clearer starting point.</p></div>
      <div className="finder-layout">
        <div className="finder-controls">
          <fieldset><legend><span>01</span> Where do you need help?</legend><div className="choice-row">{environments.map(e => <button type="button" key={e} aria-pressed={environment === e} onClick={() => setEnvironment(e)}>{e}</button>)}</div></fieldset>
          <fieldset><legend><span>02</span> What would you like to improve?</legend><div className="problem-grid">{problems.map((p,i) => <button type="button" key={p.title} aria-pressed={problem === i} onClick={() => setProblem(i)}><span className="problem-number">0{i+1}</span>{p.title}<span aria-hidden="true">↗</span></button>)}</div></fieldset>
        </div>
        <div className="finder-result" aria-live="polite" aria-atomic="true">
          <div key={environment + problem} className="result-content"><p className="eyebrow">Your {environment.toLowerCase()} / {selected.title}</p><h3>{selected.summary}</h3><p>{selected.body}</p><p className="result-label">What we can explore together</p><ul>{selected.checks.map(c => <li key={c}><span aria-hidden="true">✓</span>{c}</li>)}</ul><button className="button light" type="button" onClick={() => onSelect(selected.service, `${environment} · ${selected.title}`)}>Let’s talk about my {environment.toLowerCase()} <span aria-hidden="true">↗</span></button><p className="result-note">A starting point for a conversation. Recommendations follow an assessment.</p></div>
        </div>
      </div>
    </div>
  </section>;
}
const layers = [
  {name:"Internet", x:15, y:50, title:"Start at the source.", text:"Your provider brings the connection to the building. Troubleshooting starts by separating service issues from problems inside your network."},
  {name:"Router", x:50, y:25, title:"Give traffic a clear direction.", text:"Your router connects networks and controls how traffic moves between them. Configuration matters just as much as the hardware."},
  {name:"Wi-Fi", x:85, y:50, title:"Reach the places you actually use.", text:"Thoughtful access point placement helps your wireless devices connect where you work, meet, and relax."},
  {name:"Wired devices", x:50, y:78, title:"Connect the equipment you depend on.", text:"Wired connections can support desks, printers, and other fixed equipment. Organized cabling makes future troubleshooting easier."},
];
export function NetworkExplorer() {
  const [active,setActive] = useState(1);
  return <section className="network-section section" aria-labelledby="network-title"><div className="wrap network-layout"><div><p className="eyebrow">A better-connected space</p><h2 id="network-title">Every connection{" "}<br />has a purpose.</h2><p className="network-instruction">Tap a point to explore your network.</p><div className="network-explanation" aria-live="polite" aria-atomic="true"><span className="index">0{active+1} / {layers[active].name}</span><h3>{layers[active].title}</h3><p>{layers[active].text}</p></div></div><div><div className="network-map"><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M15 50 L50 25 L85 50 M50 25 L50 78" className="network-wire"/><path d="M15 50 L50 25 L85 50 M50 25 L50 78" className="network-packets"/></svg>{layers.map((l,i)=><button type="button" key={l.name} className={active===i?"network-node active":"network-node"} style={{left:l.x+"%",top:l.y+"%"}} aria-pressed={active===i} onClick={()=>setActive(i)}><span className="node-symbol" aria-hidden="true">{["◎","⬡","◉","▤"][i]}</span><span>{l.name}</span></button>)}</div><p className="network-caption">Illustrative network · Explore each connection</p></div></div></section>;
}
const steps = [
  {name:"Tell us",title:"Start with what you notice.",body:"You do not need a technical diagnosis. Tell us what happens, where it happens, and what you want to work better.",detail:"Your part: describe the problem and your location."},
  {name:"Understand",title:"Look at the whole picture.",body:"We discuss your space, devices, and existing equipment, then confirm the assessment needed to understand the problem.",detail:"Together: agree on availability and the assessment."},
  {name:"Plan",title:"Know what happens next.",body:"Review a practical recommendation with a clearly defined scope, pricing, and responsibilities before authorizing work.",detail:"Your decision: approve the proposed scope and terms."},
  {name:"Connect",title:"Make the changes. Explain the result.",body:"Approved work follows the agreed plan. We explain what changed and provide the documentation included in your scope.",detail:"Your handoff: useful answers and agreed documentation."},
];
export function ProcessJourney() {
 const [step,setStep]=useState(0);
 return <section className="wrap section journey-section" id="process"><div className="experience-heading"><p className="eyebrow">How it works</p><h2>Clarity at every step.</h2><p>Explore the path from the first conversation to the handoff.</p></div><div className="journey-tabs" role="group" aria-label="Project steps">{steps.map((s,i)=><button type="button" key={s.name} aria-pressed={step===i} onClick={()=>setStep(i)}><span>0{i+1}</span>{s.name}</button>)}</div><div className="journey-panel"><div className="journey-number" aria-hidden="true">0{step+1}</div><div aria-live="polite" aria-atomic="true"><p className="eyebrow">Step {step+1} of 4</p><h3>{steps[step].title}</h3><p>{steps[step].body}</p><p className="journey-detail">{steps[step].detail}</p></div><div className="journey-navigation"><button type="button" aria-label="Previous step" disabled={step===0} onClick={()=>setStep(s=>s-1)}>←</button><button type="button" aria-label="Next step" disabled={step===3} onClick={()=>setStep(s=>s+1)}>→</button></div></div></section>;
}
export function ReadingProgress() {
 const ref=useRef(null);
 useEffect(()=>{let frame;const update=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-innerHeight;if(ref.current)ref.current.style.transform=`scaleX(${max>0?scrollY/max:0})`;});};update();addEventListener('scroll',update,{passive:true});addEventListener('resize',update);return()=>{cancelAnimationFrame(frame);removeEventListener('scroll',update);removeEventListener('resize',update);};},[]);
 return <div className="reading-progress" ref={ref} aria-hidden="true" />;
}
