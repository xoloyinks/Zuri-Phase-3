import CredentialsProvider from "next-auth/providers/credentials"
export const options = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Email: ",
                    type: "email",
                    placeholder: "user@exaple.com",
                },
                password: {
                    label: "Password: ",
                    type: "password",
                    placeholder: "*******",
                },
            },
            async authorize(credentials){
                const user = {id: "42", name:"user@example.com", password: "1Password"};

                if(credentials?.username === user.name && credentials?.password === user.password){
                    return user
                }else{
                    return null
                }
            }
        })
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if(user){
                token.id = user.id;
            }
            return token;
        },
        session: ({ session, token }) => {
            if(token){
                session.id = token;
            }

            return session;
        },
    }, 
    secret: "test",
    jwt: {
        secret: "text",
        encryption: true,
    }
}