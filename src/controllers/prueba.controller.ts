import { Request, Response } from "express";
import { getConnection } from "../config/server";

export const getPrueba = async (req: Request, res: Response) => {
    const pool = await getConnection();
    const result = await pool?.query('SELECT * FROM prueba'); 
    return res.status(200).send(result?.recordset)
}