import { motion } from "framer-motion";
import { useLocation } from "wouter";

const BASE = import.meta.env.BASE_URL;

const navItems = ["Home", "Career", "Credentials", "Stack", "Solutions", "Contact"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.12 },
  }),
};

/* ── SVG illustrations ── */

function RagDiagram() {
  return (
    <svg viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background grid */}
      <defs>
        <pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="340" height="220" fill="url(#grid1)" rx="12"/>

      {/* Documents */}
      {[0,1,2].map(i => (
        <g key={i} transform={`translate(${16 + i * 2}, ${28 + i * 10})`}>
          <rect width="52" height="66" rx="4" fill="white" stroke="#cbd5e1" strokeWidth="1.5"/>
          <rect x="8" y="12" width="36" height="2.5" rx="1" fill="#94a3b8"/>
          <rect x="8" y="20" width="30" height="2.5" rx="1" fill="#cbd5e1"/>
          <rect x="8" y="28" width="34" height="2.5" rx="1" fill="#cbd5e1"/>
          <rect x="8" y="36" width="26" height="2.5" rx="1" fill="#cbd5e1"/>
        </g>
      ))}
      <text x="36" y="128" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="Inter,sans-serif">Documents</text>

      {/* Arrow 1 */}
      <path d="M 78 100 L 104 100" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr)"/>
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="#94a3b8"/>
        </marker>
      </defs>

      {/* ChromaDB vector store */}
      <g transform="translate(108,64)">
        <rect width="68" height="72" rx="8" fill="#0f172a"/>
        <text x="34" y="22" textAnchor="middle" fontSize="8" fill="#94a3b8" fontFamily="Inter,sans-serif">ChromaDB</text>
        {/* Vector rows */}
        {[0,1,2,3].map(i => (
          <g key={i} transform={`translate(8,${30 + i * 10})`}>
            {[0,1,2,3,4].map(j => (
              <rect key={j} x={j * 10} y="0" width="8" height="5" rx="1"
                fill={`rgba(99,102,241,${0.4 + Math.random() * 0.5})`}/>
            ))}
          </g>
        ))}
      </g>
      <text x="142" y="152" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="Inter,sans-serif">Vector Store</text>

      {/* Arrow 2 */}
      <path d="M 178 100 L 202 100" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr)"/>

      {/* Llama LLM */}
      <g transform="translate(206,58)">
        <rect width="72" height="84" rx="8" fill="#1e293b"/>
        <text x="36" y="20" textAnchor="middle" fontSize="8" fill="#94a3b8" fontFamily="Inter,sans-serif">Llama LLM</text>
        {/* Thinking dots */}
        <circle cx="20" cy="44" r="6" fill="#6366f1" opacity="0.9"/>
        <circle cx="36" cy="44" r="6" fill="#6366f1" opacity="0.6"/>
        <circle cx="52" cy="44" r="6" fill="#6366f1" opacity="0.3"/>
        <rect x="10" y="58" width="52" height="14" rx="3" fill="#334155"/>
        <rect x="14" y="63" width="34" height="3" rx="1" fill="#94a3b8"/>
      </g>
      <text x="242" y="158" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="Inter,sans-serif">LLM Engine</text>

      {/* Arrow 3 */}
      <path d="M 280 100 L 304 100" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr)"/>

      {/* Streamlit chat bubble */}
      <g transform="translate(307,72)">
        <rect width="28" height="22" rx="4" fill="#6366f1"/>
        <rect x="4" y="6" width="20" height="2.5" rx="1" fill="white" opacity="0.9"/>
        <rect x="4" y="11" width="14" height="2.5" rx="1" fill="white" opacity="0.6"/>
        <path d="M 4 22 L 4 28 L 10 22" fill="#6366f1"/>
      </g>
      <text x="321" y="116" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="Inter,sans-serif">Streamlit</text>

      {/* RAG label */}
      <rect x="108" y="180" width="120" height="20" rx="4" fill="#f1f5f9"/>
      <text x="168" y="194" textAnchor="middle" fontSize="9" fontWeight="600" fill="#475569" fontFamily="Inter,sans-serif">RAG Architecture</text>
    </svg>
  );
}

