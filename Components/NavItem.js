import Link from "next/link";

function NavItem({href, text, active}){

    return(

        <Link href={href}>
            <a className={`nav__item ${active ? "active" : ""}`}>
                {text}
            </a>
        </Link>

    );

}

export default NavItem;