import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Users,
  Calendar,
  Award,
  Lightbulb,
} from "lucide-react";
import Layout from "@/components/Layout";
import ExpertCard from "../components/ui/ExpertCard";
import CEOCard from "../components/ui/CEOCard";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "We pour our hearts into every project, treating your success as our own.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Constantly pushing boundaries to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with clients to ensure perfect alignment with their vision.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Committed to delivering nothing less than exceptional quality.",
  },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CTO",
    avatar: "SC",
    bio: "Full-stack expert passionate about scalable architecture.",
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Designer",
    avatar: "MR",
    bio: "Award-winning designer focused on user experience.",
  },
  {
    name: "Emily Johnson",
    role: "Project Manager",
    avatar: "EJ",
    bio: "Agile enthusiast ensuring seamless project delivery.",
  },
  {
    name: "David Kim",
    role: "Senior Developer",
    avatar: "DK",
    bio: "React specialist with a love for clean code.",
  },
  {
    name: "Lisa Wang",
    role: "UX Researcher",
    avatar: "LW",
    bio: "Data-driven designer advocating for user needs.",
  },
  {
    name: "James Miller",
    role: "DevOps Engineer",
    avatar: "JM",
    bio: "Cloud infrastructure specialist ensuring 99.9% uptime.",
  },
];

const ceoData = {
  name: "Mr.B.Kesavan M.E",
  role: "Founder/CEO",
  description:
    "Visionary leader with 15+ years of experience in the tech industry. Kesavan founded Izone Technologies with a mission to democratize world-class web development and help businesses of all sizes achieve digital excellence.",
};

const milestones = [
  {
    year: "2014",
    title: "Founded",
    description:
      "Izone Technologies was born with a vision to transform digital experiences.",
  },
  {
    year: "2016",
    title: "First Major Client",
    description: "Partnered with Fortune 500 company for enterprise solution.",
  },
  {
    year: "2018",
    title: "Team Expansion",
    description: "Grew to 25+ team members across multiple countries.",
  },
  {
    year: "2020",
    title: "Global Reach",
    description: "Expanded services to clients in 15+ countries worldwide.",
  },
  {
    year: "2022",
    title: "Industry Award",
    description: "Recognized as Top Web Development Agency of the Year.",
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description: "Launched R&D division for emerging technologies.",
  },
];

const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Next.js",
  "Vue.js",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Innovating the
              <span className="block mt-2 overflow-visible">
                <span className="inline-block leading-[1.25] pb-[0.15em] gradient-text -mt-5">
                  Digital Landscape
                </span>
              </span>
            </h1>
            <p className="text-lg text-muted-foreground -mt-5">
              Izone Technology was established in 2016 at Trichy with diverse
              range of Knowledge, where "Izone Technology" is an IT Hub consists
              of all types of IT Services includes Web Designing and
              Development, Software and Mobile App Development, Digital
              Marketing Services Like Bulk SMS, Bulk Voice Call & Bulk WhatsApp,
              and also Students Career Development programs along with Final
              Year project Guidance Etc.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 glow-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground">
                We strive to develop smart application and websites for our
                clients for their IT efficiency and business profitability and
                to be a global leader and expert in providing Smart Training
                with smart skills..
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 glow-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground">
                Our Vision is to provide a smart training with smart skills and
                developing smart application and website with enthusiastically
                and with innovative methods in full-fledged customer
                satisfaction and beyond customer expectation
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium">Our Values</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              What Drives Us
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 text-center hover-glow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section-padding">
        <div className="container-custom">
          {/* CEO Highlight Card */}
          <CEOCard
            name={ceoData.name}
            role={ceoData.role}
            description={ceoData.description}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium">Our Team</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              Meet the Experts
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ExpertCard
                  name={member.name}
                  role={member.role}
                  avatar={member.avatar}
                  bio={member.bio}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium">Our Journey</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              Company Timeline
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="glass-card p-6 hover-glow">
                    <div className="flex items-center gap-3 mb-2 justify-start md:justify-end">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-primary font-display font-bold">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex w-6 h-6 rounded-full bg-primary border-4 border-background absolute left-1/2 transform -translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium">Our Stack</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              Technologies We Master
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full glass-card border border-primary/20 hover:border-primary/50 transition-colors cursor-default"
              >
                <span className="text-foreground font-medium">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
