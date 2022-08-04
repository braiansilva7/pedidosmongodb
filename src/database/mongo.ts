import {connect} from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const mongoConnect = async () =>{
    try {
        console.log('CONECTANDO AO MONGO DB');
        await connect (process.env.MONGO_URL as string);
        console.log('CONEXÃO ESTABELECIDA COM SUCESSO');
    } catch (error) {
        console.log("ERRO NA CONEXÃO COM O MONGODB: "+error)
    }
}