export const designSystem = {
  colors: {
    background: "#0a0a0f",
    panel: "rgba(15, 23, 42, 0.6)",
    card: "rgba(20, 20, 30, 0.6)",
    border: "rgba(255, 255, 255, 0.08)",
    borderHover: "rgba(139, 92, 246, 0.5)",
    textPrimary: "#e4e4f0",
    textSecondary: "#9ca5c3",
    textMuted: "#555872",
    accent: "#8b5cf6",
    accentHover: "#7c3aed",
    cyan: "#22d3ee",
    green: "#38d996",
    emerald: "#10b981",
    amber: "#fbbf24",
    red: "#ef4444",
    violet: "#8b5cf6",
    blue: "#3b82f6",
  },

  gradients: {
    brand: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #10b981 100%)",
    purpleBlue: "linear-gradient(135deg, #7950f2, #5e42db)",
    cardBg: "linear-gradient(135deg, #1b1640, #07142a)",
    heroBg:
      "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.3), transparent), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(59, 130, 246, 0.15), transparent), radial-gradient(ellipse 60% 40% at 20% 80%, rgba(16, 185, 129, 0.1), transparent)",
  },

  typography: {
    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontFamilyMono:
      "'JetBrains Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace",
    h1: "font-black tracking-tight text-4xl sm:text-5xl lg:text-7xl",
    h2: "font-bold text-3xl sm:text-4xl",
    h3: "font-bold text-2xl",
    body: "text-base text-[#c5c7d8] leading-relaxed",
    small: "text-sm text-[#9ca5c3]",
    caption: "text-xs text-[#555872]",
  },

  spacing: {
    section: "py-12 lg:py-16",
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    cardPadding: "p-4 sm:p-6 lg:p-8",
    gridGap: "gap-4 sm:gap-6",
  },

  borderRadius: {
    sm: "rounded-lg",
    md: "rounded-xl",
    lg: "rounded-2xl",
    xl: "rounded-3xl",
    full: "rounded-full",
  },

  card: {
    base: "glass rounded-xl overflow-hidden card-hover cursor-pointer",
    padding: "p-4 sm:p-6",
    border: "border border-[#252b4b] hover:border-[#8b5cf6]/50 transition-all duration-300",
    bg: "bg-[rgba(13,16,37,0.8)]",
  },

  badges: {
    free: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    paid: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20",
    verified: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20",
    india: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20",
    hot: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20",
  },

  buttons: {
    primary:
      "px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition transform hover:-translate-y-0.5",
    secondary:
      "px-6 py-3 border border-white/10 text-[#e4e4f0] font-medium rounded-xl hover:bg-white/5 transition",
    ghost:
      "text-purple-400 hover:text-purple-300 font-medium px-4 py-2 transition-colors",
  },

  animations: {
    cardHover: "transition-all duration-300 hover:transform hover:-translate-y-1",
    glow: "box-shadow: 0 0 60px -10px rgba(139, 92, 246, 0.5)",
    float: "animation: float 6s ease-in-out infinite",
    pulseSlow: "animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  },

  layout: {
    maxWidth: "max-w-7xl mx-auto",
    heroMinHeight: "min-h-screen",
    sectionPadding: "py-12 lg:py-16",
    containerGap: "gap-4 sm:gap-6 lg:gap-8",
  },
};
