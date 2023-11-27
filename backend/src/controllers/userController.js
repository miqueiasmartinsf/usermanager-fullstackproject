import userRepository from "../repositories/userRepository.js";

class userController {
    async index(req, res) {
        const data = await userRepository.findAll();
        res.status(200).send(data);
    }

    async show(req, res) {
        const { id } = req.params;
        const data = await userRepository.findById(id);
        res.status(200).send(data);
    }

    async storage(req, res) {
        const user = req.body;
        const data = await userRepository.create(user);
        res.status(201).send(data);
    }

    async update(req, res) {
        const { id } = req.params;
        const userData = req.body;
        const data = await userRepository.update(userData, id);
        res.status(200).send(data);
    }

    async delete(req, res) {
        const { id } = req.params;
        const data = await userRepository.deleteById(id);
        res.status(200).send(data);
    }
}

export default new userController();
