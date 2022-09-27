import React from "react";
import Contentmb from "../Assest/image-5.png";
import Contentmb1 from "../Assest/image-6.png";
import Contentmb2 from "../Assest/imagemd-2.png";
import Contentmb3 from "../Assest/imagemd-3.png";

function Content2() {
  return (
    <div className="">
      <section className="mt-10">
        <div className="container pb-10 mx-auto space-y-12">
          <div className="flex flex-col space-y-5 overflow-hidden rounded-md shadow-sm lg:space-y-0 lg:space-x-10 lg:flex-row">
            <img
              src={Contentmb}
              alt="sample"
              className="hidden bg-gray-500 rounded h-80 aspect-video lg:block"
            />
            <img
              src={Contentmb2}
              alt="sample"
              className="block bg-gray-500 rounded h-80 aspect-video lg:hidden "
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
              src={Contentmb1}
              alt=""
              className="hidden rounded h-80 aspect-video lg:block"
            />
            <img
              src={Contentmb3}
              alt=""
              className="block rounded h-80 aspect-video lg:hidden"
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
