import { Link } from 'react-scroll';

export const NavBar = () => {
    const navItems = [
        { label: 'Inicio', to: 'home' },
        { label: 'Quién Soy', to: 'about' },
        { label: 'Portafolio', to: 'projects' },
        { label: 'Contacto', to: 'contact' },
    ];
    return (
        <nav className="fixed top-0 w-full z-50 bg-white text-gray-800 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                <div className="text-xl font-bold text-cyan-600">VH</div>
                <ul className="flex gap-6 text-sm md:text-base font-medium">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <Link
                                to={item.to}
                                smooth={true}
                                duration={500}
                                className="hover:text-cyan-600 cursor-pointer transition-colors"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
