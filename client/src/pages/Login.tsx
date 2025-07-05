
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import AnimationWrapper from "@/components/AnimationWrapper";
import MakaoHeader from "@/components/MakaoHeader";
// Removed import of MakaoFooter

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-red-50">
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <AnimationWrapper>
            <MakaoHeader logoIcon={<Home className="h-8 w-8 text-green-700" />} title="Makao" />
          </AnimationWrapper>
          <AnimationWrapper delay={200}>
            <Card className="shadow-xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-black">Login to Makao</CardTitle>
                <p className="text-gray-600">Sign in to your Makao account</p>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-black mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="w-full pr-10"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <label htmlFor="remember" className="text-sm text-gray-600">
                        Remember me
                      </label>
                    </div>
                    <Link to="/forgot-password" className="text-sm text-green-700 hover:text-black">
                      Forgot password?
                    </Link>
                  </div>
                  <Button type="submit" className="w-full bg-red-700 hover:bg-green-700 text-white">
                    Sign In
                  </Button>
                </form>
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or sign in with</span>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full border-green-700 text-green-700">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                        {/* Google icon */}
                        <path fill="currentColor" d="M22.56 12.25c0-.78..." />
                      </svg>
                      Google
                    </Button>
                    <Button variant="outline" className="w-full border-green-700 text-green-700">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        {/* Facebook icon */}
                        <path d="M24 12.073c0-6.627..." />
                      </svg>
                      Facebook
                    </Button>
                  </div>
                </div>
                <p className="mt-6 text-center text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-green-700 hover:text-black font-medium">
                    Sign up here
                  </Link>
                </p>
              </CardContent>
            </Card>
          </AnimationWrapper>
        </div>
      </main>
      {/* Removed MakaoFooter */}
    </div>
  );
};

export default Login;
