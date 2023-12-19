'use client'
//////////////////////////////////////////////////////////////////
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Keyboard } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useState } from 'react';
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
import 'swiper/css';
import 'swiper/css/bundle';

/////////////////////////////////////////////////////////////////




export default function Cards() {

    // Changes Background Based on Card Index : swiper.index

    let [col, setCol] = useState("pink")

    function changeColor(swiper) {
        switch (swiper.activeIndex) {
            case 0:
                setCol("pink");
                break;
            case 1:
                setCol("blue");
                break;
            case 2:
                setCol("green");
                break;
            case 3:
                setCol("game");
                break;
            case 4:
                setCol("orange");
                break;
            default:
                setCol("pink");
                break;
        }
    }


    return (

        <main style={{ height: "100svh" }} className="w-screen flex justify-center items-center">
            <Swiper
                className="sm:w-9/12 sm:h-4/5 w-3/12 h-4/5 rounded-3xl"
                spaceBetween={50}
                slidesPerView={1}
                modules={[Keyboard, EffectCards]}
                keyboard={{ enabled: true }} effect="cards"
                onSlideChange={(swiper) => changeColor(swiper)}>


                {
                    // Introductory Slide
                }
                <SwiperSlide className="bg-white rounded-3xl s0">
                </SwiperSlide>

                {
                    // About Me Slide
                }
                <SwiperSlide className=" bg-white rounded-3xl s1">
                    <div className="w-full h-[35%] bg-blue-200 relative bg-image">
                    </div>
                    <motion.div initial={{ x: '-50%' }} whileHover={{ y: -12, x: '-50%' }} className="w-36 h-36 bg-blue-900 rounded-full profile-image-container">

                    </motion.div>
                    <div className="w-full h-3/5 flex items-center flex-col ">
                        <div><h2>@mrmanjeyy</h2></div>
                        <div><h1 className="text-xl">Manoj Gautam</h1></div>
                    </div>

                </SwiperSlide>
                {
                    // Game slide
                }
                <SwiperSlide className="bg-white rounded-3xl s2">
                    <div className="s2-head w-full h-2/5 flex justify-center items-center">

                    </div>
                </SwiperSlide>
                {
                    // Slide
                }
                <SwiperSlide className="bg-white rounded-3xl s3">

                </SwiperSlide>
                {
                    // Last slide
                }
                <SwiperSlide className="bg-white rounded-3xl s4 o-b ">
                    <div className="w-full h-full flex flex-col">
                        <div className="w-full h-1/5"></div>
                        <div className="w-full h-3/5 flex flex-wrap items-center justify-center gap-6">
                            <motion.div whileHover={{ y: -12 }} className="rounded-3xl shadow-xl w-32 h-32 bg-white s"></motion.div>
                            <motion.div whileHover={{ y: -12 }} className="rounded-3xl shadow-xl w-32 h-32 bg-white s"></motion.div>
                            <motion.div whileHover={{ y: -12 }} className="rounded-3xl shadow-xl w-32 h-32 bg-white s"></motion.div>
                            <motion.div whileHover={{ y: -12 }} className="rounded-3xl shadow-xl w-32 h-32 bg-white s"></motion.div>
                        </div>
                        <div class="w-full h-1/5"></div>
                    </div>
                </SwiperSlide>

            </Swiper>
            
            {
                // Controllable Backround
            }
            <div className={` w-screen h-screen absolute ${col} `}></div>

        </main>
    );
};
