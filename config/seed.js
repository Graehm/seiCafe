require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Air', sortOrder: 10},
    {name: 'Brakes', sortOrder: 20},
    {name: 'Cooling System', sortOrder: 30},
    {name: 'Engine', sortOrder: 40},
    {name: 'Fuel', sortOrder: 50},
    {name: 'Oil', sortOrder: 60},
    {name: 'Steering', sortOrder: 70},
    {name: 'Suspension', sortOrder: 80},
    {name: 'Transmission', sortOrder: 90}


    ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Eventuri Intake Set', emoji: '🍔', category: categories[0], price: 1295.00},
    {name: 'Cabin Air Filter', emoji: '🍔', category: categories[0], price: 25.95},
    {name: 'Air Filter', emoji: '🥪', category: categories[0], price: 40.42},
    {name: 'Plenum Plates', emoji: '🌭', category: categories[0], price: 595.00},
    {name: 'Rotors Set', emoji: '🦀', category: categories[1], price: 720.99},
    {name: 'Pads', emoji: '🍤', category: categories[1], price: 80.95},
    {name: 'Caliper Piston Kit', emoji: '🦞', category: categories[1], price: 49.95},
    {name: 'Stainless Steel Brake Lines', emoji: '🦞', category: categories[1], price: 78.99},
    {name: 'Expansion Tank', emoji: '🌮', category: categories[2], price: 150.49},
    {name: 'Radiator Hose Set', emoji: '🌮', category: categories[2], price: 70.95},
    {name: 'Radiator', emoji: '🌮', category: categories[2], price: 125.99},
    {name: 'Thermostat', emoji: '🌯', category: categories[2], price: 70.72},
    {name: 'Waterpump', emoji: '🌯', category: categories[2], price: 549.25},
    {name: 'Timing Chain Guide Set', emoji: '🍕', category: categories[3], price: 1995.99},
    {name: 'Vanos Board', emoji: '🍝', category: categories[3], price: 250.00},
    {name: 'Spark Plug', emoji: '🍞', category: categories[3], price: 10.12},
    {name: 'Ignition Coil', emoji: '🍞', category: categories[3], price: 110.89},
    {name: 'Camshaft Position Sensor', emoji: '🍞', category: categories[3], price: 100.95},
    {name: 'Fuel Filter', emoji: '🍟', category: categories[4], price: 20.95},
    {name: 'Fuel Pump', emoji: '🥗', category: categories[4], price: 395.95},
    {name: 'Fuel Pump Relay', emoji: '🥗', category: categories[4], price: 3.95},
    {name: 'Fuel Injector', emoji: '🥗', category: categories[4], price: 399.00},
    {name: 'LiquiMoly 10w60', emoji: '🍨', category: categories[5], price: 14.00},
    {name: 'MANN Oil Filter', emoji: '🍨', category: categories[5], price: 11.95},
    {name: 'Servotronic Sensor', emoji: '🍮', category: categories[6], price: 2022.95},
    {name: 'Dinan Strut Reinforcement Bar', emoji: '🍮', category: categories[7], price: 390.95},
    {name: '20 Piece Cibtrol Arm Set', emoji: '🍰', category: categories[7], price: 1871.99},
    {name: 'Bilstein Shocks', emoji: '🍰', category: categories[7], price: 871.99},
    {name: 'Clutch Kit', emoji: '🍮', category: categories[8], price: 346.99},
    {name: 'Flywheel', emoji: '🍮', category: categories[8], price: 679.00},
    {name: 'Clutch Master Cylinder', emoji: '🍮', category: categories[8], price: 77.95},
    {name: 'Fork Pivot Pin', emoji: '🍮', category: categories[8], price: 20.95}

  ]);

  console.log(items)

  process.exit();

})();