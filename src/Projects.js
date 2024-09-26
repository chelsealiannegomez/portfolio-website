import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Software Developer, Prototype Lead',
    subtitle: 'Mesa Historical Museum',
    description: "I'm currently leading a team of 8 in developing an interactive touchscreen using React.js to be displayed at the entrance of the museum. I utilized Figma to design engaging user interfaces while adhering to accessibility standards. I also utilized Three.js to integrate animations and 3D models.",
    image: 'https://arizonahistoricalsociety.org/wp-content/uploads/2022/05/MHM.png', 
  },
  {
    title: 'Cybersecurity Intern',
    subtitle: 'SM Investments Corporation',
    description: 'As a cybersecurity intern in the largest company in the Philippines with a market cap of $20 billon, I monitored the online movement of 55,000+ employees and company servers, utilizing tools such as ManageEngine, Trend Vision One, Cloudflare, and Office 365 Microsoft Defender. ',
    image: 'https://www.adobomagazine.com/wp-content/uploads/2022/08/SM-Investments-Corporation-reports-hero.jpg',
  },
  {
    title: 'Research Intern',
    subtitle: 'Keep In School Shape',
    description: "As a research intern in a project that was granted an award of $400,000 from the National Science Museum, I analyze data of over 4000 users' participation, confidence, and accuracy using MS Excel. I am also developing and implementing a digital badge system to be piloted in December 2024.",
    image: 'https://lth.engineering.asu.edu/wp-content/uploads/sites/18/2023/01/Screenshot-2023-01-20-162029-1080x390.png', 
  },
  {
    title: 'Software Developer',
    subtitle: 'Legends Animated',
    description: "Developed Nine-90 Navigator, a website that allows the user to search through data from thousands of 990 tax returns of nonprofits around the nation. We primarily used Svelte for the frontend and backend development and Elasticsearch for the database container.",
    image: 'https://pbs.twimg.com/media/F8GoYu5acAAp5G6?format=jpg&name=large', 
  },
  {
    title: 'Technical Officer',
    subtitle: 'Software Developers Association',
    description: 'As a technical officer of the largest engineering organization in ASU, I presented engaging workshops on software development topics such as HTML, CSS, Tailwind, and JavaScript. I work with fellow officers to deliver weekly events for all our members, fostering an inclusive and engaged community.',
    image: 'https://innercircle.engineering.asu.edu/wp-content/uploads/2024/09/SoDA-banner.jpg',
  },
  {
    title: 'General Mentor',
    subtitle: 'The Coalition of American University Student Experiences (CAUSE) Philippines',
    description: 'As part of the mentorship team, we assisted over 50 Filipino students in applying for universities abroad by providing one-on-one mentoring for high school students, resulting in a total of $7.9 million dollars worth of scholarships.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEU4qsjcI4O5zPIFMwECtlZPdFylc5u8Et_w&s',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="p-4 h-auto font-Roboto py-12">
      <div className="flex flex-col items-center justify-start">
        <h2 className="text-3xl font-bold my-5">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="border p-4 rounded"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}
              viewport={{ once: false }} 
            >
              <img src={project.image} alt={project.title} className="object-cover rounded mb-2 h-32 w-full" />
              <h2 className="font-bold text-xl">{project.title}</h2>
              <h3 className="font-semibold text-blue-900 text-base">{project.subtitle}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;