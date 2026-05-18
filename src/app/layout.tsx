import type { Metadata } from "next";
import { Alex_Brush, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const alexBrush = Alex_Brush({
  weight: '400',
  variable: "--font-cursive",
  subsets: ["latin"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sebasm2kuy.github.io/modelomuestra/"),
  title: "Mis XV - Valentina Morales",
  description: "Invitación digital para los XV años de Valentina Morales. Sábado 14 de Marzo de 2027, Salón La Terraza, Punta del Este.",
  keywords: ["XV años", "Valentina", "quinceañera", "Vale", "invitación", "Punta del Este", "Uruguay"],
  openGraph: {
    title: "Mis XV - Valentina Morales",
    description: "Invitación digital para los XV años de Valentina Morales. Sábado 14 de Marzo de 2027, Salón La Terraza, Punta del Este.",
    type: "website",
    locale: "es_UY",
    url: "https://sebasm2kuy.github.io/modelomuestra/",
    siteName: "XV Años de Valentina",
    images: [
      {
        url: "/modelomuestra/invitacion-vertical.webp",
        width: 1080,
        height: 1350,
        alt: "Invitación XV Años de Valentina Morales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mis XV - Valentina Morales",
    description: "Invitación digital para los XV años de Valentina Morales",
    images: ["/modelomuestra/invitacion-vertical.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${alexBrush.variable} ${playfair.variable} ${montserrat.variable} antialiased`}
        style={{
          margin: 0,
          fontFamily: "'Montserrat', sans-serif",
          backgroundColor: '#050505',
          color: '#fdfcfb',
          overflowX: 'hidden',
        }}
      >
        {children}
      </body>
    </html>
  );
}
