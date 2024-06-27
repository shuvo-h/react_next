import { NextResponse } from "next/server"
import { db } from "../db"

export const POST = async(req:Request) =>{
    const body = await req.json()
    const newUser = {...body,id:db.users.length+1}
    db.users.push(newUser)
    const token = `jwt-token-for:${db.users.length}`;
    return new NextResponse(JSON.stringify({data:newUser,token}),{status:201})
}
