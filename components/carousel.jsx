"use client";
import React from "react";
import Image from "next/image";  // Import Image component from Next.js
import "./Carousel.css";

// Import images
import threem from "../app/assets/logos/3m.svg";
import barstool from "../app/assets/logos/barstool-store.svg";
import budweiser from "../app/assets/logos/budweiser.svg";
import buzzfeed from "../app/assets/logos/buzzfeed.svg";
import forbes from "../app/assets/logos/forbes.svg";
import menshealth from "../app/assets/logos/menshealth.svg";
import mrbeast from "../app/assets/logos/mrbeast.svg";
import macys from "../app/assets/logos/macys.svg";

const Carousel = () => {
  return (
    <div className="logos">
      <div className="logos-slide">
        <Image src={threem} alt="3m" height={50} width={94} />
        <Image src={barstool} alt="Barstool Store" height={50} width={94} />
        <Image src={budweiser} alt="Budweiser" height={50} width={94} />
        <Image src={buzzfeed} alt="Buzzfeed" height={50} width={94} />
        <Image src={forbes} alt="Forbes" height={50} width={94} />
        <Image src={macys} alt="Macys" height={50} width={94} />
        <Image src={menshealth} alt="Mens Health" height={50} width={94} />
        <Image src={mrbeast} alt="Mr. Beast" height={50} width={94} />
      </div>
      <div className="logos-slide">
        <Image src={threem} alt="3m" height={50} width={94} />
        <Image src={barstool} alt="Barstool Store" height={50} width={94} />
        <Image src={budweiser} alt="Budweiser" height={50} width={94} />
        <Image src={buzzfeed} alt="Buzzfeed" height={50} width={94} />
        <Image src={forbes} alt="Forbes" height={50} width={94} />
        <Image src={macys} alt="Macys" height={50} width={94} />
        <Image src={menshealth} alt="Mens Health" height={50} width={94} />
        <Image src={mrbeast} alt="Mr. Beast" height={50} width={94} />
      </div>
    </div>
  );
};

export default Carousel;
