'use strict'
const mongoose = require('mongoose')
const Customer = mongoose.model('Customer')


exports.get = async(data) => {
    var res = new Order.find({})
    return res
}

exports.create = async(data) => {
    var order = new Order(data)
    await order.save()
}