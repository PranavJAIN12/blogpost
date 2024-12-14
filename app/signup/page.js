'use client'
import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { supabase } from '../client'
import Link from 'next/link'

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const handlesignup = async (e) => {
    e.preventDefault()
    console.log("btn clicked")
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: pass,
        options: {
          data: { full_name: name },
        },
      });
      if (error) {
        console.log(`Error: ${error.message}`);
      } else {
        console.log("Check your email for the verification link.");
        navigate("/login");
      }
    } catch (error) {
      console.log("Unexpected error occurred. Please try again later.");
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Signup to BlogVerse</CardTitle>
          <CardDescription>Create an account to join the blog.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="mail">Email</Label>
                <Input
                  id="mail"
                  type="email"
                  placeholder="Enter E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handlesignup}>Signup</Button>
        </CardFooter>
          <p className='text-sm text-center'>Already have an account <Link href={"/login"} className='text-blue-600'>Login</Link></p>
      </Card>
    </div>
  )
}

export default Signup
