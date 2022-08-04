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

export const criarPedido = async (req: Request, res: Response)=>{
    let dataHoje: string = Intl.DateTimeFormat().format(new Date());
    const pedido: string = req.body.solicitacao;
    const cliente: string = req.body.cliente;
    const contato: string = req.body.contato;

    await User.create({
        data: `${dataHoje}`,
        pedido: `${pedido}`,
        cliente: `${cliente}`,
        contato: `${contato}`
    });

    res.redirect('/');
}
export const excluirPedido = async (req: Request, res: Response) =>{
    const pegaId = req.params.id;
    await User.deleteOne({id: pegaId});

    res.redirect('/');
}