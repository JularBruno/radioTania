const helpers = require('./_helpers.js')
const express = require('express')
const router = express.Router()
const required = require('../middlewares/token')
import model from '../models/autonumeric'
import Debug from 'debug'
const debug = new Debug(`api/autonumeric`)
var url = require('url');

router.get('/', (req, res, next) => {

    model
        .find()
        .then(find => {
            debug(`find result`, find);

            // updating
            let newNumber = find[0].number + 1;
            if (newNumber == 10000) {
                newNumber = 0;
            }
            debug(`newNumber `, newNumber);
            model.update({ _id: find[0].id }, { number: newNumber })
                .then((data) => {
                    // sending string to code
                    let numberRet = '';

                    console.log('number.toString().length ', find[0].number.toString().length)
                    if (find[0].number.toString().length == 1) {
                        numberRet = '000' + find[0].number
                    }
                    if (find[0].number.toString().length == 2) {
                        numberRet = '00' + find[0].number
                    }
                    if (find[0].number.toString().length == 3) {
                        numberRet = '0' + find[0].number
                    }
                    if (find[0].number.toString().length == 4) {
                        numberRet = '' + find[0].number
                    }

                    return res.status(200).json(numberRet);
                })
                .catch((error) => {
                    return res.status(400).json({
                        message: error.message || 'no se pudo actualizar objeto',
                        error
                    });
                });


        })
        .catch(error => {
            res.status(404).json({
                message: error.message || 'Ocurrio un error inesperado',
                error
            })
        })
})


router.post('/', (req, res, next) => { // FIRST CREATE ONE WITH NUMBER 0
    return helpers.save(model, req, res)
})

router.delete('/all', (req, res, next) => {
    return helpers.deleteAll(model, req, res)
  })

module.exports = router