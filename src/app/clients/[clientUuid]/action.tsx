"use server"

export async function AddClientNewMembers(formdata: FormData){
    // Получаем данные из формы
    const phone = formdata.get("phone");
    const mainMemberPhone = formdata.get("mainMemberPhone");
    const firstName = formdata.get("firstName");
    const secondName = formdata.get("secondName");
    const patronymic = formdata.get("patronymic");
    // console.log(phone, firstName, secondName, patronymic);

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
                patronymic,
                member: true,
                mainMemberPhone
            })
        })
}