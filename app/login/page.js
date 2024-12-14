"use client"
import React, {useState} from 'react'
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
import Link from 'next/link'

const Login = () => {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin=async()=>{
    console.log("btn")
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      console.log("User logged in:", user)
    } catch (error) {
      console.error("Error logging in:", error.message)
    }
  }
  
  return (
    <div className='flex items-center justify-center min-h-screen'>
        
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login to BlogVerse</CardTitle>
          <CardDescription>Login to the blog in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="mail">Email</Label>
                <Input id="mail" type="mail" placeholder="Enter E-mail"  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter password" value={password} onChange={(e)=> setPassword(e.target.value)} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handleLogin}>Login</Button>
        </CardFooter>
        <p className='text-sm text-center'>Already have an account <Link href={"/signup"} className='text-blue-600'>SignUp</Link></p>
      </Card>
    </div>
  )
}

export default Login
