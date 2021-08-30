import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        // ...add more providers here
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    pages: {
        signIn: "/signin",
    },
    // A database is optional, but required to persist accounts in a database
    //database: process.env.DATABASE_URL,
});