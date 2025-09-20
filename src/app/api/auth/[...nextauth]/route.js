import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "./loginUser";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      async authorize(credentials, req) {
        const user = await loginUser(credentials);
console.log(credentials)
        console.log(user);
       
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
