/** @format */

import React from "react";

import { motion } from "framer-motion";
import "./About.css";
import { Github, Linkedin, Twitter } from "lucide-react";
import { FlipButton } from "../../ui/Button/Index";
import { div } from "motion/react-client";

export default function About() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div id='about' className='relative '>
      <section className='about-bg text-white py-16 px-4'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-7xl font-bold mb-4'>About Me</h1>
          <p className='text-xl text-white'>
            Full-Stack Developer | JavaScript Enthusiast | Problem Solver
          </p>
        </div>
      </section>

      <section className='px-4 min-h-screen overflow-hidden'>
        <div className='wave overflow-hidden -z-99'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className='max-w-4xl mx-auto py-16 px-4'>
          <h2 className='text-5xl font-bold mb-10 text-gray-800'>Who I Am ?</h2>

          <p className='text-lg leading-relaxed text-gray-700'>
            My technical skill set spans across{" "}
            <span className='font-semibold text-gray-900'>
              software development, mobile applications, IoT systems, and
              creative design
            </span>
            . On the development side, I work extensively with{" "}
            <span className='font-semibold text-indigo-600'>
              React.js, React Native (CLI for Android), Node.js, MongoDB
            </span>
            , and I am continuously exploring systems-level programming with{" "}
            <span className='font-semibold text-indigo-600'>Rust</span> to build
            efficient and reliable applications. I have a strong understanding
            of <span className='font-semibold'>UI/UX principles</span>, allowing
            me to design interfaces that are not only functional but also
            intuitive and user-focused.
            <br />
            <br />
            For design and prototyping, I actively use{" "}
            <span className='font-semibold'>Figma</span> for wireframing and UI
            flows, ensuring smooth collaboration between design and development.
            My experience also extends to professional creative tools such as{" "}
            <span className='font-semibold'>Adobe Photoshop</span> for visual
            assets, <span className='font-semibold'>Adobe Premiere Pro</span>{" "}
            for video editing, and{" "}
            <span className='font-semibold'>Audacity</span> for audio processing
            and refinement.
            <br />
            <br />
            On the hardware and engineering side, I work with{" "}
            <span className='font-semibold text-indigo-600'>
              circuit design, sensor integration, and embedded systems
            </span>
            , using platforms like{" "}
            <span className='font-semibold'>Arduino, ESP32</span>, and{" "}
            <span className='font-semibold'>Raspberry Pi</span>. I am
            comfortable designing and analyzing circuits, integrating
            communication protocols, and building end-to-end solutions that
            bridge{" "}
            <span className='font-semibold text-gray-900'>
              software, hardware, and real-world interaction
            </span>
            .
          </p>
          <div className='flex items-center gap-6 mt-10'>
            {[
              {
                Icon: Github,
                href: "https://github.com/thenabinamallik",
                username: "thenabinamallik",
              },

              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/thenabinamallik",
                username: "thenabinamallik",
              },
              {
                Icon: Twitter,
                href: "https://x.com/thenabinamallik",
                username: "thenabinamallik",
              },
            ].map(({ Icon, href, username, idx}) => (
              <FlipButton key={idx}
                frontIcon={<Icon size={30} />}
                backText={username}
                href={href}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
