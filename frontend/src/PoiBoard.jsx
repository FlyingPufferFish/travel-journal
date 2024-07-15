import { useEffect, useState } from "react";
import PoiCard from "./components/PoiCard";

// 'Points of Interest' Section
export function PoiBoard(props) {
  const [data, setData] = useState([])

  // Function to fetch data
  const fetchData = async() => {
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

  useEffect(() => {
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
                <p key={item.id}>{item.date}</p>
                <img src={item.image}/>
              </div>
            ))}
        </div>
    </section>
  );
}
