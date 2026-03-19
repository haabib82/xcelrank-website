export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "40px", textAlign: "center" }}>
      
      {/* HERO SECTION */}
      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
        Get More Calls & Leads from Google
      </h1>

      <p style={{ fontSize: "18px", marginTop: "10px" }}>
        We help local businesses rank higher on Google and turn searches into real customers.
      </p>

      <div style={{ marginTop: "20px" }}>
        <a href="tel:07496004510">
          <button style={{ marginRight: "10px", padding: "10px 20px", cursor: "pointer" }}>
            Call Now
          </button>
        </a>

        <a href="https://wa.me/447496004510" target="_blank">
          <button style={{ padding: "10px 20px", cursor: "pointer" }}>
            WhatsApp
          </button>
        </a>
      </div>

      {/* SERVICES */}
      <div style={{ marginTop: "60px" }}>
        <h2>Our Services</h2>

        <p>Google Business Profile Optimisation</p>
        <p>Local SEO</p>
        <p>Lead Generation</p>
      </div>

      {/* CONTACT */}
      <div style={{ marginTop: "60px" }}>
        <h2>Contact Us</h2>

        <p>📞 07496 004510</p>
        <p>📧 info@xcelrank.com</p>
        <p>📍 Slough, United Kingdom</p>
      </div>

    </main>
  );
}