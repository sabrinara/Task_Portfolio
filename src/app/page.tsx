"use client"

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark])
  return (
    <div>
      <Navbar isDark={isDark} setIsDark={setIsDark}/>
      <Banner />
      <AboutMe />
      <Services />
      <Projects />
      <Testimonials isDark={isDark} setIsDark={setIsDark}/>
      <Contact />
      <Footer />
    </div>
  );
}
