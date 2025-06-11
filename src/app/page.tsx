import Navigation from "@/components/navigation";
import Image from "next/image";


export default function Home() {

  const breadcrumb = [
    {
      type: "text",
      text: "Main"
    },
  ];

  return (
    <Navigation breadcrumb={breadcrumb}>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
       
      </main>
      </Navigation>
  );
}
