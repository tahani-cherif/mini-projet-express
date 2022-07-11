const usercontroller=require("../controlles/productControlles.js")
const router=require("express").Router()

router.post('/adduser',usercontroller.adduser)
router.get('/getalluser',usercontroller.getalluser)
router.put('/:id',usercontroller.upditeuser)
router.delete('/:id',usercontroller.suppuser)
router.get('/:id',usercontroller.getoneuser)

module.exports=router