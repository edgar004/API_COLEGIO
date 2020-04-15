import { Schema, model } from "mongoose";
var aulaSchema = new Schema({
    nombre: {type:String,required:true },
    nivel: {type:Number,default:true },
    edificio_id: {type:Schema.Types.ObjectId,ref:'edificio',required:true },
},{collection:"aula"} )


export default model( 'aula' , aulaSchema);