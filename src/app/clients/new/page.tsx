"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "./action";
import Navigation from "@/components/navigation";
import path from "path";
import { useActionState, useState } from "react";
import { unificationPhone } from "@/lib/unificationPhone";

// const handle = (e:any) =>{
//     e.preventDefault();
//     console.log(e.target.value);
// }
const initialState = {
    messages: [],
  }

export default function PageClientsNew() {
    const [state, formAction, peddinng] = useActionState(createClient, initialState)
    const [phone, setPhone] = useState<string>('+7')
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
            type: "text",
            text: "AddClient"
        }
      ];
        
      
        const handlePhoneChange = (value: string) =>{
            const number = unificationPhone(value)
            if(number) setPhone(number)
            return
      }
    return (
        <Navigation breadcrumb={breadcrumb}>
        <>
            <h1 className="text-2xl font-bold mx-auto m-6">Форма добавления клиента:</h1>
            <form action={formAction} className="flex flex-col gap-4 w-md mx-auto m-4">
                
                <div className="flex items-center gap-3">
                    <p className="text-lg font-bold inline">Мобильный телефон</p>
                    <Input id="phone" name="phone" 
                     onPaste={(e) => {e.preventDefault(); }} onChange={(e) =>  handlePhoneChange(e.target.value)} value={phone}  
                     /> 
                     
                </div>   
                <div className="flex items-center gap-14" >
                    <p className="text-lg font-bold inline">Фамилия</p>
                    <Input name="secondName" /> 
                     
                </div>
                <div className="flex items-center gap-22">
                    <p className="text-lg font-bold inline">Имя</p>
                    <Input name="firstName" /> 
                     
                </div>
                <div className="flex items-center gap-13">
                    <p className="text-lg font-bold inline">Отчество</p>
                    <Input name="patronymic" /> 
                     
                </div>
                {/* Короткая запись. Правая тру, тогда и левая тру */}
                {state && state.messages.map((str:string)=> (<div key={str} className="border-4"><p className="tex border-l-2 pl-6 italic bold text-red-500" >{str}</p></div>)
                ) }
                <Button type="submit" className="w-full" disabled={peddinng} >Добавить</Button>
                
                
                    {/* <div>
                        <div className="flex items-center gap-2">
                    <p className="text-lg font-bold inline">Фамилия</p>
                        </div>
                    <Input name="secondName" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                    <p className="text-lg font-bold inline">Имя</p>
                        </div>
                    <Input name="firstName" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                    <p className="text-lg font-bold inline">Отчество</p>
                        </div>
                    <Input name="patronymic" />
                    </div> */}

                    
                {/* <Input name="secondName" placeholder="Фамилия"/>
                <Input name="firstName" placeholder="Имя"/>
                <Input name="patronymic" placeholder="Отчество"/> */}
            </form>
        </>
        </Navigation>
    )

}
