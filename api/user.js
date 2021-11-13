module.exports = (app, serviceUser) => {
    app.get("/api/user", async (req, res) => {
        res.json(await serviceUser.dao.getAll(req.user))
    })
}
