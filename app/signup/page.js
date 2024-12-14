'use client'
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
import { supabase } from '../client'
import Link from 'next/link'
import { Eye, EyeOff, AlertCircle } from 'lucide-react'

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    general: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      password: '',
      general: ''
    }

    // Name validation
    if (!name.trim()) {
      newErrors.name = 'Name is required'
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format'
    }

    // Password validation
    if (!password.trim()) {
      newErrors.password = 'Password is required'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 8 characters'
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = 'Password must contain at least one uppercase letter'
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = 'Password must contain at least one number'
    }

    setErrors(newErrors)
    return Object.values(newErrors).every(error => error === '')
  }

  const handlesignup = async (e) => {
    e.preventDefault()
    
    // Reset previous errors
    setErrors({
      name: '',
      email: '',
      password: '',
      general: ''
    })

    // Validate form
    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password: password.trim(),
        options: {
          data: { full_name: name.trim() },
        },
      });

      if (error) {
        setErrors(prev => ({
          ...prev,
          general: error.message || 'Signup failed. Please try again.'
        }));
        setIsLoading(false)
        return
      }

      // Success message
      console.log("Check your email for the verification link.");
      alert("Check your email for the verification link.")
      router.push("/login");
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        general: 'Unexpected error occurred. Please try again later.'
      }));
      setIsLoading(false)
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen  from-blue-50 to-blue-100 p-4'>
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold ">
            Create Your Account
          </CardTitle>
          <CardDescription className="text-gray-600">
            Join BlogVerse now
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlesignup} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-gray-700">Name</Label>
              <div className="relative">
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && (
                  <div className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-2" />
                    {errors.name}
                  </div>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="mail" className="text-gray-700">Email</Label>
              <div className="relative">
                <Input
                  id="mail"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && (
                  <div className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-2" />
                    {errors.email}
                  </div>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`mt-1 ${errors.password ? 'border-red-500' : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                {errors.password && (
                  <div className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-2" />
                    {errors.password}
                  </div>
                )}
              </div>
            </div>

            {errors.general && (
              <div className="bg-red-50 border border-red-300 text-red-800 p-3 rounded-lg flex items-center">
                <AlertCircle size={20} className="mr-3 text-red-500" />
                {errors.general}
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full  hover:bg-blue-700 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? 'Signing Up...' : 'Create Account'}
            </Button>
          </form>
        </CardContent>
        
        <div className="text-center pb-6">
          <p className='text-sm text-gray-600'>
            Already have an account? {' '}
            <Link 
              href={"/login"} 
              className='text-blue-600 hover:underline font-semibold'
            >
              Log In
            </Link>
          </p>
        </div>
      </Card>
    </div>
  )
}

export default Signup