import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import AIPortfolioInfo from "./components/AIPortfolioInfo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import "./App.css";

function App() {
  // Set up proper document structure for SEO
  useEffect(() => {
    // Set proper lang attribute
    document.documentElement.lang = "en";

    // Add skip link for accessibility
    const skipLink = document.createElement("a");
    skipLink.href = "#main-content";
    skipLink.textContent = "Skip to main content";
    skipLink.className =
      "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded z-50";
    document.body.insertBefore(skipLink, document.body.firstChild);

    return () => {
      // Cleanup
      if (document.body.contains(skipLink)) {
        document.body.removeChild(skipLink);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <SEO />
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AIPortfolioInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
