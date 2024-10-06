import { FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <h3 className="font-bold">syaafiudinm</h3>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/syaafiudinm"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/syaafiudinm"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
