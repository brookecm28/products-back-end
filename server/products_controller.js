module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        const {name, description, price, image_url} = req.body

        db.create_product()
        .then(() => {
            res.status(200).send(res)
        })
        .catch(() => {
            res.status(500).send('Something went wrong!')
            console.log(err)
        })
    },
    getOne: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
    
    },
    getAll: (req, res) => {
        const db = req.app.get('db')

        db.read_products().then((products) => {
            res.status(200).send(products)
        }).catch((err) => {
            res.status(500).send('Something went wrong!')
            console.llog(err)
        })
     
    },
    update: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {desc} = req.query
    
    },
    delete: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

    }
}
