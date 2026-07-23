document.addEventListener("DOMContentLoaded", () => {
  // Navbar scroll effect
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // Mobile Drawer Toggle
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const drawerLinks = document.querySelectorAll(".mobile-drawer a");

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener("click", () => {
      mobileDrawer.classList.toggle("active");
    });

    drawerLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("active");
      });
    });
  }

  // Interactive Agent Console Simulator
  const termLog = document.getElementById("terminal-log");
  const btnBakery = document.getElementById("btn-run-bakery");
  const btnVoice = document.getElementById("btn-run-voice");
  const btnScraper = document.getElementById("btn-run-scraper");
  const btnClear = document.getElementById("btn-clear-term");

  function appendTermLine(text, type = "sys") {
    if (!termLog) return;
    const line = document.createElement("div");
    line.className = `t-line ${type}`;
    line.innerText = text;
    termLog.appendChild(line);
    termLog.scrollTop = termLog.scrollHeight;
  }

  if (btnBakery) {
    btnBakery.addEventListener("click", async () => {
      appendTermLine("[Action] Triggering Hooda's Bakery BakeBot agent...", "agent");
      await new Promise(r => setTimeout(r, 500));
      appendTermLine("[Memory] Context initialized (40-message retention log active)", "sys");
      await new Promise(r => setTimeout(r, 600));
      appendTermLine("[NLP] Parsed input: '1 Chocolate Heart Cake, deliver to Model Town Rohtak 124001'", "sys");
      await new Promise(r => setTimeout(r, 600));
      appendTermLine("[Regex Engine] Extracted Street: 'Model Town', City: 'Rohtak', Pincode: '124001'", "sys");
      await new Promise(r => setTimeout(r, 700));
      appendTermLine("[Razorpay Gateway] Created sandbox order ORD-9482. Sent booking email via Nodemailer SMTP.", "ok");
    });
  }

  if (btnVoice) {
    btnVoice.addEventListener("click", async () => {
      appendTermLine("[Action] Dialing Fertility Point Hospital Receptionist (Nairobi, Kenya 🇰🇪)...", "agent");
      await new Promise(r => setTimeout(r, 500));
      appendTermLine("[Telephony] Plivo trunk connected. STT/TTS pipeline active.", "sys");
      await new Promise(r => setTimeout(r, 600));
      appendTermLine("[Swahili NLU] Caller: 'Nataka kuweka miadi ya daktari kesho saa nane.'", "sys");
      await new Promise(r => setTimeout(r, 600));
      appendTermLine("[Bilingual Agent] Response: 'Hakika, miadi yako imewekwa kesho saa 2:00 usiku.'", "sys");
      await new Promise(r => setTimeout(r, 700));
      appendTermLine("[Success] Total Round-trip Latency: 1.18s. Appointment logged to HospitalOS DB.", "ok");
    });
  }

  if (btnScraper) {
    btnScraper.addEventListener("click", async () => {
      appendTermLine("[Action] Launching Local Business Intelligence Lead Scraper (n8n)...", "agent");
      await new Promise(r => setTimeout(r, 500));
      appendTermLine("[Google Maps API] Scanning category: 'Healthcare & Clinics' in Rohtak & Gurugram...", "sys");
      await new Promise(r => setTimeout(r, 600));
      appendTermLine("[Pipeline] Extracted 42 verified contact emails, phone numbers & ratings.", "sys");
      await new Promise(r => setTimeout(r, 600));
      appendTermLine("[CRM Dump] Zero human intervention required. Output appended to Google Sheet.", "ok");
    });
  }

  if (btnClear) {
    btnClear.addEventListener("click", () => {
      if (termLog) {
        termLog.innerHTML = `
          <div class="t-line sys">[System] Initializing Agent Engine...</div>
          <div class="t-line sys">[System] Model connected: gemini-1.5-flash</div>
          <div class="t-line agent">[Agent] Ready for workflow triggers. Click an action below:</div>
        `;
      }
    });
  }
});
