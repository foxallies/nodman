import * as home from '../controllers/home.controller';
import {Auth} from "nodman-auth";

export default ({app}) => {
    app.get('/', home.index);
    app.get('/log', async (req, res) => {
        const login = await req.authenticate({token: db.Types.ObjectId('60a622c9e168260e50d270eb')});
        res.json({
            ok: login
        });
    });
    app.get('/logout', Auth, (req, res) => {
        req.logout();
        return res.json({
            ok: true
        })
    });
}
