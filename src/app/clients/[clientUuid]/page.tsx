import Navigation from "@/components/navigation"
import AddClientNewMembers from "./components/add-client-new-member"
import ClientApp from "@/components/client-app"


export default async function ClientIdPage({params}:{params:{clientUuid:string, }}){


    // Фигнюшка ТайпСкрипта. Вытягивает параметры и в фигурных скобочках поможт найти clientUuid
    const {clientUuid} = await params
    const urlGetClient = "http://localhost:7013/client/" + clientUuid
    const result = await fetch(urlGetClient)
    const data = await result.json()
    // console.log("UUID__________________", await result.json())
    
    const breadcrumb = [
        {
          type: "link",
          text: "Main",
          path: "/"
        },
        {
            type: "link",
            text: "Clients",
            path: "/clients"
        }, 
        {
            type:"text",
            text: `${data.mainMember.firstName}: ${data.mainMember.phone}`
        }
      ];

    return(
        <Navigation breadcrumb={breadcrumb}>
       <ClientApp data={data}/>
            {/* <div><h5>{params.clientUuid}</h5></div> */}
            
        
        </Navigation>
    )
}