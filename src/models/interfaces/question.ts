export interface Question {
  id: string;
  question: string;
  answer?: string;
  createdAt: string;
  isGeneratingAnswer?: boolean;
}
