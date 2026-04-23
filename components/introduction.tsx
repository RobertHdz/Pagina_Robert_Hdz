"use client"

import Link from "next/link";
import Image from "next/image";
import { Mail, Paperclip } from "lucide-react";

import { buttonVariants } from "./ui/button";

import Container from "./shared/container";
import { useLanguage } from "./language-provider";
import { dataIntroduction } from "@/data";

const Introduction = () => {
    const { language } = useLanguage();
    const content = dataIntroduction[language];

    return (
        <Container>
            <div className="text-center" id="home">
                <h3 className="text-xl mb-3">{content.greeting}</h3>
                <h1 className="text-4xl font-bold mb-3">{content.name} 🧑🏽‍💻</h1>
                <h2 className="text-2xl text-gray-400">{content.profession}</h2>
                <div className="flex items-center">
                    <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
                        <Link className={buttonVariants()} href="#contact">
                            <Mail className="mr-2" /> {content.contact}
                        </Link>

                        <Link className={buttonVariants({ variant: 'secondary' })}
                            href="/cv-Robert.pdf"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Paperclip className="mr-2" /> {content.downloadCv}
                        </Link>
                    </div>
        </div>
                <Image src="/profile.png" alt="Profile pic" className="mx-auto my-20" width={200} height={200} />
            </div>
    </Container>
    );
}

export default Introduction;
