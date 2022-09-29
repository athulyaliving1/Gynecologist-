import React, { useEffect } from "react";
// import content1 from "../Assest/web-1.jpg";
// import content12 from "../Assest/mobile-a.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Content() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="">
      <div className="">
        <div className="container relative pt-10 mx-auto">
          <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
            <svg
              viewBox="0 0 88 88"
              className="w-full max-w-screen-xl text-zinc-300"
            >
              <circle fill="currentColor" cx="44" cy="44" r="15.5" />
              <circle
                fillOpacity="0.2"
                fill="currentColor"
                cx="44"
                cy="44"
                r="44"
              />
              <circle
                fillOpacity="0.2"
                fill="currentColor"
                cx="44"
                cy="44"
                r="37.5"
              />
              <circle
                fillOpacity="0.3"
                fill="currentColor"
                cx="44"
                cy="44"
                r="29.5"
              />
              <circle
                fillOpacity="0.3"
                fill="currentColor"
                cx="44"
                cy="44"
                r="22.5"
              />
            </svg>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="relative lg:pr-10">
              <h5 className="block mb-2 text-xl font-semibold text-center capitalize lg:text-3xl text-sky-900 font-Helvetica">
                A woman’s health is
                <br className="block" />
                <span className="text-pink-500 ">her capital</span>
              </h5>
              <p className="mb-8 font-semibold text-justify text-gray-800 md:text-xl font-Ubuntu">
                Yes! Health is more important than anything, but are we paying
                much attention to the red signals our body sends? We are aware
                that a woman’s body undergoes a lot of changes throughout her
                life. Hence it is important to take care of your health at each
                stage of life. But most of the time especially elderly women
                ignore their health and well-being. It’s time to take care of
                it! Consulting a gynecologist can be an eye-opener to know
                what's happening within you.
              </p>
              <p className="mb-8 font-semibold text-justify text-gray-800 md:text-xl font-Ubuntu ">
                A gynecologist is a specialist who provides exclusive medical
                care for all kinds of health issues that a woman might
                experience. Athulya cares for you. Being geriatric care
                providers, we work towards the betterment of the senior’s life.
                As a part of it and to promote healthy living for women, Athulya
                Senior Care provides the best Gynecologist consultation for
                geriatric women at home from October 1st, 2022 - October 31st,
                2022.
              </p>
            </div>
            <div className="grid content-center ">
              <div data-aos="flip-right" className="hidden xl:block">
                <img
                  className="relative object-cover w-full h-56 rounded shadow-lg sm:h-96"
                  src="https://www.athulyahomecare.com/lp/gynecology/Assest/web-1.jpg"
                  alt="sample"
                />
              </div>
              <div className="block xl:hidden">
                <img
                  className="relative object-cover w-full h-56 rounded shadow-lg sm:h-96"
                  src="https://www.athulyahomecare.com/lp/gynecology/Assest/mobile-a.jpg"
                  alt="sample"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
