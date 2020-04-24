const horario_modelo = require('../modelos/horario');
const ctrls = {}

ctrls.getHorarios = async (req, res) => {
    try {

        const filtro = {};

        if (req.query.nombre) {
            filtro = {
                nombre: req.query.nombre
            }
        }

        const Horario = await horario_modelo.find(filtro).sort({
            _id: -1
        });
        res.json({
            results: Horario
        });
    } catch (error) {
        res.status(500).json(error);
    }
}


ctrls.addHorario = async (req, res) => {
    try {
        const Horario = new horario_modelo(req.body);
        await Horario.save();
        res.json({
            ok: true
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

ctrls.UpdateHorario = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        await horario_modelo.findByIdAndUpdate(id, req.body);
        res.json({
            ok: true
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = ctrls;