import NextAuth from "next-auth"
import {urlPrefix} from '../../../utils/constant'


export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        {
            id: "SCR-bk",
            name: "SCR-bk",
            clientId:'SCR-bk',
            type: "oauth",
            wellKnown: "http://159.75.212.177:83/.well-known/openid-configuration",
            authorization: { params: { scope: "openid profile" } },
            idToken: true,
            checks: ["pkce", "state"],
            profile(profile) {
              return {
                id: profile.sub,
                name: profile.name,
                email: profile.email,
                image: profile.picture,
              }
            },
          }
    ],

    callbacks: {
      async jwt({ token }) {
        token.userRole = "admin"
        return token
      },
    },
    debug:true,
    session: { strategy: "jwt" },
    jwt: {
      async encode({ secret, token }) {
        return jwt.sign(token, secret)
      },
      async decode({ secret, token }) {
        return jwt.verify(token, secret)
      },
    },
  }
  

  export default NextAuth(authOptions);