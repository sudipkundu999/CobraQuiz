import { FormEvent } from "react";

export interface LocationState {
  from: Location;
}

export interface LoginFormState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserDataState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  uid: string;
  totalScore: number;
  totalQuizPlayed: number;
}

export interface CurrentQuizState {
  questions: any[];
  answers: number[];
  score: number;
}

interface AuthContextProps {
  userName: string;
  isUserLoggedIn: boolean;
  userData: UserDataState;
  formData: LoginFormState;
  setFormData: React.Dispatch<React.SetStateAction<LoginFormState>>;
  onSubmitLogin: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  onSubmitSignup: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  logoutHandler: () => Promise<void>;
  loginAsGuest: () => Promise<void>;
  updateScore: (score: number) => Promise<void>;
}

export type UseAuthContext = () => AuthContextProps;

interface QuizContextProps {
  quizNamesFromDB: any[];
  quizCategoryFromDB: string[];
  currentQuiz: CurrentQuizState;
  resetCurrentQuiz: () => void;
  getQuizQuestions: (quizId: string) => Promise<void>;
  postQuizAnswers: (quizId: string, answer: Array<number>) => Promise<void>;
}

export type UseQuizContext = () => QuizContextProps;

interface DarkModeProps {
  theme: string | null;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  toggleDarkMode: () => void;
}

export type UseDarkContext = () => DarkModeProps;
