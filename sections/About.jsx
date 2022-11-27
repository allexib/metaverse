"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Tu ne quaesieris, scire nefas, quem mihi, quem tibi finem di dederint, Leuconoe, nec Babylonios
        temptaris numeros. Ut melius, quidquid erit, pati.Seu plures hiemes, seu tribuit Iuppiter ultimam,
        quae nunc oppositis debilitat pumicibus mare Tyrrhenum. Sapias, vina liques, et spatio brevi spem
        longam reseces. Dum loquimur, fugerit invida aetas:
        <span className="font-extrabold text-white"> carpe diem</span>, quam minimum credula postero.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
