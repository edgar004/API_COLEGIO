import { Schema, model } from "mongoose";
var estudianteSchema = new Schema({
    persona_id: {type:Schema.Types.ObjectId,ref:'persona',required:true },
    grado: {type:String,default:true },
},{collection:"estudiante"} )


export default model( 'estudiante' , estudianteSchema);