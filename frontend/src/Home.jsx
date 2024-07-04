import { useEffect, useState } from "react";
import ChinaTown from "./assets/images/china-town.jpg"

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

// 'Trips' Section
export function PoiBoard(props) {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      // console log the destination url 
      console.log(import.meta.env.VITE_API_URL)
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}pois/`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result)
        // update 'data': set the value of 'data' to the value of 'result'
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData()
  }, [])
  
  return (
    // <section id= 'about' className={styles.about}>
    <section id='poiboard'>
        <div>
            {/* display all POI */}
            {data.map((item) => (
              <div>
                <p key={item.id}>{item.title}</p>
                <img src={item.image}/>
              </div>
            ))}
        </div>
    </section>
  );
}

// POI card component 

export default function HomePage(props) {

  return (
    // <section id= 'about' className={styles.about}>
    <section id='homepage'>
        <div>
            <About />
            <PoiBoard />
        </div>
    </section>
  );
}