import Link from "./Link"

function NavBar({esVisible}) {
    return(
    <>
    <nav className={`navbar ${esVisible ? "visible" : "invisible"}` }>
        <Link vinculo = "#"> Inicio</Link>
        <Link vinculo = "/pages/contact.html"> Contacto</Link>
        <Link vinculo = "/pages/about.html"> Sobre Nosotros</Link>
        <Link vinculo = "/pages/tyc.html"> Terminos y Condiciones</Link>
    </nav>
    </>
    );
}

export default NavBar;