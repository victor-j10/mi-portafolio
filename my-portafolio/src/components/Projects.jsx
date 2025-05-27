
export const Projects = () => {
    const proyectos = [
        {
            nombre: 'App de Hábitos',
            descripcion: 'Una app para registrar y seguir hábitos saludables. CRUD completo.',
            tecnologias: 'React, Tailwind, Node, MySQL',
            link: '#',
            github: '#',
        },
        // Agrega más si querés
    ];
    return (
        <section id="projects" className="bg-white text-gray-800 px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-cyan-600 mb-10">Proyectos</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {proyectos.map((p, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2">{p.nombre}</h3>
                            <p className="text-gray-600 mb-2">{p.descripcion}</p>
                            <p className="text-sm text-gray-500 mb-4">Tecnologías: {p.tecnologias}</p>
                            <div className="flex gap-4">
                                <a href={p.link} target="_blank" className="text-cyan-600 underline">Ver online</a>
                                <a href={p.github} target="_blank" className="text-cyan-600 underline">GitHub</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
