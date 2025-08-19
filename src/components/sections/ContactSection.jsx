import { Mail, Phone, MapPin, Send } from "lucide-react";
import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";
import twMergeClassnames from "../../lib/utils";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const notify = (message, status = "success") =>
  status === "success" ? toast.success(message) : toast.error(message);
const ContactSection = () => {
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const emailRes = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      if (emailRes.status === 200) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        notify("Successfully Sent");
      }
    } catch (error) {
      notify("Something went wrong, please try again", "failed");
      console.log(error);
    }
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Contact Me
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:jomartaipan@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    jom.code.dev@gmail.com
                  </a>
                </div>
              </div>

              {/* PhoneNumber */}

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+639324810807"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +639324810807
                  </a>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                   Pasay City
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="nada">
                  <FaLinkedinIn size={25} />
                </a>
                <a href="https://wa.me/qr/JHXEE2P3JLVQK1" target="_blank">
                  <BsWhatsapp size={25} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus-ring-2 focus:ring-primary"
                  placeholder="John Doe"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus-ring-2 focus:ring-primary"
                  placeholder="example@gmail.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus-ring-2 focus:ring-primary resize-none"
                  placeholder="Hi, I would like to talk about... "
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className={twMergeClassnames(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send message
                <Send size={20} />
              </button>
              <Toaster />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
