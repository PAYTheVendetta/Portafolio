"use client";

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      {/* 🌐 Navbar */}
      <Navbar />

      {/* 🦸 Hero */}
      <section className="flex flex-col items-center justify-center text-center px-8 py-24 bg-[color:var(--color-navy)] text-[color:var(--color-bgLight)]">
        <h2 className="text-4xl md:text-6xl font-bold">
          Hola, soy Aitor 👋
        </h2>

        <p className="mt-6 text-lg md:text-2xl max-w-2xl text-[color:var(--color-blueLight)]">
          Estudiante de Desarrollo y Técnico en Redes.  
          Apasionado por la programación, la seguridad informática y crear proyectos con impacto.
        </p>

        <div className="mt-8 flex gap-6">
          <button className="bg-[color:var(--color-blueMid)] text-[color:var(--color-bgLight)] px-6 py-3 rounded-lg font-medium hover:bg-[color:var(--color-blueLight)] hover:text-[color:var(--color-dark)] transition">
            Ver proyectos
          </button>
          <button className="border border-[color:var(--color-blueLight)] text-[color:var(--color-blueLight)] px-6 py-3 rounded-lg font-medium hover:bg-[color:var(--color-blueLight)] hover:text-[color:var(--color-dark)] transition">
            Contacto
          </button>
        </div>
      </section>
    </main>
  );
}
