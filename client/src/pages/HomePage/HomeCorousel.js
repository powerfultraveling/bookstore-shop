//modules 
import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

//statics
import styles from "../../css/Homepage.module.css";
import cover2 from "../../img/cover2.png"
import cover1 from "../../img/cover1.png"
import cover3 from "../../img/cover3.png"




export default function HomeCorousel(){
      return (
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={45}
          totalSlides={3}
          className={styles.carousel}
          isPlaying={true}
        > 
          <Slider>
            <Slide index={0}><img src={cover2} className={styles.landing_img}></img></Slide>
            <Slide index={1}><img src={cover1} className={styles.landing_img}></img></Slide>
            <Slide index={2}><img src={cover3} className={styles.landing_img}></img></Slide>
          </Slider>
          <DotGroup className={styles.dot}/>
        </CarouselProvider>
      );
  }