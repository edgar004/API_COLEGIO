const estudiante_modelo = require('../modelos/estudiante');
const ctrls = {}

ctrls.getEstudiantes = async (req, res) => {
    try {
        const estudiantes = await estudiante_modelo.find({}).sort({
            _id: -1
        });
        res.json(estudiantes);
    } catch (error) {
        res.status(500).json(error);
    }
}


ctrls.addEstudiantes = async (req, res) => {
    try {
        const estudiante = new estudiante_modelo(req.body);
        await estudiante.save();
        res.json({
            ok: true
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

ctrls.UpdateEstudiantes = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        await estudiante_modelo.findByIdAndUpdate(id, req.body);
        res.json({
            ok: true
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = ctrls;