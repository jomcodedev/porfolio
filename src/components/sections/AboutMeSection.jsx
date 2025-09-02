import { Code, Lock, ShoppingBag, ShoppingCart } from "lucide-react";
import React from "react";
import jomTaipanCv from "../../assets/pdf/Jomar_Taipan_CV.pdf";

const AboutMeSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          About
          <span className="text-primary"> me</span>
        </h2>
        <p>I love solving real-world problems through clean, scalable code.</p>
        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Web Developer</h3>
            <p className="text-muted-foreground">
              Focused on building robust full-stack web applications using
              modern JavaScript technologies, with a growing interest in
              ASP.NET. Also open to working with structured APIs like GraphQL
              and SOAP.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>

              <a
                href={jomTaipanCv}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Cv
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semi-bold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Created Jomcart, a full-stack MERN application
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ShoppingCart className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semi-bold text-lg">
                    E-commerce Features
                  </h4>
                  <p className="text-muted-foreground">
                    Implemented cart, product catalog, Stripe checkout.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semi-bold text-lg">Authentication</h4>
                  <p className="text-muted-foreground">
                    Built secure login with hashed passwords and JWT.
                  </p>
                </div>
              </div>
            </div>
            <div className="opacity-60 italic  text-center p-4 border-dashed border-2 border-primary rounded-lg">
              Another project is in the works. Stay tuned!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
