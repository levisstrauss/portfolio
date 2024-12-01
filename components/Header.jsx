import Link from 'next/link';
import  { Button } from "./ui/button";

//-------------- COMPONENTS IMPORT -------------------//
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/*------------- LOGO -------------*/}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Zak<span className="text-accent">.</span>
                    </h1>
                </Link>
                {/*---------DESKTOP NAV & HIRE ME BUTTON-----------*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>
                {/*---------MOBILE NAV------------*/}
                <div className="xl:hidden">
                   <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header;
