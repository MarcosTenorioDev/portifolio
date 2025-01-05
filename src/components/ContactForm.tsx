import React, { useState } from "react";
import { z } from "zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ZodContactForm = () => {
    const { toast } = useToast();
    const t = useTranslations("HomePage");
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

    const schema = z.object({
        name: z.string().min(1, t("ContactForm.validators.name")).max(50, t("ContactForm.validators.name")).nonempty(t("ContactForm.validators.name")),
        email: z.string().email(t("ContactForm.validators.email")),
        message: z.string().min(10, t("ContactForm.validators.message")),
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (schema.shape[name as keyof typeof schema.shape]) {
            try {
                schema.shape[name as keyof typeof schema.shape].parse(value);
                setErrors({ ...errors, [name]: undefined });
            } catch (err) {
                if (err instanceof z.ZodError) {
                    setErrors({ ...errors, [name]: err.errors[0]?.message });
                }
            }
        }
    };
        const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            schema.parse(formData);

            const serviceId = process.env.NEXT_PUBLIC_SERVICEID!;
            const templateId = process.env.NEXT_PUBLIC_TEMPLATEID!;
            const userId = process.env.NEXT_PUBLIC_USERID;

            const templateParams = {
                from_name: formData.name,
                email: formData.email,
                message: formData.message,
            };

            await emailjs.send(serviceId, templateId, templateParams, userId);

            toast({
                title: t("ContactForm.validators.success"),
            })


            setFormData({ name: "", email: "", message: "" });
            setErrors({});
        } catch (err) {
            if (err instanceof z.ZodError) {
                const fieldErrors = err.errors.reduce(
                    (acc, error) => ({ ...acc, [error.path[0]]: error.message }),
                    {}
                );
                setErrors(fieldErrors);
            } else {
                toast({
                    title: t("ContactForm.validators.error"),
                    variant: "destructive",
                });
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 h-full flex flex-col">
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <div className="w-full">
                    <div className="drop-shadow-xl clip-custom-input-container overflow-hidden">
                        <Input
                            type="text"
                            name="name"
                            placeholder={t("ContactForm.name")}
                            value={formData.name}
                            onChange={handleChange}
                            className={`h-10 sm:h-12 lg:h-14 focus-visible:ring-0 text-xs sm:text-sm lg:text-base bg-card clip-custom-input w-full ${
                                errors.name ? "border-red-500" : ""
                            }`}
                        />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs lg:text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="w-full">
                    <div className="drop-shadow-xl clip-custom-input-container overflow-hidden">
                        <Input
                            type="email"
                            name="email"
                            placeholder={t("ContactForm.email")}
                            value={formData.email}
                            onChange={handleChange}
                            className={`h-10 sm:h-12 lg:h-14 focus-visible:ring-0 text-xs sm:text-sm lg:text-base bg-card clip-custom-input w-full ${
                                errors.email ? "border-red-500" : ""
                            }`}
                        />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs lg:text-sm mt-1">{errors.email}</p>}
                </div>
            </div>

            <div className="flex-grow flex">
                <div className="drop-shadow-xl clip-custom-input-container overflow-hidden h-full w-full">
                    <Textarea
                        name="message"
                        placeholder={t("ContactForm.message")}
                        value={formData.message}
                        onChange={handleChange}
                        className={`h-full min-h-[150px] focus-visible:ring-0 text-xs sm:text-sm lg:text-base bg-card clip-custom-input w-full px-4 py-2 resize-none ${
                            errors.message ? "border-red-500" : ""
                        }`}
                    />
                </div>
            </div>
            {errors.message && <p className="text-red-500 text-xs lg:text-sm mt-1">{errors.message}</p>}

            <Button type="submit" className="dark:bg-white dark:text-black">{t("ContactForm.send")}</Button>
        </form>
    );
};

export default ZodContactForm;
