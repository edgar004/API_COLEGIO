const aula_modelo = require('../modelos/cursos');
const ctrls = {}

ctrls.getAulas = async (req, res) => {
    try {
        const Aulas = await aula_modelo.find({}).sort({
            _id: -1
        });
        res.json(Aulas);
    } catch (error) {
        res.status(500).json(error);
    }
}


ctrls.addAulas = async (req, res) => {
    try {
        const Aulas = new aula_modelo(req.body);
        await Aulas.save();
        res.json({
            ok: true
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

ctrls.UpdateAulas = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        await aula_modelo.findByIdAndUpdate(id, req.body);
        res.json({
            ok: true
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = ctrls;