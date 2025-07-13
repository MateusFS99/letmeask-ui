import { useRoomQuestions } from "@/services/use-room-questions";
import { QuestionItem } from "./question-item";
import type { Question } from "@/models/interfaces/question";

interface QuestionListProps {
  roomId: string;
}

export function QuestionList(props: QuestionListProps) {
  const { data } = useRoomQuestions(props.roomId);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl text-foreground">
          Perguntas & Respostas
        </h2>
      </div>

      {data?.map((question: Question) => {
        return <QuestionItem key={question.id} question={question} />;
      })}
    </div>
  );
}
