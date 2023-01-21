// ./components/ThemeToggle.js
'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

// Aqui temos os ícones de Lua e Sol
import { BiMoon, BiSun } from 'react-icons/bi';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Aqui dizemos que esse componente só deve ser mostrado
  // depois da página carregada. Isso evita que o ícone
  // errado apareça antes do next-themes saber se deve
  // carregar o tema dark ou o tema light
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Uma função simples para verificar qual tema está ativo
  function isDark() {
    return theme === 'dark';
  }

  return (
    // E a logica em si
    <button
      className="focus:outline-none group"
      onClick={() => setTheme(isDark() ? 'light' : 'dark')}
      aria-label="Theme toggle"
    >
      <span className=" flex justify-between gap-2 items-center">
        <span>
          <BiSun size={20} />
        </span>
        <span
          className={` w-12 h-6 ${
            isDark() ? 'bg-light-gray' : 'bg-dark-blue'
          } rounded-xl flex items-center relative transition-all`}
        >
          <span
            className={`block w-4 h-4 bg-primary rounded-full group-hover:bg-primary-light my-1 ${
              isDark() ? 'translate-x-7' : 'translate-x-1'
            }`}
          ></span>
        </span>
        <span>
          <BiMoon size={20} />
        </span>
      </span>
    </button>
  );
}
