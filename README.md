[script.js](https://github.com/user-attachments/files/25217501/script.js)[index.html](https://github.com/user-attachments/files/25217493/index.html)
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>You're Invited - Ceyda's Kına Gecesi</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <!-- Optional: elegant serif + clean sans -->
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>

<body>
  <!-- Envelope Gate -->
  <div id="gate" class="gate" aria-label="Invitation envelope screen">
    <button id="envelopeBtn" class="envelope" aria-label="Open invitation">
      <span class="envelope__shadow" aria-hidden="true"></span>
      <span class="envelope__body" aria-hidden="true"></span>
      <span class="envelope__flap" aria-hidden="true"></span>
      <span class="envelope__seal" aria-hidden="true">C&amp;A</span>
      <span class="envelope__hint">Tap to open</span>
    </button>
  </div>

  <!-- Main Site -->
  <main id="site" class="site is-hidden" aria-hidden="true">

    <!-- Decorative background motifs (subtle) -->
    <div class="motif motif--top" aria-hidden="true"></div>
    <div class="motif motif--bottom" aria-hidden="true"></div>

    <!-- HERO -->
    <section id="home" class="section hero">
      <div class="container">
        <h1 class="title">You're Invited<br><span class="title__accent">Ceyda's Kına Gecesi</span></h1>
        <p class="subtitle">
          Tuesday, April 7th, 2026<br>
          <strong>6:00 PM – 9:00 PM</strong><br>
          3651 Green Level W Rd, Suite 101<br>
  Apex, NC 27523
        </p>
       
        <div class="buttonRow" role="navigation" aria-label="Section navigation">
  <a class="btn btn--ghost" href="#faq">FAQ</a>
  <a class="btn btn--ghost" href="#rsvp">RSVP</a>
  <a
    class="btn btn--ghost"
    href="https://www.google.com/maps/place/Curate+Studio/@35.7778783,-78.9046252,20.82z/data=!4m15!1m8!3m7!1s0x89acececdd5bffff:0xcb5ef6860f60630b!2s3651+Green+Level+W+Rd+Suite+101,+Apex,+NC+27523,+USA!3b1!8m2!3d35.7780213!4d-78.9047996!16s%2Fg%2F11y1xtz09n!3m5!1s0x89acedc445dc930b:0x595d6beb0f96c2f2!8m2!3d35.7779112!4d-78.9046644!16s%2Fg%2F11svvkw7rg?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener"
  >
    View Location
  </a>
</div>


        <p class="micro">
          
        </p>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="section faq">
      <div class="container">
        <h2 class="sectionTitle">FAQ</h2>
        <p class="sectionLead">A few gentle notes to make the night easy for everyone.</p>

        <div class="faqList">
          <details class="faqItem">
            <summary>Are kids allowed?</summary>
            <p>No, unless otherwise specified. Thank you for understanding — we’d love for everyone to relax and enjoy the evening.</p>
          </details>

          <details class="faqItem">
            <summary>What gift can I bring?</summary>
            <p>Cash is most helpful. I'll be moving countries and the wedding will be in the UK, so it makes things much easier for us.</p>
          </details>

          <details class="faqItem">
            <summary>Will there be men?</summary>
            <p>This is an all-girls celebration, except for a short traditional dance when the groom will join briefly.</p>
          </details>

          <!-- Helpful additions -->
          <details class="faqItem">
            <summary>What should I wear?</summary>
            <p>Dress up if you’d like — think elegant, comfortable, and photo-friendly. If you have something in olive, gold, or warm neutrals, it’ll match the vibe beautifully.</p>
          </details>

          <details class="faqItem">
            <summary>What time should I arrive?</summary>
            <p>Please arrive at <strong>6:00 PM</strong> so you don’t miss the welcome and the start of the evening.</p>
          </details>

          <details class="faqItem">
            <summary>Will there be food and drinks?</summary>
            <p>Yes — we’ll have Turkish treats and refreshments. (If you have allergies, please note them in the RSVP.)</p>
          </details>

          <details class="faqItem">
            <summary>Can I take photos and videos?</summary>
            <p>Please do not take pictures of any person unless they have consented. Hijabs will be off, so please be mindful of others!</p>
          </details>
        </div>
      </div>
    </section>

    <!-- RSVP -->
    <section id="rsvp" class="section rsvp">
      <div class="container">
        <h2 class="sectionTitle">RSVP</h2>
        <p class="sectionLead">Please respond by March 12, 2026.</p>

        <form id="rsvpForm" class="formCard">
          <div class="fieldRow">
            <label>
              Full name
              <input name="name" type="text" autocomplete="name" required />
            </label>

            <label>
              Phone or email
              <input name="contact" type="text" autocomplete="email" required />
            </label>
          </div>

          <div class="fieldRow">
            <label>
              Will you attend?
              <select name="attendance" required>
                <option value="" selected disabled>Select one</option>
                <option value="Yes">Yes, I’ll be there</option>
                <option value="No">Sorry, I can’t make it</option>
              </select>
            </label>

            <label>
              Number of guests (including you)
              <input name="guests" type="number" min="1" max="10" value="1" required />
            </label>
          </div>

          <label>
            Allergies / notes (optional)
            <textarea name="notes" rows="3" placeholder="Allergies, dietary needs, anything we should know."></textarea>
          </label>

          <div class="formActions">
            <button class="btn btn--primary" type="submit">Send RSVP</button>
            <p id="formStatus" class="status" role="status" aria-live="polite"></p>
          </div>
        </form>
      </div>
    </section>

    <footer class="footer">
      <p>Made with love - Ceyda</p>
    </footer>
  </main>

  [// Envelope -> open -> fade gate -> reveal site
const gate = document.getElementById("gate");
const envelopeBtn = document.getElementById("envelopeBtn");
const site = document.getElementById("site");

envelopeBtn.addEventListener("click", () => {
  envelopeBtn.classList.add("is-open");

  // Give flap time to animate, then fade out gate
  setTimeout(() => {
    gate.classList.add("is-fading");

    // Reveal the site
    site.classList.remove("is-hidden");
    site.classList.add("is-visible");
    site.setAttribute("aria-hidden", "false");

    // Remove gate from accessibility tree after fade
    setTimeout(() => {
      gate.style.display = "none";
    }, 650);
  }, 600);
});

// Smooth scroll for anchor links
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;

  const id = link.getAttribute("href");
  const target = document.querySelector(id);
  if (!target) return;

  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

// RSVP submission (wire this to Google Sheets or another endpoint)
const form = document.getElementById("rsvpForm");
const statusEl = document.getElementById("formStatus");

// Put your endpoint here when you set it up:
const RSVP_ENDPOINT = "https://script.google.com/macros/s/AKfycbxmzM_D7kPZdn5s5a_yffzvIZkt4MQ7wQm5siYe7r3H-F6HRYJEPa2OQC3fmPQ_1Rw/exec";


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusEl.textContent = "Sending…";

  const data = Object.fromEntries(new FormData(form).entries());
  data.timestamp = new Date().toISOString();

  // If you haven't set an endpoint yet, don't fail silently
  if (!RSVP_ENDPOINT) {
    statusEl.textContent =
      "RSVP endpoint not connected yet. Add your Google Sheets web app URL in script.js.";
    return;
  }

  try {
    const res = await fetch(RSVP_ENDPOINT, {
      method: "POST",
      mode: "no-cors", // Apps Script often uses no-cors; you’ll still get success UX
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // With no-cors you can't read status reliably, so just assume OK
    form.reset();
    statusEl.textContent = "Thank you! Your RSVP has been received.";
  } catch (err) {
    statusEl.textContent = "Something went wrong. Please try again.";
  }
});Uploading script.js…]()


  <script src="script.js"></script>
</body>
</html>
[styles.css](https://github.com/user-attachments/files/25217504/styles.css)
:root{
  --beige: #F4EFE6;
  --beige-2: #EFE6D8;
  --burgundy: #6B1F2B;
  --burgundy-2: #8A2B3A;
  --olive: #556B2F;
  --ink: #1c1c1c;
  --card: rgba(255,255,255,0.65);
  --line: rgba(0,0,0,0.10);

  --serif: "Playfair Display", serif;
  --sans: "Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;

  --radius: 18px;
  --shadow: 0 18px 45px rgba(0,0,0,0.12);
}

*{ box-sizing: border-box; }
html, body{ height: 100%; }
body{
  margin: 0;
  color: var(--ink);
  background: radial-gradient(1200px 800px at 50% 10%, var(--beige-2), var(--beige));
  font-family: var(--sans);
  overflow-x: hidden;
}

/* ---------- Gate / Envelope ---------- */
.gate{
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 24px;
  background: radial-gradient(900px 600px at 50% 30%, var(--beige-2), var(--beige));
  z-index: 10;
  transition: opacity 600ms ease, transform 600ms ease;
}
.gate.is-fading{
  opacity: 0;
  transform: scale(1.02);
  pointer-events: none;
}

.envelope{
  position: relative;
  width: min(360px, 86vw);
  height: calc(min(360px, 86vw) * 0.66);
  border: 0;
  background: transparent;
  cursor: pointer;
  outline-offset: 8px;
}
.envelope__shadow{
  position: absolute;
  inset: 10% 8% 6% 8%;
  filter: blur(18px);
  background: rgba(0,0,0,0.18);
  border-radius: 22px;
  transform: translateY(16px);
}
.envelope__body{
  position: absolute;
  inset: 0;
  border-radius: 22px;
  background: linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.65));
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}
.envelope__flap{
  position: absolute;
  left: 6%;
  right: 6%;
  top: 0;
  height: 58%;
  background: linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.55));
  clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
  transform-origin: 50% 0%;
  transform: rotateX(0deg);
  transition: transform 800ms cubic-bezier(.2,.9,.2,1);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  border: 1px solid rgba(0,0,0,0.06);
  border-bottom: none;
}
.envelope__seal{
  position: absolute;
  left: 50%;
  top: 54%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, var(--burgundy-2), var(--burgundy));
  color: rgba(255,255,255,0.92);
  font-family: var(--serif);
  font-weight: 600;
  letter-spacing: 0.06em;
  display: grid;
  place-items: center;
  box-shadow: 0 10px 22px rgba(107,31,43,0.35);
}
.envelope__hint{
  position: absolute;
  left: 50%;
  bottom: -42px;
  transform: translateX(-50%);
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(0,0,0,0.55);
}

