import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Home = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [activeSection, setActiveSection] = useState('portada');
    const [showTableOfContents, setShowTableOfContents] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        const scrollContainer = document.querySelector('.scroll-container');
        if (section && scrollContainer) {
            scrollContainer.scrollTo({
                left: section.offsetLeft,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['portada', 'about', 'experience', 'projects', 'skills', 'contact'];
            const scrollContainer = document.querySelector('.scroll-container');
            if (!scrollContainer) return;
            
            const scrollPosition = scrollContainer.scrollLeft;
            const viewportWidth = window.innerWidth;
            
            // Encontrar la sección que está más centrada en la vista
            let closestSection = sections[0];
            let closestDistance = Infinity;
            
            sections.forEach((sectionId, index) => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionLeft = section.offsetLeft;
                    const sectionCenter = sectionLeft + viewportWidth / 2;
                    const distance = Math.abs(scrollPosition + viewportWidth / 2 - sectionCenter);
                    
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestSection = sectionId;
                        setCurrentPage(index + 1);
                    }
                }
            });
            
            setActiveSection(closestSection);
        };
        
        const scrollContainer = document.querySelector('.scroll-container');
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
            handleScroll(); // Llamar inicialmente
            return () => scrollContainer.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setSelectedExperience(null);
                setShowTableOfContents(false);
            }
        };
        if (selectedExperience || showTableOfContents) {
            window.addEventListener('keydown', handleEscape);
            document.body.style.overflow = selectedExperience ? 'hidden' : 'unset';
        }
        return () => {
            window.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [selectedExperience, showTableOfContents]);

    const chapters = [
        { id: 'portada', number: '', title: 'Portada', label: 'Inicio' },
        { id: 'about', number: 'I', title: 'Sobre mí', label: 'Sobre mí' },
        { id: 'experience', number: 'II', title: 'Trayectoria Profesional', label: 'Experiencia' },
        { id: 'projects', number: 'III', title: 'Obras Destacadas', label: 'Proyectos' },
        { id: 'skills', number: 'IV', title: 'Herramientas del Oficio', label: 'Habilidades' },
        { id: 'contact', number: 'V', title: 'Epílogo', label: 'Contacto' },
    ];

    const skills = [
        { name: "HTML", icon: "/icons/html-5.png", category: "Frontend" },
        { name: "CSS", icon: "/icons/css-3.png", category: "Frontend" },
        { name: "JavaScript", icon: "/icons/js.png", category: "Lenguajes" },
        { name: "TypeScript", icon: "/icons/typescript.png", category: "Lenguajes" },
        { name: "PHP", icon: "/icons/php.png", category: "Backend" },
        { name: "Python", icon: "/icons/python.png", category: "Lenguajes" },
        { name: "Java", icon: "/icons/java.png", category: "Lenguajes" },
        { name: "Node.js", icon: "/icons/nodo-js.png", category: "Backend" },
        { name: "React", icon: "/icons/react.png", category: "Frontend" },
        { name: "Next.js", icon: "/icons/nextjs.png", category: "Frontend" },
        { name: "Angular", icon: "/icons/angular.png", category: "Frontend" },
        { name: "VueJs", icon: "/icons/vuejs.png", category: "Frontend" },
        { name: "Django", icon: "/icons/django.png", category: "Backend" },
        { name: "MySQL", icon: "/icons/mysql.png", category: "Bases de Datos" },
        { name: "SQL Server", icon: "/icons/sql-server.png", category: "Bases de Datos" },
        { name: "PostgreSQL", icon: "/icons/postgresql.png", category: "Bases de Datos" },
        { name: "Git", icon: "/icons/git.png", category: "Herramientas" },
        { name: "Github", icon: "/icons/githubweb.png", category: "Herramientas" },
    ];

    const projects = [
        {
            title: "GrizzlyFit Tracker",
            subtitle: "En desarrollo continuo",
            description: "Aplicación web para el registro y seguimiento de rutinas de entrenamiento, hábitos diarios y progreso personal. Implementa una arquitectura moderna con React en el frontend, estilizado con Tailwind CSS, y un backend robusto construido con Node.js y Express.",
            image: "/images/osito-grizzly.png",
            demo: "https://grizzlyfit-tracker.vercel.app/",
            github: "https://github.com/victor-j10",
            tech: ["React", "Tailwind", "Node.js", "Express"]
        },
        {
            title: "To Do List",
            subtitle: "Gestión de tareas",
            description: "Sistema de gestión de tareas desarrollado con Angular, empleando SCSS para estilos personalizados, Angular Material para componentes UI, y MockAPI para simular operaciones backend. Implementa CRUD completo y gestión de estado eficiente.",
            image: "/images/osito-grizzly-manage.png",
            demo: "https://to-do-list-mu-six-87.vercel.app/",
            github: "https://github.com/victor-j10",
            tech: ["Angular", "SCSS", "Material", "MockAPI"]
        },
    ];

    const experiences = [
        {
            id: 1,
            period: "Julio 2023 - Enero 2024",
            duration: "7 meses",
            title: "Practicante de Planeación Corporativa",
            company: "ISA TRANSELCA S.A. E.S.P.",
            sector: "Energía y transmisión eléctrica",
            responsibilities: [
                "Desarrollé una aplicación web integral en Power Platform para el área ambiental, optimizando el almacenamiento, análisis y visualización de indicadores ambientales clave de la organización.",
                "Implementé dashboards interactivos en Power BI que mejoraron significativamente el análisis de información ambiental y presupuestaria, reduciendo los tiempos de procesamiento en un 40% y facilitando la toma de decisiones estratégicas.",
                "Capacité al equipo de ingenieros en el uso efectivo del aplicativo desarrollado, asegurando una adopción exitosa y maximizando el valor de las herramientas digitales implementadas.",
                "Gestioné reportes mensuales y trimestrales a la SSPD (Superintendencia de Servicios Públicos Domiciliarios), garantizando la precisión de datos y cumplimiento de plazos regulatorios.",
                "Apoyé la identificación, documentación y mapeo de riesgos empresariales, contribuyendo al cumplimiento de estándares operativos y protocolos de seguridad organizacional."
            ],
            technologies: ['Power BI', 'Tableau', 'Power Apps', 'Office 365', 'SharePoint', 'Power Automate']
        },
        {
            id: 2,
            period: "Julio 2025 - Actualidad",
            duration: "En curso",
            title: "Desarrollador Full Stack",
            company: "NESCANIS S.A.S",
            sector: "Tecnología - Sector minero y transporte",
            responsibilities: [
                "Desarrollo de nuevas funcionalidades end-to-end para aplicaciones del sector minero, implementando soluciones tanto en frontend como backend que optimizan procesos operativos críticos y mejoran significativamente el rendimiento del sistema.",
                "Participación activa en el desarrollo de una aplicación de gestión de transporte para Vulcano, construida con Next.js (frontend) y Laravel (backend), creando componentes React escalables y mantenibles, e implementando APIs REST robustas para la gestión eficiente de datos y lógica de negocio.",
                "Desarrollo y mantenimiento de servicios backend en Laravel, incluyendo: diseño e implementación de APIs RESTful, gestión de autenticación y autorización con middleware, integración con bases de datos SQL Server, validación de datos con Form Requests, y optimización de consultas complejas.",
                "Mantenimiento y soporte técnico de aplicación legacy de transporte desarrollada en Vue.js, gestionando tickets de clientes con SLAs definidos, diagnosticando y corrigiendo incidencias críticas, y asegurando la estabilidad continua del sistema en producción.",
                "Colaboración estrecha con equipos multidisciplinarios (diseño UX/UI, QA, producto, operaciones) para análisis detallado de requerimientos, diseño de arquitecturas técnicas escalables y entrega oportuna de funcionalidades de alta calidad.",
                "Implementación de buenas prácticas de desarrollo profesional: code reviews rigurosos, testing unitario y de integración, documentación técnica detallada (OpenAPI/Swagger), y versionado semántico para asegurar la calidad, mantenibilidad y escalabilidad del código."
            ],
            technologies: ['React', 'Vue.js', 'Next.js', 'Laravel', 'PHP', 'TypeScript', 'JavaScript', 'SQL Server', 'Git', 'GitHub', 'Postman', 'REST APIs']
        }
    ];

    return (
        <div className="book-container">
            {/* Tabla de Contenido - Índice del libro */}
            <AnimatePresence>
                {showTableOfContents && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-[#2a1f14]/60 backdrop-blur-sm z-40"
                            onClick={() => setShowTableOfContents(false)}
                        />
                        <motion.aside
                            initial={{ x: '-100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '-100%', opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed left-0 top-0 h-full w-full sm:w-80 bg-[#f9f6f0] z-50 shadow-2xl border-r-4 border-[#8b7355]"
                        >
                            <div className="h-full flex flex-col">
                                {/* Header del índice */}
                                <div className="px-4 sm:px-8 py-6 sm:py-10 border-b-2 border-[#d4c4a8]">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h2 className="text-2xl sm:text-3xl font-bold text-[#2a1f14] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                Índice
                                            </h2>
                                            <p className="text-xs sm:text-sm text-[#5a4a3a] italic">Tabla de contenido</p>
                                        </div>
                                        <button
                                            onClick={() => setShowTableOfContents(false)}
                                            className="text-[#5a4a3a] hover:text-[#2a1f14] transition-colors p-2 touch-manipulation"
                                        >
                                            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="w-16 sm:w-20 h-1 bg-[#b89968]"></div>
                                </div>

                                {/* Capítulos */}
                                <nav className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6">
                                    <div className="space-y-2 sm:space-y-3">
                                        {chapters.map((chapter, index) => (
                                            <button
                                                key={chapter.id}
                                                onClick={() => {
                                                    scrollToSection(chapter.id);
                                                    setShowTableOfContents(false);
                                                }}
                                                className={`block w-full text-left cursor-pointer group touch-manipulation`}
                                            >
                                                <div className={`px-4 sm:px-5 py-3 sm:py-4 rounded-lg transition-all duration-300 ${
                                                    activeSection === chapter.id
                                                        ? 'bg-[#8b7355] text-[#f9f6f0] shadow-md'
                                                        : 'hover:bg-[#eae4d8] active:bg-[#eae4d8] text-[#2a1f14]'
                                                }`}>
                                                    <div className="flex items-baseline justify-between mb-1">
                                                        <span className={`text-xs font-semibold tracking-widest ${
                                                            activeSection === chapter.id ? 'text-[#f9f6f0]/80' : 'text-[#b89968]'
                                                        }`}>
                                                            {chapter.number || 'PORTADA'}
                                                        </span>
                                                        <span className={`text-xs ${
                                                            activeSection === chapter.id ? 'text-[#f9f6f0]/60' : 'text-[#8b7355]/60'
                                                        }`}>
                                                            pág. {index + 1}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-sm sm:text-base font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                        {chapter.title}
                                                    </h3>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </nav>

                                {/* Footer del índice */}
                                <div className="px-8 py-6 border-t-2 border-[#d4c4a8] bg-[#f3ede3]">
                                    <p className="text-xs text-[#5a4a3a] text-center italic">
                                        "El código es poesía en movimiento"
                                    </p>
                                </div>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Botón flotante para abrir índice */}
            <motion.button
                onClick={() => setShowTableOfContents(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed top-4 left-4 sm:top-8 sm:left-8 z-30 bg-[#8b7355] text-[#f9f6f0] px-3 py-2.5 sm:px-5 sm:py-3 rounded-lg shadow-xl hover:bg-[#6d5a42] transition-all duration-300 flex items-center gap-2 sm:gap-3 group touch-manipulation"
            >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="font-semibold text-xs sm:text-sm hidden sm:inline">Índice</span>
                <span className="text-xs opacity-70 hidden md:inline">({currentPage}/6)</span>
            </motion.button>

            {/* Botón CV flotante */}
            <motion.a
                href="/Hoja_de_vida_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed top-4 right-4 sm:top-8 sm:right-8 z-30 bg-[#2a1f14] text-[#f9f6f0] px-3 py-2.5 sm:px-5 sm:py-3 rounded-lg shadow-xl hover:bg-[#1a120a] transition-all duration-300 flex items-center gap-2 group touch-manipulation"
            >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-semibold text-xs sm:text-sm">CV</span>
            </motion.a>

            {/* Contenido principal - Páginas del libro */}
            <main className="scroll-container flex overflow-x-auto overflow-y-hidden h-screen snap-x snap-mandatory scrollbar-hide" style={{ scrollBehavior: 'smooth' }}>
                {/* PORTADA */}
                <section id="portada" className="w-screen h-screen overflow-y-auto flex flex-col px-4 sm:px-6 py-8 sm:py-20 relative flex-shrink-0 snap-start">
                    {/* Decoraciones de fondo */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-0 left-0 w-full h-full" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, #2a1f14 1px, transparent 0)',
                            backgroundSize: '40px 40px'
                        }}></div>
                    </div>

                    <div className="max-w-5xl w-full relative z-10 mx-auto my-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="bg-[#f9f6f0] border-4 sm:border-8 border-double border-[#8b7355] shadow-2xl p-6 sm:p-12 md:p-20 relative"
                        >
                            {/* Decoración esquinas */}
                            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-[#b89968]"></div>
                            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-[#b89968]"></div>
                            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-[#b89968]"></div>
                            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-[#b89968]"></div>

                            <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
                                {/* Subtítulo superior */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                >
                                    <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#8b7355] mb-4 sm:mb-6">
                                        Portafolio Profesional
                                    </p>
                                    <div className="w-24 sm:w-32 h-px bg-[#b89968] mx-auto mb-4 sm:mb-8"></div>
                                </motion.div>

                                {/* Foto profesional */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                    className="flex justify-center mb-4 sm:mb-8"
                                >
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-[#b89968] transform rotate-3 rounded-lg"></div>
                                        <div className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-lg overflow-hidden border-2 sm:border-4 border-[#2a1f14] shadow-xl">
                                            <img 
                                                src="/foto-cv-2025.png" 
                                                alt="Victor Hernández" 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Nombre y título */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                    className="space-y-3 sm:space-y-4 md:space-y-6"
                                >
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-[#2a1f14] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        Victor<br />Hernández
                                    </h1>
                                    
                                    <div className="space-y-2 sm:space-y-3">
                                        <div className="flex items-center justify-center gap-2 sm:gap-4">
                                            <div className="w-8 sm:w-16 h-px bg-[#b89968]"></div>
                                            <p className="text-lg sm:text-xl md:text-2xl text-[#5a4a3a] font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                Ingeniero de Sistemas
                                            </p>
                                            <div className="w-8 sm:w-16 h-px bg-[#b89968]"></div>
                                        </div>
                                        <p className="text-base sm:text-lg md:text-xl text-[#8b7355] italic tracking-wide">
                                            Full Stack Developer
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Declaración personal */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.9, duration: 0.8 }}
                                    className="max-w-2xl mx-auto px-2"
                                >
                                    <div className="w-16 sm:w-24 h-px bg-[#b89968] mx-auto mb-4 sm:mb-6"></div>
                                    <p className="text-sm sm:text-base md:text-lg text-[#2a1f14] leading-relaxed font-serif">
                                        Construyo soluciones digitales con código limpio, arquitectura escalable y 
                                        tecnologías de vanguardia. Especializado en ecosistemas React, Node.js y sistemas robustos.
                                    </p>
                                </motion.div>

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.1, duration: 0.6 }}
                                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6"
                                >
                                    <button
                                        onClick={() => scrollToSection('about')}
                                        className="cursor-pointer px-6 sm:px-8 py-3 sm:py-4 bg-[#8b7355] text-[#f9f6f0] font-semibold text-sm sm:text-base rounded-lg hover:bg-[#6d5a42] active:bg-[#6d5a42] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation"
                                    >
                                        Comenzar lectura →
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className="cursor-pointer px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#8b7355] text-[#2a1f14] font-semibold text-sm sm:text-base rounded-lg hover:bg-[#8b7355] hover:text-[#f9f6f0] active:bg-[#8b7355] active:text-[#f9f6f0] transition-all duration-300 touch-manipulation"
                                    >
                                        Contactar
                                    </button>
                                </motion.div>

                                {/* Año */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.3, duration: 0.8 }}
                                    className="pt-4 sm:pt-8"
                                >
                                    <div className="w-12 sm:w-16 h-px bg-[#b89968] mx-auto mb-2 sm:mb-4"></div>
                                    <p className="text-xs sm:text-sm text-[#8b7355] tracking-widest">
                                        MMXXVI
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CAPÍTULO I - SOBRE MÍ */}
                <section id="about" className="w-screen h-screen overflow-y-auto px-4 sm:px-6 py-8 sm:py-16 md:py-24 bg-gradient-to-b from-[#f3ede3] to-[#ebe4d6] flex-shrink-0 snap-start">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#f9f6f0] border-2 sm:border-4 border-[#d4c4a8] shadow-xl p-6 sm:p-8 md:p-12 lg:p-16"
                        >
                            {/* Encabezado del capítulo */}
                            <div className="mb-8 sm:mb-12 md:mb-16">
                                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4">
                                    <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#b89968]/40" style={{ fontFamily: "'Playfair Display', serif" }}>I</span>
                                    <div className="flex-1">
                                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2a1f14] mb-1 sm:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            Sobre mí
                                        </h2>
                                        <p className="text-sm sm:text-base md:text-lg text-[#5a4a3a] italic">Capítulo Primero</p>
                                    </div>
                                </div>
                                <div className="w-24 sm:w-32 md:w-40 h-1 bg-[#b89968]"></div>
                            </div>

                            {/* Contenido del capítulo */}
                            <div className="space-y-6 sm:space-y-8 md:space-y-12">
                                {/* Introducción */}
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#2a1f14] first-letter:text-4xl sm:first-letter:text-5xl md:first-letter:text-6xl first-letter:font-bold first-letter:text-[#8b7355] first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3 first-letter:mt-1" style={{ fontFamily: "'Crimson Text', serif" }}>
                                        Ingeniero de Sistemas con experiencia comprobada en desarrollo web Full Stack. Mi trayectoria 
                                        profesional abarca el dominio de múltiples paradigmas de programación y tecnologías de vanguardia, 
                                        incluyendo JavaScript, TypeScript, PHP, Python, Java, y frameworks modernos como React, Angular, 
                                        Next.js, Vue.js y Laravel.
                                    </p>
                                </div>

                                {/* Secciones en columnas */}
                                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-12">
                                    {/* Experiencia */}
                                    <div className="bg-[#ebe4d6] border-l-4 border-[#b89968] p-4 sm:p-6 md:p-8 rounded-r-lg">
                                        <h3 className="text-xl sm:text-2xl font-bold text-[#2a1f14] mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            <span className="text-[#b89968]">§</span> Experiencia
                                        </h3>
                                        <p className="text-sm sm:text-base text-[#2a1f14] leading-relaxed">
                                            Especializado en el desarrollo de aplicaciones funcionales, escalables y bien estructuradas. 
                                            Competente en arquitecturas frontend y backend, gestión de bases de datos SQL y NoSQL, 
                                            diseño e implementación de APIs RESTful, control de versiones con Git, y despliegue en 
                                            entornos cloud y on-premise.
                                        </p>
                                    </div>

                                    {/* Sectores */}
                                    <div className="bg-[#ebe4d6] border-l-4 border-[#b89968] p-4 sm:p-6 md:p-8 rounded-r-lg">
                                        <h3 className="text-xl sm:text-2xl font-bold text-[#2a1f14] mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            <span className="text-[#b89968]">§</span> Sectores
                                        </h3>
                                        <p className="text-sm sm:text-base text-[#2a1f14] leading-relaxed">
                                            Experiencia diversificada en proyectos de alto impacto en sectores estratégicos: 
                                            desarrollo de soluciones web modernas, automatización de procesos empresariales, 
                                            aplicaciones para minería, sistemas de gestión de transporte y plataformas 
                                            para el sector energético.
                                        </p>
                                    </div>
                                </div>

                                {/* Filosofía - Destacado */}
                                <div className="bg-gradient-to-br from-[#2a1f14] to-[#3d2f1f] text-[#f9f6f0] p-6 sm:p-8 md:p-10 rounded-lg shadow-xl mt-6 sm:mt-8 border-2 sm:border-4 border-[#8b7355]">
                                    <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#b89968] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                                        </svg>
                                        <div className="flex-1">
                                            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                Filosofía de Trabajo
                                            </h3>
                                            <p className="text-sm sm:text-base md:text-lg leading-relaxed italic">
                                                Me apasiona escribir código limpio, elegante y mantenible. Busco constantemente 
                                                aprender nuevas herramientas y tecnologías para crear soluciones prácticas que 
                                                realmente funcionen. Disfruto trabajar en equipo, enfrentar desafíos técnicos complejos 
                                                y contribuir al éxito de los proyectos con un enfoque riguroso en la calidad, 
                                                el rendimiento y la sostenibilidad del código a largo plazo.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Datos rápidos */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t-2 border-[#d4c4a8]">
                                    <div className="text-center">
                                        <div className="text-3xl sm:text-4xl font-bold text-[#8b7355] mb-1 sm:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>1+</div>
                                        <div className="text-xs sm:text-sm text-[#5a4a3a] uppercase tracking-wide">Años de experiencia</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl sm:text-4xl font-bold text-[#8b7355] mb-1 sm:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>18+</div>
                                        <div className="text-xs sm:text-sm text-[#5a4a3a] uppercase tracking-wide">Tecnologías</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl sm:text-4xl font-bold text-[#8b7355] mb-1 sm:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>10+</div>
                                        <div className="text-xs sm:text-sm text-[#5a4a3a] uppercase tracking-wide">Proyectos</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl sm:text-4xl font-bold text-[#8b7355] mb-1 sm:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>3</div>
                                        <div className="text-xs sm:text-sm text-[#5a4a3a] uppercase tracking-wide">Sectores</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CAPÍTULO II - EXPERIENCIA */}
                <section id="experience" className="w-screen h-screen overflow-y-auto px-4 sm:px-6 py-8 sm:py-16 md:py-24 bg-[#ebe4d6] flex-shrink-0 snap-start">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#f9f6f0] border-2 sm:border-4 border-[#d4c4a8] shadow-xl p-6 sm:p-8 md:p-12 lg:p-16"
                        >
                            {/* Encabezado del capítulo */}
                            <div className="mb-8 sm:mb-12 md:mb-16">
                                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4">
                                    <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#b89968]/40" style={{ fontFamily: "'Playfair Display', serif" }}>II</span>
                                    <div className="flex-1">
                                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2a1f14] mb-1 sm:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            Trayectoria Profesional
                                        </h2>
                                        <p className="text-sm sm:text-base md:text-lg text-[#5a4a3a] italic">Capítulo Segundo</p>
                                    </div>
                                </div>
                                <div className="w-24 sm:w-32 md:w-40 h-1 bg-[#b89968]"></div>
                            </div>

                            {/* Timeline de experiencias */}
                            <div className="space-y-6 sm:space-y-8 md:space-y-10">
                                {experiences.map((experience, index) => (
                                    <motion.div
                                        key={experience.id}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        className="relative"
                                    >
                                        {/* Línea de tiempo */}
                                        {index < experiences.length - 1 && (
                                            <div className="absolute left-4 sm:left-6 top-16 sm:top-20 bottom-0 w-0.5 bg-gradient-to-b from-[#b89968] to-transparent"></div>
                                        )}

                                        <div className="relative pl-12 sm:pl-16">
                                            {/* Punto en la línea de tiempo */}
                                            <div className="absolute left-0 top-4 sm:top-6 w-10 h-10 sm:w-12 sm:h-12 bg-[#8b7355] rounded-full flex items-center justify-center border-2 sm:border-4 border-[#f9f6f0] shadow-lg">
                                                <span className="text-[#f9f6f0] font-bold text-xs sm:text-sm">{index + 1}</span>
                                            </div>

                                            <motion.div
                                                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(42, 31, 20, 0.15)' }}
                                                onClick={() => setSelectedExperience(experience)}
                                                className="bg-[#ebe4d6] border-2 border-[#d4c4a8] rounded-lg p-4 sm:p-6 md:p-8 cursor-pointer transition-all duration-300 touch-manipulation active:scale-[0.98]"
                                            >
                                                {/* Header de la experiencia */}
                                                <div className="mb-4 sm:mb-6">
                                                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                                        <span className="text-xs sm:text-sm font-semibold text-[#8b7355] bg-[#f9f6f0] px-2 sm:px-3 py-1 rounded-full">
                                                            {experience.period}
                                                        </span>
                                                        <span className="text-xs text-[#5a4a3a]">
                                                            • {experience.duration}
                                                        </span>
                                                    </div>
                                                    
                                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2a1f14] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                        {experience.title}
                                                    </h3>
                                                    
                                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-[#5a4a3a]">
                                                        <p className="text-base sm:text-lg font-semibold">{experience.company}</p>
                                                        <span className="hidden sm:inline text-[#b89968]">•</span>
                                                        <p className="text-xs sm:text-sm italic">{experience.sector}</p>
                                                    </div>
                                                </div>

                                                {/* Preview de responsabilidades */}
                                                <div className="mb-3 sm:mb-4">
                                                    <p className="text-sm sm:text-base text-[#2a1f14] leading-relaxed line-clamp-3">
                                                        {experience.responsibilities[0]}
                                                    </p>
                                                </div>

                                                {/* Call to action */}
                                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 pt-3 sm:pt-4 border-t border-[#d4c4a8]">
                                                    <span className="text-xs sm:text-sm text-[#8b7355] font-semibold hover:text-[#6d5a42] active:text-[#6d5a42] transition-colors flex items-center gap-2">
                                                        Leer más 
                                                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </span>
                                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                        {experience.technologies.slice(0, 3).map((tech) => (
                                                            <span key={tech} className="text-xs bg-[#f9f6f0] text-[#5a4a3a] px-2 py-1 rounded">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                        {experience.technologies.length > 3 && (
                                                            <span className="text-xs bg-[#8b7355] text-[#f9f6f0] px-2 py-1 rounded">
                                                                +{experience.technologies.length - 3}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CAPÍTULO III - PROYECTOS */}
                <section id="projects" className="w-screen h-screen overflow-y-auto px-4 sm:px-6 py-8 sm:py-16 md:py-24 bg-gradient-to-b from-[#ebe4d6] to-[#f3ede3] flex-shrink-0 snap-start">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#f9f6f0] border-2 sm:border-4 border-[#d4c4a8] shadow-xl p-6 sm:p-8 md:p-12 lg:p-16"
                        >
                            {/* Encabezado del capítulo */}
                            <div className="mb-8 sm:mb-12 md:mb-16">
                                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4">
                                    <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#b89968]/40" style={{ fontFamily: "'Playfair Display', serif" }}>III</span>
                                    <div className="flex-1">
                                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2a1f14] mb-1 sm:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            Obras Destacadas
                                        </h2>
                                        <p className="text-sm sm:text-base md:text-lg text-[#5a4a3a] italic">Capítulo Tercero</p>
                                    </div>
                                </div>
                                <div className="w-24 sm:w-32 md:w-40 h-1 bg-[#b89968]"></div>
                            </div>

                            {/* Grid de proyectos */}
                            <div className="space-y-6 sm:space-y-8 md:space-y-12">
                                {projects.map((project, index) => (
                                    <motion.article
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        className="group"
                                    >
                                        <div className="grid md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 bg-[#ebe4d6] border-2 border-[#d4c4a8] rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
                                            {/* Imagen del proyecto */}
                                            <div className="md:col-span-2 relative overflow-hidden bg-[#d4c4a8] min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#2a1f14]/20 to-transparent z-10"></div>
                                                <motion.img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover"
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ duration: 0.6 }}
                                                />
                                                {/* Número del proyecto */}
                                                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-[#8b7355] text-[#f9f6f0] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl z-20 shadow-lg">
                                                    {index + 1}
                                                </div>
                                            </div>

                                            {/* Contenido del proyecto */}
                                            <div className="md:col-span-3 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                                                <div>
                                                    <div className="mb-3 sm:mb-4">
                                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2a1f14] mb-1 sm:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                            {project.title}
                                                        </h3>
                                                        <p className="text-xs sm:text-sm text-[#8b7355] italic">{project.subtitle}</p>
                                                    </div>

                                                    <p className="text-sm sm:text-base text-[#2a1f14] leading-relaxed mb-4 sm:mb-6">
                                                        {project.description}
                                                    </p>

                                                    {/* Tecnologías */}
                                                    <div className="mb-4 sm:mb-6">
                                                        <p className="text-xs uppercase tracking-wide text-[#5a4a3a] mb-2 sm:mb-3 font-semibold">
                                                            Stack Tecnológico
                                                        </p>
                                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                            {project.tech.map((tech) => (
                                                                <span 
                                                                    key={tech} 
                                                                    className="px-2 sm:px-3 py-1 bg-[#f9f6f0] border border-[#d4c4a8] rounded-full text-xs sm:text-sm text-[#2a1f14] font-medium"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Botones de acción */}
                                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                                    <a
                                                        href={project.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 text-center bg-[#8b7355] text-[#f9f6f0] font-semibold text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-[#6d5a42] active:bg-[#6d5a42] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 touch-manipulation"
                                                    >
                                                        Ver Demo →
                                                    </a>
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 text-center border-2 border-[#8b7355] text-[#2a1f14] font-semibold text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-[#8b7355] hover:text-[#f9f6f0] active:bg-[#8b7355] active:text-[#f9f6f0] transition-all duration-300 touch-manipulation"
                                                    >
                                                        Código
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CAPÍTULO IV - HABILIDADES */}
                <section id="skills" className="w-screen h-screen overflow-y-auto px-4 sm:px-6 py-8 sm:py-16 md:py-24 bg-[#f3ede3] flex-shrink-0 snap-start">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#f9f6f0] border-2 sm:border-4 border-[#d4c4a8] shadow-xl p-6 sm:p-8 md:p-12 lg:p-16"
                        >
                            {/* Encabezado del capítulo */}
                            <div className="mb-8 sm:mb-12 md:mb-16">
                                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4">
                                    <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#b89968]/40" style={{ fontFamily: "'Playfair Display', serif" }}>IV</span>
                                    <div className="flex-1">
                                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2a1f14] mb-1 sm:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            Herramientas del Oficio
                                        </h2>
                                        <p className="text-sm sm:text-base md:text-lg text-[#5a4a3a] italic">Capítulo Cuarto</p>
                                    </div>
                                </div>
                                <div className="w-24 sm:w-32 md:w-40 h-1 bg-[#b89968]"></div>
                            </div>

                            {/* Habilidades organizadas por categoría */}
                            {['Frontend', 'Backend', 'Lenguajes', 'Bases de Datos', 'Herramientas'].map((category, catIndex) => {
                                const categorySkills = skills.filter(skill => skill.category === category);
                                if (categorySkills.length === 0) return null;

                                return (
                                    <motion.div
                                        key={category}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                                        className="mb-8 sm:mb-10 md:mb-12 last:mb-0"
                                    >
                                        <h3 className="text-xl sm:text-2xl font-bold text-[#2a1f14] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            <span className="w-7 h-7 sm:w-8 sm:h-8 bg-[#8b7355] text-[#f9f6f0] rounded-full flex items-center justify-center text-xs sm:text-sm">
                                                {catIndex + 1}
                                            </span>
                                            {category}
                                        </h3>
                                        
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                                            {categorySkills.map((skill, index) => (
                                                <motion.div
                                                    key={skill.name}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                                    whileHover={{ y: -8, scale: 1.05 }}
                                                    className="group bg-[#ebe4d6] border-2 border-[#d4c4a8] rounded-lg p-3 sm:p-4 md:p-6 text-center hover:border-[#8b7355] hover:shadow-xl transition-all duration-300"
                                                >
                                                    <div className="mb-2 sm:mb-4 flex justify-center">
                                                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
                                                            <img 
                                                                src={skill.icon} 
                                                                alt={skill.name} 
                                                                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
                                                            />
                                                        </div>
                                                    </div>
                                                    <p className="text-xs sm:text-sm font-semibold text-[#2a1f14]">
                                                        {skill.name}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* CAPÍTULO V - CONTACTO (EPÍLOGO) */}
                <section id="contact" className="w-screen h-screen overflow-y-auto px-4 sm:px-6 py-8 sm:py-16 md:py-24 bg-gradient-to-b from-[#f3ede3] to-[#ebe4d6] flex-shrink-0 snap-start">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#f9f6f0] border-2 sm:border-4 border-[#d4c4a8] shadow-xl p-6 sm:p-8 md:p-12 lg:p-16"
                        >
                            {/* Encabezado del capítulo */}
                            <div className="mb-8 sm:mb-12 md:mb-16">
                                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4">
                                    <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#b89968]/40" style={{ fontFamily: "'Playfair Display', serif" }}>V</span>
                                    <div className="flex-1">
                                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2a1f14] mb-1 sm:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            Epílogo
                                        </h2>
                                        <p className="text-sm sm:text-base md:text-lg text-[#5a4a3a] italic">Capítulo Final - Conectemos</p>
                                    </div>
                                </div>
                                <div className="w-24 sm:w-32 md:w-40 h-1 bg-[#b89968]"></div>
                            </div>

                            {/* Mensaje personal */}
                            <div className="mb-8 sm:mb-10 md:mb-12">
                                <div className="bg-[#ebe4d6] border-l-4 border-[#8b7355] p-4 sm:p-6 md:p-8 rounded-r-lg mb-4 sm:mb-6 md:mb-8">
                                    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#2a1f14] italic">
                                        "Cada proyecto es una nueva página en blanco esperando ser escrita con código elegante y soluciones innovadoras. 
                                        Si tienes un desafío técnico o una idea que necesita cobrar vida, estoy listo para colaborar."
                                    </p>
                                </div>
                                
                                <p className="text-sm sm:text-base md:text-lg text-[#5a4a3a] text-center mb-6 sm:mb-8">
                                    Estoy disponible para nuevas oportunidades, colaboraciones y conversaciones interesantes.
                                </p>
                            </div>

                            {/* Opciones de contacto */}
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
                                <motion.a
                                    href="mailto:victorjhr2211@gmail.com"
                                    whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(42, 31, 20, 0.15)' }}
                                    className="group bg-[#ebe4d6] border-2 border-[#d4c4a8] rounded-lg p-4 sm:p-6 md:p-8 text-center hover:border-[#8b7355] active:border-[#8b7355] transition-all duration-300 touch-manipulation"
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-[#8b7355] rounded-full flex items-center justify-center group-hover:bg-[#6d5a42] group-active:bg-[#6d5a42] transition-colors">
                                        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#f9f6f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#2a1f14] mb-1 sm:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        Email
                                    </h3>
                                </motion.a>

                                <motion.a
                                    href="https://www.linkedin.com/in/victor-jose-hernandez-reyes-859509233/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(42, 31, 20, 0.15)' }}
                                    className="group bg-[#ebe4d6] border-2 border-[#d4c4a8] rounded-lg p-4 sm:p-6 md:p-8 text-center hover:border-[#8b7355] active:border-[#8b7355] transition-all duration-300 touch-manipulation"
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-[#8b7355] rounded-full flex items-center justify-center group-hover:bg-[#6d5a42] group-active:bg-[#6d5a42] transition-colors">
                                        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#f9f6f0]" fill="currentColor" viewBox="0 0 448 512">
                                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#2a1f14] mb-1 sm:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        LinkedIn
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[#5a4a3a]">
                                        Conecta conmigo
                                    </p>
                                </motion.a>

                                <motion.a
                                    href="https://github.com/victor-j10"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(42, 31, 20, 0.15)' }}
                                    className="group bg-[#ebe4d6] border-2 border-[#d4c4a8] rounded-lg p-4 sm:p-6 md:p-8 text-center hover:border-[#8b7355] active:border-[#8b7355] transition-all duration-300 touch-manipulation sm:col-span-2 md:col-span-1"
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-[#8b7355] rounded-full flex items-center justify-center group-hover:bg-[#6d5a42] group-active:bg-[#6d5a42] transition-colors">
                                        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#f9f6f0]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#2a1f14] mb-1 sm:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        GitHub
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[#5a4a3a]">
                                        Explora mi código
                                    </p>
                                </motion.a>
                            </div>

                            {/* Cierre del libro */}
                            <div className="text-center pt-8 sm:pt-10 md:pt-12 border-t-2 border-[#d4c4a8]">
                                <p className="text-xs sm:text-sm text-[#5a4a3a] italic mb-3 sm:mb-4">
                                    "El fin es solo el comienzo de una nueva historia"
                                </p>
                                <div className="flex justify-center items-center gap-2 sm:gap-3 text-[#8b7355]">
                                    <div className="w-12 sm:w-16 h-px bg-[#b89968]"></div>
                                    <span className="text-xl sm:text-2xl">❖</span>
                                    <div className="w-12 sm:w-16 h-px bg-[#b89968]"></div>
                                </div>
                                <p className="text-xs text-[#8b7355] mt-4 sm:mt-6 tracking-widest">
                                    VICTOR JOSÉ HERNÁNDEZ • MMXXVI
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* Modal de experiencia detallada */}
            <AnimatePresence>
                {selectedExperience && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2a1f14]/70 backdrop-blur-md"
                        onClick={() => setSelectedExperience(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 40 }}
                            transition={{ type: 'spring', damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative bg-[#f9f6f0] border-2 sm:border-4 border-[#8b7355] rounded-lg p-4 sm:p-6 md:p-10 lg:p-12 max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl mx-2 sm:mx-4"
                        >
                            {/* Decoración esquinas */}
                            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#b89968]"></div>
                            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#b89968]"></div>
                            <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#b89968]"></div>
                            <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#b89968]"></div>

                            {/* Botón cerrar */}
                            <button
                                onClick={() => setSelectedExperience(null)}
                                className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 text-[#5a4a3a] hover:text-[#2a1f14] active:text-[#2a1f14] transition-colors z-10 bg-[#ebe4d6] rounded-full p-1.5 sm:p-2 hover:bg-[#d4c4a8] active:bg-[#d4c4a8] touch-manipulation"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Contenido */}
                            <div className="pr-8 sm:pr-10 md:pr-12">
                                {/* Header */}
                                <div className="mb-6 sm:mb-8">
                                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                        <span className="text-xs sm:text-sm font-semibold text-[#8b7355] bg-[#ebe4d6] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                                            {selectedExperience.period}
                                        </span>
                                        <span className="text-xs sm:text-sm text-[#5a4a3a]">
                                            • {selectedExperience.duration}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2a1f14] mb-2 sm:mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        {selectedExperience.title}
                                    </h3>
                                    
                                    <div className="flex flex-col gap-1 sm:gap-2 text-[#5a4a3a]">
                                        <p className="text-lg sm:text-xl font-semibold">{selectedExperience.company}</p>
                                        <p className="text-sm sm:text-base italic">{selectedExperience.sector}</p>
                                    </div>
                                </div>

                                <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#b89968] mb-6 sm:mb-8"></div>

                                {/* Responsabilidades */}
                                <div className="mb-8 sm:mb-10">
                                    <h4 className="text-xl sm:text-2xl font-bold text-[#2a1f14] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        <span className="text-[#b89968]">§</span>
                                        Responsabilidades y Logros
                                    </h4>
                                    <div className="space-y-3 sm:space-y-4">
                                        {selectedExperience.responsibilities.map((responsibility, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-start gap-3 sm:gap-4 bg-[#ebe4d6] p-3 sm:p-4 rounded-lg border-l-4 border-[#b89968]"
                                            >
                                                <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-[#8b7355] text-[#f9f6f0] rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mt-0.5 sm:mt-1">
                                                    {index + 1}
                                                </span>
                                                <p className="text-sm sm:text-base text-[#2a1f14] leading-relaxed flex-1">
                                                    {responsibility}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tecnologías */}
                                <div className="pt-6 sm:pt-8 border-t-2 border-[#d4c4a8]">
                                    <h4 className="text-lg sm:text-xl font-bold text-[#2a1f14] mb-3 sm:mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        Stack Tecnológico
                                    </h4>
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        {selectedExperience.technologies.map((tech, index) => (
                                            <motion.span
                                                key={tech}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#8b7355] text-[#f9f6f0] rounded-full text-xs sm:text-sm font-medium shadow-sm"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};