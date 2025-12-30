import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { motion } from 'framer-motion';


export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const navItems = [
        { to: 'home', label: 'Inicio' },
        { to: 'about', label: 'Sobre mí' },
        { to: 'projects', label: 'Proyectos' },
        { to: 'skills', label: 'Habilidades' },
        { to: 'contact', label: 'Contacto' },
    ];

    const skills = [
        { name: "HTML", icon: "/icons/html-5.png" },
        { name: "CSS", icon: "/icons/css-3.png" },
        { name: "JavaScript", icon: "/icons/js.png" },
        { name: "PHP", icon: "/icons/php.png" },
        { name: "Python", icon: "/icons/python.png" },
        { name: "Java", icon: "/icons/java.png" },
        { name: "Node.js", icon: "/icons/nodo-js.png" },
        { name: "React", icon: "/icons/react.png" },
        { name: "Angular", icon: "/icons/angular.png" },
        { name: "Django", icon: "/icons/django.png" },
        { name: "MySQL", icon: "/icons/mysql.png" },
        { name: "Git", icon: "/icons/git.png" },
    ];

    const projects = [
        {
            title: "GrizzlyFit Tracker - (Continúa en desarrollo)",
            description:
                "App para registrar rutinas, hábitos y progreso personal. Hecha con React, Tailwind y Node.js + Express.",
            image: "/images/osito-grizzly.png",
            demo: "https://grizzlyfit-tracker.vercel.app/",
            github: "https://github.com/victor-j10",
        },
        {
            title: "To Do List",
            description:
                "App para registrar tareas. Hecha con Angular, SCSS, Angular Material, MockAPI (Para simular el Backend).",
            image: "/images/osito-grizzly-manage.png",
            demo: "https://to-do-list-mu-six-87.vercel.app/",
            github: "https://github.com/victor-j10",
        },
    ];

    return (
        <>
            {/* Cursor personalizado con efecto de luz */}
            <div 
                className="fixed pointer-events-none z-50 w-6 h-6 rounded-full bg-cyan-400/30 blur-xl transition-transform duration-300 ease-out"
                style={{
                    left: `${mousePosition.x - 12}px`,
                    top: `${mousePosition.y - 12}px`,
                    transform: 'translate(-50%, -50%)',
                }}
            />

            {/* Navbar futurista */}
            <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
                scrolled 
                    ? 'bg-black/90 backdrop-blur-2xl shadow-[0_0_30px_rgba(6,182,212,0.3)] border-b border-cyan-500/50' 
                    : 'bg-transparent'
            }`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
                    <div className="relative group">
                        <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent tracking-tighter">
                            VH
                        </div>
                        <div className="absolute inset-0 text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent blur-sm opacity-50 group-hover:opacity-100 transition-opacity">
                            VH
                        </div>
                    </div>

                    <button
                        className="md:hidden focus:outline-none text-cyan-400 hover:text-cyan-300 transition-colors relative z-50"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 8h16M4 16h16" />
                            )}
                        </svg>
                    </button>

                    <ul className="hidden md:flex gap-8 text-sm font-bold">
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <Link
                                    to={item.to}
                                    smooth={true}
                                    duration={700}
                                    className="text-slate-300 hover:text-cyan-400 cursor-pointer transition-all duration-300 relative group uppercase tracking-wider"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {isOpen && (
                    <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-cyan-500/30 shadow-[0_10px_40px_rgba(6,182,212,0.2)]">
                        <ul className="flex flex-col items-center text-sm font-bold py-8 space-y-6">
                            {navItems.map((item) => (
                                <li key={item.to}>
                                    <Link
                                        to={item.to}
                                        smooth={true}
                                        duration={700}
                                        onClick={() => setIsOpen(false)}
                                        className="text-slate-300 hover:text-cyan-400 cursor-pointer transition-colors uppercase tracking-wider"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>

            {/* Hero Section - Diseño radical con efectos de código */}
            <section id="home" className="relative min-h-screen pt-32 pb-20 bg-black text-white flex flex-col md:flex-row items-center justify-center gap-16 px-6 overflow-hidden">
                {/* Partículas de fondo */}
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    className="absolute inset-0 z-0"
                    options={{
                        background: {
                            color: {
                                value: "transparent",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: ["#06b6d4", "#3b82f6", "#8b5cf6"],
                            },
                            links: {
                                color: "#06b6d4",
                                distance: 150,
                                enable: true,
                                opacity: 0.3,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 50,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 3 },
                            },
                        },
                        detectRetina: true,
                    }}
                />

                {/* Fondo animado con efecto de código */}
                <div className="absolute inset-0 opacity-10 z-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
                </div>

                {/* Efectos de luz animados */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse z-0"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse z-0" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse z-0" style={{ animationDelay: '2s' }}></div>

                {/* Contenido principal */}
                <div className="max-w-2xl text-center md:text-left z-10 relative">
                    <div className="mb-6">
                        <span className="text-cyan-400 font-mono text-lg md:text-xl font-bold tracking-wider">
                            &lt;Ingeniero de Sistemas /&gt;
                        </span>
                    </div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-black mb-6 leading-tight"
                    >
                        <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                            VICTOR
                        </span>
                        <span className="block bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                            HERNÁNDEZ
                        </span>
                    </motion.h1>
                    <div className="mb-8 relative">
                        <p className="text-xl md:text-2xl text-slate-400 font-light mb-2">
                            Full Stack Developer
                        </p>
                        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)]"></div>
                    </div>
                    <p className="mb-10 text-lg text-slate-300 leading-relaxed max-w-xl">
                        Construyo soluciones digitales con código limpio, arquitectura escalable y 
                        tecnologías de vanguardia. Especializado en React, Node.js y sistemas robustos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <a
                            href="/Hoja-de-vida-2026.pdf"
                            target="_blank"
                            className="group relative px-10 py-5 text-lg font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-105"
                        >
                            <span className="relative z-10">DESCARGAR CV</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={700}
                            className="px-10 py-5 text-lg font-bold text-cyan-400 border-2 border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-105"
                        >
                            CONTACTAR
                        </Link>
                    </div>
                </div>
                
                {/* Foto con efecto neón extremo */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative z-10 group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"></div>
                    <motion.div 
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-cyan-400/50 shadow-[0_0_60px_rgba(6,182,212,0.6)]"
                    >
                        <img 
                            src="/foto-cv-2025.png" 
                            alt="Victor Hernández" 
                            className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </motion.div>
                    <div className="absolute -inset-4 border-4 border-cyan-400/20 rounded-3xl group-hover:border-cyan-400/40 transition-all duration-500"></div>
                </motion.div>
            </section>

            {/* Sobre mí - Diseño asimétrico */}
            <section id="about" className="relative bg-gradient-to-b from-black via-slate-900 to-black text-white px-6 py-32">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <div className="mb-8">
                                <h2 className="text-4xl md:text-5xl font-black mb-4">
                                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                        SOBRE
                                    </span>
                                    <br />
                                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                                        MÍ
                                    </span>
                                </h2>
                                <div className="w-24 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)]"></div>
                            </div>
                        </div>
                        <div className="flex-1 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-2 border-cyan-500/30 rounded-3xl p-10 shadow-[0_0_40px_rgba(6,182,212,0.2)] hover:shadow-[0_0_60px_rgba(6,182,212,0.4)] transition-all duration-500">
                            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                Desde que descubrí la programación, me apasiona construir cosas que funcionen y tengan impacto. 
                                He trabajado en proyectos que van desde apps personales hasta sistemas administrativos completos. 
                                Me gusta trabajar en equipo, escribir código limpio y aprender constantemente.
                            </p>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                Disfruto los retos técnicos, pero también valoro el diseño y la experiencia del usuario. 
                                Actualmente estoy enfocado en crecer como desarrollador Full Stack, explorando tecnologías 
                                como React, Express, Firebase y Docker.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proyectos - Cards con efecto 3D extremo */}
            <section id="projects" className="relative bg-black text-white px-6 py-32">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                PROYECTOS
                            </span>
                        </h2>
                        <div className="w-32 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)]"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                                whileHover={{ y: -12 }}
                                className="group relative bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-xl border-2 border-cyan-500/30 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.2)] hover:shadow-[0_0_80px_rgba(6,182,212,0.5)] transition-shadow duration-500"
                            >
                                {/* Efecto de brillo en hover */}
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 z-10 pointer-events-none"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                ></motion.div>
                                
                                {/* Contenedor de imagen optimizado */}
                                <div className="relative h-72 overflow-hidden bg-slate-900">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-center"
                                        initial={{ scale: 1 }}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ 
                                            duration: 0.6, 
                                            ease: [0.25, 0.1, 0.25, 1] 
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-0"></div>
                                </div>
                                
                                <div className="relative p-8 z-10">
                                    <motion.h3 
                                        className="text-3xl font-black text-cyan-400 mb-4"
                                        whileHover={{ color: "#67e8f9" }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <p className="text-slate-300 mb-8 text-lg leading-relaxed">{project.description}</p>
                                    <div className="flex gap-4">
                                        <motion.a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-black px-6 py-4 rounded-lg"
                                            whileHover={{ 
                                                scale: 1.05,
                                                boxShadow: "0 0 30px rgba(6, 182, 212, 0.6)"
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            DEMO
                                        </motion.a>
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center border-2 border-cyan-500/50 text-cyan-400 font-black px-6 py-4 rounded-lg"
                                            whileHover={{ 
                                                scale: 1.05,
                                                borderColor: "#22d3ee",
                                                backgroundColor: "rgba(6, 182, 212, 0.1)",
                                                boxShadow: "0 0 30px rgba(6, 182, 212, 0.4)"
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            GITHUB
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Habilidades - Grid con efectos de neón */}
            <section id="skills" className="relative bg-gradient-to-b from-black via-slate-900 to-black text-white px-6 py-32">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                HABILIDADES
                            </span>
                        </h2>
                        <div className="w-32 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)]"></div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ y: -12, scale: 1.1 }}
                                className="group relative flex flex-col items-center justify-center bg-gradient-to-br from-slate-800/80 to-black/80 backdrop-blur-xl border-2 border-cyan-500/20 p-8 rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all duration-500 hover:border-cyan-400"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 rounded-2xl transition-all duration-500"></div>
                                <img 
                                    src={skill.icon} 
                                    alt={skill.name} 
                                    className="w-20 h-20 mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 relative z-10 filter drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]" 
                                />
                                <span className="text-sm font-black text-slate-300 group-hover:text-cyan-400 transition-colors relative z-10 uppercase tracking-wider">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contacto - Diseño futurista */}
            <section id="contact" className="relative bg-black text-white px-6 py-32">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                CONTACTO
                            </span>
                        </h2>
                        <p className="text-slate-400 text-xl mb-4">¿Tienes un proyecto en mente? ¡Hablemos!</p>
                        <div className="w-32 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)]"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <a
                            href="mailto:victorjhr2211@gmail.com"
                            className="group relative flex flex-col items-center justify-center bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-xl border-2 border-cyan-500/30 p-12 rounded-3xl shadow-[0_0_40px_rgba(6,182,212,0.2)] hover:shadow-[0_0_80px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-4 hover:scale-105"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 rounded-3xl transition-all duration-500"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-cyan-400 mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10 drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            <span className="text-cyan-400 font-black text-xl mb-2 relative z-10">EMAIL</span>
                            <span className="text-slate-400 text-sm relative z-10">victorjhr2211@gmail.com</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/victor-jose-hernandez-reyes-859509233/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex flex-col items-center justify-center bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-xl border-2 border-cyan-500/30 p-12 rounded-3xl shadow-[0_0_40px_rgba(6,182,212,0.2)] hover:shadow-[0_0_80px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-4 hover:scale-105"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 rounded-3xl transition-all duration-500"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-16 h-16 text-cyan-400 mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10 drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]" fill="currentColor">
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.6 0 53.5 0 23.1 24.56 0 54.77 0s53.61 23.1 53.61 53.5c0 30.1-24.56 54.6-54.59 54.6zm394.2 339.9h-92.4V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.6v148.3h-92.6V148.9h88.9v40.8h1.3c12.4-23.4 42.6-48.3 87.7-48.3 93.8 0 111.1 61.8 111.1 142.3V448z" />
                            </svg>
                            <span className="text-cyan-400 font-black text-xl mb-2 relative z-10">LINKEDIN</span>
                            <span className="text-slate-400 text-sm relative z-10">Conectemos</span>
                        </a>

                        <a
                            href="https://github.com/victor-j10"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex flex-col items-center justify-center bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-xl border-2 border-cyan-500/30 p-12 rounded-3xl shadow-[0_0_40px_rgba(6,182,212,0.2)] hover:shadow-[0_0_80px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-4 hover:scale-105"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 rounded-3xl transition-all duration-500"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-cyan-400 mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10 drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.61.07-.6.07-.6 1 .07 1.53 1.02 1.53 1.02.89 1.52 2.34 1.08 2.91.82.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.02-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.57 4.94.36.31.69.92.69 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.7.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
                            </svg>
                            <span className="text-cyan-400 font-black text-xl mb-2 relative z-10">GITHUB</span>
                            <span className="text-slate-400 text-sm relative z-10">Ver repositorios</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
