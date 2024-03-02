'use client'
import React, { useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image"
import Product from "@/component/product";
function Page() {
  const user = useAuthContext();
  const router = useRouter();
  const [data, setData] = useState<Array<any>>();
  React.useEffect(() => {
    if (user == null || (user as any).user == null) {
      router.push("/signup");
      console.log(user, (user as any).user == null);
    } else {
      fetch("https://fakestoreapi.com/products?limit=5")
        .then(async (res) => {
          let data = await res.json();
          setData(data);
        })
        .then((json) => console.log(json));
    }
  }, [user]);
console.log(data,"data");

    return (  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap:6 lg:gap-10">
    {
      data && data.length>0 ?
      data.map((ele,index)=>{
        return (
          <div key={index} className="">
            <Product product={ele} />
          </div>
        )
      })
      :<>Loading</>
    }
  </div>);
}

export default Page;