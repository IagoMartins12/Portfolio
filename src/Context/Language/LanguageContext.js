import { create } from 'zustand';

const useLanguageContext = create((set) => ({
  isEnglish: true,
  toggleLanguage: () => set((state) => ({ isEnglish: !state.isEnglish })),
}));

export default useLanguageContext;
