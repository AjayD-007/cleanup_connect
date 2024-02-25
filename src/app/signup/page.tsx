'use client'
import React, { useState }  from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleForm = async (event:any) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            toast.error('Invalid credentials');
            return console.log(error)
        }
        toast.success('Sign up successful');
        // else successful
        console.log(result)
        return router.push("/admin")
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="flex items-center justify-center">
                    <img src="/assets/pngs/logo.png" alt="" className="h-[80px] w-[80px]" />
                </div>
            <h1 className="text-3xl font-semibold mb-6">Sign up</h1>
            <form onSubmit={handleForm}>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1">Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@mail.com"
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-1">Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">Sign up</button>
            </form>
            <h1 className="text-2xl font-semibold my-6">Already a user?</h1>
            <Link href={"/signin"}  >
            <button className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition-colors">Sign in</button>

            </Link>

        </div>
        <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

    </div>
    );
}

export default Page;