function AnalyticsDiagram() {
  return (
    <svg viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5"/>
        </pattern>
        <marker id="arr2" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="#94a3b8"/>
        </marker>
      </defs>
      <rect width="340" height="220" fill="url(#grid2)" rx="12"/>

      {/* NL Query input */}
      <g transform="translate(12,76)">
        <rect width="76" height="44" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
        <text x="38" y="14" textAnchor="middle" fontSize="7.5" fill="#94a3b8" fontFamily="Inter,sans-serif">Natural Language</text>
        <rect x="8" y="20" width="60" height="16" rx="3" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
        <text x="38" y="31" textAnchor="middle" fontSize="7" fill="#475569" fontFamily="Inter,sans-serif">"Show Q3 revenue..."</text>
      </g>
      <text x="50" y="136" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="Inter,sans-serif">User Query</text>

      <path d="M 90 98 L 108 98" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr2)"/>

      {/* LangChain orchestrator */}
      <g transform="translate(112,62)">
        <rect width="74" height="72" rx="8" fill="#0f172a"/>
        <text x="37" y="17" textAnchor="middle" fontSize="7.5" fill="#94a3b8" fontFamily="Inter,sans-serif">LangChain</text>
        <rect x="8" y="24" width="58" height="12" rx="3" fill="#1e293b"/>
        <text x="37" y="33" textAnchor="middle" fontSize="7" fill="#6366f1" fontFamily="Inter,sans-serif">Orchestrator</text>
        <rect x="8" y="40" width="58" height="10" rx="3" fill="#1e293b"/>
        <text x="37" y="48" textAnchor="middle" fontSize="7" fill="#94a3b8" fontFamily="Inter,sans-serif">→ OpenAI</text>
        <rect x="8" y="54" width="58" height="10" rx="3" fill="#1e293b"/>
        <text x="37" y="62" textAnchor="middle" fontSize="7" fill="#94a3b8" fontFamily="Inter,sans-serif">→ dbt models</text>
      </g>
      <text x="149" y="150" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="Inter,sans-serif">Orchestration</text>

      <path d="M 188 98 L 206 98" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr2)"/>

      {/* Databricks */}
      <g transform="translate(210,58)">
        <rect width="72" height="80" rx="8" fill="#1e293b"/>
        <text x="36" y="17" textAnchor="middle" fontSize="7.5" fill="#94a3b8" fontFamily="Inter,sans-serif">Databricks</text>
        {/* Bar chart */}
        {[32,52,40,60,46].map((h,i)=>(
          <rect key={i} x={8 + i*12} y={70 - h/3} width="9" height={h/3}
            rx="2" fill={i===3?"#6366f1":"#334155"}/>
        ))}
        <line x1="8" y1="70" x2="64" y2="70" stroke="#475569" strokeWidth="1"/>
      </g>
      <text x="246" y="154" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="Inter,sans-serif">Analytics Engine</text>

      <path d="M 284 98 L 302 98" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr2)"/>

      {/* Insight output */}
      <g transform="translate(304,72)">
        <rect width="30" height="50" rx="4" fill="#6366f1"/>
        {[0,1,2].map(i=>(
          <rect key={i} x="4" y={8+i*14} width="22" height="10" rx="2" fill="white" opacity={0.9-i*0.2}/>
        ))}
      </g>
      <text x="319" y="136" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="Inter,sans-serif">Insights</text>

      <rect x="90" y="182" width="160" height="20" rx="4" fill="#f1f5f9"/>
      <text x="170" y="196" textAnchor="middle" fontSize="9" fontWeight="600" fill="#475569" fontFamily="Inter,sans-serif">Conversational Analytics Pipeline</text>
    </svg>
  );
}

