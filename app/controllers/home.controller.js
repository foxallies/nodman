import UserModel from "../models/user.model";

export async function index(req, res) {
    res.render('index', {title: 'Nodman'});
}