.envelope.is-open .envelope__flap{
  transform: rotateX(165deg);
}

/* ---------- Main Site ---------- */
.site{
  min-height: 100%;
  position: relative;
}
.site.is-hidden{
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  height: 0;
  overflow: hidden;
}
.site.is-visible{
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
  transition: opacity 700ms ease;
}

/* Subtle Mediterranean motifs (olive + fig vibes as abstract blobs) */
.motif{
  position: fixed;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.22;
  pointer-events: none;
  z-index: 0;
}
.motif--top{
  top: -240px;
  right: -220px;
  background: radial-gradient(circle at 40% 30%, var(--olive), transparent 60%),
              radial-gradient(circle at 70% 60%, var(--burgundy), transparent 55%);
}
.motif--bottom{
  bottom: -260px;
  left: -240px;
  background: radial-gradient(circle at 35% 35%, var(--burgundy), transparent 60%),
              radial-gradient(circle at 70% 65%, var(--olive), transparent 55%);
}

.section{
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 84px 22px;
  position: relative;
  z-index: 1;
}

.container{
  width: min(980px, 100%);
}

.eyebrow{
  margin: 0 0 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 12px;
  color: rgba(0,0,0,0.60);
}

.title{
  margin: 0;
  font-family: var(--serif);
  font-weight: 600;
  line-height: 1.05;
  font-size: clamp(40px, 5vw, 64px);
}
.title__accent{
  color: var(--burgundy);
}

