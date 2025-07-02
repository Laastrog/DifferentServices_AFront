"use server"

import { redirect } from "next/navigation";

export async function createClient(state: any, formdata: FormData){

    // Получаем данные из формы
    const phone = formdata.get("phone");
    const firstName = formdata.get("firstName");
    const secondName = formdata.get("secondName");
    const patronymic = formdata.get("patronymic");

    let clientUuid = null

    // Адресс апи бека для создания нового клиента
    const urlCreateClient = "http://localhost:7013/client"

        try {
            // Посылаем ответ на создание клиента из данных форм с frontend 
            const result = await fetch(urlCreateClient, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    phone,
                    firstName,
                    secondName,
                    patronymic,
                    member: false
                })
            })
            // Результат выполонения запроса
            // json -- объект передаваемый строкой

            const data = await result.json()

            console.log("dataCreateClient: ",data)
            if(data.error){
                return{
                    messages: data.message
                }

            }
            clientUuid = data.clientUuid
        } catch (error) {
            console.log("state", state)
            console.log("Ошибка на создание клиента", error)
            return {
                messages: ["Перегрузка сервера"]
            }
        }
        // if(clientUuid) 
            redirect('/clients/'+ clientUuid)
        // return {
        //     message:"АААААААААААААААААААААААА"
        // }

    // console.log("phone: ",phone, "firstName: ",firstName, "secondName: ",secondName, "patronymic: ",patronymic)
        // return{
        //     message: "" 
        // }//From TS
}

// console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");