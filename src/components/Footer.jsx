import { ArrowUp } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-md text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()}
        {"  "}
        <span className="text-primary">JomsCode</span>. All rights reserved.
      </p>
      <a
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        href="#home"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;
