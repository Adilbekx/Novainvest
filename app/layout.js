import "./globals.css";
import Header from "./_components/Header/Header";
import CallButton from "./_components/CallButton";
import Footer from "./_components/Footer/Footer";
import WavyBackground from "@/components/WavyBackground";


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="relative">
        <WavyBackground />
        <Header />
        <CallButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
