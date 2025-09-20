import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Users, Coffee, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';


const About = () => {
  const skills = [
    { name: "Html", level: 95, category: "Frontend" },
    { name: "Css", level: 90, category: "Frontend" },
    { name: "bootstrap", level: 90, category: "Frontend" },
    { name: "Tailwindcss", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 95, category: "Frontend" },
    { name: "React", level: 80, category: "Frontend" },
    { name: "Next Js", level: 75, category: "Frontend" },
    { name: "Svelte", level: 80, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "Express Js", level: 80, category: "Backend" },
    { name: "PostgreSQL", level: 82, category: "Database" },
    { name: "MongoDB", level: 85, category: "Database" },
    { name: "AWS", level: 75, category: "Cloud" },
    { name: "Docker", level: 78, category: "DevOps" },
    { name: "FireBase", level: 75, category: "Frontend" },
    { name: "Git", level: 92, category: "Tools" }
  ];

  const interests = [
    { icon: Code2, title: "Clean Code", description: "Writing maintainable and scalable code" },
    { icon: Palette, title: "UI/UX Design", description: "Creating beautiful user experiences" },
    { icon: Zap, title: "Performance", description: "Optimizing for speed and efficiency" },
    { icon: Users, title: "Collaboration", description: "Working with diverse teams" },
    { icon: Coffee, title: "Coffee Enthusiast", description: "Fuel for coding sessions" },
    { icon: Heart, title: "Open Source", description: "Contributing to the community" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions and beautiful user experiences.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">My Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Hello! I'm Manish Kumar, a passionate full-stack developer with 1.5 years of experience 
                creating innovative digital solutions that make a difference. My journey began with a simple curiosity 
                about how websites work, which quickly evolved into a deep passion for programming and modern technology.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                I specialize in modern web technologies, particularly React, TypeScript, and Node.js, and I'm constantly 
                learning cutting-edge tools and frameworks to stay at the forefront of web development. I believe in 
                writing clean, maintainable code and creating user experiences that are both beautiful and functional.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                When I'm not coding, you can find me exploring innovative technologies, contributing to open-source 
                projects, or enjoying a good cup of coffee while planning my next creative project. I'm always excited 
                to take on challenging problems and collaborate with forward-thinking professionals.
              </motion.p>
            </div>
          </motion.div>

          {/* Profile image and stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Profile placeholder */}
            <div className="card-gradient p-8 rounded-2xl text-center">
              {/* <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6">
                <span className="text-6xl font-bold text-white">MK</span>
              </div> */}
               <img
                src={heroImage}
                alt="Manish Kumar - Full Stack Developer"
                className=" mx-auto hero-image w-64 h-64 md:w-0 md:h-0 lg:w-[300px] lg:h-[300px] rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              />
              <h3 className="text-2xl font-bold mb-2">Manish Kumar</h3>
              <p className="text-muted-foreground">Full-Stack Developer</p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="card-gradient p-6 rounded-xl text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="card-gradient p-6 rounded-xl text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">1.5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-gradient p-6 rounded-xl"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.category}</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                  />
                </div>
                <div className="text-right text-sm text-muted-foreground mt-1">
                  {skill.level}%
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">What I Love</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-gradient p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <interest.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
                <p className="text-muted-foreground text-sm">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;