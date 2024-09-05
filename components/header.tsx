import Image from "next/image";

const Logo = () => (
    <div className="flex items-center space-x-4">
        <Image src="/favicon.svg" width={48} height={48} alt="Furry Bot" />
        <h1 className="text-2xl font-bold text-[#7289da]">Furry Bot</h1>
    </div>
);

const NavLinks = () => (
    <nav>
        <ul className="flex space-x-4">
            <li>
                <a href="#features" className="hover:text-[#7289da]">
                    Features
                </a>
            </li>
            <li>
                <a href="#stats" className="hover:text-[#7289da]">
                    Stats
                </a>
            </li>
            <li>
                <a href="#add" className="hover:text-[#7289da]">
                    Add to Server
                </a>
            </li>
        </ul>
    </nav>
);

const Header = () => {
    return ( 
        <header className="bg-[#202225] p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Logo />
                <NavLinks />
            </div>
        </header>
    );
}
 
export default Header;