import type { Metadata } from "next";
import Image from "next/image";
import DonateBanner from "@/components/DonateBanner";
import ProgramHeader from "@/components/ProgramHeader";
import { Eyebrow, RibbonDeco } from "@/components/ui";

export const metadata: Metadata = {
  title: "Misiones: Alianzas Territoriales · Programas",
  description:
    "Programa Provincial de Prevención del Cáncer de Colon en Misiones y los HANDS ON en Misiones y el Hospital de Clínicas: innovación y compromiso en la prevención.",
};

// Textos tal cual figuran en la página del programa en fundaciongedyt.org.ar
const b = (t: string) => <strong className="text-navy-900">{t}</strong>;

export default function MisionesPage() {
  return (
    <>
      <ProgramHeader eyebrow="Programa provincial" title="Misiones: Alianzas Territoriales" />

      {/* Innovación y compromiso */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/20">
            <Image src="/images/mis-1.webp" alt="Profesional realizando una práctica de endoscopía" fill sizes="(min-width: 1024px) 24rem, 90vw" className="object-cover transition duration-1000 hover:scale-105" />
          </div>
          <div className="reveal">
            <Eyebrow chip>2024</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">Innovación y compromiso en la prevención del cáncer de colon</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-900/70">
              <p>
                Continuamos avanzando con el Programa Provincial en Misiones y con las jornadas {b("HANDS ON")}, fortaleciendo la capacitación, el intercambio
                de conocimientos y la implementación de estrategias concretas para la detección temprana y la prevención del cáncer de colon.
              </p>
              <p>
                En 2024 consolidamos nuestro compromiso con la prevención del cáncer de colon a través de iniciativas clave que no solo impactaron en la vida de
                cientos de personas, sino que también fortalecieron la capacidad del sistema de salud en Argentina.
              </p>
              <p>
                Dos de las acciones más destacadas fueron el {b("Programa Provincial de Prevención del Cáncer de Colon en Misiones")} y los {b("HANDS ON")}{" "}
                realizados en Misiones y en el Hospital de Clínicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programa Provincial */}
      <section className="bg-brand-50/70 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="reveal">
            <Eyebrow chip>Programa Provincial</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Programa Provincial de Prevención del Cáncer de Colon en Misiones: un modelo a seguir
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-900/70">
              <p>
                El cáncer de colon es una de las principales causas de muerte en Argentina. En la provincia de Misiones, donde las tasas de diagnóstico
                temprano han sido históricamente bajas, la necesidad de una intervención urgente era evidente.
              </p>
              <p>
                En respuesta, Fundación GEDYT, en colaboración con el {b("Ministerio de Salud de Misiones")}, lanzó un programa provincial integral para la
                prevención del cáncer de colon. Este programa, pionero en su enfoque, se centró en la {b("concientización, el tamizaje y la educación")}{" "}
                dirigidos tanto a la comunidad como a los profesionales de la salud de la provincia.
              </p>
              <p>
                A lo largo del año, el programa alcanzó a cientos de personas mediante campañas de sensibilización y educación que destacaron la importancia de
                la detección temprana. Además, se realizaron jornadas de capacitación para médicos y profesionales de la salud en técnicas de tamizaje y
                tratamiento, fortaleciendo la capacidad del sistema sanitario para abordar esta enfermedad.
              </p>
            </div>
            <p className="mt-6 rounded-2xl bg-white px-5 py-4 font-bold text-navy-900 shadow-sm ring-1 ring-navy-900/5">
              <span className="text-cta">El impacto fue significativo:</span> se lograron detectar numerosos casos en etapas tempranas, aumentando las
              posibilidades de tratamiento exitoso y contribuyendo a salvar vidas.
            </p>
          </div>
          <div className="reveal relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/20">
            <Image src="/images/mis-2.webp" alt="Presentación del Programa Provincial y jornada de capacitación en Misiones" fill sizes="(min-width: 1024px) 24rem, 90vw" className="object-cover transition duration-1000 hover:scale-105" />
          </div>
        </div>
      </section>

      {/* HANDS ON */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/20">
            <Image src="/images/mis-3.webp" alt="Práctica con simulador durante un HANDS ON" fill sizes="(min-width: 1024px) 24rem, 90vw" className="object-cover transition duration-1000 hover:scale-105" />
          </div>
          <div className="reveal">
            <Eyebrow chip>HANDS ON</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              HANDS ON: capacitación práctica de excelencia en Misiones y el Hospital de Clínicas
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-900/70">
              <p>
                Una de las iniciativas más innovadoras y efectivas de la Fundación son los {b("HANDS ON")}, talleres prácticos intensivos que brindan
                capacitación de alto nivel a médicos y especialistas en gastroenterología.
              </p>
              <p>
                Estos workshops, realizados en {b("Misiones")} y en el {b("Hospital de Clínicas")}, se enfocaron en la actualización de{" "}
                {b("técnicas endoscópicas avanzadas")}, fundamentales para la detección y el tratamiento del cáncer de colon.
              </p>
              <p>
                El HANDS ON en Misiones no solo capacitó a profesionales locales, sino que también incluyó la instalación de{" "}
                {b("equipamiento de última generación")}, lo que permitió aplicar de manera inmediata los conocimientos adquiridos en la práctica clínica
                diaria. Este esfuerzo elevó el estándar de atención en la región y sentó las bases para mejorar sostenidamente los índices de detección y
                tratamiento.
              </p>
              <p>
                Por su parte, el HANDS ON realizado en el {b("Hospital de Clínicas de Buenos Aires")} reunió a destacados especialistas nacionales e
                internacionales, generando un espacio de intercambio de conocimientos y experiencias. Los participantes pudieron perfeccionar sus habilidades en
                un entorno controlado, utilizando {b("simuladores y técnicas innovadoras")} que les permitirán ofrecer una atención médica cada vez más precisa
                y efectiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Un futuro prometedor */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 px-6 py-20 text-white sm:px-12 sm:py-24">
        <RibbonDeco className="-bottom-6 -left-20 h-60 w-[32rem] rotate-180" />
        <div className="relative mx-auto max-w-6xl">
          <div className="reveal grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Un futuro prometedor</h2>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                El éxito del <strong className="text-white">Programa Provincial en Misiones</strong> y de los <strong className="text-white">HANDS ON</strong>{" "}
                realizados durante este año demuestra la capacidad de la Fundación para liderar iniciativas que no solo generan un impacto inmediato, sino que
                también promueven cambios duraderos en el sistema de salud.
              </p>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-white/80 lg:pt-14">
              <p>
                Gracias al Programa Provincial se logró mejorar la atención médica en las regiones donde se implementó y, al mismo tiempo, establecer un modelo
                replicable para futuras intervenciones en otras provincias y países.
              </p>
              <p>
                En Fundación GEDYT reafirmamos nuestro compromiso con la prevención del cáncer de colon. Estas iniciativas reflejan el valor de la colaboración,
                la innovación y el trabajo sostenido frente a esta enfermedad. Con un enfoque centrado en la educación, la tecnología y la capacitación
                continua, el futuro de la prevención del cáncer de colon en Argentina se proyecta con bases cada vez más sólidas.
              </p>
            </div>
          </div>
          <div className="reveal relative mt-12 aspect-[11/4] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/30 ring-1 ring-white/10">
            <Image src="/images/mis-4.webp" alt="Equipo del HANDS ON" fill sizes="(min-width: 1280px) 72rem, 100vw" className="object-cover transition duration-1000 hover:scale-105" />
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
