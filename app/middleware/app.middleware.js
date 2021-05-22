export default ({app}) => {
    app.use((req, res, next) => {
        next();
    })
}
