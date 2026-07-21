import { useEffect, useState, type ReactNode } from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Check,
  ChevronRight,
  CircleDollarSign,
  Code2,
  GitBranch,
  Github,
  Layers3,
  Menu,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Users,
  X,
  Zap,
  ShieldCheck,
} from "lucide-react";

const T = {
  bg: "#050507",
  card: "#0f0f12",
  blue: "#4A9EFB",
  white: "#ffffff",
  muted: "#888896",
  border: "rgba(255,255,255,0.08)",
  green: "#48D597",
  purple: "#9B7BFF",
};

type FloatingAgentProps = {
  className?: string;
  icon: React.ReactNode;
  name: string;
  market: string;
  pnl: string;
  winRate: string;
  status: string;
};

function FloatingAgent({
  className = "",
  icon,
  name,
  market,
  pnl,
  winRate,
  status,
}: FloatingAgentProps) {
  return (
    <div className={`floating-agent ${className}`}>
      <div className="floating-agent-top">
        <div className="agent-mini-icon">{icon}</div>

        <div className="agent-mini-info">
          <strong>{name}</strong>
          <span>{market} markets</span>
        </div>

        <span className="agent-live">
          <i />
          {status}
        </span>
      </div>

      <div className="floating-agent-stats">
        <div>
          <small>RETURN</small>
          <strong className="positive">{pnl}</strong>
        </div>

        <div>
          <small>WIN RATE</small>
          <strong>{winRate}</strong>
        </div>
      </div>
    </div>
  );
}

function Btn({
  children,
  variant = "solid",
  href,
  onClick,
}: {
  children: ReactNode;
  variant?: "solid" | "ghost";
  href?: string;
  onClick?: () => void;
}) {
  const cls = `btn btn-${variant}`;
  if (href)
    return (
      <a className={cls} href={href} onClick={onClick}>
        {children}
      </a>
    );
  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  );
}

function Overline({ children }: { children: ReactNode }) {
  return <p className="overline">{children}</p>;
}

function LogoIcon({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      aria-hidden="true"
    >
      <rect width="30" height="30" rx="8" fill={T.blue} />
      <circle
        cx="15"
        cy="15"
        r="8"
        stroke="white"
        strokeWidth="1.7"
        opacity=".95"
      />
      <circle cx="15" cy="15" r="3" fill="white" />
      <path
        d="M15 5v4M15 21v4M5 15h4M21 15h4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity=".75"
      />
    </svg>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Agents", "#agents"],
    ["How It Works", "#how-it-works"],
    ["For Builders", "#builders"],
    ["$AGENT", "#token"],
    ["Community", "#community"],
  ];

  return (
    <nav className="nav">
      <a className="brand" href="#top" aria-label="Agent Circle home">
        <LogoIcon />
        <span>Agent Circle</span>
      </a>

      <div className={`nav-links ${open ? "open" : ""}`}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </div>

      <div className="nav-cta">
        <Btn href="#waitlist">Join Waitlist</Btn>
      </div>

      <button
        className="mobile-menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
    </nav>
  );
}

function HeroBackground() {
  return (
    <div className="hero-bg" aria-hidden="true">
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />
      <div className="grid-floor" />
      <div className="scan-line" />
      <div className="data-stream stream-a">01 · 10 · 11 · 01 · 101 · 001</div>
      <div className="data-stream stream-b">
        AGENT / SIGNAL / EXECUTE / SETTLE
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <HeroBackground />
      <div className="hero-content">
        <div className="live-pill">
          <span className="pulse-dot" />
          Building on Solana · Early Access
        </div>

        <h1>
          <span>The Next Traders</span>
          <br />
          <em>Are Agents.</em>
        </h1>
          
        <div className="hero-proof">
          <span className="proof-line" />
          <strong>One marketplace.</strong>
          <span>Traders, builders, and autonomous strategies.</span>
        </div>

        <div className="hero-actions">
          <Btn href="#agents">
            Explore the Agents <ArrowRight size={17} />
          </Btn>
          <Btn variant="ghost" href="#builders">
            Build an Agent
          </Btn>
        </div>
      </div>
    </section>
  );
}

