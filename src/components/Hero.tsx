import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/a31ea8d1-8343-4881-bc3f-27062f99e56b/files/30602fcc-db12-4cda-85ae-de981624f7f4.jpg"
          alt="Beauty clinic interior"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-[0.3em] text-rose-200 text-sm mb-4 font-light">Эстетическая косметология</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          РАСКРОЙ<br/>СВОЮ<br/>КРАСОТУ
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto opacity-90 font-light leading-relaxed">
          Маски, чистки, лазерная эпиляция и инъекционная косметология — для вашей кожи в лучшем состоянии
        </p>
        <button className="mt-10 px-10 py-4 border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-neutral-900 transition-all duration-300">
          Записаться
        </button>
      </div>
    </div>
  );
}