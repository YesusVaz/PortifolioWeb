import { Header } from "@/components/header";
import Footer from "@/sections/footer";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}