import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { ABeeZee, Raleway } from "next/font/google";
import "./globals.css";

const aBeeZee = ABeeZee({
    weight: "400",
    variable: "--font-aBeeZee",
});

const raleway = Raleway({
    weight: ["400"],
    variable: "--font-raleway",
});

export const metadata: Metadata = {
    title: "Mastercore",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body
                className={cn(
                    "antialiased",
                    aBeeZee.className,
                    raleway.variable
                )}
            >
                {children}
            </body>
        </html>
    );
}
