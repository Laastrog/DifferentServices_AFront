"use client"
import { AddClientNewMembers } from "@/app/clients/[clientUuid]/action"
import AddClientNewMember from "@/app/clients/[clientUuid]/components/add-client-new-member"
import { useActionState, useEffect, useState } from "react"
import { inflate } from "zlib"


export interface ClientAppProps{
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
export interface MemberProps{
    phone:string,
    firstName:string,
    secondName:string,
    patronymic:string
}

export const initialState  = {
    messages: [],
    phone: '+7',
    firstName: '',
    secondName: '',
    patronymic: ''
  }

export default function ClientApp({data}:ClientAppProps){
    const [members, setMembers] = useState<MemberProps[]>(data.members)
    const [open, SetOpen] = useState<boolean>(false)
    const [state, formAction, pending] = useActionState(AddClientNewMembers, initialState)
    const [phone, setPhone] = useState<string>('+7')

    useEffect(()=>{
        function handleState(){
            console.log("HANDLE STATE",state)
            // if(state.member){
            //     setMembers([ state.member, ...members])
            // }
        }
        handleState()
    },[state])
    
    return (
        <>
                <>
                    <h1 className="flex flex-col text-3xl ">Просмотр всех членов семьи:</h1>
                    <div>
                        <AddClientNewMember mainMemberPhone={data.mainMember.phone} open={open} SetOpen={SetOpen} state={state} formAction={formAction} pending={pending} phone={phone}setPhone={setPhone}/>
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