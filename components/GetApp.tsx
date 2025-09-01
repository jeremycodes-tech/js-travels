import React from "react"
import Button from "./Button"
import Image from "next/image"


const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        {/* Left Side: Text + Buttons */}
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-8">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[360px]">
            Start Your Journey Today
          </h2>
          <p className="regular-16 text-gray-10">
            Download the J’s app — trusted by thousands of travelers.
            Available now on iOS and Android.
          </p>

          {/* Store Buttons */}
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="App Store"
              icon={("/apple.svg")}
              variant="btn_white"
              full
            />
            <Button 
              type="button"
              title="Play Store"
              icon={("/android.svg")}
              variant="btn_dark_green_outline"
              full
            />
          </div>

          {/* Social proof / rating */}
          <div className="flex items-center gap-2 mt-4">
            <Image
              src={("/star.svg")}
              alt="star rating"
              width={20}
              height={20}
            />
            <p className="regular-14 text-gray-20">
              Rated 4.9/5 by 10,000+ adventurers
            </p>
          </div>
        </div>

        {/* Right Side: App preview image */}
        <div className="flex flex-1 items-center justify-end">
          <Image
            src={("/phones.png")}
            alt="mobile app preview on phones"
            width={550}
            height={870}
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default GetApp
