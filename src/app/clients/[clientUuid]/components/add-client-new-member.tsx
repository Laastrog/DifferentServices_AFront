"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AddClientNewMembers } from "./action"
import { useState } from "react"

export default function AddClientNewMember({mainMemberPhone}:{mainMemberPhone:string}){
  const [phone, setPhone] = useState<string>('')
  const setMainMemberPhone = () => {
    setPhone(mainMemberPhone)
  }
    return(
            <Dialog>
              <DialogTrigger asChild>
                  <Button variant="outline">Add Member</Button>
                </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
              <form className="flex flex-col gap-6" action={AddClientNewMembers}>
                  <DialogHeader>
                    <DialogTitle>Добавление участника</DialogTitle>
                    <DialogDescription className="bold">
                    Добавьте нового участника в клиентскую базу;
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      {/* Сделать ввиде италика текста кнопку с телефоном родителя */}
                      <Label className="grid gap-3" htmlFor="phone">Номер телефона: <Button onClick={setMainMemberPhone} type="button" variant="outline" className=" text-black italic mw">(Вставить телефон родителя)</Button></Label>
                      <Input id="phone" name="phone" onChange={(e) => setPhone(e.target.value)} value={phone} />
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
                      <Button variant="outline">Отмена</Button>
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