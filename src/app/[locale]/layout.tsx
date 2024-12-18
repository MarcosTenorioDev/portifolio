import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Marcos Tenorio | Fullstack Developer",
  description:
    "Portfólio de Marcos Tenorio, desenvolvedor fullstack com experiência em React, Next.js, Node.js, Fastify, Angular e tecnologias modernas. Trabalhei em soluções SaaS e APIs robustas, aplicando boas práticas como SOLID, testes e metodologias ágeis.",
  keywords: [
    "Marcos Tenorio",
    "Desenvolvedor Fullstack",
    "React",
    "Next.js",
    "Node.js",
    "Fastify",
    "Angular",
    "PostgreSQL",
    "Tailwind CSS",
    "SaaS",
    "API REST",
    "Prisma",
    "AWS S3",
    "Desenvolvedor Recife",
    "Programador Recife",
    "Software developer",
    "Software engineer",
    "Portfólio Marcos Tenorio",
  ],
  authors: [
    {
      name: "Marcos Tenorio",
      url: "https://github.com/marcostenoriodev",
    },
  ],
  openGraph: {
    title: "Marcos Tenorio | Fullstack Developer",
    description:
      "Portfólio de Marcos Tenorio, desenvolvedor fullstack com experiência em projetos SaaS, frontend com React e Angular, backend com Node.js e Fastify, além de banco de dados PostgreSQL e MongoDB.",
    url: "", //insert url after deploy
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
    title: "Marcos Tenorio | Fullstack Developer",
    description:
      "Desenvolvedor fullstack com experiência em projetos SaaS, React, Next.js, Node.js, Fastify, PostgreSQL, Tailwind CSS e muito mais.",
    images: ["https://avatars.githubusercontent.com/u/107797969?v=4"],
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({locale});

  return (
    <html lang={locale}>
      <body className={`${robotoMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}