export default function LandingCancha0() {
  // ==========================
  // CONFIG (reemplazar antes de publicar)
  // ==========================
  const LINKS = {
    aplicar: "#aplicar", // Anchor al formulario/CTA
    skoolInvite: "[VACIO_LINK_SKOOL]",
    onboardingForm: "[VACIO_LINK_FORM_ONBOARDING]",
    videoPrograma: "[VACIO_EMBED_URL_VIDEO_PROGRAMA]", // p.ej. https://www.youtube.com/embed/XXXX
    videoSkool: "[VACIO_EMBED_URL_VIDEO_SKOOL]",
    whatsapp: "[VACIO_LINK_WHATSAPP]",
    email: "[VACIO_MAILTO]",
  };

  const HORARIOS = {
    grupos: "[PENDIENTE] Lun–Mié 09:00–11:00 y 17:00–21:00 (AR)",
    individuales: "[PENDIENTE] Jue–Vie franjas similares",
    qna: "[PENDIENTE] Día y hora fijos para Q&A (1 h)",
  };

  // Paleta Cancha 0
  const colors = {
    bg: "bg-[#F4EDE1]", // Beige
    ink: "text-[#0F0F10]", // Negro profundo
    brand: "text-[#2E8B57]", // SeaGreen
    brandBg: "bg-[#2E8B57]",
    card: "bg-white",
    border: "border-[#0F0F10]/10",
  };

  return (
    <div className={`${colors.bg} ${colors.ink} min-h-screen antialiased`}> 
      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`${colors.brandBg} w-8 h-8 rounded-xl`} />
            <span className="font-extrabold tracking-tight">Cancha 0</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#como-funciona" className="hover:underline">Cómo funciona</a>
            <a href="#resultados" className="hover:underline">Qué te llevás</a>
            <a href="#horarios" className="hover:underline">Horarios</a>
            <a href="#faq" className="hover:underline">FAQ</a>
            <a href={LINKS.aplicar} className={`${colors.brandBg} text-white px-4 py-2 rounded-xl font-semibold`}>Aplicar</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest text-xs mb-3">Programa 8 semanas · Mentalidad competitiva para tenis</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Del entrenamiento al <span className={`${colors.brand}`}>rendimiento en partido</span>.
            </h1>
            <p className="mt-4 text-lg leading-relaxed">
              Si entrenás bien pero en partido se te escapa: en 8 semanas ordenás tu cabeza, decidís simple bajo presión y cerrás games.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={LINKS.aplicar} className={`${colors.brandBg} text-white px-5 py-3 rounded-2xl font-semibold`}>Quiero aplicar</a>
              <a href={LINKS.whatsapp} className="px-5 py-3 rounded-2xl border border-black/10 font-semibold">Hablar por WhatsApp</a>
            </div>
            <ul className="mt-6 text-sm grid sm:grid-cols-2 gap-2">
              <li className="flex items-start gap-2"><span className={`${colors.brandBg} mt-1 inline-block w-2 h-2 rounded-full`} />Inicio en 48 h desde el pago</li>
              <li className="flex items-start gap-2"><span className={`${colors.brandBg} mt-1 inline-block w-2 h-2 rounded-full`} />Sesiones grabadas (Fathom)</li>
              <li className="flex items-start gap-2"><span className={`${colors.brandBg} mt-1 inline-block w-2 h-2 rounded-full`} />Skool con materiales y seguimiento</li>
              <li className="flex items-start gap-2"><span className={`${colors.brandBg} mt-1 inline-block w-2 h-2 rounded-full`} />Formulario post‑sesión de progreso</li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm border border-black/10">
            {LINKS.videoPrograma.includes("http") ? (
              <div className="aspect-video">
                <iframe className="w-full h-full" src={LINKS.videoPrograma} title="Video programa" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            ) : (
              <div className="aspect-video flex items-center justify-center bg-white/60">
                <div className="text-center p-6">
                  <div className="text-5xl font-black mb-2">VIDEO</div>
                  <p className="text-sm">Insertá el embed del video explicativo acá</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Cómo funciona</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {t:"1. Pago", d:"Confirmás tu lugar (transferencia/Stripe autorizados)."},
            {t:"2. Accesos", d:"Recibís Skool + Formulario de Onboarding (10–12’)."},
            {t:"3. Ubicación", d:"Si el grupo está completo, entrás directo. Si no, Q&A 1 h con Santi."},
            {t:"4. Sesiones", d:"Grupales semanales; todo grabado con Fathom para que no te pierdas nada."},
            {t:"5. Post‑sesión", d:"Formulario corto para fijar aprendizajes y micro‑tareas."},
            {t:"6. Folleto Evolutivo", d:"Desde la semana 2 ves tu progreso comparado (privado o en sesión)."},
          ].map((s, i) => (
            <div key={i} className={`rounded-2xl ${colors.card} border ${colors.border} p-5`}> 
              <div className={`${colors.brandBg} text-white w-8 h-8 rounded-xl flex items-center justify-center font-bold mb-3`}>{i+1}</div>
              <h3 className="font-bold mb-1">{s.t}</h3>
              <p className="text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        {/* Video Skool */}
        <div className="mt-10 rounded-2xl overflow-hidden shadow-sm border border-black/10">
          {LINKS.videoSkool.includes("http") ? (
            <div className="aspect-video">
              <iframe className="w-full h-full" src={LINKS.videoSkool} title="Cómo usar Skool" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          ) : (
            <div className="aspect-video flex items-center justify-center bg-white/60">
              <div className="text-center p-6">
                <div className="text-5xl font-black mb-2">VIDEO</div>
                <p className="text-sm">Insertá el embed del tutorial de Skool acá</p>
              </div>
            </div>
          )}
        </div>

        {/* Botones rápidos */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={LINKS.onboardingForm} className={`${colors.brandBg} text-white px-5 py-3 rounded-2xl font-semibold`}>Completar Onboarding</a>
          <a href={LINKS.skoolInvite} className="px-5 py-3 rounded-2xl border border-black/10 font-semibold">Entrar a Skool</a>
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Qué te llevás</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {t:"Rendimiento bajo presión", d:"Rutina previa corta, marco para cada punto y reset de 10 segundos."},
            {t:"Decisiones simples en momentos clave", d:"BP, 30–30, tie-break: menos drama, más claridad."},
            {t:"Identidad competitiva", d:"Construís una forma propia de competir que podés repetir."},
            {t:"Seguimiento real", d:"Folleto Evolutivo semana a semana y grabaciones disponibles."},
            {t:"Soporte", d:"Canal privado, micro‑tareas y feedback para sostener avances."},
            {t:"Integración a tu vida", d:"Sin tocar tu técnica: es cabeza + decisiones en cancha."},
          ].map((s, i) => (
            <div key={i} className={`rounded-2xl ${colors.card} border ${colors.border} p-5`}> 
              <h3 className="font-bold mb-1">{s.t}</h3>
              <p className="text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HORARIOS */}
      <section id="horarios" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Horarios & Organización</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className={`rounded-2xl ${colors.card} border ${colors.border} p-5`}>
            <h3 className="font-bold mb-1">Grupos</h3>
            <p className="text-sm">{HORARIOS.grupos}</p>
          </div>
          <div className={`rounded-2xl ${colors.card} border ${colors.border} p-5`}>
            <h3 className="font-bold mb-1">Individuales</h3>
            <p className="text-sm">{HORARIOS.individuales}</p>
          </div>
          <div className={`rounded-2xl ${colors.card} border ${colors.border} p-5`}>
            <h3 className="font-bold mb-1">Sesión Q&A</h3>
            <p className="text-sm">{HORARIOS.qna}</p>
          </div>
        </div>
        <p className="mt-4 text-sm opacity-80">* Zona horaria: Argentina (UTC−03). Confirmación manual de horario por WhatsApp.</p>
      </section>

      {/* CTA / FORM */}
      <section id="aplicar" className="mx-auto max-w-4xl px-4 py-12">
        <div className={`rounded-3xl ${colors.card} border ${colors.border} p-6 md:p-10 shadow-sm`}>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Aplicá al Programa</h2>
          <p className="mb-6 text-sm">Completá el **Formulario de Onboarding** (10–12’) y te ubicamos en tu grupo. Si el grupo aún no está completo, te sumamos a una **Q&A** para sostener el ritmo.</p>
          <div className="flex flex-wrap gap-3">
            <a href={LINKS.onboardingForm} className={`${colors.brandBg} text-white px-5 py-3 rounded-2xl font-semibold`}>Completar Onboarding</a>
            <a href={LINKS.whatsapp} className="px-5 py-3 rounded-2xl border border-black/10 font-semibold">Dudas por WhatsApp</a>
            <a href={LINKS.email} className="px-5 py-3 rounded-2xl border border-black/10 font-semibold">Escribir por Email</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Preguntas frecuentes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[ 
            {q:"¿Cuándo empiezo?", a:"Dentro de 48 h desde tu pago recibís accesos. Si el grupo no está completo, vas a una Q&A de 1 h hasta el inicio oficial."},
            {q:"¿Se graban las sesiones?", a:"Sí. Usamos Fathom (pago) + Google Meet. Tenés acceso a las grabaciones."},
            {q:"¿Necesito cambiar mi técnica?", a:"No. Trabajamos cabeza, decisiones y rutinas para que aparezca lo que ya entrenás."},
            {q:"¿Cómo es el seguimiento?", a:"Formulario post‑sesión, canal de soporte y Folleto Evolutivo semana a semana."},
            {q:"¿Qué pasa si falto a una sesión?", a:"Tenés la grabación y las micro‑tareas de la semana. Priorizamos asistencia ≥85%."},
            {q:"¿Política de devoluciones?", a:"[DEFINIR]. Sugerido: garantía condicionada a asistencia y entrega de post‑sesión."},
          ].map((f, i) => (
            <div key={i} className={`rounded-2xl ${colors.card} border ${colors.border} p-5`}> 
              <h3 className="font-bold mb-1">{f.q}</h3>
              <p className="text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-8 border-t border-black/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="font-extrabold">Cancha 0</div>
            <div className="opacity-70">© {new Date().getFullYear()} — Todos los derechos reservados.</div>
          </div>
          <div className="flex gap-4">
            <a href={LINKS.whatsapp} className="underline">WhatsApp</a>
            <a href={LINKS.email} className="underline">Email</a>
            <a href="#aplicar" className="underline">Aplicar</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
