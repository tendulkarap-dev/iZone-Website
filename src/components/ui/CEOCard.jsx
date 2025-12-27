import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Crown, Sparkles } from "lucide-react";

const CEOCard = ({ name, role, description, image }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-15, 15]);

  const shineX = useTransform(xSpring, [-0.5, 0.5], [0, 100]);
  const shineY = useTransform(ySpring, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) / rect.width);
    y.set((e.clientY - (rect.top + rect.height / 2)) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const imageUrl = image || "https://www.izonetech.in/img/kesavan.jpg";

  return (
    <div className="perspective-1000 w-full max-w-4xl mx-auto mb-12">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative group"
      >
        {/* Outer glow */}
        <motion.div
          animate={isHovered ? { opacity: 1, scale: 1.05 } : { opacity: 0.5 }}
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 blur-xl -z-10"
        />

        {/* MAIN CARD – overall height control */}
        <div className="relative min-h-[440px] md:min-h-[500px] rounded-2xl overflow-hidden border border-primary/30 bg-gradient-to-br from-card/90 via-card to-card/80 backdrop-blur-xl">
          {/* Shine */}
          <motion.div
            style={{
              background: `radial-gradient(circle at ${shineX.get()}% ${shineY.get()}%, hsl(var(--primary) / 0.15), transparent 55%)`,
            }}
            className="absolute inset-0 pointer-events-none"
          />

          {/* Decorations */}
          <Sparkles className="absolute top-4 right-4 w-6 h-6 text-primary/60 animate-pulse" />
          <Sparkles className="absolute bottom-4 left-4 w-4 h-4 text-primary/40 animate-pulse" />

          {/* CONTENT */}
          <div className="relative flex flex-col md:flex-row items-center gap-12 p-10 md:p-14">
            {/* IMAGE SECTION (width drives text movement) */}
            <motion.div
              style={{ transform: "translateZ(40px)" }}
              className="relative flex-shrink-0"
            >
              {/* Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-44 h-56 md:w-52 md:h-64 rounded-xl border border-dashed border-primary/30 -m-2"
              />

              {/* Glow */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-xl bg-primary/20 blur-lg"
              />

              {/* IMAGE CARD (THIS moves text) */}
              <div className="relative w-40 h-52 md:w-48 md:h-60 rounded-xl overflow-hidden border-2 border-primary/50 shadow-2xl shadow-primary/30">
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Crown */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full p-2 shadow-lg"
              >
                <Crown className="w-5 h-5" />
              </motion.div>
            </motion.div>

            {/* TEXT SECTION */}
            <motion.div
              style={{ transform: "translateZ(30px)" }}
              className="flex-1 text-center md:text-left"
            >
              <span className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                Leadership
              </span>

              <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {name}
              </h3>

              <p className="text-primary font-medium text-lg mb-4">{role}</p>

              <p className="text-muted-foreground leading-relaxed max-w-lg">
                {description}
              </p>

              <div className="flex flex-wrap gap-8 mt-8 justify-center md:justify-start">
                {[
                  ["15+", "Years Experience"],
                  ["200+", "Projects Led"],
                  ["200+", "Team Members"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <div className="text-xl font-bold text-primary">
                      {value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom accent */}
          <motion.div
            animate={isHovered ? { scaleX: 1 } : { scaleX: 0.6 }}
            className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent origin-center"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default CEOCard;
