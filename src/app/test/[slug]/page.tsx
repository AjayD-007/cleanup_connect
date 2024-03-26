'use client'
import Script from "next/script";

export default function Home({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <>
      <div id="ticketprix-embed"></div>
      <div id="ticketprix-url-embed"></div>
      <Script
        src={"https://www.ticketprix.com/api/script/embed/event"}
        onLoad={() => {
          (window as any).initTicketprixBooking({ eventSlug: slug,primaryColor:"green",secondaryColor:"yellow",buttonText:"Buy ticks",buttonTextColor:"blue" });
        }}
      />
    </>
  );
}
