"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AddClientNewMember(){
    return(
            <Dialog>
              <form>
                <DialogTrigger asChild>
                  <Button variant="outline">Add Member</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Добавление участника</DialogTitle>
                    <DialogDescription className="bold">
                    Add a new member to the client
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="phone">Номер телефона</Label>
                      <Input name="phone" defaultValue="+7 " />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="pastname">Фамилия</Label>
                      <Input name="pastname" defaultValue="" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="firstname">Имя</Label>
                      <Input name="firstname" defaultValue="" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="patranomic">Отчество</Label>
                      <Input name="patranomic" defaultValue="" />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </form>
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