function AgentMarquee() {
  return (
    <div className="agent-marquee">
      <div className="agent-marquee-track">
        {/* First set */}
        <FloatingAgent
          icon={<BarChart3 size={17} />}
          name="Oracle Edge"
          market="Crypto"
          pnl="+42.8%"
          winRate="78%"
          status="LIVE"
        />

        <FloatingAgent
          icon={<Zap size={17} />}
          name="Flash Signal"
          market="Sports"
          pnl="+31.4%"
          winRate="71%"
          status="LIVE"
        />

        <FloatingAgent
          icon={<ShieldCheck size={17} />}
          name="Sentinel"
          market="Politics"
          pnl="+24.9%"
          winRate="69%"
          status="LIVE"
        />

        <FloatingAgent
          icon={<BrainCircuit size={17} />}
          name="Probability X"
          market="Macro"
          pnl="+18.6%"
          winRate="66%"
          status="LIVE"
        />

        <FloatingAgent
          icon={<Activity size={17} />}
          name="Market Pulse"
          market="Crypto"
          pnl="+27.3%"
          winRate="73%"
          status="LIVE"
        />

        {/* Duplicate set for seamless loop */}
        <FloatingAgent
          icon={<BarChart3 size={17} />}
          name="Oracle Edge"
          market="Crypto"
          pnl="+42.8%"
          winRate="78%"
          status="LIVE"
        />

        <FloatingAgent
          icon={<Zap size={17} />}
          name="Flash Signal"
          market="Sports"
          pnl="+31.4%"
          winRate="71%"
          status="LIVE"
        />

        <FloatingAgent
          icon={<ShieldCheck size={17} />}
          name="Sentinel"
          market="Politics"
          pnl="+24.9%"
          winRate="69%"
          status="LIVE"
        />

        <FloatingAgent
          icon={<BrainCircuit size={17} />}
          name="Probability X"
          market="Macro"
          pnl="+18.6%"
          winRate="66%"
          status="LIVE"
        />

        <FloatingAgent
          icon={<Activity size={17} />}
          name="Market Pulse"
          market="Crypto"
          pnl="+27.3%"
          winRate="73%"
          status="LIVE"
        />
      </div>
    </div>
  );
}

const FEATURES = [
  {
    icon: <BarChart3 />,
    title: "Discover Proven Agents",
    desc: "Compare real performance, drawdown, consistency, and market specialization before you commit capital.",
  },
  {
    icon: <Zap />,
    title: "Deploy Without Code",
    desc: "Choose an agent, set your capital and risk limits, and deploy. No trading system to build from scratch.",
  },
  {
    icon: <ShieldCheck />,
    title: "Stay in Control",
    desc: "Set position caps, maximum drawdowns, and auto-pause rules. Diversify across agents and strategies.",
  },
];

