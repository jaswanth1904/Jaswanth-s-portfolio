import { create } from 'zustand';

export interface FileData {
  id: string;
  name: string;
  icon: string;
  component: string;
}

interface PortfolioState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  
  openFiles: FileData[];
  activeFile: string | null;
  
  openFile: (file: FileData) => void;
  closeFile: (fileId: string) => void;
  setActiveFile: (fileId: string) => void;
}

export const useStore = create<PortfolioState>((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  
  openFiles: [],
  activeFile: null,
  
  openFile: (file) => set((state) => {
    // Check if already open
    const isOpen = state.openFiles.some((f) => f.id === file.id);
    if (!isOpen) {
      return {
        openFiles: [...state.openFiles, file],
        activeFile: file.id
      };
    }
    return {
      activeFile: file.id
    };
  }),
  
  closeFile: (fileId) => set((state) => {
    const newOpenFiles = state.openFiles.filter((f) => f.id !== fileId);
    let newActiveFile = state.activeFile;
    
    // If we closed the active file, switch to the previous one
    if (state.activeFile === fileId) {
      if (newOpenFiles.length > 0) {
        newActiveFile = newOpenFiles[newOpenFiles.length - 1].id;
      } else {
        newActiveFile = null;
      }
    }
    
    return {
      openFiles: newOpenFiles,
      activeFile: newActiveFile
    };
  }),
  
  setActiveFile: (fileId) => set({ activeFile: fileId })
}));
