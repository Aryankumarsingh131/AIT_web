import Image from "next/image";
import localFont from "next/font/local";
import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import Footer from "@/components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
//import Category from "@/components/Category"
import EGRTools from "@/components/EGRTools/EGRToolsSection";
import { Notes } from "@mui/icons-material";
import EGRToolsSection from "@/components/EGRTools/EGRToolsSection";
import NotesSection from "@/components/Notes/NotesSection";
import SportsItemsSection from "@/components/SportsItems/SportsItemsSection";
import GadgetsSection from "@/components/Gadgets/GadgetsSection";
import AccessoriesSection from "@/components/Accessories/AccessoriesSection";
import CameraSection from "@/components/Camera/CameraSection";
//import FlashDeals from "@/components/home/FlashDeals";
//import FlasDeals from "@/components/home/FlashDeals";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <Layout>
     <Hero />
     {/*<FlashDeals />*/}
     <EGRToolsSection/>
     <NotesSection/>
     <SportsItemsSection/>
     <GadgetsSection/>
     <AccessoriesSection/>
     <CameraSection/>


     </Layout>
  );
}
