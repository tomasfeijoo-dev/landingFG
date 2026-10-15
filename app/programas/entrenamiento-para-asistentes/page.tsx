import type { Metadata } from "next";
import Image from "next/image";
import DonateBanner from "@/components/DonateBanner";
import ProgramHeader from "@/components/ProgramHeader";

export const metadata: Metadata = {
  title: "Entrenamiento para asistentes de endoscopistas · Programas",
  description:
    "Cursos para asistentes de endoscopía: asistencia básica de endoscopía, reprocesamiento endoscópico y asistencia en VCC de screening.",
};

// Textos tal cual figuran en la página del programa en fundaciongedyt.org.ar
const clasesVirtuales =
  "Se espera que los participantes asistan a las clases virtuales de forma previa a toda instancia presencial o práctica para maximizar el rendimiento de dicha etapa.";
const descripcion =
  "Se abordarán contenidos teóricos. Las clases serán en modalidad virtual asincrónica y estarán disponibles para el alumnado durante el período de duración del curso, pudiendo reproducirlas más de una vez. El contenido incluye clases expositivas, demostraciones didácticas, resolución de problemas y estudio de casos.";

const cursos = [
  {
    title: "Asistencia básica de endoscopía",
    image: "/images/asist-1.webp",
    alt: "Asistente de endoscopía frente a un monitor",
    audiencia: "El curso está especialmente destinado a enfermeros, instrumentadores quirúrgicos y asistentes sin experiencia previa.",
    objetivos:
      "Entender el rol del Asistente y Armado de Sala. Conocer el equipamiento y partes del endoscopio. Comprender las bases del reprocesamiento de Endoscopios manual y automático. Resolución de Loops y fijación externa. Técnicas Básicas.",
    handsOn: "El curso incluye un hands on de los cursos básicos de entrenamiento a endoscopistas a elección sujeto a disponibilidad en la fecha elegida.",
    opciones: ["VEDA", "VCC", "Endoscopía terapéutica"],
  },
  {
    title: "Reprocesamiento endoscópico",
    image: "/images/asist-2.webp",
    alt: "Manos con guantes ordenando instrumental endoscópico",
    audiencia:
      "El curso está especialmente destinado a instrumentadores quirúrgicos y asistentes de endoscopia, Enfermeras de Endoscopia, Broncoscopia, Urología. Docentes y Managers de centros de salud. Técnicos de Reprocesamiento.",
    objetivos:
      "Capacitar a las y los participantes en los conocimientos relativos al cuidado, manejo, mantenimiento, reprocesamiento y almacenamiento adecuados del material endoscópico flexible y sus accesorios. Conocer la mecánica del endoscopio flexible. Revisar las recomendaciones y técnicas de reprocesamiento. Considerar errores comunes de reprocesamiento y sus consecuencias respecto a reparaciones de endoscopios. Conocer el cuidado, manejo y mantenimiento, reprocesamiento y almacenamiento adecuados del endoscopio flexible y los accesorios. Identificar técnicas de reprocesamiento correctas e incorrectas.",
    handsOn: "El curso incluye un hands on y observación en un centro de alto volumen.",
  },
  {
    title: "Asistencia en VCC de screening",
    image: "/images/asist-3.webp",
    alt: "Asistente de endoscopía con ambo",
    audiencia: "El curso está especialmente destinado a enfermeros, instrumentadores quirúrgicos y asistentes con experiencia previa.",
    objetivos:
      "Entender el rol del Asistente y Armado de Sala. Conocer el equipamiento y partes del endoscopio. Comprender las bases del reprocesamiento de Endoscopios manual y automático. Resolución de Loops y fijación externa. Técnicas Básicas. La técnica de la colonoscopía. Argón plasma y dilatación. Resolución de complicaciones en colonoscopía. SITAM.",
    handsOn: "El curso incluye un hands on en VCC de screening.",
  },
];

export default function EntrenamientoAsistentesPage() {
  return (
    <>
      <ProgramHeader eyebrow="Entrenamiento para profesionales" title="Entrenamiento para asistentes de endoscopistas" />

      {/* Índice de cursos */}
      <nav className="mx-auto mt-8 flex max-w-fit flex-wrap justify-center gap-2 px-4">
        {cursos.map((c, i) => (
          <a
            key={c.title}
            href={`#curso-${i + 1}`}
            className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-navy-900 ring-1 ring-brand-100 transition hover:bg-cta hover:text-white hover:ring-cta"
          >
            {c.title}
          </a>
        ))}
      </nav>

      {cursos.map((c, i) => {
        const alt = i % 2 === 1;
        return (
          <section key={c.title} id={`curso-${i + 1}`} className={`scroll-mt-28 px-4 py-20 sm:px-6 sm:py-24 ${alt ? "bg-brand-50/70" : ""}`}>
            <div className={`mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] ${alt ? "lg:grid-cols-[1.2fr_0.8fr]" : ""}`}>
              <div className={`reveal relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/20 ${alt ? "lg:order-2" : ""}`}>
                <Image src={c.image} alt={c.alt} fill sizes="(min-width: 1024px) 24rem, 90vw" className="object-cover transition duration-1000 hover:scale-105" />
                <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold tracking-[0.16em] text-navy-900 backdrop-blur">
                  0{i + 1}
                </span>
              </div>
              <div className="reveal">
                <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">{c.title}</h2>
                <dl className="mt-6 space-y-4 leading-relaxed text-navy-900/75">
                  <div>
                    <dt className="font-bold text-navy-900">Audiencia objetivo</dt>
                    <dd>{c.audiencia}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-navy-900">Descripción</dt>
                    <dd>{descripcion}</dd>
                    <dd className="mt-2">{clasesVirtuales}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-navy-900">Objetivos</dt>
                    <dd>{c.objetivos}</dd>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-navy-900/5">
                    <dt className="font-bold text-cta">Hands on</dt>
                    <dd>{c.handsOn}</dd>
                    {c.opciones && (
                      <dd className="mt-3 flex flex-wrap gap-2">
                        {c.opciones.map((o) => (
                          <span key={o} className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-navy-900 ring-1 ring-brand-100">
                            {o}
                          </span>
                        ))}
                      </dd>
                    )}
                  </div>
                </dl>
              </div>
            </div>
          </section>
        );
      })}

      <DonateBanner />
    </>
  );
}
