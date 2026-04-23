"use client"

import { dataPortfolio, dataText } from "@/data";
import Title from "./shared/title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { useLanguage } from "./language-provider";

const Portfolio = () => {
    const { language } = useLanguage();
    const content = dataText[language].portfolio;

    return (
        <div className="p-4 max-w-4xl md:py-24 mx-auto" id="portfolio">
            <Title title={content.title} subtitle={content.subtitle} />

            <div className="grid md:grid-cols-3 gap-14 mt-4">
                {dataPortfolio[language].map((data) => (
                    <div key={data.id}>
                        <h3 className="text-xl mb-4">{data.title}</h3>
                        <Image
                            src={data.image}
                            alt="Image"
                            width={300} height={300} className="rounded-2xl w-full"
                        />

                        <div className="mt-5 flex gap-5">

                            <Link
                                className={buttonVariants()}
                                href={data.urlDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {content.demo}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;