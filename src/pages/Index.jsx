import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Layers,
  Zap,
  Shield,
  Users,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ScrollWorksSection from "@/components/ui/ScrollWorksSection";
import ball from "@/assets/ball.svg";

const services = [
  {
    icon: Code,
    title: "Custom Development",
    description:
      "Tailored web solutions built with cutting-edge technologies to meet your unique business needs.",
  },
  {
    icon: Layers,
    title: "Responsive Design",
    description:
      "Beautiful, mobile-first designs that look stunning and perform flawlessly on all devices.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Lightning-fast applications optimized for speed, SEO, and exceptional user experience.",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "Enterprise-grade security practices to protect your data and ensure compliance.",
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

const testimonials = [
  {
    quote:
      "Izone Technologies transformed our digital presence. Their attention to detail and technical expertise is unmatched.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    avatar: "SJ",
  },
  {
    quote:
      "Working with Izone was a game-changer. They delivered a world-class platform that exceeded our expectations.",
    author: "Michael Chen",
    role: "Founder, DataFlow",
    avatar: "MC",
  },
  {
    quote:
      "The team's professionalism and commitment to excellence made our project a tremendous success.",
    author: "Emily Rodriguez",
    role: "CTO, InnovateCo",
    avatar: "ER",
  },
];

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "Modern shopping experience with real-time inventory and seamless checkout.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    client: "ShopMax Inc.",
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    description:
      "Comprehensive analytics dashboard for enterprise data management.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["TypeScript", "GraphQL", "AWS", "D3.js"],
    client: "DataFlow Systems",
  },
  {
    title: "Mobile Banking App",
    category: "Full Stack",
    description:
      "Cross-platform mobile banking solution with biometric authentication.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    tags: ["React Native", "Firebase", "Plaid", "Node.js"],
    client: "FinSecure Bank",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-background">
        {/* SVG BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={ball}
            alt="ball background"
            className="
  absolute
  left-1/2
  top-1/2
  -translate-x-1/2
  -translate-y-[25%]
  w-[70%]
  max-w-[800px]
  opacity-80
  blur-[1px]
  pointer-events-none
  z-0
"
          />
        </div>

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-10" />

        {/* CONTENT */}
        <div className="relative z-20 min-h-screen flex items-center justify-center">
          <div className="container-custom text-center px-4 pt-20 -translate-y-[18%] ">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                An Information Technology Sector In Tamilnadu
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              We Build
              <span className="block mt-2 overflow-visible">
                <span className="inline-block leading-[1.25] pb-[0.15em] gradient-text -mt-5">
                  Digital Excellence
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 -mt-5"
            >
              Izone Technologies crafts exceptional web experiences that
              transform businesses. From concept to deployment, we bring your
              vision to life.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium">Our Services</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              What We Offer
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 hover-glow group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50 border-y border-border">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium">Why Choose Us</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6">
                Your Success is Our Priority
              </h2>
              <p className="text-muted-foreground mb-8">
                With over a decade of experience, we've mastered the art of
                creating digital solutions that drive results. Our team of
                expert developers, designers, and strategists work together to
                deliver excellence.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Users, text: "Dedicated team of experts" },
                  { icon: Award, text: "Award-winning solutions" },
                  { icon: Zap, text: "Agile development process" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button className="mt-8 glow-border hover-glow">
                Learn More About Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card p-8 glow-border">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Team collaboration"
                  className="rounded-lg w-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-4 glow-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Top Rated
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Agency 2024
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium">Testimonials</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              What Our Clients Say
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 hover-glow"
              >
                <div className="text-primary text-4xl mb-4">"</div>
                <p className="text-muted-foreground mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects - Scroll Animated */}
      <ScrollWorksSection
        works={projects}
        title="Our Portfolio"
        subtitle="Featured Projects"
      />

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card glow-border p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's build something extraordinary together. Get in touch with
                our team and let's discuss how we can bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="glow-border hover-glow">
                    Contact Us Today
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/development">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border hover:bg-muted"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
