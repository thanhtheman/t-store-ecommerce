import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Posts from "./components/Posts/Posts";
import Footer from "./components/Footer/Footer";
import ThemProvider from 'react-bootstrap/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <ThemProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs">
    <div>
      <Navbar />
      <Hero />
      <Posts />
      <Footer />
    </div>
    </ThemProvider>
    
  )
}

export default App;
