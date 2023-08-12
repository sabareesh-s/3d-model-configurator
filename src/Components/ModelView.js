import React from "react";
import model1 from "../common/basic-left-f180.png";

function ModelView() {
  return (
    <>
      <section className="h-full w-full"></section>
      <section className="h-full w-[520px] bg-[#F5FAFF] p-20">
        <div className="inline-flex flex-col space-y-4">
          <span className="text-[#7D7D7D] font-semibold">Models</span>
          <span className="text-[#7D7D7D] font-light">
            Select your required models from below
          </span>
          <ul class="grid w-full gap-6 md:grid-cols-3 pt-4">
            <li>
              <input
                type="radio"
                id="hosting-small"
                name="hosting"
                value="hosting-small"
                class="hidden peer"
                required
              />
              <label
                for="hosting-small"
                class="inline-flex items-center justify-between w-full text-gray-500 rounded-lg cursor-pointer peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 "
              >
                <div class="block flex flex-col justify-center items-center">
                  <img src={model1} className=" h-[50px]"/>
                  <span className="text-[#7D7D7D] font-light">Model 1</span>
                </div>
              </label>
            </li>
            {/* <li>
              <input
                type="radio"
                id="hosting-big"
                name="hosting"
                value="hosting-big"
                class="hidden peer"
              />
              <label
                for="hosting-big"
                class="inline-flex items-center justify-between w-full p-5 text-gray-500 peer-checked:border rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 "
              >
                <div class="block">
                  
                </div>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="hosting-big"
                name="hosting"
                value="hosting-big"
                class="hidden peer"
              />
              <label
                for="hosting-big"
                class="inline-flex items-center justify-between w-full p-5 text-gray-500 peer-checked:border rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 "
              >
                <div class="block">
                  
                </div>
              </label>
            </li> */}
          </ul>
        </div>
      </section>
    </>
  );
}

export default ModelView;
