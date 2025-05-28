import { useState } from 'react';
import { Link } from 'react-scroll';


export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

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
    return (
        <>
            <nav className="fixed top-0 w-full z-50 bg-[#0F172A] text-[#F8FAFC] shadow-lg">
                <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                    <div className="text-xl font-bold text-[#38BDF8]">VH</div>

                    {/* Botón Hamburguesa (solo visible en móviles) */}
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="#F8FAFC" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                            )}
                        </svg>
                    </button>

                    {/* Menú en pantallas grandes */}
                    <ul className="hidden md:flex gap-6 text-sm md:text-base font-medium">
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <Link
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    className="hover:text-[#7DD3FC] cursor-pointer transition-colors"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Menú desplegable en móviles */}
                {isOpen && (
                    <ul className="md:hidden flex flex-col items-center bg-[#1E293B] text-sm font-medium py-4 space-y-4">
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <Link
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setIsOpen(false)} // Cierra menú al hacer clic
                                    className="hover:text-[#7DD3FC] cursor-pointer transition-colors"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>

            <section id="home" className="pt-32 pb-20 bg-[#0F172A] text-[#F8FAFC] flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6">
                <div className="max-w-lg text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-[#38BDF8]">
                        Victor Hernández
                    </h1>
                    <p className="mb-6 text-[#CBD5E1] text-justify">
                        Ingeniero en sistemas especializado en desarrollo web Full Stack.
                        Apasionado por crear soluciones eficientes con tecnologías modernas como React, NodeJS y Java.
                    </p>
                    <a
                        href="/Hoja-de-vida-2025.pdf"
                        target="_blank"
                        className="inline-block bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#0F172A] font-semibold px-6 py-3 rounded-md transition"
                    >
                        Ver CV
                    </a>
                </div>
                {/**border-4 border-[#38BDF8]  */}
                <div className="w-60 h-60 rounded-xl overflow-hidden shadow-md">
                    <img src="/foto-cv-2025.png" alt="Tu Foto" className="w-full h-full object-cover" />
                </div>
            </section>

            <section id="about" className="bg-[#1E293B] text-[#F8FAFC] px-6 py-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#38BDF8] mb-6">Sobre mí</h2>
                    <p className="text-[#CBD5E1] text-justify leading-relaxed">
                        Desde que descubrí la programación, me apasiona construir cosas que funcionen y tengan impacto. He trabajado en proyectos que van desde apps personales hasta sistemas administrativos completos. Me gusta trabajar en equipo, escribir código limpio y aprender constantemente.
                        <br /><br />
                        Disfruto los retos técnicos, pero también valoro el diseño y la experiencia del usuario. Actualmente estoy enfocado en crecer como desarrollador Full Stack, explorando tecnologías como React, Express, Firebase y Docker.
                    </p>
                </div>
            </section>




            {/* PROYECTOS */}
            <section id="projects" className="bg-[#0F172A] text-[#F8FAFC] px-6 py-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-cyan-500 mb-12 text-center md:text-left">Proyectos recientes</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Proyecto individual */}
                        <div className="bg-[#1E293B] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
                            <img
                                src="/images/osito-grizzly.png"
                                alt="GrizzlyFit Tracker"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-cyan-400 mb-2">GrizzlyFit Tracker</h3>
                                <p className="text-gray-300 mb-4 text-sm">
                                    App para registrar rutinas, hábitos y progreso personal. Hecha con React, Tailwind y Node.js + Express.
                                </p>
                                <div className='flex justify-around'>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold px-4 py-2 rounded transition"
                                    >
                                        Ver Demo
                                    </a>

                                    <a
                                        href="#"
                                        target="_blank"
                                        className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold px-4 py-2 rounded transition"
                                    >
                                        Ver GitHub
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Puedes duplicar este bloque para más proyectos */}
                    </div>
                </div>
            </section>

            {/* HABILIDADES */}
            <section id="skills" className="bg-[#1E293B] text-[#F8FAFC] px-6 py-20">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-cyan-500 mb-10">Habilidades</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex flex-col items-center space-y-2 bg-[#334155] p-4 rounded-xl shadow-md hover:scale-105 transition-transform"
                            >
                                <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                                <span className="text-sm font-semibold">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-[#0F172A] text-[#F8FAFC] px-6 py-20">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#38BDF8] mb-10">Contacto</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">

                        {/* Email */}
                        <div className="flex flex-col items-center space-y-3 bg-[#1E293B] p-4 rounded-xl shadow-md hover:scale-105 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#7DD3FC]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16v16H4z" stroke="none" />
                                <path d="M22 6l-10 7L2 6" />
                            </svg>
                            <a href="mailto:victorjhr2211@gmail.com" className="text-[#7DD3FC] hover:underline text-sm font-semibold">
                                Gmail
                            </a>
                        </div>

                        {/* LinkedIn */}
                        <div className="flex flex-col items-center space-y-3 bg-[#1E293B] p-4 rounded-xl shadow-md hover:scale-105 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8 text-[#7DD3FC]" fill="currentColor">
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.6 0 53.5 0 23.1 24.56 0 54.77 0s53.61 23.1 53.61 53.5c0 30.1-24.56 54.6-54.59 54.6zm394.2 339.9h-92.4V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.6v148.3h-92.6V148.9h88.9v40.8h1.3c12.4-23.4 42.6-48.3 87.7-48.3 93.8 0 111.1 61.8 111.1 142.3V448z" />
                            </svg>
                            <a href="https://www.linkedin.com/in/victor-jose-hernandez-reyes-859509233/" target="_blank" className="text-[#7DD3FC] hover:underline text-sm font-semibold">
                                LinkedIn
                            </a>
                        </div>

                        {/* GitHub */}
                        <div className="flex flex-col items-center space-y-3 bg-[#1E293B] p-4 rounded-xl shadow-md hover:scale-105 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#7DD3FC]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.61.07-.6.07-.6 1 .07 1.53 1.02 1.53 1.02.89 1.52 2.34 1.08 2.91.82.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.02-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.57 4.94.36.31.69.92.69 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.7.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
                            </svg>
                            <a href="https://github.com/victor-j10" target="_blank" className="text-[#7DD3FC] hover:underline text-sm font-semibold">
                                Github
                            </a>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}
