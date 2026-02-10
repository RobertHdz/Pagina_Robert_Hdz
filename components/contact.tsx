"use client"

import { dataContact, dataText } from "@/data";
import Title from "./shared/title";
import Link from "next/link";
import ContactForm from "./contact-form";
import { useLanguage } from "./language-provider";

const Contact = () => {
    const { language } = useLanguage();
    const content = dataText[language].contact;

    return (
        <div className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto" id="contact">
            <Title title={content.title} subtitle={content.subtitle} />

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-8">
                <div>
                    {dataContact[language].map((data) => (
                        <div key={data.id}
                            className="flex flex-col items-center dark:bg-slate-800 rounded-lg mb-5 p-4"
                        >
                            {data.icon}
                            <p>{data.title}</p>
                            <p>{data.subtitle}</p>
                            <Link href={data.link} target="_blank">
                                {content.button}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="col-span-2">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Contact;