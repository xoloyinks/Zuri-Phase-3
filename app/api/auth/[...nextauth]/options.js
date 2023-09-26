import CredentialsProvider from "next-auth/providers/credentials"

const email = process.env.USER;
const pwd = process.env.PASS;

export const options = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "UserName: ",
                    type: "email",
                    placeholder: "user@exaple.com",
                },
                password: {
                    label: "Password: ",
                    type: "password",
                    placeholder: "",
                },
            },
            async authorize(credentials){
                const user = {
                    id: "42", 
                    name: email, 
                    password: pwd
                };

                if(credentials?.username === user.name && credentials?.password === user.password){
                    return user
                }else{
                    return null
                }
            }
        })
    ], 
    pages: {
        signIn: '/auth/signin',
    }
}