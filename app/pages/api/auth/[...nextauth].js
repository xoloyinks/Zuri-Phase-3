import React from 'react'
import NextAuth, {NextAuthOptions} from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials';
export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {label: "Email", type:"email", placeholder: "user@example.com"},
                password: {label: "Password", type:"Password"},
            },
            authorize: (credentials) => {
                if(credentials.username === "user@example.com" && credentials.password === "1Password"){
                    return {
                        id: 2,
                        name: "john",
                        email: "ajkdf",
                    };
                }
                return null;
            }
        })
    ]
})


