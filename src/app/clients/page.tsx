import Navigation from "@/components/navigation"
import Link from "next/link"
import AddClientNewMember from "./[clientUuid]/components/add-client-new-member";


export default async function PageClients(){

        const breadcrumb = [
            {
              type: "link",
              text: "Main",
              path: "/"
            },
            {
                type: "text",
                text: "Clients",
            }
          ];

    // Адресс апи бека для создания нового клиента
    const result = await fetch ("http://localhost:7013/client")
    const data:[] = await result.json()
    
    return(
        <Navigation breadcrumb={breadcrumb}>
        <div className=''>
            <h1 className="text-3xl">Список всех клиентов:</h1>
            {data.length == 0 ? "⨯ no current client engagements..." : null}
            {data.map((value:any)=> (
                <h5 key={value.uuid}> 
                    <Link href={"/clients/"+ value.uuid}>
                    {value.uuid} 
                    </Link>
                </h5>
                
            ))}
        </div>
        </Navigation>
    )
}