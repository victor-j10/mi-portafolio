
export const Home = () => {
    return (
        <section className="pt-32 pb-20 bg-white text-gray-800 flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6">
            <div className="max-w-lg text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    Soy <span className="text-cyan-600">Nombre</span>
                </h1>
                <p className="mb-6 text-gray-600">
                    Desarrollador web enfocado en experiencias modernas con React y Node. Actualmente creando proyectos propios mientras busco oportunidades.
                </p>
                <a
                    href="/ruta-a-tu-cv.pdf"
                    target="_blank"
                    className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-md transition"
                >
                    Descargar CV
                </a>
            </div>
            <div className="w-60 h-60 rounded-xl overflow-hidden border-4 border-cyan-500 shadow-md">
                <img src="/" alt="Tu Foto" className="w-full h-full object-cover" />
            </div>
        </section>
    )
}
