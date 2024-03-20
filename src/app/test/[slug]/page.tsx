'use client'
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function Home({params:{slug}}:{params:{slug:string}}) {
    const [url, setUrl] = useState('');

    useEffect(() => {
      if (typeof window !== 'undefined') { // Check for client-side environment
        setUrl(window.location.href);
      }
    }, []);
  return (
    <>
    <div id="ticketprix-embed"></div>
    {url !=""&&<Script src={"https://www.ticketprix.com/api/script/embed/event"}
     onLoad={()=>{(window as any).ticketprixEmbed!.init({
      mountId: "ticketprix-embed",
      eventSlug: slug,
      frameHeight: "100%",
      url:url,
      merchantId: "5fbd3fbb24dfac00083558cd",
    });}} 
     />}
    
    </>

  );
}

// {params:{slug}}:{params:{slug:string}}