// pages/_app.tsx
import type { AppProps } from "next/app";
import SideNav from "@/components/navigation/SideNav";
import { Inter_Tight, Lora } from "next/font/google";
import "../styles/globals.css";

/* ----------------------------
   Fonts
----------------------------- */
const InterTight = Inter_Tight({
  variable: "--font-inter-tight",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const LoraSans = Lora({
  variable: "--font-lora-sans",
  subsets: ["latin"],
});

/* ----------------------------
   App Component
----------------------------- */
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${InterTight.variable} ${LoraSans.variable} antialiased`}>
      <div className="flex md:flex-row flex-col font-inter mx-auto relative xl:py-[4.25rem] xl:px-[6.75rem] md:p-[3.75rem] p-[1.5rem]">
        <SideNav />
        <main className="max-w-2xl w-full border-l border-[#D3D3D3] xl:pl-[3.25rem] md:pl-[1.75rem]">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}
