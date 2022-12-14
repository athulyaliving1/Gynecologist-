import React, { useEffect } from "react";
// import Contentmb from "../Assest/web-2.jpg";
// import Contentmb1 from "../Assest/web-3.jpg";
// import Contentmb2 from "../Assest/mobile-b.jpg";
// import Contentmb3 from "../Assest/mobile-c.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Content2() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="">
      <section className="mt-10">
        <div className="container pb-10 mx-auto space-y-12">
          <div className="flex flex-col space-y-5 overflow-hidden rounded-md shadow-sm lg:space-y-0 lg:space-x-10 lg:flex-row">
            <img
              data-aos="flip-right"
              src="https://www.athulyahomecare.com/lp/gynecology/Assest/web-2.jpg"
              alt="sample"
              className="hidden bg-gray-500 rounded h-80 aspect-video md:block"
            />
            <img
              src="https://www.athulyahomecare.com/lp/gynecology/Assest/mobile-b.jpg"
              alt="sample"
              className="block bg-gray-500 rounded h-80 aspect-video md:hidden "
            />
            <div className="grid content-center ">
              <p className="mb-8 font-semibold text-justify text-gray-800 md:text-xl font-Ubuntu lg:text-justify ">
                Woman’s health is paid attention to only during the reproductive
                age. But many are unaware of the geriatric gynecological
                problems women can face. This lack of awareness leads to serious
                problems. It’s better to get yourself checked on time.
                Management of gynecological problems in elderly women can be
                difficult when compared to younger women.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-5 overflow-hidden rounded-md shadow-sm lg:space-y-0 lg:flex-row-reverse">
            <img
              data-aos="flip-right"
              src="https://www.athulyahomecare.com/lp/gynecology/Assest/web-3.jpg"
              alt=""
              className="hidden rounded h-80 aspect-video md:block"
            />
            <img
              src="https://www.athulyahomecare.com/lp/gynecology/Assest/mobile-c.jpg"
              alt=""
              className="block rounded h-80 aspect-video md:hidden"
            />
            <div className="grid content-center lg:pr-10 ">
              <p className="mb-8 font-semibold text-justify text-gray-800 md:text-xl font-Ubuntu">
                Therefore, it is very important to take care of your health in
                your later life just as you would during your reproductive
                years. Bringing the gynecologist in Chennai to your home to
                provide you with the best of care. What are you waiting for?
                Call us today to avail the best geriatric gynecologist in
                Chennai for a top-class consultation at home.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content2;
