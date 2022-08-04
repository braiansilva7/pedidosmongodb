import mongoose from "mongoose";

type UserType = {
    data: string,
    pedido: string,
    cliente: string,
    contato: string
}
const autorSchema = new mongoose.Schema<UserType>(
  {
    data: String,
    pedido: {type: String, required: true},
    cliente: String,
    contato: String
  },
  {
    versionKey: false
  }
)

const users = mongoose.model("clientes", autorSchema)

export default users;