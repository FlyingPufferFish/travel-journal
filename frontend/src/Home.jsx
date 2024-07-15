import { About } from "./About";
import { PoiBoard } from "./PoiBoard";

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