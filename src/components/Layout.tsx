import { ReactNode } from "react"
import PromoBanner from "./PromoBanner";
import HeaderTop from "./HeaderTop";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
    children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
    return <>
    <PromoBanner/>
    <HeaderTop/>
    <Header />
    <Navbar />
    {children}
    <Footer /></>

}