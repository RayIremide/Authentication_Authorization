const express= require('express')
const globalMiddlewares = require('../middleware/global.middleware')
const controller = require ('./items.controller')



const router = express.Router()

// router.use(globalMiddlewares.basicAuth)
router.use(globalMiddlewares.apiKeyAuth)

// GET items
router.get('/', controller.getAllItems)

// POST items
router.post('/', globalMiddlewares.checkAdmin, controller.CreateItems)

// GET one /items/1
router.get('/:id', controller.getOneItem)

// Update one /item/1
router.patch("/:id", globalMiddlewares.checkAdmin, controller.updateItem)
    
// Delete one /item/1
router.delete("/:id", globalMiddlewares.checkAdmin, controller.deleteItem )




module.exports = router