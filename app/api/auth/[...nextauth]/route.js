import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;
        console.log("credentials", credentials)

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });
          console.log(user)

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: "secret",
  pages: {
    signIn: "/",
  },
  callbacks: {
    session: async (session) => {
      console.log(JSON.stringify(session) +"ffff---------------------------", session.session.user.email, "---")
      // if (!session) return;
      //
      // await connectMongoDB();
      //
      // const userData = await User.findOne({
      //   email: session.user.email,
      // });
      // console.log(userData)
      await connectMongoDB();
     let userrr =
         await User.findOne({ email:session.session.user.email}).then(user => user._id);

      let email =
          await User.findOne({ email:session.session.user.email}).then(user => user.email);
     console.log("user" +" !!!!xx!!!!!!!!!!!!" +session.session.user.email)
      return {
        session: {
          user: {
            id: userrr._id,
            email: email
          }
        }
      };
    },
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };