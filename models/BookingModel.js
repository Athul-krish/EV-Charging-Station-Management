const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({

    bookingId: {
        type: String,
        required: true
    },

    ownerName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    vehicleRegistrationNumber: {
        type: String,
        required: true
    },

    vehicleBrand: {
        type: String,
        required: true
    },

    vehicleModel: {
        type: String,
        required: true
    },

    batteryCapacity: {
        type: Number,
        required: true
    },

    connectorType: {
        type: String,
        required: true
    },

    chargingDate: {
        type: String,
        required: true
    },

    timeSlot: {
        type: String,
        required: true
    },

    estimatedUnits: {
        type: Number,
        required: true
    },

    chargingBayNumber: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("bookings", BookingSchema);