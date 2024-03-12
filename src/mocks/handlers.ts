import { http, HttpResponse } from "msw";
import { users } from "./data";

export const handlers = [
  http.get("/api/user/:id", ({ params }) => {
    const { id } = params;
    return HttpResponse.json(users?.find((user) => user?.id === Number(id)));
  }),
  http.get("/api/users", () => {
    return HttpResponse.json(users);
  }),
  http.put("api/edit-user", async ({ request }) => {
    const data = await request.json();
    console.log("data", data);
    return Response.json({ success: true });
  }),
];
