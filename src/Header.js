import React, { useState, useEffect } from 'react';
import './Header.css'

export default function Header() {
  const [isHeaderVisible, setHeaderVisibility] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      if (isScrollingDown) {
        setHeaderVisibility(false);
      } else {
        setHeaderVisibility(true);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='header' style={{ transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)' }}>
      <a href="#default" class="logo">CompanyLogo</a>
      <div class="header-right">
        <a class="active" href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}
