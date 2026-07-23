document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("nav");
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav a");
  const glassCards = document.querySelectorAll(".glass-card, .project-card, .exp-card, .skill-category, .ach-card, .research-card, .contact-cta");
  
  // Agent Console selectors
  const terminalLog = document.getElementById("terminal-log");
  const runBakeryBtn = document.getElementById("run-bakery-btn");
  const runVoiceBtn = document.getElementById("run-voice-btn");
  const runLeadBtn = document.getElementById("run-lead-btn");
  const statCountVal = document.getElementById("bug-count-val"); 
  
  // Cyber Mode selector
  const partyBtn = document.getElementById("party-btn");

  // Playful welcome console log
  console.log(
    "%c👾 Hey there, inspector! You really are a coder. 🚀\n%cWelcome to Anshu's premium portfolio console!",
    "color: #8b5cf6; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 0px rgba(0,0,0,0.2);",
    "color: #06b6d4; font-size: 14px; font-style: italic;"
  );

  // 1. Scroll effect for Navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 2. Mobile Drawer Toggle
  const toggleMobileNav = () => {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("active");
    document.body.style.overflow = mobileNav.classList.contains("active") ? "hidden" : "";
  };

  hamburger.addEventListener("click", toggleMobileNav);

  // Close mobile nav when clicking on link
  mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileNav.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // 3. Dynamic Glow Effect for glass cards
  glassCards.forEach(card => {
    if (!card.classList.contains("glass-card")) {
      card.classList.add("glass-card");
    }

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });
  });

  // 4. Agent Console Sandbox Logic
  let agentRuns = 150;
  if (statCountVal) {
    statCountVal.innerText = `${agentRuns}+`;
  }

  const addTerminalLine = (text, type = "info") => {
    if (!terminalLog) return;
    const line = document.createElement("div");
    line.className = `terminal-line ${type}`;
    line.innerText = text;
    terminalLog.appendChild(line);
    
    // Auto-scroll to bottom
    terminalLog.scrollTop = terminalLog.scrollHeight;
    
    // Limit log lines to 30
    while (terminalLog.children.length > 30) {
      terminalLog.removeChild(terminalLog.firstChild);
    }
  };

  const incrementAgentStat = () => {
    agentRuns++;
    if (statCountVal) {
      statCountVal.innerText = `${agentRuns}+`;
      statCountVal.style.transform = "scale(1.2)";
      setTimeout(() => {
        statCountVal.style.transform = "scale(1)";
      }, 150);
    }
  };

  const disableButtons = (disable) => {
    [runBakeryBtn, runVoiceBtn, runLeadBtn].forEach(btn => {
      if (btn) btn.disabled = disable;
    });
  };

  const runAgentWorkflow = (name, steps) => {
    disableButtons(true);
    incrementAgentStat();
    
    addTerminalLine(`\n>>> [Agent Control] Starting workflow: ${name}...`, "system");
    
    let stepIndex = 0;
    const executeStep = () => {
      if (stepIndex < steps.length) {
        addTerminalLine(steps[stepIndex], "agent");
        stepIndex++;
        const delay = document.body.classList.contains("cyber-active") ? 200 + Math.random() * 100 : 800 + Math.random() * 400;
        setTimeout(executeStep, delay);
      } else {
        addTerminalLine(`>>> [Agent Control] Workflow ${name} completed successfully.`, "system");
        disableButtons(false);
      }
    };
    
    setTimeout(executeStep, 500);
  };

  if (runBakeryBtn) {
    runBakeryBtn.addEventListener("click", () => {
      const steps = [
        "[BakeBot] Conversational memory loaded (40-msg capacity)...",
        "[BakeBot] Listening for customer inputs on vercel portal...",
        "[BakeBot] Customer: \"Need 2 dozen chocolate cupcakes delivery to Rohtak 124001 tomorrow.\"",
        "[BakeBot] Triggering Regex-Based Address Auto-Parser...",
        "[BakeBot] Parsed address output -> City: Rohtak, Pincode: 124001, Street: Default.",
        "[BakeBot] Writing booking details to MongoDB Atlas...",
        "[BakeBot] Generating secure Razorpay checkout link...",
        "[BakeBot] Dispatched invoice & booking confirmation via SMTP/Nodemailer...",
        "[CRM] New customer lead logged on Live Admin dashboard."
      ];
      runAgentWorkflow("Hooda's Bakery Automation", steps);
    });
  }

  if (runVoiceBtn) {
    runVoiceBtn.addEventListener("click", () => {
      const steps = [
        "[Voice AI] Initiating Millis.ai engine for Fertility Point Hospital...",
        "[Voice AI] Deployed call channel (Nairobi, Kenya 🇰🇪)... Connected.",
        "[Voice AI] Latency optimized to 1.2s. NLU loaded for English & Swahili.",
        "[Voice AI] Incoming call: \"Mambo! I need to book a clinic appointment for Thursday.\"",
        "[Voice AI] Swahili speech recognized. Routing to scheduler tool...",
        "[HospitalOS] Auto-generated patient UHID in MongoDB database.",
        "[Voice AI] SMS booking validation dispatched via WhatsApp Business API.",
        "[Voice AI] Call finished. Session logs uploaded to HospitalOS admin panel."
      ];
      runAgentWorkflow("Bilingual Voice Receptionist", steps);
    });
  }

  if (runLeadBtn) {
    runLeadBtn.addEventListener("click", () => {
      const steps = [
        "[Lead Engine] Spawning Maps scraper agent...",
        "[Lead Engine] Target query: \"cafes near Rohtak Haryana\"",
        "[Lead Engine] Extracting business data from Google Maps API...",
        "[Lead Engine] Extracted 14 business profiles (names, ratings, contact info).",
        "[Lead Engine] Running email extractor on targets...",
        "[Lead Engine] Found 6 active business emails. Deduplicating...",
        "[CRM] Writing leads to Google Sheets spreadsheet...",
        "[CRM] Dispatched lead summary alert to admin Telegram channel."
      ];
      runAgentWorkflow("Maps Scraper & Lead Gen", steps);
    });
  }

  // 5. Cyber Mode Easter Egg
  if (partyBtn) {
    partyBtn.innerText = "⚡ Toggle Cyber Mode";
    partyBtn.addEventListener("click", () => {
      document.body.classList.toggle("cyber-active");
      if (document.body.classList.contains("cyber-active")) {
        partyBtn.innerText = "⚡ Disable Cyber Mode";
        partyBtn.style.background = "linear-gradient(135deg, var(--accent-cyan), var(--accent-green))";
        addTerminalLine("[System] Cyber Mode enabled. Neural grid overclocked.", "system");
      } else {
        partyBtn.innerText = "⚡ Toggle Cyber Mode";
        partyBtn.style.background = "";
        addTerminalLine("[System] Cyber Mode disabled. Grid returned to standard.", "system");
      }
    });
  }
});
