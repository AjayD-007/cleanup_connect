'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image"
function Page() {
    const user = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/");
        console.log(user);
        
    }, [user])

    return ( <main className="h-screen w-screen bg-white flex justify-center items-center">
    <Image
      className=""
      src="/assets/jpg/comingsoon.jpg"
      alt="coming soon"
      width={500}
      height={335}
      priority
    />
</main>);
}

export default Page;