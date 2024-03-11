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
      // fetch("https://fakestoreapi.com/products?limit=5")
      //   .then(async (res) => {
      //     let data = await res.json();
      //     setData(data);
      //   })
      //   .then((json) => console.log(json));
      [
        {
          id: 1,
          title: "Soap oil-Sandal",
          price: 250,
          description:
            "Experience superior Cleaning with Arruviy Soap Oil 1Ltr.This versatile soap oil is perfect for cloths and surface cleaning providing sandal scent",
          category: "men's clothing",
          image: "/assets/pngs/soap_oil.png",
          rating: { rate: 3.9, count: 120 },
        },
        {
          id: 2,
          title: "Floor Cleaner",
          price: 120,
          description:
            "Effective on bacteria Remove 100 types of stains & 100 Germ stains Suitable for effective cleaning",
          category: "men's clothing",
          image: "/assets/pngs/floor.png",
          rating: { rate: 3.9, count: 120 },
        },
        {
          id: 3,
          title: "Toilet cleaner",
          price: 90,
          description:
            "Anti Bacterial Easy To Clean Keep Clean & Fresh Remove Stains Powerful Cleaning Agents Remove Tough Stains Kills Germs",
          category: "men's clothing",
          image: "/assets/pngs/toilet.png",
          rating: { rate: 3.9, count: 120 },
        },
        {
          id: 4,
          title: "Glass Cleaner",
          price: 109.95,
          description:
            "Arruviy Glass Cleaner contains the power of shine boosters.This glass cleaner removes dust,dirt,and stains to boost the shine of products that have glass surfaces",
          category: "men's clothing",
          image: "/assets/pngs/glass.png",
          rating: { rate: 3.9, count: 120 },
        },
        {
          id: 5,
          title: "Cleaning Powder",
          price: 109.95,
          description:
            "Experience superior Cleaning with Arruviy Soap Oil 1Ltr.This versatile soap oil is perfect for cloths and surface cleaning providing sandal scent",
          category: "men's clothing",
          image: "/assets/pngs/soap_oil.png",
          rating: { rate: 3.9, count: 120 },
        },
      ];
    }
  }, [user]);
  return (
    <div className="">
      <div className="sticky top-0 shadow bg-white">
        <div className="text-2xl font-bold container pt-8   py-4 px-4">
          Products
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap:6 lg:gap-10">
        {data && data.length > 0 ? (
          data.map((ele, index) => {
            return (
              <div key={index} className="">
                <Product product={ele} />
              </div>
            );
          })
        ) : (
          <>Loading</>
        )}
      </div>
    </div>
  );
}

export default Page;
