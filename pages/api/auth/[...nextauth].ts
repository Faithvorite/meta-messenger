import nextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"

export const authOptions = {
    providers:[
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_SECRET as string,
        }),


    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {

        signIn: '/auth/signin',
    }
}
export default nextAuth(authOptions)