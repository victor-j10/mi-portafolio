import { useState, useEffect, useRef } from 'react';

const COLORS = {
  bg: '#0a0a0f',
  surface: '#111118',
  border: '#1e1e2e',
  accent: '#7c6aff',
  accentSoft: '#a594ff',
  teal: '#2dd4bf',
  warm: '#f97316',
  text: '#e8e6f0',
  muted: '#6e6a85',
  subtle: '#2a2840',
};

const NAV_ITEMS = [
  { id: 'hero', label: 'Inicio' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contacto' },
];

const skills = [
  { name: "HTML", icon: "/icons/html-5.png", category: "Frontend" },
  { name: "CSS", icon: "/icons/css-3.png", category: "Frontend" },
  { name: "JavaScript", icon: "/icons/js.png", category: "Frontend" },
  { name: "TypeScript", icon: "/icons/typescript.png", category: "Frontend" },
  { name: "React", icon: "/icons/react.png", category: "Frontend" },
  { name: "Next.js", icon: "/icons/nextjs.png", category: "Frontend" },
  { name: "Angular", icon: "/icons/angular.png", category: "Frontend" },
  { name: "VueJs", icon: "/icons/vuejs.png", category: "Frontend" },
  { name: "PHP", icon: "/icons/php.png", category: "Backend" },
  { name: "Node.js", icon: "/icons/nodo-js.png", category: "Backend" },
  { name: "Django", icon: "/icons/django.png", category: "Backend" },
  { name: "Python", icon: "/icons/python.png", category: "Backend" },
  { name: "Java", icon: "/icons/java.png", category: "Backend" },
  { name: "MySQL", icon: "/icons/mysql.png", category: "Bases de Datos" },
  { name: "SQL Server", icon: "/icons/sql-server.png", category: "Bases de Datos" },
  { name: "PostgreSQL", icon: "/icons/postgresql.png", category: "Bases de Datos" },
  { name: "Git", icon: "/icons/git.png", category: "Herramientas" },
  { name: "Github", icon: "/icons/githubweb.png", category: "Herramientas" },
];

const projects = [
  {
    title: "GrizzlyFit Tracker",
    tag: "En desarrollo continuo",
    description: "Aplicación web para el registro y seguimiento de rutinas de entrenamiento, hábitos diarios y progreso personal. Arquitectura moderna con React, Tailwind CSS y un backend con Node.js y Express.",
    image: "/images/osito-grizzly.png",
    demo: "https://fit-tracker.grizzlyhubs.xyz/",
    github: "https://github.com/victor-j10/grizzlyfit-tracker",
    tech: ["React", "Tailwind", "Node.js", "Express"],
    color: COLORS.teal,
  },
  {
    title: "Biblioteca",
    tag: "Gestor de biblioteca",
    description: "Aplicación web para el registro y reserva de libros. Arquitectura moderna con Django, Django Rest Framework y Python.",
    image: "/images/osito-gestion-grizzly.png",
    demo: "https://biblioteca.grizzlyhubs.xyz/",
    github: "https://github.com/victor-j10/biblioteca-django",
    tech: ["Django", "Django Framework Rest", "Python"],
    color: COLORS.teal,
  },
  {
    title: "To Do List",
    tag: "Gestión de tareas",
    description: "Sistema de gestión de tareas con Angular, SCSS, Angular Material y MockAPI para simular operaciones backend. Implementa CRUD completo y gestión de estado eficiente.",
    image: "/images/osito-grizzly-manage.png",
    demo: "https://to-do-list-mu-six-87.vercel.app/",
    github: "https://github.com/victor-j10/to-do-list",
    tech: ["Angular", "SCSS", "Material", "MockAPI"],
    color: COLORS.accent,
  },
];

const experiences = [
  {
    id: 1,
    period: "Jul 2023 — Ene 2024",
    duration: "7 meses",
    title: "Practicante de Planeación Corporativa",
    company: "ISA TRANSELCA S.A. E.S.P.",
    sector: "Energía y transmisión eléctrica",
    color: COLORS.teal,
    responsibilities: [
      "Desarrollé una aplicación web en Power Platform para optimizar el almacenamiento y visualización de indicadores ambientales clave.",
      "Implementé dashboards en Power BI que redujeron tiempos de procesamiento en un 40%.",
      "Capacité al equipo de ingenieros en el uso del aplicativo desarrollado.",
      "Gestioné reportes mensuales y trimestrales a la SSPD.",
      "Apoyé la identificación y mapeo de riesgos empresariales.",
    ],
    technologies: ['Power BI', 'Tableau', 'Power Apps', 'Office 365', 'SharePoint', 'Power Automate'],
  },
  {
    id: 2,
    period: "Jul 2025 — Actualidad",
    duration: "En curso",
    title: "Desarrollador Full Stack",
    company: "NESCANIS S.A.S",
    sector: "Tecnología · Sector del transporte y la minería",
    color: COLORS.accent,
    responsibilities: [
      "Desarrollo de funcionalidades end-to-end para aplicaciones del sector minero con Next.js y Laravel.",
      "Participación en aplicación de gestión de transporte para Vulcano: componentes React + APIs REST en Laravel.",
      "Desarrollo de servicios backend: APIs RESTful, autenticación, integración con SQL Server, optimización de consultas.",
      "Mantenimiento de aplicación legacy de transporte en Vue.js con SLAs definidos.",
      "Implementación de code reviews, testing, documentación OpenAPI/Swagger y versionado semántico.",
    ],
    technologies: ['React', 'Vue.js', 'Next.js', 'Laravel', 'PHP', 'TypeScript', 'SQL Server', 'Git', 'REST APIs'],
  },
];

function useActiveSection() {
  const [active, setActive] = useState('hero');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

export const Home = () => {
  const [selectedExp, setSelectedExp] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [skillTab, setSkillTab] = useState('Frontend');
  const active = useActiveSection();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') { setSelectedExp(null); setMenuOpen(false); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const skillCategories = [...new Set(skills.map(s => s.category))];
  const filteredSkills = skills.filter(s => s.category === skillTab);

  return (
    <div style={{ background: COLORS.bg, color: COLORS.text, fontFamily: "'DM Sans', 'Segoe UI', sans-serif", minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Syne:wght@600;700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        
        .nav-link { transition: color 0.2s; cursor: pointer; text-decoration: none; }
        .nav-link:hover { color: ${COLORS.accentSoft}; }
        .nav-link.active { color: ${COLORS.accent}; }

        .btn-primary {
          background: ${COLORS.accent};
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
          text-decoration: none;
          display: inline-block;
        }
        .btn-primary:hover { background: ${COLORS.accentSoft}; transform: translateY(-1px); }

        .btn-ghost {
          background: transparent;
          color: ${COLORS.text};
          border: 1px solid ${COLORS.border};
          padding: 12px 28px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
          text-decoration: none;
          display: inline-block;
        }
        .btn-ghost:hover { border-color: ${COLORS.accent}; color: ${COLORS.accent}; }

        .card {
          background: ${COLORS.surface};
          border: 1px solid ${COLORS.border};
          border-radius: 12px;
          transition: all 0.25s;
        }
        .card:hover { border-color: ${COLORS.subtle}; transform: translateY(-2px); box-shadow: 0 12px 40px rgba(124,106,255,0.08); }

        .tag {
          display: inline-block;
          background: ${COLORS.subtle};
          color: ${COLORS.accentSoft};
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 99px;
        }

        .skill-tag {
          background: ${COLORS.subtle};
          color: ${COLORS.muted};
          font-size: 12px;
          padding: 4px 10px;
          border-radius: 6px;
          white-space: nowrap;
        }

        .section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: ${COLORS.accent};
          margin-bottom: 12px;
        }

        .glow-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: ${COLORS.teal};
          box-shadow: 0 0 8px ${COLORS.teal};
          display: inline-block;
        }

        .exp-card {
          background: ${COLORS.surface};
          border: 1px solid ${COLORS.border};
          border-radius: 12px;
          padding: 28px 32px;
          cursor: pointer;
          transition: all 0.25s;
          position: relative;
          overflow: hidden;
        }
        .exp-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          border-radius: 3px 0 0 3px;
          transition: width 0.2s;
        }
        .exp-card:hover { border-color: ${COLORS.subtle}; transform: translateY(-2px); box-shadow: 0 8px 32px rgba(124,106,255,0.1); }
        .exp-card:hover::before { width: 4px; }

        .skill-pill {
          background: ${COLORS.surface};
          border: 1px solid ${COLORS.border};
          border-radius: 10px;
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          transition: all 0.2s;
          cursor: default;
        }
        .skill-pill:hover { border-color: ${COLORS.accent}; background: ${COLORS.subtle}; transform: translateY(-3px); }
        .skill-pill img { width: 36px; height: 36px; object-fit: contain; filter: brightness(0.95); }
        .skill-pill span { font-size: 11px; font-weight: 500; color: ${COLORS.muted}; }

        .modal-overlay {
          position: fixed; inset: 0; z-index: 100;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease;
        }
        .modal-box {
          background: ${COLORS.surface};
          border: 1px solid ${COLORS.border};
          border-radius: 16px;
          max-width: 680px; width: 100%;
          max-height: 88vh;
          overflow-y: auto;
          padding: 40px;
          position: relative;
          animation: slideUp 0.25s ease;
        }
        .modal-box::-webkit-scrollbar { width: 6px; }
        .modal-box::-webkit-scrollbar-track { background: transparent; }
        .modal-box::-webkit-scrollbar-thumb { background: ${COLORS.border}; border-radius: 3px; }

        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(0.85)} }

        .float { animation: float 5s ease-in-out infinite; }
        .pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }

        .contact-card {
          background: ${COLORS.surface};
          border: 1px solid ${COLORS.border};
          border-radius: 12px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          color: ${COLORS.text};
          transition: all 0.2s;
        }
        .contact-card:hover { border-color: ${COLORS.accent}; transform: translateY(-2px); box-shadow: 0 8px 32px rgba(124,106,255,0.12); }

        .tab-btn {
          padding: 7px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          font-family: inherit;
          transition: all 0.15s;
        }
        .tab-btn.active { background: ${COLORS.accent}; color: white; }
        .tab-btn:not(.active) { background: transparent; color: ${COLORS.muted}; }
        .tab-btn:not(.active):hover { color: ${COLORS.text}; background: ${COLORS.subtle}; }

        .nav-mobile {
          position: fixed; inset: 0; z-index: 90;
          background: ${COLORS.bg};
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 32px;
        }

        section { padding: 96px 0; }

        .container { max-width: 860px; margin: 0 auto; padding: 0 24px; }

        .divider { height: 1px; background: ${COLORS.border}; }

        @media (max-width: 640px) {
          section { padding: 72px 0; }
          .modal-box { padding: 24px; }
          .exp-card { padding: 20px; }
        }
      `}</style>

      {/* ─── NAV ─── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(10,10,15,0.85)', backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${COLORS.border}`,
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em' }}>
            <span style={{ color: COLORS.accent }}>V</span>ictor
          </span>

          {/* Desktop nav */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="hidden-mobile">
            {NAV_ITEMS.slice(1).map(({ id, label }) => (
              <span key={id} className={`nav-link${active === id ? ' active' : ''}`}
                style={{ fontSize: 14, color: active === id ? COLORS.accent : COLORS.muted }}
                onClick={() => scrollTo(id)}>{label}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <a href="/Hoja_de_vida_2026.pdf" target="_blank" className="btn-primary" style={{ padding: '8px 18px', fontSize: 13 }}>
              CV ↗
            </a>
            <button onClick={() => setMenuOpen(v => !v)} style={{ background: 'none', border: `1px solid ${COLORS.border}`, borderRadius: 8, width: 40, height: 40, cursor: 'pointer', color: COLORS.text, display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="show-mobile">
              {menuOpen ? '✕' : '≡'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav-mobile" onClick={() => setMenuOpen(false)}>
          {NAV_ITEMS.map(({ id, label }) => (
            <span key={id} style={{ fontSize: 24, fontFamily: "'Syne', sans-serif", fontWeight: 700, color: active === id ? COLORS.accent : COLORS.text, cursor: 'pointer' }}
              onClick={() => scrollTo(id)}>{label}</span>
          ))}
        </div>
      )}

      {/* ─── HERO ─── */}
      <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 64 }}>
        {/* Background grid */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `linear-gradient(${COLORS.border} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.border} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          opacity: 0.4,
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
        }} />
        {/* Glow blobs */}
        <div style={{ position: 'absolute', width: 480, height: 480, borderRadius: '50%', background: `radial-gradient(circle, ${COLORS.accent}22 0%, transparent 70%)`, top: '10%', right: '-10%', zIndex: 0 }} />
        <div style={{ position: 'absolute', width: 320, height: 320, borderRadius: '50%', background: `radial-gradient(circle, ${COLORS.teal}15 0%, transparent 70%)`, bottom: '15%', left: '-5%', zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
          </div>

          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(48px, 8vw, 88px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: 24 }}>
            Victor<br />
            <span style={{ color: COLORS.accent }}>Hernández</span>
          </h1>

          <p style={{ fontSize: 18, color: COLORS.muted, maxWidth: 480, lineHeight: 1.7, marginBottom: 40, fontWeight: 300 }}>
            Ingeniero de Sistemas & Full Stack Developer. Construyo aplicaciones web modernas, escalables y bien estructuradas.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => scrollTo('projects')}>Ver proyectos →</button>
            <button className="btn-ghost" onClick={() => scrollTo('contact')}>Contactar</button>
          </div>

          <div style={{ display: 'flex', gap: 32, marginTop: 64, paddingTop: 40, borderTop: `1px solid ${COLORS.border}` }}>
            {[['1+', 'años exp.'], ['18+', 'tecnologías'], ['10+', 'proyectos']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 700, color: COLORS.text }}>{n}</div>
                <div style={{ fontSize: 12, color: COLORS.muted, marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── ABOUT ─── */}
      <section id="about">
        <div className="container">
          <div className="section-label">Sobre mí</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: 20 }}>
                Código limpio,<br />soluciones reales.
              </h2>
              <p style={{ color: COLORS.muted, lineHeight: 1.8, fontSize: 15, marginBottom: 16 }}>
                Especializado en el desarrollo full stack con dominio de múltiples frameworks y paradigmas. Mi enfoque combina arquitectura sólida con código mantenible a largo plazo.
              </p>
              <p style={{ color: COLORS.muted, lineHeight: 1.8, fontSize: 15 }}>
                Disfruto los desafíos técnicos complejos, el trabajo en equipo y crear soluciones que realmente impacten al usuario final.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: '⚡', title: 'Frontend', desc: 'React, Next.js, Vue, Angular' },
                { icon: '🛠', title: 'Backend', desc: 'Node.js, Laravel, Django, PHP' },
                { icon: '🗄️', title: 'Bases de datos', desc: 'SQL Server, PostgreSQL, MySQL' },
                { icon: '🔧', title: 'Sectores', desc: 'Minería, transporte, energía' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontSize: 20, width: 36, textAlign: 'center' }}>{icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 2 }}>{title}</div>
                    <div style={{ fontSize: 13, color: COLORS.muted }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── EXPERIENCE ─── */}
      <section id="experience">
        <div className="container">
          <div className="section-label">Experiencia</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 40 }}>
            Trayectoria profesional
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {experiences.map((exp) => (
              <div key={exp.id} className="exp-card" onClick={() => setSelectedExp(exp)}
                style={{ '--exp-color': exp.color }}>
                <style>{`.exp-card[style*="--exp-color: ${exp.color}"]::before { background: ${exp.color}; }`}</style>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <span className="tag">{exp.duration}</span>
                      <span style={{ fontSize: 12, color: COLORS.muted }}>{exp.period}</span>
                    </div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{exp.title}</h3>
                    <p style={{ color: COLORS.muted, fontSize: 14 }}>{exp.company} · {exp.sector}</p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, maxWidth: 280, justifyContent: 'flex-end' }}>
                    {exp.technologies.slice(0, 4).map(t => <span key={t} className="skill-tag">{t}</span>)}
                    {exp.technologies.length > 4 && <span className="skill-tag">+{exp.technologies.length - 4}</span>}
                  </div>
                </div>
                <div style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid ${COLORS.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <p style={{ color: COLORS.muted, fontSize: 13, lineHeight: 1.6, maxWidth: 460 }}>{exp.responsibilities[0].slice(0, 100)}…</p>
                  <span style={{ color: exp.color, fontSize: 13, fontWeight: 500, whiteSpace: 'nowrap', marginLeft: 16 }}>Ver detalle →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── PROJECTS ─── */}
      <section id="projects">
        <div className="container">
          <div className="section-label">Proyectos</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 40 }}>
            Obras destacadas
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {projects.map((p, i) => (
              <div key={i} className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', overflow: 'hidden', minHeight: 260 }}>
                <div style={{ background: COLORS.bg, overflow: 'hidden', position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 50%, ${p.color}20 0%, transparent 70%)` }} />
                  <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, transition: 'transform 0.4s' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                  <div style={{ position: 'absolute', top: 12, left: 12 }}>
                    <span style={{ ...{}, background: p.color + '22', color: p.color, fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 99, border: `1px solid ${p.color}44` }}>{i + 1}</span>
                  </div>
                </div>
                <div style={{ padding: '32px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span className="tag" style={{ marginBottom: 12, display: 'inline-block' }}>{p.tag}</span>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 24, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{p.title}</h3>
                    <p style={{ color: COLORS.muted, fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{p.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {p.tech.map(t => <span key={t} className="skill-tag">{t}</span>)}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 13, padding: '9px 20px' }}>Demo →</a>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: 13, padding: '9px 20px' }}>Código</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── SKILLS ─── */}
      <section id="skills">
        <div className="container">
          <div className="section-label">Habilidades</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 32 }}>
            Stack tecnológico
          </h2>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
            {skillCategories.map(cat => (
              <button key={cat} className={`tab-btn${skillTab === cat ? ' active' : ''}`} onClick={() => setSkillTab(cat)}>{cat}</button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))', gap: 12 }}>
            {filteredSkills.map((skill) => (
              <div key={skill.name} className="skill-pill">
                <img src={skill.icon} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── CONTACT ─── */}
      <section id="contact">
        <div className="container">
          <div style={{ maxWidth: 560 }}>
            <div className="section-label">Contacto</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16 }}>
              Hablemos.
            </h2>
            <p style={{ color: COLORS.muted, fontSize: 15, lineHeight: 1.7, marginBottom: 40 }}>
              Disponible para proyectos freelance, posiciones full-time o colaboraciones interesantes. No dudes en escribirme.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="mailto:victorjhr2211@gmail.com" className="contact-card">
                <div style={{ width: 44, height: 44, borderRadius: 10, background: COLORS.subtle, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>✉️</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>Email</div>
                  <div style={{ color: COLORS.muted, fontSize: 13 }}>victorjhr2211@gmail.com</div>
                </div>
                <span style={{ marginLeft: 'auto', color: COLORS.accent }}>→</span>
              </a>
              <a href="https://www.linkedin.com/in/victor-jose-hernandez-reyes-859509233/" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div style={{ width: 44, height: 44, borderRadius: 10, background: COLORS.subtle, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>💼</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>LinkedIn</div>
                  <div style={{ color: COLORS.muted, fontSize: 13 }}>Victor José Hernández Reyes</div>
                </div>
                <span style={{ marginLeft: 'auto', color: COLORS.accent }}>→</span>
              </a>
              <a href="https://github.com/victor-j10" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div style={{ width: 44, height: 44, borderRadius: 10, background: COLORS.subtle, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>🐙</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>GitHub</div>
                  <div style={{ color: COLORS.muted, fontSize: 13 }}>github.com/victor-j10</div>
                </div>
                <span style={{ marginLeft: 'auto', color: COLORS.accent }}>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <div className="divider" />
      <footer style={{ padding: '32px 0', textAlign: 'center' }}>
        <p style={{ color: COLORS.muted, fontSize: 13 }}>
          © 2026 Victor Hernández · GrizzlyHub Apps
        </p>
      </footer>

      {/* ─── EXPERIENCE MODAL ─── */}
      {selectedExp && (
        <div className="modal-overlay" onClick={() => setSelectedExp(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedExp(null)} style={{ position: 'absolute', top: 20, right: 20, background: COLORS.subtle, border: 'none', color: COLORS.muted, width: 36, height: 36, borderRadius: 8, cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
            
            <div style={{ marginBottom: 8 }}>
              <span className="tag">{selectedExp.duration}</span>
              <span style={{ fontSize: 12, color: COLORS.muted, marginLeft: 8 }}>{selectedExp.period}</span>
            </div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', marginTop: 10, marginBottom: 6 }}>{selectedExp.title}</h3>
            <p style={{ color: COLORS.muted, fontSize: 14, marginBottom: 28 }}>{selectedExp.company} · {selectedExp.sector}</p>

            <div style={{ height: 1, background: COLORS.border, marginBottom: 28 }} />

            <h4 style={{ fontSize: 13, fontWeight: 600, color: COLORS.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Responsabilidades</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
              {selectedExp.responsibilities.map((r, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ width: 20, height: 20, borderRadius: 6, background: selectedExp.color + '22', color: selectedExp.color, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>{i + 1}</span>
                  <p style={{ color: COLORS.muted, fontSize: 14, lineHeight: 1.7 }}>{r}</p>
                </div>
              ))}
            </div>

            <div style={{ height: 1, background: COLORS.border, marginBottom: 20 }} />
            <h4 style={{ fontSize: 13, fontWeight: 600, color: COLORS.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Stack tecnológico</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {selectedExp.technologies.map(t => (
                <span key={t} style={{ background: selectedExp.color + '18', color: selectedExp.color, border: `1px solid ${selectedExp.color}33`, fontSize: 12, fontWeight: 500, padding: '5px 12px', borderRadius: 6 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          #about .container > div { grid-template-columns: 1fr !important; gap: 32px !important; }
          #projects .card { grid-template-columns: 1fr !important; }
          #projects .card > div:first-child { height: 200px; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
};