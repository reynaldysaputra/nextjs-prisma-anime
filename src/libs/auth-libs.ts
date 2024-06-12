import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export const authUserSession = async () => {
  const response = await getServerSession(authOptions);

  return response;
}