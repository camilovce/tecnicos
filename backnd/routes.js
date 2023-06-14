const express = require('express');

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var techniciansController_1 = require("./techniciansController");
var router = express_1.default.Router();
router.get('/technicians', techniciansController_1.getAllTechnicians);
router.get('/technicians/:id', techniciansController_1.getTechnicianById);
router.post('/technicians', techniciansController_1.createTechnician);
router.put('/technicians/:id', techniciansController_1.updateTechnician);
router.delete('/technicians/:id', techniciansController_1.deleteTechnician);
exports.default = router;
