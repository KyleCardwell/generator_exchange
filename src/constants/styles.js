import { brandColors } from "@/constants/colors";

export const sectionClasses = "mx-auto w-full max-w-6xl px-6 py-12";
export const cardClasses = "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm";
export const inputClasses =
  "w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-500";

export const brandStyles = {
  heroBackground: {
    backgroundImage: `linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.secondary} 100%)`,
  },
  primaryButton: {
    backgroundColor: brandColors.primary,
  },
};
