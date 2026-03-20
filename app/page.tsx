export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 py-4 lg:py-5">
            <div className="flex items-center justify-between gap-4">
              <a href="/" className="inline-flex items-center">
                <div className="text-3xl font-extrabold tracking-tight text-[#d4af37] sm:text-4xl">
                  XcelRank
                </div>
              </a>

              <div className="hidden items-center gap-3 lg:flex">
                <a
                  href="#audit"
                  className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#d4af37]/40 hover:text-[#d4af37]"
                >
                  Free Audit
                </a>
                <a
                  href="tel:07496004510"
                  className="rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.25)] transition hover:scale-[1.02] hover:opacity-95"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Mobile / Tablet nav */}
            <div className="lg:hidden">
              <nav className="grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2 sm:grid-cols-3">
                <a
                  href="#services"
                  className="rounded-xl px-3 py-3 text-center text-sm font-medium text-white/85 transition hover:bg-white/5 hover:text-[#d4af37]"
                >
                  Services
                </a>
                <a
                  href="#process"
                  className="rounded-xl px-3 py-3 text-center text-sm font-medium text-white/85 transition hover:bg-white/5 hover:text-[#d4af37]"
                >
                  Process
                </a>
                <a
                  href="#why-us"
                  className="rounded-xl px-3 py-3 text-center text-sm font-medium text-white/85 transition hover:bg-white/5 hover:text-[#d4af37]"
                >
                  Why Us
                </a>
                <a
                  href="#audit"
                  className="rounded-xl px-3 py-3 text-center text-sm font-medium text-white/85 transition hover:bg-white/5 hover:text-[#d4af37]"
                >
                  Free Audit
                </a>
                <a
                  href="#contact"
                  className="col-span-2 rounded-xl px-3 py-3 text-center text-sm font-medium text-white/85 transition hover:bg-white/5 hover:text-[#d4af37] sm:col-span-1"
                >
                  Contact
                </a>
              </nav>

              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#audit"
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#d4af37]/40 hover:text-[#d4af37]"
                >
                  Free Audit
                </a>
                <a
                  href="tel:07496004510"
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-[#d4af37] px-4 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.2)] transition hover:opacity-95"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 text-sm font-medium text-white/75 lg:flex">
              <a href="#services" className="transition hover:text-[#d4af37]">
                Services
              </a>
              <a href="#process" className="transition hover:text-[#d4af37]">
                Process
              </a>
              <a href="#why-us" className="transition hover:text-[#d4af37]">
                Why Us
              </a>
              <a href="#audit" className="transition hover:text-[#d4af37]">
                Free Audit
              </a>
              <a href="#contact" className="transition hover:text-[#d4af37]">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_30%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.12),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            <div>
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#d4af37]/25 bg-[#d4af37]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d4af37] sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
                <span className="truncate">Local SEO • Google Growth • Lead Generation</span>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Get More Calls, More Leads, and More Customers From Google
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                XcelRank helps local businesses improve Google visibility, optimise
                their Google Business Profile, and turn searches into real enquiries
                with a clean, practical growth strategy.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href="#audit"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#d4af37] px-7 py-4 text-base font-semibold text-black shadow-[0_16px_40px_rgba(212,175,55,0.25)] transition hover:scale-[1.01] hover:opacity-95"
                >
                  Get Free Audit
                </a>
                <a
                  href="tel:07496004510"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-base font-semibold text-white transition hover:border-[#d4af37]/40 hover:text-[#d4af37]"
                >
                  Call 07496004510
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                  <div className="text-sm font-semibold text-[#d4af37]">Based in</div>
                  <div className="mt-2 text-base font-semibold sm:text-lg">
                    Slough, United Kingdom
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                  <div className="text-sm font-semibold text-[#d4af37]">Focused on</div>
                  <div className="mt-2 text-base font-semibold sm:text-lg">
                    Local business growth
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                  <div className="text-sm font-semibold text-[#d4af37]">Goal</div>
                  <div className="mt-2 text-base font-semibold sm:text-lg">
                    More enquiries, not just traffic
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-[#d4af37]/10 blur-3xl sm:-inset-6" />
              <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6 lg:p-8">
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
                      Growth Snapshot
                    </div>
                    <div className="mt-2 text-xl font-bold sm:text-2xl">
                      Your Local Presence Matters
                    </div>
                  </div>
                  <div className="w-fit rounded-2xl border border-[#d4af37]/25 bg-[#d4af37]/10 px-3 py-2 text-sm font-semibold text-[#d4af37]">
                    Premium
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-white/60">Google Visibility</span>
                      <span className="text-sm font-semibold text-[#d4af37]">Optimised</span>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[78%] rounded-full bg-[#d4af37]" />
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-white/60">Lead Conversion Focus</span>
                      <span className="text-sm font-semibold text-[#d4af37]">High Priority</span>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[86%] rounded-full bg-[#d4af37]" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                      <div className="text-sm text-white/60">Strategy</div>
                      <div className="mt-2 text-lg font-bold sm:text-xl">Local SEO</div>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                      <div className="text-sm text-white/60">Outcome</div>
                      <div className="mt-2 text-lg font-bold sm:text-xl">More Enquiries</div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-[#d4af37]/10 p-5">
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                      XcelRank Promise
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/80">
                      Clean execution, stronger Google positioning, and a website
                      experience that feels premium from the first impression.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-3 sm:p-6">
            <div>
              <div className="text-2xl font-bold text-[#d4af37]">Premium</div>
              <div className="mt-1 text-sm text-white/60">Brand presentation</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#d4af37]">Focused</div>
              <div className="mt-1 text-sm text-white/60">On calls and leads</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#d4af37]">Simple</div>
              <div className="mt-1 text-sm text-white/60">No fluff, clear actions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-white/10 bg-[#070707]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              Services
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Practical growth services for local businesses
            </h2>
            <p className="mt-4 text-white/70">
              Clear, focused services designed to improve visibility, generate
              leads, and help your business win more local customers.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="group rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-[#d4af37]/25 lg:p-7">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/25 bg-[#d4af37]/10 text-2xl shadow-[0_0_30px_rgba(212,175,55,0.12)]">
                📍
              </div>
              <h3 className="text-xl font-semibold">Google Business Optimisation</h3>
              <p className="mt-4 leading-7 text-white/70">
                Improve your Google Business Profile to appear stronger, more
                trusted, and more visible in local search results.
              </p>
            </div>

            <div className="group rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-[#d4af37]/25 lg:p-7">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/25 bg-[#d4af37]/10 text-2xl shadow-[0_0_30px_rgba(212,175,55,0.12)]">
                📈
              </div>
              <h3 className="text-xl font-semibold">Local SEO</h3>
              <p className="mt-4 leading-7 text-white/70">
                Rank higher in your target areas and attract nearby customers who
                are already searching for your services.
              </p>
            </div>

            <div className="group rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-[#d4af37]/25 md:col-span-2 xl:col-span-1 lg:p-7">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/25 bg-[#d4af37]/10 text-2xl shadow-[0_0_30px_rgba(212,175,55,0.12)]">
                🎯
              </div>
              <h3 className="text-xl font-semibold">Lead Generation</h3>
              <p className="mt-4 leading-7 text-white/70">
                Turn traffic into enquiries with clear messaging, stronger offers,
                and conversion-focused improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              Process
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A simple process built for real results
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 lg:p-7">
              <div className="inline-flex rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-3 py-1 text-xs font-bold tracking-[0.2em] text-[#d4af37]">
                STEP 01
              </div>
              <h3 className="mt-5 text-xl font-semibold">Audit</h3>
              <p className="mt-4 leading-7 text-white/70">
                We review your online presence, Google profile, website, and local
                search opportunities.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 lg:p-7">
              <div className="inline-flex rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-3 py-1 text-xs font-bold tracking-[0.2em] text-[#d4af37]">
                STEP 02
              </div>
              <h3 className="mt-5 text-xl font-semibold">Optimise</h3>
              <p className="mt-4 leading-7 text-white/70">
                We improve key areas that affect rankings, trust, and conversion.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 lg:p-7">
              <div className="inline-flex rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-3 py-1 text-xs font-bold tracking-[0.2em] text-[#d4af37]">
                STEP 03
              </div>
              <h3 className="mt-5 text-xl font-semibold">Grow</h3>
              <p className="mt-4 leading-7 text-white/70">
                You get better visibility, stronger local presence, and more
                customer enquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="border-t border-white/10 bg-[#070707]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
                Why XcelRank
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Built around local business growth
              </h2>
              <p className="mt-4 max-w-xl leading-8 text-white/70">
                We keep things simple, premium, and focused on what matters most:
                getting your business seen and turning that visibility into real
                enquiries.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-semibold">Results Driven</h3>
                <p className="mt-3 leading-7 text-white/70">
                  We focus on calls, leads, and real business growth.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-semibold">Local Focus</h3>
                <p className="mt-3 leading-7 text-white/70">
                  Strategies designed specifically for local service businesses.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-semibold">Simple & Clear</h3>
                <p className="mt-3 leading-7 text-white/70">
                  No fluff, no confusion, just practical improvements that matter.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-semibold">Premium Approach</h3>
                <p className="mt-3 leading-7 text-white/70">
                  Strong branding, smart positioning, and conversion-focused thinking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit */}
      <section id="audit" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
                Free Audit
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Request your free Google visibility audit
              </h2>
              <p className="mt-4 max-w-xl leading-8 text-white/70">
                Tell us a bit about your business and we’ll review your current
                local presence and growth opportunities.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white/80">
                  • Quick and simple enquiry form
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white/80">
                  • Ideal for local businesses wanting more leads
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white/80">
                  • We will review and get back to you
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 lg:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                    Start Here
                  </div>
                  <div className="mt-2 text-xl font-bold sm:text-2xl">
                    Get Your Free Audit
                  </div>
                </div>
              </div>

              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-[#d4af37] focus:bg-black/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="business"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      Business Name
                    </label>
                    <input
                      id="business"
                      type="text"
                      placeholder="Your business name"
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-[#d4af37] focus:bg-black/50"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-[#d4af37] focus:bg-black/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-[#d4af37] focus:bg-black/50"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-white/80"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us about your business and what you need help with"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-[#d4af37] focus:bg-black/50"
                  />
                </div>

                <div className="rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 px-4 py-3 text-sm text-white/80">
                  We’ll review your current visibility and highlight practical growth opportunities.
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#d4af37] px-6 py-4 text-base font-semibold text-black shadow-[0_16px_40px_rgba(212,175,55,0.25)] transition hover:opacity-95"
                >
                  Request Free Audit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 bg-[#070707]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
                  Contact
                </div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to grow your business?
                </h2>
                <p className="mt-4 max-w-xl leading-8 text-white/70">
                  Speak to XcelRank about improving your local visibility and
                  generating more enquiries from Google.
                </p>
              </div>

              <div className="space-y-5 text-white/80">
                <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                  <span className="font-semibold text-[#d4af37]">Phone:</span>{" "}
                  <a
                    href="tel:07496004510"
                    className="break-all transition hover:text-[#d4af37] sm:break-normal"
                  >
                    07496004510
                  </a>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                  <span className="font-semibold text-[#d4af37]">Email:</span>{" "}
                  <a
                    href="mailto:info@xcelrank.com"
                    className="break-all transition hover:text-[#d4af37] sm:break-normal"
                  >
                    info@xcelrank.com
                  </a>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                  <span className="font-semibold text-[#d4af37]">Location:</span> Slough,
                  United Kingdom
                </div>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                  <a
                    href="tel:07496004510"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#d4af37] px-6 py-3.5 font-semibold text-black shadow-[0_16px_40px_rgba(212,175,55,0.22)] transition hover:opacity-95"
                  >
                    Call Now
                  </a>
                  <a
                    href="mailto:info@xcelrank.com"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/10 px-6 py-3.5 font-semibold text-white transition hover:border-[#d4af37]/40 hover:text-[#d4af37]"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating button */}
      <a
        href="tel:07496004510"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#d4af37] text-xl text-black shadow-[0_18px_40px_rgba(212,175,55,0.35)] transition hover:scale-105 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16 sm:text-2xl"
        aria-label="Call XcelRank"
      >
        ☎
      </a>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/50 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} XcelRank. All rights reserved.
        </div>
      </footer>
    </main>
  );
}