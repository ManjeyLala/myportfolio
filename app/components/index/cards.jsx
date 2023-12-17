'use client'
//////////////////////////////////////////////////////////////////
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Keyboard } from 'swiper/modules';
import { motion } from 'framer-motion';
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
import 'swiper/css';
import 'swiper/css/bundle';
/////////////////////////////////////////////////////////////////

export default function Cards() {
    return (
        <main style={{ height: "100svh" }} className="w-screen flex justify-center items-center">
            <Swiper
                className="sm:w-9/12 sm:h-4/5 w-3/12 h-4/5 rounded-3xl"
                spaceBetween={50}
                slidesPerView={1}
                modules={[Keyboard, EffectCards]}
                keyboard={{ enabled: true }} effect="cards">
                {/*------------------------------------------------------------------------------------------------------------------------------------*/}
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
                {/*------------------------------------------------------------------------------------------------------------------------------------*/}
                <SwiperSlide className="bg-white rounded-3xl s2">
                    <div className="s2-head w-full h-2/5 flex justify-center items-center">

                    </div>
                </SwiperSlide>
                {/*------------------------------------------------------------------------------------------------------------------------------------*/}
                <SwiperSlide className="bg-white rounded-3xl s3">

                </SwiperSlide>
                {/*------------------------------------------------------------------------------------------------------------------------------------*/}
                <SwiperSlide className="bg-white rounded-3xl s4">
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="w-full h-full rounded-3xl">
                            <div className="w-full h-full rounded-3xl p-3 flex items-end">
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*------------------------------------------------------------------------------------------------------------------------------------*/}
            </Swiper>
        </main>
    );
};
