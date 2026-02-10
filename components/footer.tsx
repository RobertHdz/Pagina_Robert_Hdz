"use client"

import Link from "next/link";
import { Separator } from "./ui/separator";
import { useLanguage } from "./language-provider";
import { dataText } from "@/data";

const Footer = () => {
    const { language } = useLanguage();
    const content = dataText[language].footer;

    return (
        <footer className="max-w-3xl mx-auto">
            <div className="md:flex md:justify-between">
                <div>
                    <h4 className="text-3xl font-bold my-6 md:my-0">Robert Hernández</h4>
                </div>
                <div className="px-2 flex justify-between md:gap-8 items-center">
                    <Link href="#about-me">{content.aboutMe}</Link>
                    <Link href="#skills">{content.skills}</Link>
                    <Link href="#services">{content.services}</Link>
                    <Link href="#portfolio">{content.portfolio}</Link>
                    <Link href="#contact">{content.contact}</Link>
                </div>
            </div>
            <Separator className="my-4" />
            <div className="text-center">&copy; 2026 | {content.rights}</div>
        </footer>
    );
}

export default Footer;