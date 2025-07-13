import type { GetRoomQuestionsResponse } from "@/models/types/get-room-questions-response";
import { useQuery } from "@tanstack/react-query";

export function useRoomQuestions(roomId: string) {
  return useQuery({
    queryKey: ["get-questions", roomId],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`
      );

      return (await response.json()) as GetRoomQuestionsResponse;
    },
  });
}
