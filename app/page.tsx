export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#0b0b0b",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <header
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "20px 24px",
          position: "sticky",
          top: 0,
          backgroundColor: "rgba(11,11,11,0.95)",
          backdropFilter: "blur(8px)",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontSize: "24px", fontWeight: 700, color: "#d4af37" }}>
            XcelRank
          </div>

          <nav
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
              fontSize: "15px",
            }}
          >
            <a href="#services" style={{ color: "#ffffff", textDecoration: "none" }}>
              Services
            </a>
            <a href="#why-us" style={{ color: "#ffffff", textDecoration: "none" }}>
              Why Us
            </a>
            <a href="#contact" style={{ color: "#ffffff", textDecoration: "none" }}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "90px 24px 70px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              color: "#d4af37",
              fontWeight: 700,
              letterSpacing: "1px",
              marginBottom: "14px",
              textTransform: "uppercase",
              fontSize: "13px",
            }}
          >
            Local SEO • Google Rankings • Lead Generation
          </p>

          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              lineHeight: 1.1,
              margin: "0 0 18px",
              fontWeight: 800,
            }}
          >
            Grow Your Business with XcelRank
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#d6d6d6",
              maxWidth: "620px",
              marginBottom: "30px",
            }}
          >
            We help local businesses rank higher on Google, generate more leads,
            and turn online searches into real customers.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:07496004510"
              style={{
                backgroundColor: "#d4af37",
                color: "#0b0b0b",
                padding: "14px 24px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              Call Now
            </a>

            <a
              href="https://wa.me/447496004510"
              target="_blank"
              rel="noreferrer"
              style={{
                border: "1px solid #d4af37",
                color: "#d4af37",
                padding: "14px 24px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <div
            style={{
              background:
                "linear-gradient(145deg, rgba(212,175,55,0.18), rgba(255,255,255,0.04))",
              border: "1px solid rgba(212,175,55,0.25)",
              borderRadius: "24px",
              padding: "28px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
              }}
            >
              {[
                "Improve your Google Business Profile visibility",
                "Attract more local calls and enquiries",
                "Build stronger trust with a professional online presence",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "18px",
                    borderRadius: "16px",
                    color: "#f2f2f2",
                    lineHeight: 1.6,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 24px 80px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p
            style={{
              color: "#d4af37",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: "13px",
              marginBottom: "10px",
            }}
          >
            Our Services
          </p>
          <h2 style={{ fontSize: "36px", margin: 0 }}>What We Help You With</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            {
              icon: "📍",
              title: "Google Business Optimisation",
              text: "Improve your Google Business Profile so your business appears stronger, more trusted, and more visible in local search.",
            },
            {
              icon: "📈",
              title: "Local SEO",
              text: "Rank higher in your target area and attract nearby customers who are actively searching for your services.",
            },
            {
              icon: "🤝",
              title: "Lead Generation",
              text: "Turn website traffic into enquiries with clear messaging, conversion-focused pages, and a strategy built for growth.",
            },
          ].map((service) => (
            <div
              key={service.title}
              style={{
                backgroundColor: "#121212",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "28px",
                boxShadow: "0 12px 35px rgba(0,0,0,0.25)",
              }}
            >
              <div style={{ fontSize: "34px", marginBottom: "16px" }}>{service.icon}</div>
              <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>{service.title}</h3>
              <p style={{ color: "#d0d0d0", lineHeight: 1.7, margin: 0 }}>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section
        id="why-us"
        style={{
          backgroundColor: "#111111",
          padding: "80px 24px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p
              style={{
                color: "#d4af37",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontSize: "13px",
                marginBottom: "10px",
              }}
            >
              Why Choose Us
            </p>
            <h2 style={{ fontSize: "36px", margin: 0 }}>
              Simple, Practical, Results-Focused
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                title: "Results Driven",
                text: "We focus on what matters most: more calls, more leads, and more revenue.",
              },
              {
                title: "Local Expertise",
                text: "We understand how local businesses compete online and how to improve visibility in your target area.",
              },
              {
                title: "Simple & Effective",
                text: "No fluff, no confusion, just clear actions designed to help your business grow.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: "#0b0b0b",
                  borderRadius: "18px",
                  padding: "24px",
                  border: "1px solid rgba(212,175,55,0.15)",
                }}
              >
                <h3 style={{ marginTop: 0, fontSize: "22px" }}>{item.title}</h3>
                <p style={{ color: "#d0d0d0", lineHeight: 1.7, marginBottom: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(145deg, rgba(212,175,55,0.12), rgba(255,255,255,0.03))",
            border: "1px solid rgba(212,175,55,0.18)",
            borderRadius: "24px",
            padding: "36px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#d4af37",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: "13px",
              marginBottom: "10px",
            }}
          >
            Contact Us
          </p>

          <h2 style={{ fontSize: "36px", marginTop: 0, marginBottom: "16px" }}>
            Ready to Grow Your Business?
          </h2>

          <p
            style={{
              color: "#d0d0d0",
              fontSize: "17px",
              lineHeight: 1.7,
              maxWidth: "700px",
              margin: "0 auto 28px",
            }}
          >
            Let’s talk about how XcelRank can help your business get found, get
            more calls, and win more customers.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "18px",
              flexWrap: "wrap",
              marginBottom: "24px",
            }}
          >
            <a
              href="tel:07496004510"
              style={{ color: "#ffffff", textDecoration: "none", fontSize: "17px" }}
            >
              📞 07496 004510
            </a>
            <a
              href="mailto:info@xcelrank.com"
              style={{ color: "#ffffff", textDecoration: "none", fontSize: "17px" }}
            >
              📧 info@xcelrank.com
            </a>
            <span style={{ color: "#ffffff", fontSize: "17px" }}>
              📍 Slough, United Kingdom
            </span>
          </div>

          <a
            href="https://wa.me/447496004510"
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: "#d4af37",
              color: "#0b0b0b",
              padding: "14px 26px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 700,
              display: "inline-block",
            }}
          >
            Message on WhatsApp
          </a>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/447496004510"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          backgroundColor: "#d4af37",
          color: "#0b0b0b",
          width: "58px",
          height: "58px",
          borderRadius: "999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          fontSize: "26px",
          boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
        }}
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "24px",
          textAlign: "center",
          color: "#bdbdbd",
          fontSize: "14px",
        }}
      >
        © 2026 XcelRank. All rights reserved.
      </footer>
    </main>
  );
}