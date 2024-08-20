import {SiGoogletranslate} from "react-icons/si";
import {PiCaretRight} from "react-icons/pi";
import {navMenus} from "./navMenus.js";

function Navbar() {
    return (
        <nav className="md:flex items-center justify-around p-4 hidden">
            <div className="flex items-center gap-8">
                {
                    navMenus.map((menu, index) => (
                        <a key={index} href={menu.path}>{menu.name}</a>
                    ))
                }
            </div>

            <div className="flex items-center gap-4">
                <button className="flex items-center gap-2">
                    <SiGoogletranslate/> <span>English</span>
                </button>

                <a href="/sign-up" className="flex items-center gap-2 bg-primary w-fit rounded-lg py-2 px-4 text-white/90"><span>Sign up</span> <PiCaretRight/></a>
            </div>
        </nav>
    )
}

export default Navbar
