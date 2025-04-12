import React from 'react'
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {Search} from "lucide-react"
import bg from "../assets/Searchbg.png"

const  SearchG = () => {
  return (
    <div
    className='flex flex-col justify-center items-center border w-[90%] border-red-500 rounded-4xl h-40 bg-white shadow-2xl shadow-red-100 bg-no-repeat bg-cover bg-right'
    style={{ backgroundImage: `url(${bg})` }}
  >        <div className='flex flex-row w-[90%] gap-4'>
            <Input placeholder="entrer le nom de guide ou le nom d'un ville" className="h-11 border-1 border-red-500 bg-red-50 hover:bg-white"></Input>
            <Button className="h-11 w-15 bg-red-50 border-1 border-red-500 hover:bg-red-200 cursor-pointer"><Search color="black"></Search></Button>
        </div>
    </div>
  )
}

export default SearchG;