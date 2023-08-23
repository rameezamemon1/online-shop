import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "231915789366-n5kb6srr1fllc15m0lapv4kf3n5s4u4f.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  session: {
    strategy: "jwt",
  },
};
export default NextAuth(authOptions);
