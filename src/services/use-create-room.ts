import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateRoomRequest } from "../models/types/create-room-request";
import type { CreateRoomResponse } from "../models/types/create-room-response";

export function useCreateRoom() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateRoomRequest) => {
      const response = await fetch("http://localhost:3333/rooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return (await response.json()) as CreateRoomResponse;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-rooms"] });
    },
  });
}
