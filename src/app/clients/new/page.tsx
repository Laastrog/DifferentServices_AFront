"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "./action";
import Navigation from "@/components/navigation";
import path from "path";

// const handle = (e:any) =>{
//     e.preventDefault();
//     console.log(e.target.value);
// }

export default function PageClientsNew() {
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
            type: "text",
            text: "AddClient"
        }
      ];
    return (
        <Navigation>
        <>
            <h1 className="text-2xl font-bold mx-auto m-6">Форма добавления клиента:</h1>
            <form action={createClient} className="flex flex-col gap-4 w-md mx-auto m-4">
                
                <div className="flex items-center gap-2">
                    <p className="text-lg font-bold inline">Мобильный телефон</p>
                    <Input name="phone" /> 
                     
                </div>
                <div className="flex items-center gap-13" >
                    <p className="text-lg font-bold inline">Фамилия</p>
                    <Input name="secondName" /> 
                     
                </div>
                <div className="flex items-center gap-20">
                    <p className="text-lg font-bold inline">Имя</p>
                    <Input name="firstName" /> 
                     
                </div>
                <div className="flex items-center gap-12">
                    <p className="text-lg font-bold inline">Отчество</p>
                    <Input name="patronymic" /> 
                     
                </div>
                <Button type="submit" className="w-full">Добавить</Button>
                
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
