"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation' 
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
import { supabase } from '../client' // Import your Supabase client

const Login = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false) // Define loading state
  const router = useRouter() 

  const handleLogin = async () => {
    console.log("Login button clicked");
    setLoading(true); // Set loading state to true
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: pass,
      });
  
      if (error) {
        console.error("Login error:", error.message);
        alert(`Error: ${error.message}`);
      } else {
        alert("Login successful!");
        console.log('User data:', data);
  
        // Fetch updated session
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          console.log("Session updated:", session);
          // setLoggedIn(true); 
          setUsername(session.user.email); 
        }
  
        // Redirect to the homepage
        router.push('/');
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("Unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };
  

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
          <Button onClick={handleLogin} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </CardFooter>
        <p className='text-sm text-center'>
          Dont have an account?{" "}
          <Link href={"/signup"} className='text-blue-600'>Sign Up</Link>
        </p>
      </Card>
    </div>
  )
}

export default Login
