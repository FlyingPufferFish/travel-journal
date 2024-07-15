import { useEffect, useState } from "react";
import ChinaTown from "./assets/images/china-town.jpg";

// 'About' section
export function About(props) {
  return (
    // <section id= 'about' className={styles.about}>
    <section id='about'>
        <div>
            <h1>云南之旅</h1>
            <h2>Yunnan Trip</h2>
            <img src={ChinaTown}/>
        </div>
    </section>
  );
}
