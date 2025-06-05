export default async function ClientIdPage({params}:{params:{clientUuid:string, }}){
    // Фигнюшка ТайпСкрипта. Вытягивает параметры и в фигурных скобочках поможт найти clientUuid
    const {clientUuid} = await params
    return(
        <>
            <h2>Info to client:</h2>
            <div><h5>{params.clientUuid}</h5></div>
            
        </>
    )
}