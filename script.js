
const whereArr = [
    'Paris, France', 'Kingston, Jamaica', 'Honolulu, Hawaii', 'Beijing, China', 'Casablanca, Morocco', 'Windhoek, Namibia', 'Glasgow, Scotland', 'New York, New York, USA', 'Kathmandu, Nepal', 'Florence, Italy', 'Buenos Aires, Argentina', 'Vancouver, Canada', 'Portland, Oregon, USA', 'McMinnville, TN, USA'
    ]

const howArr = [
    'horse', 'horse and carriage', 'laser guided passenger missile', 'spaceship', 'car', 'foot', 'long distance slip-n-slide', 'dog sled', 'sprinting', 'swimming the butterfly', 'sailboat'
    ]
const whatArr = [
    'sailing', 'rock climbing', 'banana picking', 'take welding classes', 'embark on a journey around the world', 'backpacking', 'skiing the steep pow pow', 'exploring the local culinary scene', 'hang-gliding', 'competitive hot dog eating'
    ]

let where = whereArr[Math.floor(Math.random()*whereArr.length)]

let how = howArr[Math.floor(Math.random()*howArr.length)]

let what = whatArr[Math.floor(Math.random()*whatArr.length)]

console.log(where + how + what)
