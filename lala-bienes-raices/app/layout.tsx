import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Lala Bienes Raíces | Compra, Venta e Inversión",description:"Compra, vende o invierte en propiedades con una asesoría clara, honesta y cercana."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
