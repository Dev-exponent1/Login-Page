const express = require('express')
const req = require('express/lib/request')
const router = express.Router()


router.get('', (req, res) => {

    try {

        return  res.render('login')

    } catch(e) {
            console.log(e)
    }

})




module.exports = router