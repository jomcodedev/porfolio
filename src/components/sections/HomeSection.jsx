import { ArrowDown } from "lucide-react";
import React from "react";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="opacity-0 text-primary animate-fade-in-delay-1">
              Jomar
            </span>
            <span className="text-gradient ml-2 opacity-0 text-primary animate-fade-in-delay-2">
              Taipan
            </span>
          </h1>
          <p className=" text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I’m a fullstack web developer, with a focus on back-end development.
            <br />
            <span className="font-light text-md">
              Building fast, scalable, and modern web applications
            </span>
          </p>

          <br />
          <div className="pt-4 opcity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  );
};

export default HomeSection;
