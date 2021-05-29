import {ApiAuth, HasRole} from "nodman-auth";

export default ({app}) => {
    app.group('/api/v1', (router) => {
        // api auth with jwt
        router.use(ApiAuth);
        router.group('/user', (router) => {
            router.use(HasRole('admin'))
            router.get('/check', (req, res) => {
                res.json({
                    ok: true,
                    data: req.user
                })
            })
        })
    })
}
