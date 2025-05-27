import React from 'react'

export const Contact = () => {
    return (
        <section id="contact" className="bg-gray-100 text-gray-800 px-6 py-20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-cyan-600 mb-6">Contacto</h2>
                <p className="mb-4 text-gray-700">Podés contactarme por:</p>
                <ul className="space-y-2 text-gray-700">
                    <li>Email: <a href="mailto:tuemail@mail.com" className="text-cyan-600">tuemail@mail.com</a></li>
                    <li>LinkedIn: <a href="https://linkedin.com/in/tuusuario" target="_blank" className="text-cyan-600">linkedin.com/in/tuusuario</a></li>
                    <li>GitHub: <a href="https://github.com/tuusuario" target="_blank" className="text-cyan-600">github.com/tuusuario</a></li>
                </ul>
            </div>
        </section>
    )
}
