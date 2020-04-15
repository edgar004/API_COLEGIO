import { Schema, model } from "mongoose";
var usuarioSchema = new Schema({
    id_profesor: {type:Schema.Types.ObjectId,ref:'profesor',required:true },
    usuario: {type:String,required:true },
    password: {type:String,required:true },
    estado: {type:Boolean,default:true },
},{collection:"usuarios"} )


export default model( 'usuarios' , usuarioSchema);