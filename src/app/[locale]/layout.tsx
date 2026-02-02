import type { Metadata } from "next";
import { Roboto_Mono, Space_Grotesk } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from 'next-themes';
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "@/components/ui/toaster";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["700"],
  style: ["normal"],
});

const deploy = process.env.NEXT_PUBLIC_DEPLOY;
export async function generateMetadata(): Promise<Metadata> {
  const isQA = deploy?.toLowerCase() === "qa";

  return {
    title: isQA
      ? "Marcos Tenorio | QA Engineer"
      : "Marcos Tenorio | Fullstack Developer",

    description: isQA
      ? "Portfólio de Marcos Tenorio, QA Engineer com foco em qualidade de software, testes funcionais, testes automatizados, garantia da qualidade, boas práticas de QA e melhoria contínua de processos."
      : "Portfólio de Marcos Tenorio, desenvolvedor fullstack com experiência em React, Next.js, Node.js, Fastify, Angular e tecnologias modernas.",

    keywords: isQA
      ? [
          "Marcos Tenorio",
          "QA Engineer",
          "Quality Assurance",
          "Testes de Software",
          "Testes Automatizados",
          "Testes Manuais",
          "Software Quality",
          "Web Automation",
          "Mobile Automation",
          "CI/CD",
        ]
      : [
          "Marcos Tenorio",
          "Desenvolvedor Fullstack",
          "React",
          "Next.js",
          "Node.js",
          "Fastify",
          "Angular",
          "PostgreSQL",
          "Tailwind CSS",
        ],

    authors: [
      {
        name: "Marcos Tenorio",
        url: "https://github.com/marcostenoriodev",
      },
    ],

    openGraph: {
      title: isQA
        ? "Marcos Tenorio | QA Engineer"
        : "Marcos Tenorio | Fullstack Developer",
      description: isQA
        ? "QA Engineer focado em qualidade de software, testes e confiabilidade de sistemas."
        : "Desenvolvedor fullstack com experiência em projetos SaaS e APIs robustas.",
      url: "https://marcostenorio.me",
      siteName: "Portfólio de Marcos Tenorio",
      images: [
        {
          url: "https://avatars.githubusercontent.com/u/107797969?v=4",
          width: 1200,
          height: 630,
          alt: "Pré-visualização do Portfólio de Marcos Tenorio",
        },
      ],
      locale: "pt_BR",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: isQA
        ? "Marcos Tenorio | QA Engineer"
        : "Marcos Tenorio | Fullstack Developer",
      description: isQA
        ? "QA Engineer com foco em testes, qualidade e confiabilidade de software."
        : "Desenvolvedor fullstack com experiência em React, Next.js e Node.js.",
      images: ["https://avatars.githubusercontent.com/u/107797969?v=4"],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const validLocale = locale as Locale;

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({locale: validLocale});

  return (
    <html lang={validLocale} suppressHydrationWarning>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className={`${robotoMono.variable} ${spaceGrotesk.variable} antialiased bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
          <Toaster />
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
