"use client";
import React, { useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
      fetch("https://fakestoreapi.com/products/10")
        .then(async (res) => {
          let data = await res.json();
          setData(data);
        })
        .then((json) => console.log(json));
    }
  }, [user]);
console.log(data,"data");

  return (
    <div className="">
      {
        data && data.length>0 ?
        data.map((ele)=>{
          return (
            <Product product={ele} />
          )
        })
        :<>Loading</>
      }
    </div>
  );
}

export default Page;
