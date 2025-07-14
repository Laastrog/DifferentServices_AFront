import { AddClientNewMembers } from "@/app/clients/[clientUuid]/action"
import { inflate } from "zlib"


interface ClientAppProps{
    data:{
        mainMember:{
            phone:string,
            firstName:string,
            secondName:string,
            patronymic:string
        }
        members: MemberProps[]
    }
}
interface MemberProps{
    phone:string,
    firstName:string,
    secondName:string,
    patronymic:string
}

export default function ClientApp({data}:ClientAppProps){
    return (
        <>
                <>
                    <h1 className="flex flex-col text-3xl ">Просмотр всех членов семьи:</h1>
                    <div>
                        {/* <AddClientNewMembers mainMemberPhone={data.mainMember.phone}/> */}
                    </div>
                </>
                <div>
                    <h2 className="text-2xl mb-2r">Главный член семьи: </h2>
                    <div className="flex gap-1 pl-4 flex-col">
                    <h5>Фамилия: {data.mainMember.secondName};</h5>
                    <h5>Имя: {data.mainMember.firstName};</h5>
                    <h5>Отчество: {data.mainMember.patronymic};</h5>
                    <h5 >Номер телефона: {data.mainMember.phone}.</h5></div>
                </div>
                    <hr/>
                        <div className="">
                            <h5>{data.members.map((members:any) =>(
                                <div className="gap-2 " key={members.uuid}>
                                    {/* <h5>Uuid: {members.uuid};</h5> */}
                                    <h5>Имя: {members.firstName};</h5>
                                    <h5>Фамилия: {members.secondName};</h5>
                                    <h5>Отчество: {members.patronymic};</h5>
                                    <h5>Номер телефона: {members.phone}.</h5>
                                    <br/>
                                </div>
                            ))}
                            </h5>
                        </div> 
                        </>
    )
}