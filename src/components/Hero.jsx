import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full flex justify-between items-center p-4">
        <img src={logo} alt="logo" className="w-28 object-contain" />

        <div className="flex justify-between items-center gap-4">
          <button
            type="button"
            onClick={() => window.open("https://www.github.com/theonlyhennygod", "_blank")}
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            By Argenis
          </button>
        </div>
      </nav>

      <h1 className="text-6xl font-bold text-center text-gray-800">
        Summarize Articles with <br className="max-md:hidden" />{" "}
        <span className="red_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Summarize articles with the power of OpenAI's GPT-4 model.{" "}
        <br className="max-md:hidden" />{" "}
        <span className="orange_gradient">Get started today!</span>
      </h2>
    </header>
  );
};

export default Hero;
