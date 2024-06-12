import GitHubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }) 
  ],
  secret: process.env.NEXTAUTH_SECRET
};