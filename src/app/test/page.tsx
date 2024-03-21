'use client'
import Script from "next/script";

export default function Home() {
   
  return (
    <>
    <div id="ticketprix-embed"></div>
    <div id="login-embed"></div>
    {/* <Script src={"http://192.168.123.22:3000/api/script/embed/event"}
     onLoad={()=>{(window as any).ticketprixEmbed!.init({
      mountId: "ticketprix-embed",
      eventSlug: "kkk",
      frameHeight: "100%",
    });}} 
     />
     <Script src={"http://192.168.123.22:3000/api/script/embed/login"}
     onLoad={()=>{(window as any).TicketprixLoginEmbed!.init({
      mountId: "login-embed",
      
    });}} 
     /> */}
     <div id="ticketprix-user-embed"></div>
      <Script
        src={"https://www.ticketprix.com/api/script/embed/login"}
        onLoad={() => {
          (window as any).initTicketprixLogin();
        }}
      />
    </>

  );
}
