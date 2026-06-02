import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [topbarHeight, setTopbarHeight] = useState(40);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const isTouchDevice = () => window.matchMedia("(hover: none)").matches;

  // Medir altura del TopBar dinámicamente
  useEffect(() => {
    const topbar = document.querySelector(".topbar") as HTMLElement;
    if (!topbar) return;

    const updateHeight = () => setTopbarHeight(topbar.offsetHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(topbar);
    return () => observer.disconnect();
  }, []);

  // Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > topbarHeight);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [topbarHeight]);

  // Actualizar padding-top de todos los .page-wrapper dinámicamente
  useEffect(() => {
    const updatePageWrapper = () => {
      const topbar = document.querySelector(".topbar") as HTMLElement;
      const navbar = document.querySelector(".navbar") as HTMLElement;
      const total = (topbar?.offsetHeight ?? 0) + (navbar?.offsetHeight ?? 0);
      document.querySelectorAll(".page-wrapper").forEach((el) => {
        (el as HTMLElement).style.paddingTop = `${total}px`;
      });
    };

    updatePageWrapper();
    window.addEventListener("resize", updatePageWrapper);

    const observer = new ResizeObserver(updatePageWrapper);
    const topbar = document.querySelector(".topbar");
    const navbar = document.querySelector(".navbar");
    if (topbar) observer.observe(topbar);
    if (navbar) observer.observe(navbar);

    return () => {
      window.removeEventListener("resize", updatePageWrapper);
      observer.disconnect();
    };
  }, []);

  // Click fuera cierra dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => { if (!isTouchDevice()) setOpen(true); };
  const handleMouseLeave = () => { if (!isTouchDevice()) setOpen(false); };
  const handleButtonClick = () => { if (isTouchDevice()) setOpen((prev) => !prev); };

  const navTop = scrolled ? 0 : topbarHeight;

  return (
    <nav
      ref={navRef}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      style={{ top: `${navTop}px` }}
    >
      <div className="navbar-logo">
        <a href="/"><img src="lagalardonada-icono.svg" alt="Logo" /></a>
      </div>

      <ul className="navbar-menu">
        <li>
          <Link to="/sobre-nosotros">Sobre nosotros</Link>
        </li>

        <li
          ref={dropdownRef}
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            type="button"
            className="dropdown-btn"
            onClick={handleButtonClick}
            aria-expanded={open}
          >
            Servicios <span className={`arrow ${open ? "open" : ""}`}>▼</span>
          </button>

          {open && (
            <ul className="dropdown-menu">
              <li><Link to="/limpieza-de-sofas-a-domicilio-madrid" onClick={() => setOpen(false)}>Limpieza de sofás a domicilio Madrid</Link></li>
              <li><Link to="/limpieza-de-colchones-a-domicilio-madrid" onClick={() => setOpen(false)}>Limpieza de colchones a domicilio Madrid</Link></li>
              <li><Link to="/limpieza-de-alfombras-madrid" onClick={() => setOpen(false)}>Limpieza de alfombras Madrid</Link></li>
              <li><Link to="/limpieza-de-edredones" onClick={() => setOpen(false)}>Limpieza de edredones</Link></li>
              <li><Link to="/restauracion-de-alfombras" onClick={() => setOpen(false)}>Restauración de alfombras</Link></li>
              <li><Link to="/limpieza-de-cortinas" onClick={() => setOpen(false)}>Limpieza de cortinas</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/precios-limpieza-madrid">Precios</Link></li>
        <li><Link to="/promociones">Promociones</Link></li>
        <li><Link to="/galeria-de-trabajos-realizados">Galería</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>

        <li>
          <Link to="/solicita-tu-cita" className="service-btn">
            Solicita tu servicio
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;