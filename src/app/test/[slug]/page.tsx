'use client'
import Script from "next/script";

export default function Home({params:{slug}}:{params:{slug:string}}) {
   
  return (
    <>
    <div id="ticketprix-embed"></div>
    <Script src={"https://www.ticketprix.com/api/script/embed/event"}
     onLoad={()=>{(window as any).ticketprixEmbed!.init({
      mountId: "ticketprix-embed",
      eventSlug: slug,
      frameHeight: "100%",
      merchantId: "5fbd3fbb24dfac00083558cd",
    });}} 
     />
    
    </>

  );
}

// {params:{slug}}:{params:{slug:string}}