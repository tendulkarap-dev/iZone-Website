import { motion } from "framer-motion";
import { Building2, Users, Globe, Award, Star, Quote } from "lucide-react";
import Layout from "@/components/Layout";

const clients = [
  {
    name: "TechCorp Industries",
    logo: "TC",
    industry: "Technology",
    description: "Enterprise software solutions and digital transformation.",
  },
  {
    name: "Global Finance Ltd",
    logo: "GF",
    industry: "Finance",
    description: "Secure banking and financial services platform.",
  },
  {
    name: "HealthCare Plus",
    logo: "HC",
    industry: "Healthcare",
    description: "Patient management and telemedicine solutions.",
  },
  {
    name: "EduLearn Academy",
    logo: "EL",
    industry: "Education",
    description: "Online learning platform and student management.",
  },
  {
    name: "RetailMax Stores",
    logo: "RM",
    industry: "Retail",
    description: "E-commerce and inventory management systems.",
  },
  {
    name: "GreenEnergy Co",
    logo: "GE",
    industry: "Energy",
    description: "Smart grid and renewable energy solutions.",
  },
  {
    name: "MediaHub Network",
    logo: "MH",
    industry: "Media",
    description: "Content management and streaming platform.",
  },
  {
    name: "LogiTrans Solutions",
    logo: "LT",
    industry: "Logistics",
    description: "Fleet management and supply chain optimization.",
  },
];

const testimonials = [
  {
    quote:
      "Izone Technologies transformed our digital presence completely. Their team delivered beyond our expectations with innovative solutions.",
    author: "Rajesh Kumar",
    position: "CEO, TechCorp Industries",
    rating: 5,
  },
  {
    quote:
      "The WhatsApp marketing campaign they designed for us increased our customer engagement by 300%. Truly remarkable results.",
    author: "Priya Sharma",
    position: "Marketing Head, RetailMax",
    rating: 5,
  },
  {
    quote:
      "Their software development team built a robust platform that handles millions of transactions daily. Highly recommended!",
    author: "Amit Patel",
    position: "CTO, Global Finance Ltd",
    rating: 5,
  },
];

const stats = [
  {
    icon: <Building2 className="w-8 h-8" />,
    value: "500+",
    label: "Clients Served",
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: "50M+",
    label: "Users Reached",
  },
  { icon: <Globe className="w-8 h-8" />, value: "25+", label: "Countries" },
  {
    icon: <Award className="w-8 h-8" />,
    value: "99%",
    label: "Satisfaction Rate",
  },
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
  visible: { opacity: 1, y: 0 },
};

const Clients = () => {
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
              Our Clients
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Trusted by
              <span className="block mt-2 overflow-visible">
                <span className="inline-block leading-[1.25] pb-[0.15em] gradient-text -mt-7">
                  Industry Leaders
                </span>
              </span>
            </h1>
            <p className="text-lg text-muted-foreground -mt-5">
              We're proud to partner with leading organizations across various
              industries to deliver exceptional digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 text-center hover-glow"
              >
                <div className="text-primary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Valued <span className="gradient-text">Partners</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From startups to enterprises, we've helped businesses across
              industries achieve their digital goals.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 group hover-glow cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="font-display text-xl font-bold text-primary">
                    {client.logo}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {client.name}
                </h3>
                <p className="text-primary text-sm mb-2">{client.industry}</p>
                <p className="text-muted-foreground text-sm">
                  {client.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
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
                className="glass-card glow-border p-8 relative"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
                Join Our Growing List of Clients
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's discuss how we can help your business achieve its digital
                goals.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
