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
    {name: 'Eventuri Intake Set', image: 'https://i.imgur.com/qFNszjq.jpg', desc: 'improve intake noise and gain a power' ,category: categories[0], price: 1295.00},
    {name: 'Air Filter', image: 'https://i.imgur.com/DOzRIgS.jpg', category: categories[0], price: 40.42},
    {name: 'Plenum Plates', image: 'https://i.imgur.com/vUPW7YR.jpg', category: categories[0], price: 595.00},
    {name: 'Front Rotor - Pair', image: 'https://i.imgur.com/aK3emU4.jpg', category: categories[1], price: 499.00},
    {name: 'Rear Rotor - Pair', image: 'https://i.imgur.com/G1W6LgL.jpg', category: categories[1], price: 320.12},
    {name: 'Front Brake Pads', image: 'https://i.imgur.com/N1tPr3v.jpg', category: categories[1], price: 80.95},
    {name: 'Rear Brake Pads', image: 'https://i.imgur.com/N1tPr3v.jpg', category: categories[1], price: 60.95},
    {name: 'Caliper Piston Kit', image: 'https://i.imgur.com/UNrA7CU.jpg', category: categories[1], price: 49.95},
    {name: 'Stainless Steel Brake Lines', image: 'https://i.imgur.com/N8zxYuJ.jpg', category: categories[1], price: 78.99},
    {name: 'Expansion Tank', image: 'https://i.imgur.com/2HpWp6U.jpg', category: categories[2], price: 150.49},
    {name: 'Radiator Hose Set', image: 'https://i.imgur.com/LHsV7zK.jpg', category: categories[2], price: 370.95},
    {name: 'Radiator', image: 'https://i.imgur.com/zw1l1uB.jpg', category: categories[2], price: 125.99},
    {name: 'Thermostat', image: 'https://i.imgur.com/g9elXdj.jpg', category: categories[2], price: 70.72},
    {name: 'Waterpump', image: 'https://i.imgur.com/p6raOsD.png', category: categories[2], price: 549.25},
    {name: 'Timing Chain Guide Set', image: 'https://i.imgur.com/GYQsJ0g.jpg', category: categories[3], price: 1995.99},
    {name: 'Complete Vanos Rebuilt Kit', image: 'https://i.imgur.com/4cuko77.jpg', category: categories[3], price: 3200.99},
    {name: 'Spark Plug', image: 'https://i.imgur.com/92Z5KMy.jpg', category: categories[3], price: 10.12},
    {name: 'Ignition Coil', image: 'https://i.imgur.com/3tc8wxl.jpg', category: categories[3], price: 110.89},
    {name: 'Camshaft Position Sensor', image: 'https://i.imgur.com/X4aY0hw.jpg', category: categories[3], price: 100.95},
    {name: 'Fuel Filter', image: 'https://i.imgur.com/zot15tO.jpg', category: categories[4], price: 20.95},
    {name: 'Fuel Pump', image: 'https://i.imgur.com/yB2BtWH.jpg', category: categories[4], price: 395.95},
    {name: 'Fuel Pump Relay', image: 'https://i.imgur.com/pBVfYQX.jpg', category: categories[4], price: 3.95},
    {name: 'Fuel Injector', image: 'https://i.imgur.com/gp2Vq9A.jpg', category: categories[4], price: 399.00},
    {name: 'LiquiMoly 10w60', image: 'https://i.imgur.com/RYEFp74.jpg', category: categories[5], price: 14.00},
    {name: 'MANN Oil Filter', image: 'https://i.imgur.com/a0IHQmV.jpg', category: categories[5], price: 11.95},
    {name: 'Servotronic Sensor', image: 'https://i.imgur.com/uLItr7N.jpg', category: categories[6], price: 2022.95},
    {name: 'Dinan Strut Reinforcement Bar', image: 'https://i.imgur.com/JCBZAne.jpg', category: categories[7], price: 390.95},
    {name: '20 Piece Cibtrol Arm Set', image: 'https://i.imgur.com/nlHGBxD.jpg', category: categories[7], price: 1871.99},
    {name: 'Bilstein Shocks', image: 'https://i.imgur.com/D89sDs9.jpg', category: categories[7], price: 871.99},
    {name: 'Clutch Kit', image: 'https://i.imgur.com/xfGWBTY.jpg', category: categories[8], price: 346.99},
    {name: 'Flywheel', image: 'https://i.imgur.com/p2N8jCB.jpg', category: categories[8], price: 679.00},
    {name: 'Clutch Master Cylinder', image: 'https://i.imgur.com/xSaQ6zk.jpg', category: categories[8], price: 77.95},
    {name: 'Fork Pivot Pin', image: 'https://i.imgur.com/ILVc8bq.jpg', category: categories[8], price: 20.95}

  ]);

  console.log(items)

  process.exit();

})();