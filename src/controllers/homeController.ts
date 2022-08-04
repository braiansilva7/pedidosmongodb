import {Request, Response} from "express";
import User from "../models/User";

export const home = async (req: Request, res: Response)=>{
    let dataHoje = Intl.DateTimeFormat().format(new Date());

    let solicitacao = await User.find({});

    res.render('pages/home', {
        dataHoje,
        solicitacao
    });
}