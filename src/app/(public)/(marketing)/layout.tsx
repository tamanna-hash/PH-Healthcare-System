import Footer from "@/components/layout/public/Footer";
import Header from "@/components/layout/public/Header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full" >
        <Header />
      </header>
      <main className="flex-1">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
