import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";
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
    <ul className="flex justify-start gap-12 text-lg font-agave font-bold">
      {navItems.map((item) => (
        <li key={item.text}>
          {item.isExternal ? (
            <a
              href={item.href}
              className="hover:text-yellow-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ObfuscatedText text={item.text} icon={<HiOutlineExternalLink />} />
            </a>
          ) : (
            <Link
              to={item.href}
              className={`hover:text-yellow-500 ${
                location.pathname === item.href ? "text-yellow-500" : ""
              }`}
            >
              <ObfuscatedText text={item.text} />
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
