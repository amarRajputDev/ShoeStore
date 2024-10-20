import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken'



const getDataFromToken = (req) =>{

    const token = req.cookies.get("token")?.value || ""

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const id = decodedToken.id;
    return id

}

export default getDataFromToken