function WorkflowDiagram() {
  /* Hub-and-spoke: n8n Orchestrator at centre, 6 satellite nodes */
  return (
    <svg viewBox="0 0 340 230" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <pattern id="grid3" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5"/>
        </pattern>
        {/* arrowhead – dark */}
        <marker id="a3" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0.5 L5,3 L0,5.5" fill="none" stroke="#94a3b8" strokeWidth="1"/>
        </marker>
        {/* arrowhead – both ends */}
        <marker id="a3r" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto-start-reverse">
          <path d="M0,0.5 L5,3 L0,5.5" fill="none" stroke="#94a3b8" strokeWidth="1"/>
        </marker>
      </defs>
      <rect width="340" height="210" fill="url(#grid3)" rx="12"/>

      {/* ── Spoke lines (4 satellites only) ── */}
      {/* Calendar → hub */}
      <line x1="86" y1="38" x2="134" y2="82" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#a3)"/>
      {/* Deliverables → hub */}
      <line x1="82" y1="118" x2="132" y2="108" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#a3)"/>
      {/* hub → Invoicing */}
      <line x1="208" y1="85" x2="254" y2="40" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#a3)"/>
      {/* hub → Logging */}
      <line x1="208" y1="110" x2="254" y2="118" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#a3)"/>

      {/* ── Centre: Mobile App hub ── */}
      <g transform="translate(132,72)">
        <rect width="76" height="56" rx="10" fill="#1a1a2e" style={{filter:"drop-shadow(0 3px 10px rgba(0,0,0,0.25))"}}/>
        {/* mobile phone icon */}
        <rect x="29" y="7" width="18" height="28" rx="3" fill="none" stroke="white" strokeWidth="2"/>
        <rect x="34" y="9" width="8" height="1.5" rx="0.75" fill="#94a3b8"/>
        <circle cx="38" cy="32" r="1.5" fill="#94a3b8"/>
        <text x="38" y="47" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="white" fontFamily="Inter,sans-serif">Mobile App</text>
      </g>

      {/* ── Client Calendar (top-left) ── */}
      <g transform="translate(16,18)">
        <rect width="70" height="42" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1.5" style={{filter:"drop-shadow(0 2px 6px rgba(0,0,0,0.07))"}}/>
        {/* calendar icon */}
        <rect x="6" y="6" width="18" height="16" rx="2" fill="#4285f4"/>
        <rect x="8" y="11" width="14" height="1.5" rx="0.5" fill="white"/>
        <rect x="9" y="14" width="3" height="3" rx="0.5" fill="white"/>
        <rect x="13" y="14" width="3" height="3" rx="0.5" fill="white"/>
        <rect x="17" y="14" width="3" height="3" rx="0.5" fill="white"/>
        <text x="52" y="18" textAnchor="middle" fontSize="7" fontWeight="600" fill="#0f172a" fontFamily="Inter,sans-serif">Client</text>
        <text x="52" y="27" textAnchor="middle" fontSize="7" fontWeight="600" fill="#0f172a" fontFamily="Inter,sans-serif">Calendar</text>
        <text x="52" y="36" textAnchor="middle" fontSize="6" fill="#94a3b8" fontFamily="Inter,sans-serif">Scheduling</text>
      </g>

      {/* ── Deliverables Sharing (left) ── */}
      <g transform="translate(12,100)">
        <rect width="70" height="42" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1.5" style={{filter:"drop-shadow(0 2px 6px rgba(0,0,0,0.07))"}}/>
        {/* folder icon */}
        <path d="M6 10 Q6 8 8 8 L14 8 L16 11 L22 11 Q24 11 24 13 L24 22 Q24 24 22 24 L8 24 Q6 24 6 22 Z" fill="#f59e0b"/>
        <text x="50" y="18" textAnchor="middle" fontSize="7" fontWeight="600" fill="#0f172a" fontFamily="Inter,sans-serif">Deliverables</text>
        <text x="50" y="27" textAnchor="middle" fontSize="7" fontWeight="600" fill="#0f172a" fontFamily="Inter,sans-serif">Sharing</text>
        <text x="50" y="36" textAnchor="middle" fontSize="6" fill="#94a3b8" fontFamily="Inter,sans-serif">Docs &amp; Files</text>
      </g>

      {/* ── Invoicing (top-right) ── */}
      <g transform="translate(254,18)">
        <rect width="72" height="42" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1.5" style={{filter:"drop-shadow(0 2px 6px rgba(0,0,0,0.07))"}}/>
        {/* document icon */}
        <rect x="6" y="6" width="14" height="18" rx="2" fill="#10b981"/>
        <rect x="8" y="10" width="10" height="1.5" rx="0.5" fill="white"/>
        <rect x="8" y="13" width="10" height="1.5" rx="0.5" fill="white"/>
        <rect x="8" y="16" width="7" height="1.5" rx="0.5" fill="white"/>
        {/* S badge */}
        <rect x="18" y="16" width="10" height="10" rx="2" fill="#3ecf8e"/>
        <text x="23" y="24" textAnchor="middle" fontSize="7" fontWeight="800" fill="white" fontFamily="Inter,sans-serif">S</text>
        <text x="52" y="18" textAnchor="middle" fontSize="7" fontWeight="600" fill="#0f172a" fontFamily="Inter,sans-serif">Invoicing</text>
        <text x="52" y="27" textAnchor="middle" fontSize="6" fill="#94a3b8" fontFamily="Inter,sans-serif">Generate &amp;</text>
        <text x="52" y="34" textAnchor="middle" fontSize="6" fill="#94a3b8" fontFamily="Inter,sans-serif">Send Invoices</text>
      </g>

      {/* ── Logging (right) ── */}
      <g transform="translate(254,100)">
        <rect width="72" height="42" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1.5" style={{filter:"drop-shadow(0 2px 6px rgba(0,0,0,0.07))"}}/>
        {/* clipboard icon */}
        <rect x="6" y="7" width="15" height="18" rx="2" fill="#6366f1"/>
        <rect x="8.5" y="5" width="10" height="5" rx="1.5" fill="#e2e8f0"/>
        <rect x="8.5" y="12" width="10" height="1.5" rx="0.5" fill="white"/>
        <rect x="8.5" y="15.5" width="8" height="1.5" rx="0.5" fill="white"/>
        <rect x="8.5" y="19" width="10" height="1.5" rx="0.5" fill="white"/>
        <text x="48" y="22" textAnchor="middle" fontSize="7" fontWeight="600" fill="#0f172a" fontFamily="Inter,sans-serif">Logging</text>
        <text x="48" y="34" textAnchor="middle" fontSize="6" fill="#94a3b8" fontFamily="Inter,sans-serif">Activities</text>
      </g>

      {/* ── Footer label ── */}
      <rect x="80" y="188" width="180" height="16" rx="4" fill="#f1f5f9"/>
      <text x="170" y="199" textAnchor="middle" fontSize="8" fontWeight="600" fill="#475569" fontFamily="Inter,sans-serif">Integrated Platform Workflows</text>
    </svg>
  );
}

