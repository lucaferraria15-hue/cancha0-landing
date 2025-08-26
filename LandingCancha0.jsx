export default function LandingCancha0() {
  const LINKS = {
    aplicar: "#aplicar",
    skoolInvite: "[VACIO_LINK_SKOOL]",
    onboardingForm: "[VACIO_LINK_FORM_ONBOARDING]",
    videoPrograma: "[VACIO_EMBED_URL_VIDEO_PROGRAMA]",
    videoSkool: "[VACIO_EMBED_URL_VIDEO_SKOOL]",
    whatsapp: "[VACIO_LINK_WHATSAPP]",
    email: "[VACIO_MAILTO]",
  };

  const HORARIOS = {
    grupos: "[PENDIENTE] Lun–Mié 09:00–11:00 y 17:00–21:00 (AR)",
    individuales: "[PENDIENTE] Jue–Vie franjas similares",
    qna: "[PENDIENTE] Día y hora fijos para Q&A (1 h)",
  };

  const colors = {
    bg: "bg-[#F4EDE1]",
    ink: "text-[#0F0F10]",
    brand: "text-[#2E8B57]",
    brandBg: "bg-[#2E8B57]",
    card: "bg-white",
    border: "border-[#0F0F10]/10",
  };

  return (
    <div className={\`\${colors.bg} \${colors.ink} min-h-screen antialiased\`}>
      <h1 className="text-3xl font-bold text-center py-10">Landing Cancha 0</h1>
      <p className="text-center">Del entrenamiento al rendimiento en partido.</p>
    </div>
  );
}
