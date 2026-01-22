"use client"
import React from 'react'
import { Button } from '../ui/button'

import { useRouter } from 'next/navigation'

function ButtonNavigationClient() {
    const router=useRouter()
    
 

    return (
        <>
        <div className='flex gap-6' >
            <Button onClick={()=>router.push("./hostelskit.com")}  > Apply </Button>
            <Button onClick={()=>router.push("https://hostelskit.com")} variant={"secondary"} > Discover </Button>
        </div>
        </>
    )
}

export default ButtonNavigationClient
