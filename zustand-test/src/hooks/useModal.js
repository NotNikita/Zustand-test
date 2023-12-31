import {create} from 'zustand';
import {devtools} from 'zustand/middleware';

export const useModal = create()(devtools((set) => ({
    isOpen: false,
    toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
    closeModal: () => set({ isOpen: false }),
    openModal: () => set({ isOpen: true }),
})));
