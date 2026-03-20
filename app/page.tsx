"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent("Free Google Audit Request - XcelRank");
    const body = encodeURIComponent(
      `Name: ${form.name}\nBusiness: ${form.business}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:info@xcelrank.com?subject=${subject}&body=${body}`;
  };

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
            <a href="#audit" style={navLinkStyle}>
              Free Audit
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
              Local SEO • Google Growth • Lead Generation
            </div>

            <h1
              style={{
                fontSize: "clamp(42px, 6vw, 72px)",
                lineHeight: 1.02,
                margin: "0 0 18px",
                fontWeight: 800,
              }}
            >
              Get More Calls, More Customers, and Real Growth from Google
            </h1>

            <p
              style={{
                fontSize: "19px",
                lineHeight: 1.8,
                color: "#d8d8d8",
                maxWidth: "700px",
                marginBottom: "30px",
              }}
            >
              If your business isn’t showing up properly on Google, you’re losing
              customers every day.
              <br />
              <br />
              XcelRank helps you improve your visibility, attract more local
              enquiries, and turn searches into real business — without
              overcomplicated strategies or wasted effort.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginBottom: "20px",
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

            <p
              style={{
                color: "#d4af37",
                fontSize: "15px",
                lineHeight: 1.7,
                marginBottom: "24px",
                maxWidth: "680px",
              }}
            >
              Most local businesses lose customers daily simply because they are
              not visible enough online.
            </p>

            <div
              style={{
                display: "flex",
                gap: "18px",
                flexWrap: "wrap",
                color: "#cfcfcf",
                fontSize: "15px",
              }}
            >
              <span>✔ More visibility</span>
              <span>✔ More local enquiries</span>
              <span>✔ More customers choosing your business</span>
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
                    text: "Show up where people are already searching for your services and stand out from local competitors.",
                  },
                  {
                    title: "Better Lead Conversion",
                    text: "Turn traffic into real calls and enquiries with clearer messaging and a stronger customer journey.",
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
            backgroundColor: "#101010",
            border: "1px solid rgba(212,175,55,0.14)",
            borderRadius: "28px",
            padding: "36px 28px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <p style={sectionLabelStyle}>The Problem</p>
            <h2 style={sectionTitleStyle}>
              Most Local Businesses Are Invisible on Google
            </h2>
            <p style={sectionTextStyle}>
              If people can’t find your business, they can’t choose your
              business. That means lost calls, lost enquiries, and lost
              customers.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "18px",
            }}
          >
            {[
              "Competitors appearing above you",
              "An under-optimised Google presence",
              "Missed daily enquiries",
              "Weak online trust",
            ].map((item) => (
              <div
                key={item}
                style={{
                  backgroundColor: "#080808",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "18px",
                  padding: "20px",
                  color: "#d8d8d8",
                  lineHeight: 1.7,
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <p
            style={{
              color: "#d4af37",
              textAlign: "center",
              marginTop: "24px",
              fontSize: "16px",
              lineHeight: 1.7,
            }}
          >
            Every day this continues, your competitors take the customers that
            should be yours.
          </p>
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
          <h2 style={sectionTitleStyle}>
            Focused Systems Designed to Get You Seen and Chosen
          </h2>
          <p style={sectionTextStyle}>
            We don’t offer random services.
            <br />
            We focus on the key areas that directly impact your visibility,
            trust, and ability to generate real enquiries.
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
              text: "Make your business impossible to ignore on Google. We strengthen your presence so your business appears more credible, ranks more effectively, and attracts more calls from real local customers.",
            },
            {
              icon: "📈",
              title: "Local Visibility Boost",
              text: "Get found by customers actively searching in your area. We position your business where it matters most, helping you appear more often and compete more effectively in local search.",
            },
            {
              icon: "🤝",
              title: "Lead Conversion Setup",
              text: "Turn visitors into real enquiries. We improve your messaging and structure so more people take action — calling, messaging, and choosing your business.",
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

              <h3 style={{ fontSize: "24px", margin: "0 0 14px" }}>
                {service.title}
              </h3>

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
            <h2 style={sectionTitleStyle}>A Clear Process Focused on Results</h2>
            <p style={sectionTextStyle}>
              We keep things simple.
              <br />
              Identify the gaps, strengthen your presence, and turn visibility
              into real enquiries.
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
                text: "We analyse how your business currently appears online and identify where you are losing potential customers.",
              },
              {
                number: "02",
                title: "Strengthen Visibility",
                text: "We improve your positioning, optimise key areas, and make your business more competitive locally.",
              },
              {
                number: "03",
                title: "Generate More Enquiries",
                text: "We refine your messaging and conversion paths to turn visibility into calls, messages, and real leads.",
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
          padding: "95px 24px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={sectionLabelStyle}>Why Choose Us</p>
          <h2 style={sectionTitleStyle}>Built Around What Actually Matters</h2>
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
              text: "Everything we do is focused on one outcome — helping your business generate more visibility and more valuable enquiries.",
            },
            {
              title: "Strong Positioning",
              text: "We present your business in a way that builds trust quickly and makes you stand out from weaker competitors.",
            },
            {
              title: "Clear & Practical",
              text: "No unnecessary complexity. Just focused improvements that support real business growth.",
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
        id="audit"
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
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "34px" }}>
            <p style={sectionLabelStyle}>Free Audit</p>
            <h2 style={sectionTitleStyle}>Request Your Free Google Audit</h2>
            <p style={sectionTextStyle}>
              Send your details and we’ll review your current presence, identify
              visible gaps, and highlight where your business may be losing
              local customers.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{
              maxWidth: "820px",
              margin: "0 auto",
              display: "grid",
              gap: "18px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "18px",
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                style={inputStyle}
              />
              <input
                type="text"
                name="business"
                placeholder="Business Name"
                value={form.business}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Tell us a little about your business or what you want help with"
              value={form.message}
              onChange={handleChange}
              rows={6}
              required
              style={textareaStyle}
            />

            <div style={{ textAlign: "center" }}>
              <button type="submit" style={submitButtonStyle}>
                Get Free Google Audit
              </button>
            </div>
          </form>
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
          <h2 style={sectionTitleStyle}>
            Ready to Get More Customers from Google?
          </h2>
          <p style={sectionTextStyle}>
            Let’s talk about how XcelRank can help your business get seen, get
            more calls, and win more customers in your local area.
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

const inputStyle = {
  width: "100%",
  padding: "16px 18px",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.1)",
  backgroundColor: "#0d0d0d",
  color: "#ffffff",
  fontSize: "16px",
  outline: "none",
  boxSizing: "border-box" as const,
};

const textareaStyle = {
  width: "100%",
  padding: "16px 18px",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.1)",
  backgroundColor: "#0d0d0d",
  color: "#ffffff",
  fontSize: "16px",
  outline: "none",
  resize: "vertical" as const,
  boxSizing: "border-box" as const,
};

const submitButtonStyle = {
  backgroundColor: "#d4af37",
  color: "#080808",
  padding: "14px 26px",
  borderRadius: "999px",
  border: "none",
  fontWeight: 700,
  fontSize: "16px",
  cursor: "pointer",
};