module.exports = (app, serviceExemple) => {
    app.get("/api/user", async (req, res) => {
        res.json(await serviceExemple.dao.getAll(req.user))
    })
}
