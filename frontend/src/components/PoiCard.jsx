import { useRef, useEffect } from 'react';
import styles from './PoiCard.module.css';
// import lineClamp from 'line-clamp';

const PoiCard = ({image, title}) => {
    const titleRef = useRef(null)
    const contentRef = useRef(null)

    // useEffect(() => {
    //     function clamp () {
    //         titleRef.current.textContent = title
    //         lineClamp(titleRef.current, 2)

    //     }

    //     setTimeout(() => {
    //         clamp()
    //     }, 100)

    //     window.addEventListener('resize', clamp)

    //     return () => window.removeEventListener('resize', clamp)
    // }, [])

    return (
        <div className={styles.poiCard}>

            <img className={styles.poiCard__Image} src={image}/>

            <div className={styles.poiCard__Text}>

                <strong className={`${styles.poiCard__Title} line-clamp title`} ref={titleRef}>
                    {title}
                </strong>
                    
                {/* <p className="line-clamp content" ref={contentRef}>{content}</p> */}


                {/* <div className={styles.poiCard__info}>
                    <a href={link} target="_blank">

                        <strong>Read more →</strong>
                    </a>

                    <div className={styles.poiCard__Duration}>
                        <strong>{duration}</strong>
                    </div>
                </div> */}
            </div>

        </div>
    )
}

export default PoiCard;