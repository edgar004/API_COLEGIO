const materia_modelo = require('../modelos/materia');
const ctrls = {}

ctrls.getMaterias = async (req, res) => {
    try {

        const filtro = {};

        if (req.query.nombre) {
            filtro = {
                nombre: req.query.nombre
            }
        }

        const materias = await materia_modelo.find(filtro).sort({
            _id: -1
        });

        res.json({
            results: materias
        });
    } catch (error) {
        console.log(error);

        res.status(500).json(error);
    }
}


ctrls.addMaterias = async (req, res) => {
    try {
        const materias = new materia_modelo(req.body);
        await materias.save();
        res.json({
            ok: true
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

ctrls.UpdateMaterias = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        await materia_modelo.findByIdAndUpdate(id, req.body);
        res.json({
            ok: true
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = ctrls;