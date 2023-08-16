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
    {name: 'Eventuri Intake Set', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[0], price: 1295.00},
    {name: 'Cabin Air Filter', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[0], price: 25.95},
    {name: 'Air Filter', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[0], price: 40.42},
    {name: 'Plenum Plateimage', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[0], price: 595.00},
    {name: 'Rotors Set', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[1], price: 720.99},
    {name: 'Pads', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[1], price: 80.95},
    {name: 'Caliper Piston Kit', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[1], price: 49.95},
    {name: 'Stainless Steel Brake Lines', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[1], price: 78.99},
    {name: 'Expansion Tank', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[2], price: 150.49},
    {name: 'Radiator Hose Set', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[2], price: 70.95},
    {name: 'Radiator', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[2], price: 125.99},
    {name: 'Thermostat', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[2], price: 70.72},
    {name: 'Waterpump', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[2], price: 549.25},
    {name: 'Timing Chain Guide Set', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[3], price: 1995.99},
    {name: 'Vanos Board', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[3], price: 250.00},
    {name: 'Spark Plug', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[3], price: 10.12},
    {name: 'Ignition Coil', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[3], price: 110.89},
    {name: 'Camshaft Position Sensor', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[3], price: 100.95},
    {name: 'Fuel Filter', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[4], price: 20.95},
    {name: 'Fuel Pump', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[4], price: 395.95},
    {name: 'Fuel Pump Relay', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[4], price: 3.95},
    {name: 'Fuel Injector', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[4], price: 399.00},
    {name: 'LiquiMoly 10w60', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[5], price: 14.00},
    {name: 'MANN Oil Filter', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[5], price: 11.95},
    {name: 'Servotronic Sensor', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[6], price: 2022.95},
    {name: 'Dinan Strut Reinforcement Bar', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[7], price: 390.95},
    {name: '20 Piece Cibtrol Arm Set', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[7], price: 1871.99},
    {name: 'Bilstein Shocks', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[7], price: 871.99},
    {name: 'Clutch Kit', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[8], price: 346.99},
    {name: 'Flywheel', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[8], price: 679.00},
    {name: 'Clutch Master Cylinder', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[8], price: 77.95},
    {name: 'Fork Pivot Pin', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[8], price: 20.95}

  ]);

  console.log(items)

  process.exit();

})();