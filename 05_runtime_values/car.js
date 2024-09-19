export default class Car {
  constructor(initialSpeed) {
    this.engine = { volume: '2.85 L', spec };
    this.power = '97 kW';
    this.assembly = 'DeLorean Motor Cars, Ltd.';
    this.transmission = {
      type: 'manual',
      speed: 5
    };
    this.length = 4267;
    this.width = 1988;  
    this.speed = initialSpeed; 
  }

  accelerate() {
    this.speed++;
    return 'going faster';
  }

  brake() {
    this.speed--;
    return 'going slower';
  }
}

const spec = {
  "make": "DeLorean",
  "model": "PRV ZMJ-159 Twin Turbo (Aftermarket)",
  "type": "V6",
  "displacement": "2.85L",
  "horsepower": 250,
  "torque": {
    "value": 285,
    "unit": "lb-ft"
  },
  "fuel_system": "Bosch K-Jetronic Fuel Injection",
  "compression_ratio": "7.5:1",
  "engine_code": "ZMJ-159-TT",
  "valvetrain": "SOHC",
  "bore": "91mm",
  "stroke": "73mm",
  "fuel_type": "Gasoline",
  "aspiration": "Twin Turbocharged",
  "turbocharger": {
    "brand": "Garrett",
    "boost_pressure": {
      "value": 7,
      "unit": "psi"
    }
  },
  "cooling_system": "Water-cooled",
  "ignition_system": "Electronic Ignition",
  "firing_order": "1-6-3-5-2-4",
  "redline": 7500,
  "weight": {
    "value": 375,
    "unit": "lbs"
  },
  "exhaust_system": "Stainless Steel Dual Exhaust",
  "modifications": {
    "intercooler": "Air-to-Air Intercooler",
    "fuel_injectors": "High-flow Fuel Injectors",
    "tuning": "Custom ECU Tune"
  }
};