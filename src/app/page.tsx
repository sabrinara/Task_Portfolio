"use client"

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

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
      <Testimonials isDark={isDark}/>
    </div>
  );
}
