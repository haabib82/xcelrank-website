export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#070707",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "rgba(7,7,7,0.92)",
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
            "radial-gradient(circle at top right, rgba(212,175,55,0.22), transparent 34%), radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent 24%)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "95px 24px 80px",
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
                border: "1px solid rgba(212,175,55,0.24)",
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
              Premium Local SEO • Google Growth • Lead Generation
            </div>

            <h1
              style={{
                fontSize: "clamp(42px, 6vw, 72px)",
                lineHeight: 1.02,
                margin: "0 0 18px",
                fontWeight: 800,
              }}
            >
              Premium Growth
              <br />
              for Local Businesses
            </h1>

            <p
              style={{
                fontSize: "19px",
                lineHeight: 1.8,
                color: "#d8d8d8",
                maxWidth: "680px",
                marginBottom: "30px",
              }}
            >
              XcelRank helps ambitious local businesses improve visibility on
              Google, attract more quality enquiries, and build a stronger online
              presence that turns searches into real customers.
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
              <span>✔ Premium positioning</span>
              <span>✔ Clear growth strategy</span>
              <span>✔ Built to convert enquiries</span>
            </div>
          </div>

          <div>
            <div
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(212,175,55,0.08))",
                border: "1px solid rgba(212,175,55,0.18)",
                borderRadius: "30px",
                padding: "28px",
                boxShadow: "0 24px 70px rgba(0,0,0,0.45)",
              }}
            >
              <div style={{ display: "grid", gap: "18px" }}>
                {[
                  {
                    title: "Stronger Google Presence",
                    text: "Build a profile that looks more trusted, more complete, and more visible to nearby customers.",
                  },
                  {
                    title: "Higher Local Visibility",
                    text: "Show up in the right places when people search for the services you offer in your area.",
                  },
                  {
                    title: "Better Lead Conversion",
                    text: "Turn traffic into calls, messages, and enquiries with stronger messaging and a cleaner customer journey.",
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
            ["Premium Presentation", "A cleaner, more credible online image that builds trust quickly."],
            ["Local Authority", "A stronger presence where nearby customers are already searching."],
            ["Higher Intent Leads", "Built to attract real enquiries rather than empty traffic."],
            ["Growth-Focused Strategy", "Every improvement is designed to support business growth."],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                backgroundColor: "#101010",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "22px",
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
          padding: "0 24px 100px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "42px" }}>
          <p style={sectionLabelStyle}>How We Help You Grow</p>
          <h2 style={sectionTitleStyle}>Premium Services Built Around Results</h2>
          <p style={sectionTextStyle}>
            Practical systems designed to increase your visibility, generate more
            enquiries, and help your business grow with a stronger local presence.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            {
              icon: "📍",
              title: "Google Growth System",
              text: "Transform your Google Business Profile into a powerful lead-generating asset. We strengthen visibility, improve trust signals, refine key business information, and position your profile to attract more local customers consistently.",
            },
            {
              icon: "📈",
              title: "Local Visibility Boost",
              text: "Increase your presence across your target area and appear in front of customers actively searching for your services. This is designed to help you compete more effectively, stand out in local search, and build stronger area-based visibility.",
            },
            {
              icon: "🤝",
              title: "Lead Conversion Setup",
              text: "Turn visitors into real enquiries with stronger messaging, clearer calls-to-action, and a cleaner customer journey. We focus on creating a digital presence that encourages calls, WhatsApp messages, and genuine business enquiries.",
            },
          ].map((service) => (
            <div
              key={service.title}
              style={{
                background:
                  "linear-gradient(180deg, rgba(18,18,18,1), rgba(10,10,10,1))",
                border: "1px solid rgba(212,175,55,0.16)",
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "0 16px 40px rgba(0,0,0,0.28)",
              }}
            >
              <div
                style={{
                  width: "62px",
                  height: "62px",
                  borderRadius: "18px",
                  backgroundColor: "rgba(212,175,55,0.1)",
                  border: "1px solid rgba(212,175,55,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "30px",
                  marginBottom: "18px",
                }}
              >
                {service.icon}
              </div>

              <h3 style={{ fontSize: "24px", margin: "0 0 14px" }}>{service.title}</h3>

              <p style={{ color: "#d0d0d0", lineHeight: 1.8, margin: 0 }}>
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="process"
        style={{
          backgroundColor: "#0f0f0f",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "95px 24px",
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
            <h2 style={sectionTitleStyle}>A Clear, Professional Process</h2>
            <p style={sectionTextStyle}>
              We keep the process simple, focused, and built around helping your
              business get seen, trusted, and contacted more often.
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
                text: "We assess how your business currently appears online and identify the strongest areas for improvement.",
              },
              {
                number: "02",
                title: "Strengthen Visibility",
                text: "We improve key trust signals, optimise your presence, and make your business more competitive locally.",
              },
              {
                number: "03",
                title: "Generate More Enquiries",
                text: "We focus on clearer positioning and stronger conversion paths to help turn searches into real leads.",
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
                <h3 style={{ margin: "0 0 12px", fontSize: "22px" }}>{step.title}</h3>
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
          padding: "95px 24px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={sectionLabelStyle}>Why Choose Us</p>
          <h2 style={sectionTitleStyle}>Positioned for Serious Growth</h2>
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
              text: "Everything is built around one goal: helping your business generate stronger local visibility and more valuable enquiries.",
            },
            {
              title: "Premium Positioning",
              text: "We focus on creating a more credible, professional online presence that helps your business stand out from weaker competitors.",
            },
            {
              title: "Clear & Practical",
              text: "No overcomplicated jargon or unnecessary fluff. Just focused improvements that support business growth.",
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
            borderRadius: "30px",
            padding: "42px 30px",
            textAlign: "center",
          }}
        >
          <p style={sectionLabelStyle}>Contact Us</p>
          <h2 style={sectionTitleStyle}>Ready to Elevate Your Business?</h2>
          <p style={sectionTextStyle}>
            Let’s talk about how XcelRank can strengthen your visibility, improve
            your digital presence, and help turn more local searches into real
            opportunities.
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