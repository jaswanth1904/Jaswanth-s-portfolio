import { create } from 'zustand';

export interface FileNode {
  name: string;
  type: 'folder' | 'file' | 'symbol';
  iconId?: string;
  componentId?: string;
  children?: FileNode[];
  content?: any;
}

export const portfolioFiles: FileNode[] = [
  {
    name: 'PORTFOLIO',
    type: 'folder',
    children: [
      {
        name: 'public',
        type: 'folder',
        children: [
          {
            name: 'TS',
            type: 'folder',
            children: [
              { name: 'about_me.ts', type: 'file', iconId: 'ts', componentId: 'AboutMe' },
              { name: 'professional_summary.ts', type: 'file', iconId: 'ts', componentId: 'ProfessionalSummary' },
              { name: 'skills.ts', type: 'file', iconId: 'ts', componentId: 'Skills' },
              { name: 'education.ts', type: 'file', iconId: 'ts', componentId: 'Education' },
              { name: 'experience.ts', type: 'file', iconId: 'ts', componentId: 'Experience' },
              { name: 'my_work.ts', type: 'file', iconId: 'ts', componentId: 'MyWork' },
              {
                name: 'projects',
                type: 'folder',
                children: [
                  { name: 'e2f_holidays.ts', type: 'file', iconId: 'ts', componentId: 'ProjectCaseStudy_E2F' },
                  { name: 'sn_enviro.ts', type: 'file', iconId: 'ts', componentId: 'ProjectCaseStudy_SN' },
                  { name: 'ecommerce.ts', type: 'file', iconId: 'ts', componentId: 'ProjectCaseStudy_Eco' }
                ]
              },
              { name: 'co_curricular.ts', type: 'file', iconId: 'ts', componentId: 'CoCurricular' },
              { name: 'personal_details.ts', type: 'file', iconId: 'ts', componentId: 'PersonalDetails' },
              { name: 'contact.ts', type: 'file', iconId: 'ts', componentId: 'ContactMe' }
            ]
          }
        ]
      }
    ]
  }
];

interface AppState {
  openFiles: FileNode[];
  activeFile: FileNode | null;
  isTerminalOpen: boolean;
  openFile: (file: FileNode) => void;
  closeFile: (fileName: string) => void;
  toggleTerminal: () => void;
}

// Find the about_me.ts file deep in the hierarchy
const aboutMeFile = portfolioFiles[0].children![0].children![0].children![0];

export const useStore = create<AppState>((set) => ({
  openFiles: [aboutMeFile],
  activeFile: aboutMeFile,
  isTerminalOpen: false,

  openFile: (file: FileNode) => set((state) => {
    // Only open files or symbols, not folders
    if (file.type === 'folder') return state;

    const isAlreadyOpen = state.openFiles.find((f) => f.name === file.name);
    return {
      openFiles: isAlreadyOpen ? state.openFiles : [...state.openFiles, file],
      activeFile: file,
    };
  }),

  closeFile: (fileName: string) => set((state) => {
    const newOpenFiles = state.openFiles.filter((f) => f.name !== fileName);
    return {
      openFiles: newOpenFiles,
      activeFile: newOpenFiles.length > 0 ? newOpenFiles[newOpenFiles.length - 1] : null,
    };
  }),

  toggleTerminal: () => set((state) => ({ isTerminalOpen: !state.isTerminalOpen })),
}));
