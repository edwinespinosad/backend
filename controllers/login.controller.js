const ctrlLogin = {};

const Login = require('../models/Login');

ctrlLogin.createUser = async (req, res) => {
    const newUser = new Login(req.body);
    await newUser.save();
    res.send({ message: 'User creado' });
}

ctrlLogin.getUsers = async (req, res) => {
    const users = await Login.find();
    res.json(users);
}

ctrlLogin.getUser = async (req, res) => {
    const { email } = req.params;
    const user = await Login.findOne({email: email});
    res.json(user);
}

ctrlLogin.updateUser = async (req, res) => {
    const { id } = req.params;
    const filter = {_id: id}
    const user = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password,
    };
    await Login.findByIdAndUpdate(filter, user, {new: true});
    res.json({ status: 'User actualizado' });
}

ctrlLogin.deleteUser = async (req, res) => {
    const { id } = req.params;
    await Login.findByIdAndRemove(id);
    res.json({ status: 'User eliminado' });
}

module.exports = ctrlLogin;