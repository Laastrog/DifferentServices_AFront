"use server"

import { MemberProps } from "@/components/client-app";
import { redirect } from "next/navigation";

export interface PrevStateProps{
    messages: string[]
    phone?: string
    firstName?: string
    secondName?: string
    patronymic?: string
    clientUuid?: string
}

export async function AddClientNewMembers(state: PrevStateProps,formdata: FormData){
    // Получаем данные из формы
    const mainMemberPhone = formdata.get("mainMemberPhone");
    let phone = formdata.get("phone") ? formdata.get("phone") : mainMemberPhone
    const firstName = formdata.get("firstName") as string;
    const secondName = formdata.get("secondName") as string;
    const patronymic = formdata.get("patronymic") as string;

    let clientUuid = null
    let member = null
    // console.log(phone, firstName, secondName, patronymic);
    try {
        // Адресс апи бека для создания нового клиента
        const urlCreateClient = "http://localhost:7013/client"

        // Посылаем ответ на создание клиента из данных форм с frontend 
        const result = await fetch(urlCreateClient, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            // В тело кидаем преобразованные данные объекта в строку
            body: JSON.stringify({
                phone,
                firstName,
                secondName,
                patronymic,
                member: true,
                mainMemberPhone
            })
        })
        
        const data = await result.json()
        if(data.error){
            return{
                messages: data.message,
                firstName,
                secondName,
                patronymic,
            }
            
        }
        
        clientUuid = data.clientUuid
    } catch (error) {
        console.log("state", state)
        console.log("Ошибка на создание мембера", error)
        return {
            messages: ["Перегрузка сервера"],
            firstName,
            secondName,
            patronymic


        }
    }
    if(clientUuid) redirect('/clients/'+ clientUuid)
    return{
            messages: ["Изменения добавлены;"],
            firstName,
            secondName,
            patronymic
        }
}
