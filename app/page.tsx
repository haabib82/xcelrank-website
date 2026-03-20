export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#080808",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "rgba(8,8,8,0.92)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "28px",
              fontWeight: 800,
              color: "#d4af37",
              letterSpacing: "0.5px",
            }}
          >
            XcelRank
          </div>

          <nav
            style={{
              display: "flex",
              gap: "22px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a href="#services" style={navLinkStyle}>
              Services
            </a>
            <a href="#process" style={navLinkStyle}>
              Process
            </a>
            <a href="#why-us" style={navLinkStyle}>
              Why Us
            </a>
            <a href="#contact" style={navLinkStyle}>
              Contact
            </a>
            <a href="tel:07496004510" style={headerButtonStyle}>
              Call Now
            </a>
          </nav>
        </div>
      </header>

      <section
        style={{
          background:
            "radial-gradient(circle at top right, rgba(212,175,55,0.18), transparent 35%), radial-gradient(circle at top left, rgba(255,255,255,0.06), transparent 25%)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "90px 24px 80px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "42px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                backgroundColor: "rgba(212,175,55,0.12)",
                border: "1px solid rgba(212,175,55,0.25)",
                color: "#d4af37",
                padding: "8px 14px",
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Local SEO • Google Rankings • Lead Generation
            </div>

            <h1
              style={{
                fontSize: "clamp(40px, 6vw, 68px)",
                lineHeight: 1.05,
                margin: "0 0 18px",
                fontWeight: 800,
              }}
            >
              Grow Your Business
              <br />
              with XcelRank
            </h1>

            <p
              style={{
                fontSize: "19px",
                lineHeight: 1.75,
                color: "#d8d8d8",
                maxWidth: "680px",
                marginBottom: "30px",
              }}
            >
              We help local businesses improve their Google presence, attract more
              enquiries, and turn online searches into real calls, bookings, and
              customers.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginBottom: "26px",
              }}
            >
              <a href="tel:07496004510" style={primaryButtonStyle}>
                Call Now
              </a>
              <a
                href="https://wa.me/447496004510"
                target="_blank"
                rel="noreferrer"
                style={secondaryButtonStyle}
              >
                WhatsApp
              </a>
            </div>

            <div
              style={{
                display: "flex",
                gap: "18px",
                flexWrap: "wrap",
                color: "#cfcfcf",
                fontSize: "15px",
              }}
            >
              <span>✔ Results-focused approach</span>
              <span>✔ Simple, practical strategy</span>
              <span>✔ Built for local growth</span>
            </div>
          </div>

          <div>
            <div
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(212,175,55,0.08))",
                border: "1px solid rgba(212,175,55,0.2)",
                borderRadius: "28px",
                padding: "28px",
                boxShadow: "0 24px 70px rgba(0,0,0,0.45)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gap: "18px",
                }}
              >
                {[
                  {
                    title: "Google Business Profile",
                    text: "Improve visibility, trust, and local reach so your business stands out in search.",
                  },
                  {
                    title: "Local SEO Strategy",
                    text: "Target the right areas and search terms to bring more qualified local traffic.",
                  },
                  {
                    title: "Lead-Focused Website",
                    text: "Clear messaging, strong calls-to-action, and a professional digital presence.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "18px",
                      padding: "20px",
                    }}
                  >
                    <h3
                      style={{
                        margin: "0 0 8px",
                        fontSize: "20px",
                        color: "#ffffff",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        color: "#d1d1d1",
                        lineHeight: 1.7,
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 90px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
          }}
        >
          {[
            ["Clear Strategy", "No fluff, no confusion, just practical action."],
            ["Professional Presence", "A stronger online image that builds trust."],
            ["More Enquiries", "Designed to turn traffic into real leads."],
            ["Local Growth", "Focused on helping nearby customers find you."],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                backgroundColor: "#111111",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "20px",
                padding: "24px",
              }}
            >
              <h3 style={{ marginTop: 0, fontSize: "20px" }}>{title}</h3>
              <p style={{ marginBottom: 0, color: "#cfcfcf", lineHeight: 1.7 }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="services"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 90px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={sectionLabelStyle}>Our Services</p>
          <h2 style={sectionTitleStyle}>What We Help You With</h2>
          <p style={sectionTextStyle}>
            Practical digital growth services designed to help local businesses
            get found, get calls, and win more customers.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
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
                backgroundColor: "#111111",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "22px",
                padding: "28px",
                boxShadow: "0 12px 35px rgba(0,0,0,0.28)",
              }}
            >
              <div style={{ fontSize: "34px", marginBottom: "14px" }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: "23px", margin: "0 0 12px" }}>
                {service.title}
              </h3>
              <p style={{ color: "#d0d0d0", lineHeight: 1.75, margin: 0 }}>
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="process"
        style={{
          backgroundColor: "#101010",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "90px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p style={sectionLabelStyle}>How It Works</p>
            <h2 style={sectionTitleStyle}>A Simple Process</h2>
            <p style={sectionTextStyle}>
              We keep things straightforward, focused, and built around real
              business results.
            </p>
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
                number: "01",
                title: "Review Your Presence",
                text: "We look at how your business appears online and identify the main opportunities.",
              },
              {
                number: "02",
                title: "Improve Visibility",
                text: "We strengthen your profile, local relevance, and key trust signals.",
              },
              {
                number: "03",
                title: "Drive More Enquiries",
                text: "We focus on getting more calls, messages, and local customer action.",
              },
            ].map((step) => (
              <div
                key={step.number}
                style={{
                  backgroundColor: "#080808",
                  border: "1px solid rgba(212,175,55,0.18)",
                  borderRadius: "22px",
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    color: "#d4af37",
                    fontWeight: 800,
                    fontSize: "14px",
                    letterSpacing: "1px",
                    marginBottom: "12px",
                  }}
                >
                  {step.number}
                </div>
                <h3 style={{ margin: "0 0 12px", fontSize: "22px" }}>
                  {step.title}
                </h3>
                <p style={{ color: "#d0d0d0", lineHeight: 1.75, marginBottom: 0 }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="why-us"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "90px 24px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={sectionLabelStyle}>Why Choose Us</p>
          <h2 style={sectionTitleStyle}>Simple, Practical, Results-Focused</h2>
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
              title: "Professional & Clear",
              text: "No overcomplication, just a strong online presence and a strategy built to convert.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                backgroundColor: "#111111",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "22px",
                padding: "28px",
              }}
            >
              <h3 style={{ marginTop: 0, fontSize: "22px" }}>{item.title}</h3>
              <p style={{ color: "#d0d0d0", lineHeight: 1.75, marginBottom: 0 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 100px",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(145deg, rgba(212,175,55,0.14), rgba(255,255,255,0.03))",
            border: "1px solid rgba(212,175,55,0.2)",
            borderRadius: "28px",
            padding: "40px 28px",
            textAlign: "center",
          }}
        >
          <p style={sectionLabelStyle}>Contact Us</p>
          <h2 style={sectionTitleStyle}>Ready to Grow Your Business?</h2>
          <p style={sectionTextStyle}>
            Let’s talk about how XcelRank can help your business get found, get
            more calls, and win more customers.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "18px",
              flexWrap: "wrap",
              marginTop: "24px",
              marginBottom: "28px",
              color: "#ffffff",
              fontSize: "17px",
            }}
          >
            <a href="tel:07496004510" style={contactLinkStyle}>
              📞 07496 004510
            </a>
            <a href="mailto:info@xcelrank.com" style={contactLinkStyle}>
              📧 info@xcelrank.com
            </a>
            <span>📍 Slough, United Kingdom</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/447496004510"
              target="_blank"
              rel="noreferrer"
              style={primaryButtonStyle}
            >
              Message on WhatsApp
            </a>
            <a href="tel:07496004510" style={secondaryButtonStyle}>
              Call XcelRank
            </a>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/447496004510"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "999px",
          backgroundColor: "#d4af37",
          color: "#080808",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          fontSize: "28px",
          boxShadow: "0 14px 35px rgba(0,0,0,0.35)",
          zIndex: 100,
        }}
      >
        💬
      </a>

      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "26px 24px",
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

const navLinkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "15px",
};

const headerButtonStyle = {
  backgroundColor: "#d4af37",
  color: "#080808",
  textDecoration: "none",
  padding: "10px 18px",
  borderRadius: "999px",
  fontWeight: 700,
  fontSize: "14px",
};

const primaryButtonStyle = {
  backgroundColor: "#d4af37",
  color: "#080808",
  padding: "14px 24px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: 700,
  display: "inline-block",
};

const secondaryButtonStyle = {
  border: "1px solid #d4af37",
  color: "#d4af37",
  padding: "14px 24px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: 700,
  display: "inline-block",
};

const sectionLabelStyle = {
  color: "#d4af37",
  fontWeight: 700,
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  fontSize: "13px",
  marginBottom: "10px",
};

const sectionTitleStyle = {
  fontSize: "clamp(30px, 4vw, 42px)",
  margin: "0 0 14px",
};

const sectionTextStyle = {
  color: "#d0d0d0",
  fontSize: "17px",
  lineHeight: 1.75,
  maxWidth: "760px",
  margin: "0 auto",
};

const contactLinkStyle = {
  color: "#ffffff",
  textDecoration: "none",
};