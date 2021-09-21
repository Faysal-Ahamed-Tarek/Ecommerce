import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({

  providers: [
    GithubProvider({
      clientId: "05d4e339ca06e8af6bd5",
      clientSecret: "555fc9cbd345c0d7308f17adea5283a5ee1e25c6",
    }),
  ],
  pages: {
    signIn: "/login"
  },
})