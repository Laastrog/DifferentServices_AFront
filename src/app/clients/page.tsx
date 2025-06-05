import Link from "next/link"

export default async function PageClients(){
    // Адресс апи бека для создания нового клиента
    const result = await fetch ("http://localhost:7013/client")
    const data:[] = await result.json()
    return(
        <>
            <h1 className="text-3xl">List all clients here:</h1>
            {data.length == 0 ? "Клиентов нет" : null}
            {data.map((value:any)=> (
                <h5 className="" key={value.uuid}> <Link href={"/clients/"+ value.uuid}>{value.uuid}</Link></h5>
            ))}
        </>
    )
}