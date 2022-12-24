import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import React from "react";

export default function middleware(req:NextRequest){
    const verify:any  = req.cookies.get("accessToken");
    const url = req.url;
    // const [jwt, setJwt] = React.useState(verify);

    // const jwrcheker = async() => {
    //     try {
    //         const response = await fetch('http://localhost:8080/api/userController', {
    //             method: 'POST',
    //             body: JSON.stringify(verify)
    //         })
    //             .then(res => res.json())
    //         if (response.cheked===true) {
    //             setJwt(true)
    //         } else {
    //             setJwt(false);
    //         }
    //     } catch {
    //         return;
    //     }
    // }
    
    // if(url.includes('/dashboard')){
    //     {jwrcheker()}
    //     if(jwt===false){
    //         return NextResponse.redirect('http://localhost:3000/login');
    //     }
    // }

    if(url.endsWith('/products/categories')){
            return NextResponse.redirect('http://localhost:3000/categories');
    }
    return NextResponse.next();
}