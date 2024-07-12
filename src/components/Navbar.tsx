import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";
import ObfuscatedText from "./ObfuscatedText";

export default function Navbar() {

  const location = useLocation();

  const navItems = useMemo(
    () => [
      { href: "/", text: "/marco" },
      { href: "/about", text: "/about" },
      { href: "/projects", text: "/projects" },
      { href: "https://github.com/ycmarcoli", text: "/github", isExternal: true },
    ],
    []
  );

  return (
    <div className="flex justify-between font-agave text-lg font-bold">
      <ul className="flex gap-12">
        {navItems.map((item) => (
          <li key={item.text}>
            {item.isExternal ? (
              <a href={item.href} className="hover:text-yellow-500" target="_blank" rel="noopener noreferrer">
                <ObfuscatedText text={item.text} icon={<HiOutlineExternalLink />} />
              </a>
            ) : (
              <Link to={item.href} className={`hover:text-yellow-500 ${location.pathname === item.href ? "text-yellow-500" : ""}`}>
                <ObfuscatedText text={item.text} />
              </Link>
            )}
          </li>
        ))}
      </ul>
      <ThemeToggle className="hover:text-yellow-500" />
    </div>
  );
}