.subtitle{
  margin: 18px 0 22px;
  font-size: 16px;
  line-height: 1.6;
  color: rgba(0,0,0,0.75);
}

.sectionTitle{
  font-family: var(--serif);
  margin: 0 0 10px;
  font-size: clamp(28px, 3.2vw, 40px);
  color: var(--burgundy);
}
.sectionLead{
  margin: 0 0 26px;
  color: rgba(0,0,0,0.70);
  max-width: 60ch;
}

.micro{
  margin-top: 18px;
  font-size: 13px;
  line-height: 1.6;
  color: rgba(0,0,0,0.55);
  max-width: 68ch;
}

/* Buttons */
.buttonRow{
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 14px;
}
.btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 999px;
  border: 1px solid var(--line);
  text-decoration: none;
  color: var(--ink);
  font-weight: 600;
  letter-spacing: 0.01em;
  transition: transform 160ms ease, background 160ms ease, border-color 160ms ease;
}
.btn:active{ transform: translateY(1px); }

.btn--primary{
  background: var(--burgundy);
  border-color: rgba(107,31,43,0.35);
  color: rgba(255,255,255,0.92);
}
.btn--primary:hover{
  background: var(--burgundy-2);
}
.btn--ghost{
  background: rgba(255,255,255,0.35);
}
.btn--ghost:hover{
  background: rgba(255,255,255,0.55);
  border-color: rgba(0,0,0,0.14);
}

