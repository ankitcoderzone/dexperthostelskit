"use client"
import React from 'react'
import { Button } from '../ui/button'


function ButtonNavigationClient() {
 

    return (
        <>
        <div className='flex gap-6' >
            <Button  > Apply </Button>
            <Button variant={"secondary"} > Discover </Button>
        </div>
        </>
    )
}

export default ButtonNavigationClient
