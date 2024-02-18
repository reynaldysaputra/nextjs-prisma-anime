import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const authUserSession = async () => {
  const response = await getServerSession(authOptions);

  return response;
}