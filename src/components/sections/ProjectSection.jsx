import React from "react";
import profile from "../../assets/img/profile.jpg";
import jomcart_thumbnail from "../../assets/img/jomcart_thumbnail.png";
import thesis_thumbnail from "../../assets/img/thesis_thumbnail.png";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
const projects = [
  // {
  //   id: 1,
  //   title: "Test Bank",
  //   description:
  //     "CPA Training Test Bank for BSA students at  PASS College Alaminos City Pangasinan ",
  //   img: profile,
  //   tags: ["Nodejs", "Expressjs", "MongoDB", "React", "TailwindCSS"],
  //   demoURl: "#",
  //   githubURL: "#",
  // },
  {
    id: 2,
    title: "Jomcart (Personal Project)",
    description:
      "● Built a full-stack ecommerce web application using MongoDB, Express, React, and Node.js.\n\n" +
      "● Implemented user authentication, product catalog, shopping cart, and payment integration.\n\n" +
      "● Designed responsive UI with React and styled components for smooth user experience\n\n" +
      "● Deployed the app on Render (onrender.com)",
    img: jomcart_thumbnail,
    tags: [
      "Nodejs",
      "Express.js",
      "MongoDB",
      "React",
      "TailwindCSS",
      "Stripe",
      "Cloudinary",
      "Upstash",
    ],
    demoURL: "https://jom-cart.onrender.com/",
    githubURL: "https://github.com/jomcodedev/jom-cart",
  },
  {
    id: 3,
    title: "Student Monitoring System (Thesis Project)",
    description:
      "● A thesis project integrating RFID scanning with a desktop app using VB.NET and Arduino. \n\n" +
      "● Used for tracking student attendance in real-time.\n\n" +
      "● Developed a feature that sends real-time entry and exit alerts to student's guardians via SMS using the SMS Chef API.",
    img: thesis_thumbnail,
    tags: ["VB.NET", "Arduino", "Firebase", "SMS CHEF"],
    demoURL: null,
    githubURL: null,
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are my recent projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, keytag) => (
                    <span
                      key={keytag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-left whitespace-pre-wrap">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoURL && (
                      <a
                        href={project.demoURL}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    {project.githubURL && (
                      <a
                        href={project.githubURL}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/jomcodedev"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
export default ProjectSection;
