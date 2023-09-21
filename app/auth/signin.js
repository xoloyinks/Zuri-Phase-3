'use client'
import React from 'react'
import { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
  return (
    <>
        <section>
            <form action="">
                <input type="text" placeholder='Email' value={email} onChange={
                    (e) => setEmail(e.target.value)
                } />
                <input type="password" placeholder='*******' onChange={(e) => 
                    setPassword(e.target.value)
                } />
                <button className='px-4 py-3 rounded-full bg-main' >Log in</button>
            </form>
        </section>
    </>
  )
}
