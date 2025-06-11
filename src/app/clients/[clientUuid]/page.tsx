import Navigation from "@/components/navigation"


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
            type: "text",
            text: "Clients",
            path: "/clients"
        }, 
        {
            type:"text",
            text: `${data.members[0].firstName} ${data.members[0].phone}`
        }
      ];

    return(
        <Navigation breadcrumb={breadcrumb}>
        <>
            <h2>Info to client:</h2>
                <div>
                    <h5>{data.members.map((members:any) =>(
                        <div key={members.uuid}>
                            <h5>Uuid: {members.uuid}</h5>
                            <h5>Номер телефона: {members.phone}</h5>
                            <h5>Фамилия: {members.secondName}</h5>
                            <h5>Имя: {members.firstName}</h5>
                            <h5>Отчество: {members.patronymic}</h5>
                        </div>
                    ))}
                    </h5>
                </div> 
            {/* <div><h5>{params.clientUuid}</h5></div> */}
            
        </>
        </Navigation>
    )
}