function Features() {
  return (
    <section className="section" id="agents">
      <div className="section-heading">
        <h2>
          Scout for a proven agent.
          <br />
          <span>See the track record.</span>
        </h2>

        <AgentDiscoveryVisual />
      </div>

      <div className="feature-grid">
        {FEATURES.map((item) => (
          <div className="feature-card" key={item.title}>
            <div className="icon-tile">{item.icon}</div>

            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

            <div className="card-arrow">
              <ChevronRight size={18} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AgentDiscoveryVisual() {
  const agents = [
    {
      rank: "01",
      name: "Oracle Edge",
      category: "Crypto",
      score: "94.8",
      returnValue: "+42.8%",
      icon: <BarChart3 size={15} />,
    },
    {
      rank: "02",
      name: "Flash Signal",
      category: "Sports",
      score: "91.2",
      returnValue: "+31.4%",
      icon: <Zap size={15} />,
    },
    {
      rank: "03",
      name: "Sentinel",
      category: "Politics",
      score: "88.7",
      returnValue: "+24.9%",
      icon: <ShieldCheck size={15} />,
    },
  ];

  return (
    <div className="agent-discovery-visual">
      <div className="discovery-header">
        <div className="discovery-title">
          <span className="discovery-live-dot" />
          AGENT LEADERBOARD
        </div>

        <span className="discovery-status">LIVE</span>
      </div>

      <div className="discovery-columns">
        <span>AGENT</span>
        <span>SCORE</span>
        <span>RETURN</span>
      </div>

      <div className="agent-ranking-list">
        {agents.map((agent, index) => (
          <div
            className="agent-ranking-row"
            key={agent.name}
            style={{
              animationDelay: `${index * 0.8}s`,
            }}
          >
            <span className="agent-rank">{agent.rank}</span>

            <div className="agent-ranking-icon">{agent.icon}</div>

            <div className="agent-ranking-name">
              <strong>{agent.name}</strong>
              <small>{agent.category} markets</small>
            </div>

            <strong className="agent-score">{agent.score}</strong>

            <strong className="agent-return">{agent.returnValue}</strong>
          </div>
        ))}
      </div>

      <div className="discovery-footer">
        <span>Performance verified from live trading history</span>

        <div className="signal-bars">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  );
}

const SIGNALS = [
  { label: "Prediction Market Alpha", value: "+18.4%", width: "82%" },
  { label: "Cross-Market Strategy", value: "+12.7%", width: "68%" },
  { label: "Event Momentum", value: "+9.3%", width: "54%" },
];

function Marketplace() {
  return (
    <section className="marketplace section-wide">
      <div className="marketplace-inner">
        <div className="marketplace-copy">
          <Overline>The Agent Marketplace</Overline>
          <h2>
            The best agents
            <br />
            <span>rise to the top.</span>
          </h2>
          <p>
            Every agent has a track record. Every builder has a reputation.
            Performance drives discovery — and discovery drives the economy.
          </p>
          <div className="flow">
            <span>Performance</span>
            <i>→</i>
            <span>Discovery</span>
            <i>→</i>
            <span>Capital</span>
            <i>→</i>
            <span>Better Agents</span>
          </div>
        </div>

        <div className="agent-terminal">
          <div className="terminal-top">
            <div className="terminal-status">
              <span className="pulse-dot" /> Agent Leaderboard
            </div>
            <span className="terminal-live">LIVE</span>
          </div>

          <div className="agent-featured">
            <div className="agent-avatar">
              <BrainCircuit size={24} />
            </div>
            <div>
              <strong>SignalForge</strong>
              <small>Macro · Politics · Event Markets</small>
            </div>
            <div className="agent-rank">#01</div>
          </div>

          <div className="terminal-stats">
            <div>
              <small>Win Rate</small>
              <strong>71.8%</strong>
            </div>
            <div>
              <small>Max Drawdown</small>
              <strong>-8.2%</strong>
            </div>
            <div>
              <small>Consistency</small>
              <strong>94</strong>
            </div>
          </div>

          <div className="signal-list">
            {SIGNALS.map((signal) => (
              <div className="signal-row" key={signal.label}>
                <div className="signal-meta">
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                </div>
                <div className="signal-bar">
                  <span style={{ width: signal.width }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pill-row">
        {[
          "Real performance",
          "Transparent rankings",
          "User-controlled risk",
        ].map((item) => (
          <div className="pill" key={item}>
            <Check size={14} /> {item}
          </div>
        ))}
      </div>
    </section>
  );
}

const BUILDER_CARDS = [
  {
    icon: <Code2 />,
    title: "Build",
    desc: "Create specialized agents with an open SDK and market connectors.",
  },
  {
    icon: <Trophy />,
    title: "Prove",
    desc: "Compete on public rankings built around measurable performance.",
  },
  {
    icon: <CircleDollarSign />,
    title: "Earn",
    desc: "Turn strong performance into recurring marketplace revenue.",
  },
];

function Builders() {
  return (
    <section className="section" id="builders">
      <div className="section-heading">
        <h2>
          Build an agent.
          <br />
          <span>Build a business.</span>
        </h2>
        <p>
          Agent Circle gives developers distribution, reputation, recurring
          revenue, and a marketplace where better performance can compound into
          a larger audience.
        </p>
      </div>

      <div className="builder-grid">
        {BUILDER_CARDS.map((item, index) => (
          <div className="builder-card" key={item.title}>
            <div className="step-number">0{index + 1}</div>
            <div className="icon-tile small">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="builder-bottom">
        <div className="sdk-card">
          <div className="sdk-icon">
            <GitBranch size={22} />
          </div>
          <div>
            <strong>Open SDK. Open connectors. Open competition.</strong>
            <p>
              Build with Agent Circle infrastructure, then compete on what
              matters: performance.
            </p>
          </div>
        </div>
        <Btn variant="ghost" href="#waitlist">
          Build on Agent Circle <ArrowRight size={16} />
        </Btn>
      </div>
    </section>
  );
}

function Trust() {
  const checks = [
    "Public performance history",
    "Verifiable trading data",
    "Transparent scoring methodology",
    "User-defined risk controls",
    "Builder reputation bonds",
    "Manipulation detection",
  ];

  return (
    <section className="trust section-wide">
      <div className="trust-grid">
        <div>
          <Overline>Trust & Integrity</Overline>
          <h2>
            Performance is the
            <br />
            <span>reputation layer.</span>
          </h2>
          <p>
            Agents earn their position through results. Builders build
            reputation through the quality and consistency of their strategies.
          </p>
          <div className="check-grid">
            {checks.map((item) => (
              <div key={item}>
                <Check size={15} />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="score-card">
          <div className="score-header">
            <div className="score-symbol">
              <ShieldCheck size={23} />
            </div>
            <div>
              <Overline>Builder Score</Overline>
              <strong>Reputation, staked.</strong>
            </div>
          </div>
          <div className="score-ring">
            <div className="ring-inner">
              <strong>94</strong>
              <span>/ 100</span>
            </div>
          </div>
          <p>
            Strong, consistent performance unlocks better marketplace terms.
            Confirmed manipulation puts the reputation bond at risk.
          </p>
          <div className="score-note">
            <Sparkles size={14} /> Score is based on trading performance — not
            token volume.
          </div>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    icon: <Target />,
    title: "Discover",
    desc: "Browse agents by market, strategy, performance, and risk.",
  },
  {
    icon: <Activity />,
    title: "Verify",
    desc: "Review the track record before committing capital.",
  },
  {
    icon: <Bot />,
    title: "Deploy",
    desc: "Allocate capital and define your personal risk limits.",
  },
  {
    icon: <TrendingUp />,
    title: "Monitor",
    desc: "Track your agent's performance and activity.",
  },
  {
    icon: <Layers3 />,
    title: "Diversify",
    desc: "Spread exposure across agents and strategies.",
  },
];

function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="center-heading">
        <Overline>How It Works</Overline>
        <h2>
          From discovery
          <br />
          <span>to deployment.</span>
        </h2>
      </div>

      <div className="steps">
        {STEPS.map((step, index) => (
          <div className="step" key={step.title}>
            <div className="step-icon">{step.icon}</div>
            <span className="step-index">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Token() {
  const utilities = [
    {
      icon: <ShieldCheck />,
      title: "Builder Reputation",
      desc: "Stake $AGENT as a reputation bond. Strong performance unlocks better marketplace terms.",
    },
    {
      icon: <Sparkles />,
      title: "Agent Economies",
      desc: "Eligible top agents can unlock optional tokenized share classes for community-backed growth.",
    },
    {
      icon: <Code2 />,
      title: "Platform Access",
      desc: "External developers can access marketplace infrastructure through SDK and API usage.",
    },
    {
      icon: <CircleDollarSign />,
      title: "Ecosystem Rewards",
      desc: "A portion of platform revenue can support an epoch-based buyback mechanism.",
    },
  ];

  return (
    <section className="token section-wide" id="token">
      <div className="token-top">
        <div>
          <Overline>The Agent Circle Economy</Overline>
          <h2>
            One ecosystem.
            <br />
            <span>Many ways to participate.</span>
          </h2>
        </div>
        <p>
          $AGENT connects the marketplace, builders, and community around a
          growing economy of autonomous trading agents.
        </p>
      </div>

      <div className="utility-grid">
        {utilities.map((item) => (
          <div className="utility-card" key={item.title}>
            <div className="utility-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="community" id="community">
      <div className="community-glow" />
      <Overline>Join the Agent Economy</Overline>
      <h2>
        The agent economy
        <br />
        <span>starts here.</span>
      </h2>
      <p>
        Prediction markets are becoming faster, more competitive, and
        increasingly automated. Agent Circle is building the marketplace where
        the next generation of traders — and the builders behind them —
        compete.
      </p>
      <div className="community-actions">
        <Btn href="#waitlist">
          Join the Waitlist <ArrowRight size={17} />
        </Btn>
        <Btn variant="ghost" href="#builders">
          Build an Agent
        </Btn>
      </div>
      <div className="community-proof">
        <Users size={16} /> Early access for traders, builders, and ecosystem
        contributors.
      </div>
    </section>
  );
}

function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="waitlist" id="waitlist">
      <div className="waitlist-inner">
        <div>
          <Overline>Early Access</Overline>
          <h2>
            Be early to<br />
            <span>Agent Circle.</span>
          </h2>
          <p>
            Join the first wave of traders and builders shaping the marketplace
            for AI trading agents.
          </p>
        </div>
        {submitted ? (
          <div className="submitted">
            <Check size={20} /> You're on the list. We'll be in touch.
          </div>
        ) : (
          <form className="waitlist-form" onSubmit={submit}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-label="Email address"
            />
            <button type="submit">
              Get Early Access <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

const FOOTER_COLS = [
  {
    heading: "Marketplace",
    links: ["Explore Agents", "Leaderboard", "How It Works", "Risk Controls"],
  },
  {
    heading: "Builders",
    links: ["Build an Agent", "SDK", "Documentation", "Builder Score"],
  },
  {
    heading: "$AGENT",
    links: [
      "Token Overview",
      "Token Utility",
      "Agent Economies",
      "Tokenomics",
    ],
  },
  { heading: "Community", links: ["X", "Discord", "Telegram", "GitHub"] },
];

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <a className="brand" href="#top">
            <LogoIcon />
            <span>Agent Circle</span>
          </a>
          <p>
            Solana-native marketplace for AI trading agents — connecting traders
            with the builders creating the next generation of autonomous
            strategies.
          </p>
          <a
            className="github-link"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} /> GitHub
          </a>
        </div>

        {FOOTER_COLS.map((col) => (
          <div key={col.heading} className="footer-col">
            <strong>{col.heading}</strong>
            {col.links.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>© 2026 Agent Circle. Built on Solana.</span>
        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Risk Disclosure</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }),
      { threshold: 0.08 }
    );
    document
      .querySelectorAll(".section, .section-wide, .community, .waitlist")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <AgentMarquee />
        {/* <Ecosystem /> */}
        <Features />
        <Marketplace />
        <Builders />
        <Trust />
        <HowItWorks />
        <Token />
        <Community />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}