"use client";

import { useState } from "react";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);
  const anoAtual = new Date().getFullYear();

  return (
    <div className="relative flex min-h-screen flex-col text-slate-100">
      <div className="absolute inset-0 bg-[url('/foto-academia.jpg')] bg-cover bg-center grayscale" />
      <div className="absolute inset-0 bg-black/70" />

      <header className="sticky top-0 z-50">
        <nav className="mx-auto w-full border border-emerald-300 bg-black/70 px-5 py-4 backdrop-blur">
          <div className="flex items-center justify-between">
            <a href="#" className="text-lg font-extrabold tracking-tight text-slate-100">
              Academia <span className="text-emerald-400">Motta</span>
            </a>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-300 text-slate-100 md:hidden"
              onClick={() => setMenuAberto(!menuAberto)}
              aria-expanded={menuAberto}
              aria-controls="menu-mobile"
              aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            >
              <span className="sr-only">Menu</span>
              <span className="relative h-5 w-5">
                <span
                  className={`absolute left-0 top-0 block h-0.5 w-5 bg-slate-100 transition-all duration-300 ${
                    menuAberto ? "translate-y-2 rotate-45" : "translate-y-0 rotate-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-2 block h-0.5 w-5 bg-slate-100 transition-all duration-300 ${
                    menuAberto ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-4 block h-0.5 w-5 bg-slate-100 transition-all duration-300 ${
                    menuAberto ? "-translate-y-2 -rotate-45" : "translate-y-0 rotate-0"
                  }`}
                />
              </span>
            </button>

            <ul className="hidden items-center gap-6 text-sm font-medium text-slate-100 md:flex">
              <li><a href="#planos" className="hover:text-emerald-300">Planos</a></li>
              <li><a href="#cadastro" className="hover:text-emerald-300">Cadastro</a></li>
              <li><a href="#beneficios" className="hover:text-emerald-300">Benefícios</a></li>
            </ul>

            <a
              href="#cadastro"
              className="hidden rounded-lg bg-emerald-400 px-4 py-2 text-sm font-bold text-black hover:bg-emerald-300 md:inline-block"
            >
              Começar
            </a>
          </div>

          {menuAberto && (
            <ul
              id="menu-mobile"
              className="mt-4 flex flex-col gap-3 border-t border-emerald-300 pt-4 text-sm font-medium text-slate-100 md:hidden"
            >
              <li>
                <a href="#planos" onClick={() => setMenuAberto(false)} className="hover:text-emerald-300">
                  Planos
                </a>
              </li>
              <li>
                <a href="#cadastro" onClick={() => setMenuAberto(false)} className="hover:text-emerald-300">
                  Cadastro
                </a>
              </li>
              <li>
                <a href="#beneficios" onClick={() => setMenuAberto(false)} className="hover:text-emerald-300">
                  Benefícios
                </a>
              </li>
            </ul>
          )}
        </nav>
      </header>
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-20 px-6 py-12 md:px-10 md:py-16">
        <section className="grid items-start gap-10 rounded-3xl border border-emerald-300 bg-black/70 p-8 md:grid-cols-2 md:p-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Transforme seu corpo na academia que vai elevar seu nível.
            </h1>
            <p className="max-w-xl text-lg text-slate-100">
              Estrutura premium, professores certificados e acompanhamento
              individual para você conquistar resultado real em menos tempo.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#cadastro"
                className="rounded-xl bg-emerald-400 px-6 py-3 text-center text-base font-bold text-black transition hover:bg-emerald-300"
              >
                Quero minha avaliação gratuita
              </a>
              <a
                href="#planos"
                className="rounded-xl border border-emerald-300 px-6 py-3 text-center text-base font-semibold text-slate-100 transition hover:text-emerald-300"
              >
                Ver planos
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden md:h-screen">
            <img
              src="/foto-musculacao.jpg"
              alt="Homem musculoso na academia"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section id="beneficios" className="space-y-6">
          <h2 className="text-3xl font-bold md:text-4xl">Por que escolher a gente?</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Treino personalizado",
                description:
                  "Avaliação física e plano ajustado ao seu objetivo: emagrecer, ganhar massa ou melhorar performance.",
              },
              {
                title: "Ambiente premium",
                description:
                  "Equipamentos de última geração, climatização e espaço planejado para seu conforto diário.",
              },
              {
                title: "Acompanhamento próximo",
                description:
                  "Equipe disponível para corrigir técnica, acompanhar evolução e manter sua motivação em alta.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-emerald-300 bg-black/70 p-6"
              >
                <h3 className="text-xl font-semibold text-emerald-300">{item.title}</h3>
                <p className="mt-3 text-slate-100">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="planos" className="space-y-6">
          <h2 className="text-3xl font-bold md:text-4xl">Planos para cada ritmo</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                name: "Start",
                price: "R$ 99",
                period: "/mês",
                features: ["Acesso em horário comercial", "Treino inicial guiado"],
              },
              {
                name: "Performance",
                price: "R$ 149",
                period: "/mês",
                features: [
                  "Acesso total",
                  "Avaliação mensal",
                  "Aulas coletivas inclusas",
                ],
              },
              {
                name: "Elite",
                price: "R$ 199",
                period: "/mês",
                features: [
                  "Tudo do Performance",
                  "Consultoria de evolução",
                  "1 sessão semanal com personal",
                ],
              },
            ].map((plan) => (
              <article
                key={plan.name}
                className="rounded-2xl border border-emerald-300 bg-black/70 p-6"
              >
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-emerald-300">
                    {plan.price}
                  </span>
                  <span className="text-slate-100">{plan.period}</span>
                </p>
                <ul className="mt-4 space-y-2 text-slate-100">
                  {plan.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="cadastro"
          className="rounded-3xl border border-emerald-300 bg-black/70 p-8 md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-emerald-300 md:text-4xl">
                Faça seu cadastro e ganhe uma aula experimental
              </h2>
              <p className="text-slate-100">
                Preencha os dados e nossa equipe entra em contato para agendar
                sua avaliação gratuita.
              </p>
            </div>

            <form className="space-y-4 rounded-2xl border border-emerald-300 bg-black/70 p-6">
              <div>
                <label htmlFor="nome" className="mb-1 block text-sm text-slate-100">
                  Nome completo
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-lg border border-emerald-300 bg-emerald-900/30 px-4 py-3 text-slate-100 outline-none focus:border-emerald-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm text-slate-100">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="voce@email.com"
                  className="w-full rounded-lg border border-emerald-300 bg-emerald-900/30 px-4 py-3 text-slate-100 outline-none focus:border-emerald-300"
                />
              </div>
              <div>
                <label htmlFor="telefone" className="mb-1 block text-sm text-slate-100">
                  Telefone
                </label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  className="w-full rounded-lg border border-emerald-300 bg-emerald-900/30 px-4 py-3 text-slate-100 outline-none focus:border-emerald-300"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-emerald-400 px-4 py-3 font-bold text-black transition hover:bg-emerald-300"
              >
                Quero começar agora
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-emerald-300 bg-black/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-8 text-center md:px-10">
          <div className="space-y-2">
            <p className="text-lg font-extrabold tracking-tight">
              Academia <span className="text-emerald-400">Motta</span>
            </p>
            <p className="mt-2 text-sm text-slate-100">
              Evolução real com acompanhamento profissional e ambiente premium.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-lg font-semibold text-emerald-300">Contato</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-100">
              <li>(11) 99999-9999</li>
              <li>contato@academiamotta.com.br</li>
              <li>Seg a Sex, 06h às 22h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-300 px-6 py-4 text-center text-xs text-slate-100 md:px-10">
          © {anoAtual} Academia Motta. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
