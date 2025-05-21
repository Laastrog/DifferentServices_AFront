"use server"

export async function createClient(formdata: FormData){

    const phone = formdata.get("phone");
    const firstName = formdata.get("firstName");
    const secondName = formdata.get("secondName");
    const patronymic = formdata.get("patronymic");

    console.log("phone: ",phone, "firstName: ",firstName, "secondName: ",secondName, "patronymic: ",patronymic)


}
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");