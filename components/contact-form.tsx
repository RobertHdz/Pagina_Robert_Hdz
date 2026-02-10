"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { useLanguage } from "./language-provider";
import { dataText } from "@/data";

const ContactForm = () => {
    const { language } = useLanguage();
    const content = dataText[language].contactForm;
    const [successForm, setSuccessForm] = useState(false)

    const formSchema = z.object({
        username: z.string().min(2).max(50),
        email: z.string().email(),
        message: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            message: ""
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const response = await fetch("/api/send", {
            method: "POST",
            body: JSON.stringify(values)
        })
        if (response.status === 200) {
            setSuccessForm(true)
        }
    }

    return (
        <Form {...form}>
            {successForm ? (
                <h4>{content.success}</h4>
            ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder={content.namePlaceholder}
                                        {...field}
                                        className="dark:bg-slate-800"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder={content.emailPlaceholder}
                                        {...field}
                                        className="dark:bg-slate-800"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        placeholder={content.messagePlaceholder}
                                        {...field}
                                        className="dark:bg-slate-800"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">{content.button}</Button>
                </form>
            )}
        </Form>
    );
}

export default ContactForm;