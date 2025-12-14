/** @format */

import { motion } from "framer-motion";
import { ArrowDown} from "lucide-react";
import { TypingWord } from "../../ui/Typing/Index";
import { badges } from "./Data";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id='home'
      className='relative flex h-screen items-center overflow-hidden bg-background pt-20'>
      {/* Floating Orbs */}
      <div className='sun' />
      <div className='sun2' />
      <div className='sun3' />

      <div className='relative z-10 mx-auto max-w-7xl px-6 py-20'>
        <div className='grid items-center gap-12 lg:grid-cols-2'>
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'>
            {/* Availability Badge */}
            <motion.div variants={itemVariants} className='mb-6'>
              <span className='inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-foreground'>
                <span className='h-2 w-2 animate-pulse rounded-full bg-accent' />
                Available for freelance
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className='mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl'>
              Hi, I’m <span className='text-gradient-accent'>Nabina</span>
              <br />
              <span className='text-muted-foreground'>
                <TypingWord />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className='mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground'>
              I craft exceptional digital experiences with 2+ years of expertise
              building scalable, modern web applications. Let’s turn your vision
              into reality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className='mb-10 flex flex-wrap gap-4'>
              <motion.a
                href='#contact'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className='rounded-full bg-lime-300 px-8 py-4 font-semibold text-green-600 shadow-glow hover-lift'>
                Start a Project
              </motion.a>

              <motion.a
                href='#projects'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className='rounded-full border border-border bg-card px-8 py-4 font-semibold text-foreground transition-colors hover:bg-muted'>
                View Work
              </motion.a>
            </motion.div>

            {/* Social Links */}
            
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className='relative flex justify-center lg:justify-end'>
            <div className='relative'>
              {/* Rotating Rings */}
              <motion.div
                className='absolute -inset-4 rounded-full border-2 border-primary/20'
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className='absolute -inset-8 rounded-full border border-accent/10'
                animate={{ rotate: -360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Profile Image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className='relative h-72 w-72 overflow-hidden rounded-full shadow-elevated md:h-80 md:w-80 lg:h-96 lg:w-96'>
                <div className='absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20' />
                <img
                  src='https://media.licdn.com/dms/image/v2/D5603AQEgranqbgArjQ/profile-displayphoto-scale_400_400/B56Zo7E4TlJ8Ag-/0/1761927728616?e=1767225600&v=beta&t=725NgRIX0_9HGcxZbsmSAq2KYLUo5YVH_41p1tI6NsY'
                  alt='Nabina – Full-Stack Developer'
                  className='h-full w-full object-cover'
                />
              </motion.div>

              {badges.map((badge, index) => (
                <motion.a
                  key={index}
                  href={badge.link}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1 + index * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`absolute ${badge.position} cursor-pointer rounded-2xl
      bg-orange-100 border border-orange-400
      px-4 py-2 shadow-card hover:shadow-glow
      transition-all`}>
                  <p className='text-sm font-semibold text-orange-600'>
                    {badge.label}
                  </p>
                  {badge.sub && (
                    <p className='text-xs text-muted-foreground'>{badge.sub}</p>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className='absolute bottom-8 left-1/2 -translate-x-1/2'>
          <motion.a
            href='#about'
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className='flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground'>
            <span className='text-sm font-medium'>Scroll</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