/* ── Solution cards data ── */
const solutions = [
  {
    number: "01",
    category: "Knowledge Management",
    title: "On-Demand Knowledge Assistant MVP",
    description:
      "Streamlined the delivery of complex program information by replacing static documentation with a conversational interface. Users can query institutional knowledge in plain English and receive precise, cited answers instantly.",
    detail:
      "Leveraged a RAG architecture and custom vector database (ChromaDB) to index and retrieve source documents at query time. Integrated Llama LLM for response generation and shipped a polished Streamlit interface for end-user access.",
    stack: ["RAG Architecture", "ChromaDB", "Llama LLM", "Streamlit", "Python"],
    Diagram: RagDiagram,
    accent: "#6366f1",
  },
  {
    number: "02",
    category: "Agentic Analytics",
    title: "Conversational Insights Engine",
    description:
      "Modernised reporting capabilities beyond static BI dashboards by enabling analysts and executives to query data in natural language. The prototype demonstrated how agentic AI can collapse the gap between a question and an answer.",
    detail:
      "Architected a LangChain + dbt + OpenAI workflow running against Databricks, using synthetic datasets to validate the pipeline. Natural language inputs are parsed, translated to SQL via an LLM agent, executed, and returned as narrative insights.",
    stack: ["LangChain", "OpenAI", "dbt", "Databricks", "Python"],
    Diagram: AnalyticsDiagram,
    accent: "#0ea5e9",
  },
  {
    number: "03",
    category: "Business Operations",
    title: "Integrated Operations Platform",
    description:
      "Built a lightweight but powerful business operations platform that automates the operational overhead of running a consultancy — from scheduling through to invoice delivery — using a modern AI-native tool stack.",
    detail:
      "Combined Github/Vercel for app hosting and rapid iteration, n8n for event-driven workflow automation, and Google Antigravity for agent-powered task orchestration. The platform handles calendaring, automated follow-ups, and invoice generation end-to-end.",
    stack: ["Vercel", "n8n", "Google Antigravity", "Workflow Automation"],
    Diagram: WorkflowDiagram,
    accent: "#10b981",
  },
];

