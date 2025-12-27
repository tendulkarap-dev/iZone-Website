import { motion } from 'framer-motion';
import { Heart, Coffee, Laptop, Globe, Users, Rocket, Award, Clock, MapPin, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const benefits = [
  { icon: Heart, title: 'Health Insurance', description: 'Comprehensive medical, dental, and vision coverage for you and your family.' },
  { icon: Coffee, title: 'Free Snacks & Coffee', description: 'Fully stocked kitchen with premium coffee, snacks, and healthy options.' },
  { icon: Laptop, title: 'Latest Equipment', description: 'Top-of-the-line MacBooks, monitors, and any tools you need to succeed.' },
  { icon: Globe, title: 'Remote Flexibility', description: 'Work from anywhere with our hybrid remote-first culture.' },
  { icon: Users, title: 'Team Events', description: 'Regular team outings, hackathons, and company retreats.' },
  { icon: Rocket, title: 'Learning Budget', description: 'Annual budget for courses, conferences, and professional development.' },
];

const culture = [
  {
    title: 'Innovation First',
    description: 'We encourage experimentation and embrace new ideas. Every team member has the opportunity to contribute to our innovation pipeline.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
  },
  {
    title: 'Work-Life Balance',
    description: 'We believe in sustainable work practices. Flexible hours and unlimited PTO ensure you can recharge and bring your best self.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
  },
  {
    title: 'Growth Mindset',
    description: 'Continuous learning is in our DNA. We provide mentorship, training programs, and clear career progression paths.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  },
];

const openings = [
  { title: 'Senior React Developer', department: 'Engineering', location: 'Remote / San Francisco', type: 'Full-time' },
  { title: 'UI/UX Designer', department: 'Design', location: 'Remote / New York', type: 'Full-time' },
  { title: 'DevOps Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time' },
  { title: 'Project Manager', department: 'Operations', location: 'San Francisco', type: 'Full-time' },
  { title: 'Backend Developer (Node.js)', department: 'Engineering', location: 'Remote / London', type: 'Full-time' },
];

const lifeGallery = [
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=300&fit=crop',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Career = () => {
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
              Join Our Team
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Build Your Career
              <span className="gradient-text block">With Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Join a team of passionate innovators shaping the future of web development. 
              We're always looking for talented individuals to grow with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-primary font-medium">Our Culture</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">What Makes Us Different</h2>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
            {culture.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="glass-card overflow-hidden hover-glow group">
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-primary font-medium">Benefits & Perks</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">We Take Care of Our Team</h2>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants} className="glass-card p-6 hover-glow flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Life at Company */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-primary font-medium">Life at Izone</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Behind the Scenes</h2>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {lifeGallery.map((image, index) => (
              <motion.div key={index} variants={itemVariants} className="relative overflow-hidden rounded-xl aspect-video group">
                <img src={image} alt={`Life at Izone ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors"/>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-primary font-medium">Open Positions</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Current Openings</h2>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4 max-w-4xl mx-auto">
            {openings.map((job, index) => (
              <motion.div key={index} variants={itemVariants} className="glass-card p-6 hover-glow flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4"/> {job.department}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4"/> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> {job.type}</span>
                  </div>
                </div>
                <Button className="glow-border hover-glow shrink-0">Apply Now</Button>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Don't see a position that fits? We're always looking for talented people.</p>
            <Button variant="outline" className="border-primary/50 hover:bg-primary/10">Send General Application</Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
