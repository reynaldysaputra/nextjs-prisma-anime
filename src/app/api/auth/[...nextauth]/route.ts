import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: "8d531153566c9ade1878",
      clientSecret: "a665d20db42c9d836ebb4820420e59c4731d8986",
    }) 
  ],
  secret: "11750131"
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };