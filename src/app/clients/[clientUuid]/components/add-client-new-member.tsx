"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AddClientNewMembers } from "../action"
import { useActionState, useState } from "react"
import { redirect } from "next/dist/server/api-utils"
import { unificationPhone } from "@/lib/unificationPhone"

const initialState  = {
  messages: [],
  phone: '+7',
  firstName: '',
  secondName: '',
  patronymic: ''
}

export default function AddClientNewMember({mainMemberPhone}:{mainMemberPhone:string}){
  const [state, formAction, pending] = useActionState(AddClientNewMembers, initialState)
  const [phone, setPhone] = useState<string>('+7')
  const [isSetMainMemberPhone, setIsSetMainMemberPhone] = useState<boolean>(false)
  const [formValues, setFormValues] = useState({
    phone: '+7',
    firstName: '',
    secondName: '',
    patronymic: ''
  })

  const handlePhoneChange = (value: string) =>{
        const number = unificationPhone(value)
        if (number) {
          setPhone(number)
          setFormValues({
            ...formValues,
            phone: number
          })
        }
      }
  
      const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
          ...formValues,
          firstName: e.target.value
        })
      }

      const handleFirstSecondNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
          ...formValues,
          secondName: e.target.value
        })
      }

      const handleFirstPatronymicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
          ...formValues,
          patronymic: e.target.value
        })
      }
  

  const setMainMemberPhone = () => {
    setPhone(mainMemberPhone)
    setIsSetMainMemberPhone(true)
  }
   function clearPhoneInput() {
     setPhone('+7')
     setIsSetMainMemberPhone(!setIsSetMainMemberPhone)
  }
    return(
            <Dialog>
              <DialogTrigger asChild>
                  <Button variant="outline">Add Member</Button>
                </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
              <form className="flex flex-col gap-6" action={formAction}>
                <input type="hidden" name="mainMemberPhone" value={mainMemberPhone} />
                  <DialogHeader>
                    <DialogTitle>Добавление участника</DialogTitle>
                    <DialogDescription className="bold">
                    Добавьте нового участника в клиентскую базу;
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label className="gap-1" htmlFor="phone">Номер телефона: 
                        { isSetMainMemberPhone ? 
                        <Button onClick={clearPhoneInput}type="button" variant="link" className=" text-red-800 italic mw ml-auto ">(Удалить телефон родителя)</Button> 
                        : <Button onClick={setMainMemberPhone} type="button" variant="link" className=" text-black italic mw ml-auto ">(Вставить телефон родителя)</Button>
                        }</Label>

                      <Input id="phone" name="phone"
                      onPaste={(e) => {e.preventDefault(); }}
                      onChange={(e) =>  handlePhoneChange(e.target.value)} value={phone}  
                      
                      //  disabled={isSetMainMemberPhone} 
                       />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="secondName">Фамилия:</Label>
                      <Input id="secondName" name="secondName"
                      value={formValues.secondName} 
                      onChange={(e) => setFormValues({...formValues, secondName: e.target.value})} />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="firstName">Имя:</Label>
                      <Input id="firstName" name="firstName"  
                      value={formValues.firstName} 
                      onChange={(e) => setFormValues({...formValues, firstName: e.target.value})} />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="patronymic">Отчество:</Label>
                      <Input id="patronymic" name="patronymic"  
                      value={formValues.patronymic} 
                      onChange={(e) => setFormValues({...formValues, patronymic: e.target.value})} />
                    </div>
                  </div>
                  {/* Короткая запись. Правая тру, тогда и левая тру */}
                  {state && state.messages.map((str:string)=> (<div key={str} className="border-4"><p className="tex border-l-2 pl-6 italic bold text-red-500" >{str}</p></div>)) }
                  <DialogFooter className="">
                    <Button  type="submit" className="animate-spin" disabled={pending}>Сохранить контакт</Button>
                    {/* При сабмите 1. Редиректит на страницу клиента и вызывает окно диалоога, в котором будет сообщение о добавление member и его информацию  */}
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