"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AddClientNewMembers } from "../action"
import { useState } from "react"
import { redirect } from "next/dist/server/api-utils"
import { unificationPhone } from "@/lib/unificationPhone"

export default function AddClientNewMember({mainMemberPhone}:{mainMemberPhone:string}){
  const [phone, setPhone] = useState<string>('+7')
  const [isSetMainMemberPhone, setIsSetMainMemberPhone] = useState<boolean>(false)

  const handlePhoneChange = (value: string) =>{
              const number = unificationPhone(value)
              if(number) setPhone(number)

  }

  const setMainMemberPhone = () => {
    setPhone(mainMemberPhone)
    setIsSetMainMemberPhone(true)
  }
   function clearPhoneInput() {
     setPhone('+7')
     setIsSetMainMemberPhone(false)
  }
    return(
            <Dialog>
              <DialogTrigger asChild>
                  <Button variant="outline">Add Member</Button>
                </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
              <form className="flex flex-col gap-6" action={AddClientNewMembers}>
                <input type="hidden" name="mainMemberPhone" value={mainMemberPhone} />
                  <DialogHeader>
                    <DialogTitle>Добавление участника</DialogTitle>
                    <DialogDescription className="bold">
                    Добавьте нового участника в клиентскую базу;
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label className="gap-1" htmlFor="phone">Номер телефона: <Button onClick={setMainMemberPhone} type="button" variant="link" className=" text-black italic mw ml-auto ">(Вставить телефон родителя)</Button></Label>
                      <Input id="phone" 
                      
                      onPaste={(e) => {e.preventDefault(); }}
                       name="phone" onChange={(e) =>  handlePhoneChange(e.target.value)} value={phone}  
                      //  disabled={isSetMainMemberPhone}  
                       />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="secondName">Фамилия:</Label>
                      <Input id="secondName" name="secondName" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="firstName">Имя:</Label>
                      <Input id="firstName" name="firstName" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="patronymic">Отчество:</Label>
                      <Input id="patronymic" name="patronymic" />
                    </div>
                  </div>
                  <DialogFooter className="">
                    <Button  type="submit">Сохранить контакт</Button>
                    <DialogClose asChild>
                      <Button onClick={() => {
                        setIsSetMainMemberPhone(false)
                        clearPhoneInput()
                        }} variant="outline">Отмена</Button>
                    </DialogClose>
                  </DialogFooter>
                
              </form>
              </DialogContent>
            </Dialog>
        // <Dialog>
        //     <DialogTrigger>Add Member</DialogTrigger>
        //     <DialogContent>
        //         <DialogHeader>
        //             <DialogTitle>Add Member</DialogTitle>
        //             <DialogDescription>Add a new member to the client</DialogDescription>
        //         </DialogHeader>
        //     </DialogContent>
        // </Dialog>
    )
}