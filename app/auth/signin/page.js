"use client"

import React from 'react'
import { useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { getProviders, signIn } from 'next-auth/react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function SignIn() {
    const searchParams = useSearchParams()
    const errorParam = searchParams.get('error') 
    const userName = useRef("");
    const password = useRef("");

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            username: userName.current,
            password: password.current,
            redirect: true,
            callbackUrl: "/",
        })
    }

    console.log(userName.current)
    
  return (
    <>
        <section className='flex flex-col items-center justify-center w-screen h-screen'>
            
            <div className='w-full h-full flex flex-col items-center justify-center lg:w-[25%] lg:h-[70%] lg:rounded-xl px-8'>
            { errorParam && 
                <div className="error text-[12px] my-3 bg-red-600 w- text-white p-[1rem] rounded-md">
                    <p>There was a problem signing you in, please try again with the right credentials.</p>
                </div>
            }
                <div className='w-full'>
                    <h1 className='my-2 text-3xl font-bold text-center'>Sign in</h1>
                    <form action="">
                        <label htmlFor="username" className='lg:text-[10px] text-[11px] font-bold'>Username</label><br />
                        <Input onChange={(e) => (userName.current = e.target.value)} type="email" name="username" id="username" placeholder='user@example.com'  />
                        <br />
                        <label htmlFor="password" className='lg:text-[10px] text-[11px] font-bold'>Password</label><br />
                        <Input onChange={(e) => (password.current = e.target.value)} type="password" name="password" id="password" placeholder=''  />
                        <br />
                        <Button onClick={onSubmit} className="w-full mx-auto" >
                            Sign in
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}
