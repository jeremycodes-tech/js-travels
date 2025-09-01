import Image from "next/image"
import React from "react"
import { asset } from "@/utils/assets"

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image
          src={asset("/camp.svg")}
          alt="camp icon"
          width={50}
          height={50}
        />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We’re With You Every Step
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Your Guide to the Easiest Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            With The J’s app, getting lost is a thing of the past. Navigate
            confidently using offline maps, even when you’re off the grid.
            Whether you’re hiking valleys or climbing peaks, invite your friends
            and family to share unforgettable adventures in the wild.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src={asset("/boat.jpeg")}
          alt="scenic boat view of Lake Como"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src={asset("/meter.svg")}
            alt="travel meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Lake Como, Italy</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Starting Point</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Milan, Italy</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
