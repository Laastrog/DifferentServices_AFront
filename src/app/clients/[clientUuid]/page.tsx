import Navigation from "@/components/navigation"
import AddClientNewMembers from "./components/add-client-new-member"


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
            text: `${data.mainMember.firstName} (${data.mainMember.phone})`
        }
      ];

    return(
        <Navigation breadcrumb={breadcrumb}>
        <>
            <h1 className="text-3xl">Просмотр всех членов семьи:</h1>
            <div className=""><AddClientNewMembers mainMemberPhone={data.mainMember.phone}/></div>
        </>
        <div>
            <h2 className="text-2xl mb-2r">Главный член семьи: </h2>
            <div className="flex gap-1 pl-4 flex-col"><h5 >Номер телефона: {data.mainMember.phone};</h5>
            <h5>Имя: {data.mainMember.firstName};</h5>
            <h5>Фамилия: {data.mainMember.secondName};</h5>
            <h5>Отчество: {data.mainMember.patronymic}.</h5></div>
            
        </div>

                <div>
                    <h5>{data.members.map((members:any) =>(
                        <div key={members.uuid}>
                            {/* <h2 className="text-2xl">Главный член семьи:</h2> */}
                            <h5>Uuid: {members.uuid};</h5>
                            <h5>Номер телефона: {members.phone};</h5>
                            <h5>Фамилия: {members.secondName};</h5>
                            <h5>Имя: {members.firstName};</h5>
                            <h5>Отчество: {members.patronymic}.</h5>
                        </div>
                    ))}
                    </h5>
                </div> 
            {/* <div><h5>{params.clientUuid}</h5></div> */}
            
        
        </Navigation>
    )
}