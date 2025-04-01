import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./theme/GlobalStyles";
import lightTheme from "./theme/light";
import darkTheme from "./theme/dark";
import ToggleTheme from "./toggleTheme";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeProvider theme = {isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ToggleTheme toggleTheme = {toggleTheme} isDark = {isDark} />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
