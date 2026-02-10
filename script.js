// Envelope -> open -> fade gate -> reveal site
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
});