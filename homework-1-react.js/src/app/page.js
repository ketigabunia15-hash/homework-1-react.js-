
import Navbar from "@/components/Navbar";

export default function Page() {
  const list = ["Home", "About", "Contact", "Cart"];

  return (
    <div>
      <Navbar list={list} />
    </div>
  );
}

import React from "react";

const Navbar = ({ list }) => {
  return (
    <nav>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Page() {
    const navList = ["Home", "About", "Contact", "Cart"];
    const socialList = ["Facebook", "Linkedin", "Viber", "YouTube", "Email"];
    return (
    <div>
      <Navbar list={navList} />

      <main>
        <h1>Welcome to the page!</h1>
      </main>
      <Footer socialList={socialList} />

    </div>
     );
}






