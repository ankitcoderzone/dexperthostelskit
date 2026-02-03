"use client"
import React from 'react'
import { Button } from '../ui/button'

import { useRouter } from 'next/navigation'

function ButtonNavigationClient() {
    const router=useRouter()
    
 

    return (
        <>
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto' >
            <Button className='cursor-pointer w-full sm:w-auto' onClick={()=>router.push("./de-form")}  > Apply </Button>
            <Button className='cursor-pointer w-full sm:w-auto' onClick={()=>router.push("./discover")} variant={"secondary"} > Discover </Button>
        </div>
        </>
    )
}

export default ButtonNavigationClient
