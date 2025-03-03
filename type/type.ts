import * as yup from "yup";
export interface FormDataType {
    name: string;
    email: string;
    phone?: string | null;
    telegram?: string | null;
    instagram?: string | null;
    about: string;
    resonate: "yes" | "no";
    resume: FileList;
    additionalMedia?: FileList | null;
    privacy: boolean;
    [key: string]: string | FileList | null | boolean | undefined;
  };
  
  
export interface StartupFormData{
  fullName: string;
  email: string;
  phone: string;
  country: string;
  aboutYourStartup: string;
  whyYou: string;
  projectPresentation?: yup.Maybe<FileList | undefined>;
}

export interface HelpFormData{
  tellUsHelp: string;
  additionalHelpMedia?: yup.Maybe<FileList | undefined>;
}


export interface Song {
  title: string;
  artist:string;
  src: string;
  thumbnail?:string;
}

export interface ControlsProps {
  isPlaying: boolean;
  stopSong: () => void;
  togglePlayPause: () => void;
  nextSong: () => void;
  previousSong: () => void;
}

export interface VolumeControlProps {
  volume: number;
  changeVolume: (volume: number) => void;
}

export interface NowPlayingProps {
  currentSongIndex: number;
  songs: Song[];
}

