import Header from "@/components/header";
import Footer from "@/components/footer";
import Stats from "@/components/stats";
import Welcome from "@/components/welcome";
import Features from "@/components/features";
import Section from "@/components/section";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#36393f] text-gray-100 flex flex-col">
    <Header />
    <main className="flex-grow">
      <Welcome />
      <Features />
      <Stats />
      <Section />
    </main>
    <Footer />
  </div>
  )
}