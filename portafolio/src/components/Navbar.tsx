"use client";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-[color:var(--color-dark)] text-[color:var(--color-blueLight)] shadow-md">
      <h1 className="text-2xl font-bold">Aitor Alonso</h1>
      <ul className="flex gap-8 font-medium">
        <li className="hover:text-[color:var(--color-blueMid)] cursor-pointer transition">
          Inicio
        </li>
        <li className="hover:text-[color:var(--color-blueMid)] cursor-pointer transition">
          Sobre mí
        </li>
        <li className="hover:text-[color:var(--color-blueMid)] cursor-pointer transition">
          Proyectos
        </li>
        <li className="hover:text-[color:var(--color-blueMid)] cursor-pointer transition">
          Contacto
        </li>
      </ul>
    </nav>
  );
}