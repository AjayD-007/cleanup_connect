'use client'
import Script from "next/script";
import { useEffect, useState } from "react";

export default function TestPage(){
    const [ticketprixEmbed, setTicketprixEmbed] = useState<any>(null);
  function toggleDrawer() {
    const drawerContainer = document.querySelector(".drawer-container");
    drawerContainer!.classList.toggle("open-drawer");
    ticketprixEmbed!.init({
      mountId: "ticketprix-embed",
      eventSlug: "iplfandomcarnivalfanparks",
      frameHeight: "100%",
      merchantId: "5fbd3fbb24dfac00083558cd",
    });
  }
  useEffect(() => {
    let ticketprixEmbed:any; // Define ticketprixEmbed here
    // Load the script and assign ticketprixEmbed
    const script = document.createElement("script");
    script.src = "https://www.ticketprix.com/api/script/embed/event";
    script.async = true;
    script.onload = () => {
      setTicketprixEmbed((window as any).ticketprixEmbed); // Assign ticketprixEmbed
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []); 
  return (
    <>
    <Script src={"https://www.ticketprix.com/api/script/embed/event"} />
    <div className="drawer-container">
    <div className="drawer">
      
      <div id="ticketprix-embed"></div>
    </div>
  </div>
  <div className="drawer-toggle" onClick={toggleDrawer}>☰</div>
    </>

  );
}