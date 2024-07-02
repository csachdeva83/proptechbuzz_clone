import { Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className=" w-full flex items-center p-6 text-white bg-[#1A2033]">
            <div className="flex flex-wrap items-center justify-center w-full max-w-6xl gap-8 mx-auto md:flex-nowrap md:justify-between md:gap-0">
                <p className="text-sm text-white">PropTechBuzz. © 2024. All Rights Reserved</p>
                <nav>
                    <ul className="flex items-center justify-start gap-x-8">
                        <li><Link className="text-sm" href="/contact-us">Contact Us</Link></li>
                        <li>
                            <Link href="https://www.linkedin.com/company/proptechbuzz">
                                <Linkedin />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.youtube.com/@proptechbuzz">
                                <Youtube />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://twitter.com/proptechbuzz">
                                <Twitter />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;