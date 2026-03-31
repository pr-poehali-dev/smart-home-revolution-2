import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/a31ea8d1-8343-4881-bc3f-27062f99e56b/files/37d9e96c-c33e-41c7-b402-1f9505d6cc3a.jpg"
            alt="Косметология — уход за кожей"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/50 z-0" />
      <h3 className="absolute top-12 right-6 text-rose-200 uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
        Ваша кожа заслуживает лучшего
      </h3>

      <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl z-10 font-light leading-tight">
        Каждая процедура — шаг к коже, которой вы будете гордиться. Доверяйте экспертам, которые любят своё дело.
      </p>
    </div>
  );
}