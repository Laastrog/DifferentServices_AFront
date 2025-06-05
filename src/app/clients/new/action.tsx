"use server"

import { redirect } from "next/navigation";

export async function createClient(formdata: FormData){

    // Получаем данные из формы
    const phone = formdata.get("phone");
    const firstName = formdata.get("firstName");
    const secondName = formdata.get("secondName");
    const patronymic = formdata.get("patronymic");

    // Адресс апи бека для создания нового клиента
    const urlCreateClient = "http://localhost:7013/client"

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
            patronymic
        })
    })
    // Результат выполонения запроса
    // json -- объект передаваемый строкой

    const data = await result.json()

    console.log("data: ",data)
    redirect('/clients/'+ data.clientUuid)

   

    console.log("phone: ",phone, "firstName: ",firstName, "secondName: ",secondName, "patronymic: ",patronymic)

    


}
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");