import { useScrollAccent } from "./hooks/useScrollAccent";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail";

export default function App() {
  useScrollAccent();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0c0c0c] text-[#f5f5f5] overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/projecten/:slug" element={<ProjectDetail />} />
          </Routes>
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
