import { create } from 'zustand';

const useLanguageContext = create((set) => ({
  isEnglish: false,
  toggleLanguage: () => set((state) => ({ isEnglish: !state.isEnglish })),
}));

export default useLanguageContext;