export default function Solutions() {
  const [, navigate] = useLocation();

  const handleNav = (label: string) => {
    if (label === "Home") navigate("/");
    else if (label === "Solutions") navigate("/solutions");
  };

  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans">

      {/* ── Fixed Navigation ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-end items-center px-10 h-[72px] bg-white/95 border-b border-gray-100"
        style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
      >
        <ul className="flex gap-8 text-[11px] tracking-[0.18em] uppercase">
          {navItems.map((label) => (
            <li key={label}>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleNav(label); }}
                className={`transition-colors duration-150 ${
                  label === "Solutions"
                    ? "font-bold text-[#0f172a]"
                    : "font-semibold text-gray-400 hover:text-[#0f172a]"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Page Header ── */}
      <div className="pt-[72px]">
        <div
          className="relative px-16 py-20 overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        >
          {/* Gradient overlay so grid fades */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white pointer-events-none"/>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative max-w-3xl"
          >
            <p className="text-[11px] font-semibold tracking-[0.22em] text-gray-400 uppercase mb-4">
              Portfolio
            </p>
            <h1
              className="font-serif font-bold leading-[0.9] tracking-tight text-[#0f172a] mb-6"
              style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
            >
              SOLUTIONS
            </h1>
            <div className="w-14 h-[2px] bg-gray-300 mb-6"/>
            <p className="text-[15px] text-gray-500 leading-relaxed max-w-xl">
              A selection of applied AI and data engineering work — from rapid prototypes to
              production-grade architectures. Each solution was designed to turn ambiguity into
              clarity at speed.
            </p>
          </motion.div>
        </div>

        {/* ── Solution Cards ── */}
        <div className="px-16 pb-24 space-y-16 max-w-7xl mx-auto">
          {solutions.map(({ number, category, title, description, detail, stack, Diagram, accent }, idx) => (
            <motion.div
              key={number}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className={`grid grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "direction-rtl" : ""}`}
            >
              {/* Content side */}
              <div className={idx % 2 === 1 ? "order-2" : "order-1"}>
                <div className="flex items-center gap-4 mb-5">
                  <span
                    className="text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                    style={{ background: `${accent}18`, color: accent }}
                  >
                    {category}
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.15em] text-gray-300 uppercase">
                    {number}
                  </span>
                </div>

                <h2
                  className="font-serif font-bold leading-tight text-[#0f172a] mb-4"
                  style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
                >
                  {title}
                </h2>

                <div className="w-10 h-[2px] mb-5" style={{ background: accent }}/>

                <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
                  {description}
                </p>
                <p className="text-[13px] text-gray-400 leading-relaxed mb-7">
                  {detail}
                </p>

                {/* Stack pills */}
                <div className="flex flex-wrap gap-2">
                  {stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase rounded-full border border-gray-200 text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Diagram side */}
              <div className={`${idx % 2 === 1 ? "order-1" : "order-2"} relative`}>
                <div
                  className="rounded-2xl overflow-hidden border border-gray-100 p-6"
                  style={{
                    background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  <Diagram />
                </div>
                {/* Accent dot */}
                <div
                  className="absolute -top-3 -right-3 w-6 h-6 rounded-full"
                  style={{ background: accent, opacity: 0.7 }}
                />
                <div
                  className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full border-2"
                  style={{ borderColor: accent, opacity: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Footer strip ── */}
        <div className="border-t border-gray-100 px-16 py-5 flex items-center gap-8">
          <p className="text-[10px] font-semibold tracking-[0.15em] text-gray-300 uppercase shrink-0">
            Orchestration &amp; Development Ecosystem
          </p>
          <div className="flex items-center gap-8 grayscale opacity-40 text-[13px] font-bold">
            {[
              { file: "n8n.svg", label: "n8n" },
              { file: "antigravity.svg", label: "Antigravity" },
              { file: "openai.svg", label: "ChatGPT" },
              { file: "cursor.svg", label: "Cursor" },
              { file: "claudecode.svg", label: "Claude Code" },
              { file: "vercel.svg", label: "Vercel" },
              { file: "replit.svg", label: "Replit" },
            ].map(({ file, label }) => (
              <div key={label} className="flex items-center gap-1.5">
                <img src={`${BASE}logos/${file}`} alt={label} style={{ width: 20, height: 20, objectFit: "contain" }}/>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
