"use client";

import { features } from "@/data/features";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Features() {
  return (
    <section id="features" className="py-32">

      <Container>

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <h2 className="text-5xl font-bold">
            لماذا <span className="text-[#C6A15B]">Athkar</span>؟
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/60">
            صُمم لنشر الأذكار بين مجتمعات Discord بطريقة منظمة وآمنة وسريعة.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 place-items-center w-full">

          {features.map((item, i) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .15 }}
                className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-[#C6A15B]/30 hover:bg-white/[0.07]"
              >

                <div className="mb-6 flex justify-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C6A15B]/15 text-[#C6A15B]">
                    <Icon size={34} />
                  </div>

                </div>

                <h3 className="mb-3 text-center text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-center leading-8 text-white/60">
                  {item.desc}
                </p>

              </motion.div>
            );

          })}

        </div>

      </Container>

    </section>
  );
}