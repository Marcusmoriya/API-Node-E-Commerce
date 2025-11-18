'use strict'
const mongoose = require('mongoose')
const customer = mongoose.model('Customer')


exports.create = async(data) => {
    var Customer = new Customer(data)
    await Customer.save()
}

exports.authenticate = async(data) => {
 const res = await Customer
 .findOne({
        email: data.email,
        password: data.password},)
        return res
}

exports.getById = async(id) => {
 const res = await Customer
 .findOne({id})
 return res
}