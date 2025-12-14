/** @format */

import React from "react";
import { bdData, fmdData, iotData, uiuxData } from "./Data";
import BackgroundGrid from "../../ui/BGGrid";

export default function Skills() {
  return (
    <section
      id='skills'
      className='min-h-screen px-4 py-20'>
        <BackgroundGrid />
      <div className='max-w-7xl mx-auto space-y-20 bg-transparent'>
        <div className='text-center'>
          <h1 className='text-6xl font-bold text-gray-900 mb-4'>
            Skills & Expertise
          </h1>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            A comprehensive overview of my technical, creative, and engineering
            skill set, developed through hands-on projects and real-world
            problem solving.
          </p>
        </div>

        {/* Frontend & Mobile */}
        <section className='grid md:grid-cols-2 gap-10 items-center'>
          <div>
            <h2 className='text-4xl font-bold text-gray-800 mb-4'>
              Frontend & Mobile Development
            </h2>
            <p className='text-gray-700 leading-relaxed mb-6'>
              I specialize in building{" "}
              <span className='font-semibold text-indigo-600'>
                modern, responsive, and scalable user interfaces
              </span>{" "}
              using React.js and React Native (CLI for Android). My focus is on
              component reusability, performance optimization, and creating
              seamless user experiences across devices.
            </p>
            <ul className='flex flex-wrap gap-3'>
              {fmdData.map((item) => (
                <li
                  key={item}
                  className='rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600'>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className=' bg-white border p-8 shadow-[10px_10px_0_rgba(0,0,0,0.7)]'>
            <p className='text-gray-700 leading-relaxed'>
              I ensure that applications are not only visually appealing but
              also accessible, intuitive, and optimized for real-world usage,
              particularly in Android-based environments using React Native.
            </p>
          </div>
        </section>

        {/* Backend */}
        <section className='grid md:grid-cols-2 gap-10 items-center'>
          <div className='order-2 md:order-1 bg-white border p-8  shadow-[10px_10px_0_rgba(0,0,0,0.7)]'>
            <p className='text-gray-700 leading-relaxed'>
              My backend development focuses on creating reliable APIs,
              structured data flows, and secure application logic that supports
              scalable systems and real-time communication.
            </p>
          </div>

          <div className='order-1 md:order-2'>
            <h2 className='text-4xl font-bold text-gray-800 mb-4'>
              Backend & Databases
            </h2>
            <p className='text-gray-700 leading-relaxed mb-6'>
              I work with{" "}
              <span className='font-semibold text-indigo-600'>
                Node.js, Express.js, and MongoDB
              </span>{" "}
              to build RESTful APIs, manage authentication, handle data
              persistence, and integrate backend systems with frontend and IoT
              platforms.
            </p>
            <ul className='flex flex-wrap gap-3'>
              {bdData.map((item) => (
                <li
                  key={item}
                  className='rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Systems & Rust */}
        <section>
          <h2 className='text-4xl font-bold text-gray-800 mb-4'>
            Systems Programming & Rust
          </h2>
          <p className='text-gray-700 leading-relaxed max-w-4xl'>
            I am actively exploring{" "}
            <span className='font-semibold text-indigo-600'>Rust</span> to
            strengthen my understanding of low-level systems programming, memory
            safety, and high-performance application design. This helps me think
            more critically about efficiency, safety, and system architecture.
          </p>
        </section>

        {/* IoT & Circuit Design */}
        <section>
          <h2 className='text-4xl font-bold text-gray-800 mb-4'>
            IoT, Embedded Systems & Circuit Design
          </h2>
          <p className='text-gray-700 leading-relaxed mb-6 max-w-4xl'>
            I have hands-on experience working with{" "}
            <span className='font-semibold text-indigo-600'>
              Arduino, ESP32, and Raspberry Pi
            </span>
            , designing circuits, integrating sensors, and enabling real-time
            communication between hardware and software systems.
          </p>
          <ul className='flex flex-wrap gap-3'>
            {iotData.map((item) => (
              <li
                key={item}
                className='rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600'>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* UI/UX & Creative */}
        <section className='grid md:grid-cols-2 gap-10 items-center'>
          <div>
            <h2 className='text-4xl font-bold text-gray-800 mb-4'>
              UI/UX & Creative Tools
            </h2>
            <p className='text-gray-700 leading-relaxed mb-6 '>
              I design clean and intuitive interfaces using{" "}
              <span className='font-semibold text-indigo-600'>Figma</span>,
              while leveraging creative tools to enhance the visual and
              multimedia aspects of applications.
            </p>
            <ul className='flex flex-wrap gap-3'>
              {uiuxData.map((item) => (
                <li
                  key={item}
                  className='rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600'>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className=' bg-white border p-8 shadow-[10px_10px_0_rgba(0,0,0,0.7)] '>
            <p className='text-gray-700 leading-relaxed'>
              These tools help me bridge the gap between design and development,
              ensuring cohesive branding, better storytelling, and polished user
              experiences.
            </p>
          </div>
        </section>

        {/* Tools */}
        <section>
          <h2 className='text-4xl font-bold text-gray-800 mb-4'>
            Engineering Tools & Workflow
          </h2>
          <p className='text-gray-700 leading-relaxed max-w-4xl'>
            My development workflow is supported by tools such as{" "}
            <span className='font-semibold'>
              Git, GitHub, Postman, VS Code, and AutoCAD
            </span>
            , enabling efficient collaboration, testing, version control, and
            precise technical design.
          </p>
        </section>
        {/* Generative AI & AI Agents */}
        <section className='grid md:grid-cols-2 gap-10 items-center'>
          <div>
            <h2 className='text-4xl font-bold text-gray-800 mb-4'>
              Generative AI & AI Agents
            </h2>
            <p className='text-gray-700 leading-relaxed mb-6'>
              I actively work with{" "}
              <span className='font-semibold text-indigo-600'>
                Generative AI technologies
              </span>{" "}
              to enhance development productivity, automate workflows, and
              improve problem-solving efficiency. I leverage AI-powered tools
              and agent-based systems to assist in{" "}
              <span className='font-semibold'>
                code generation, debugging, optimization, and architectural
                planning
              </span>
              .
            </p>

            <p className='text-gray-700 leading-relaxed mb-6'>
              I have hands-on experience using tools such as{" "}
              <span className='font-semibold text-indigo-600'>
                ChatGPT, Google Gemini, Lovable, and Blackbox
              </span>{" "}
              for AI-assisted development, and I am exploring{" "}
              <span className='font-semibold'>AI agent concepts</span> including
              task automation, tool chaining, prompt engineering, and
              decision-based execution flows.
            </p>

            <ul className='flex flex-wrap gap-3'>
              {[
                "Generative AI",
                "AI Agents",
                "Prompt Engineering",
                "AI-Assisted Coding",
                "Workflow Automation",
                "Tool-Augmented Reasoning",
              ].map((item) => (
                <li
                  key={item}
                  className='rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600'>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className=' bg-white border p-8 shadow-[10px_10px_0_rgba(0,0,0,0.7)]'>
            <p className='text-gray-700 leading-relaxed'>
              By integrating Generative AI into my development workflow, I focus
              on reducing repetitive tasks, accelerating prototyping, and
              improving code quality. My goal is to build systems where{" "}
              <span className='font-semibold text-gray-900'>
                AI acts as an intelligent collaborator
              </span>{" "}
              rather than just a tool, enabling smarter and more adaptive
              applications.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
