import "./Header.scss";
import { RiMenuLine } from "@remixicon/react";

export default function Header() {
    
    return <header className="header">
        <a href="/" className="header__logo">elizabeth-sheremet</a>
        <RiMenuLine
            size={26} 
        />
    </header>
}