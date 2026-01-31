"use client"
import React from 'react'
import { Button } from '../ui/button'

import { useRouter } from 'next/navigation'

function ButtonNavigationClient() {
    const router=useRouter()
    
 

    return (
        <>
        <div className='flex gap-6' >
            <Button onClick={()=>router.push("./de-form")}  > Apply </Button>
            <Button onClick={()=>router.push("./discover")} variant={"secondary"} > Discover </Button>
        </div>
        </>
    )
}

export default ButtonNavigationClient