/* Polaroids */
.polaroidGrid{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 18px;
}
.polaroid{
  grid-column: span 6;
  background: rgba(255,255,255,0.72);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 12px 12px 16px;
  box-shadow: 0 14px 32px rgba(0,0,0,0.10);
  transform: rotate(0deg);
  transition: transform 200ms ease;
}
.polaroid img{
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 10px;
  display: block;
  background: rgba(0,0,0,0.04);
}
.polaroid figcaption{
  margin-top: 10px;
  font-family: var(--serif);
  color: rgba(0,0,0,0.70);
}
.polaroid:hover{ transform: translateY(-3px) rotate(0deg); }

.polaroid--tilt1{ transform: rotate(-2deg); }
.polaroid--tilt2{ transform: rotate(2deg); }
.polaroid--tilt3{ transform: rotate(-1.3deg); }
.polaroid--tilt4{ transform: rotate(1.6deg); }

@media (max-width: 760px){
  .polaroid{ grid-column: span 12; }
  .polaroid img{ height: 220px; }
}

/* FAQ */
.faqList{
  display: grid;
  gap: 12px;
}
.faqItem{
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 14px 16px;
  box-shadow: 0 14px 32px rgba(0,0,0,0.06);
}
.faqItem summary{
  cursor: pointer;
  font-weight: 700;
  color: rgba(0,0,0,0.80);
  list-style: none;
}
.faqItem summary::-webkit-details-marker{ display:none; }
.faqItem p{
  margin: 10px 0 2px;
  color: rgba(0,0,0,0.72);
  line-height: 1.65;
}

/* RSVP Form */
.formCard{
  background: rgba(255,255,255,0.72);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 18px;
  box-shadow: 0 18px 40px rgba(0,0,0,0.08);
}
label{
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: rgba(0,0,0,0.78);
}
input, select, textarea{
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(0,0,0,0.14);
  padding: 12px 12px;
  font: inherit;
  background: rgba(255,255,255,0.85);
  outline: none;
}
input:focus, select:focus, textarea:focus{
  border-color: rgba(107,31,43,0.35);
  box-shadow: 0 0 0 4px rgba(107,31,43,0.10);
}
.fieldRow{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 12px;
}
@media (max-width: 720px){
  .fieldRow{ grid-template-columns: 1fr; }
}
.formActions{
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 14px;
  flex-wrap: wrap;
}
.status{
  margin: 0;
  font-size: 14px;
  color: rgba(0,0,0,0.65);
}

/* Footer */
.footer{
  padding: 30px 18px 46px;
  text-align: center;
  color: rgba(0,0,0,0.55);
  position: relative;
  z-index: 1;
}
.footerAccent{
  color: var(--olive);
  font-weight: 700;
}

