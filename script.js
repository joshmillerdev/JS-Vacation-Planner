const actionArr = [
    'says you should', 'thinks it would be fun to', 'wants to pay for you to', 'insists that you', 'believes that your mental health will benefit if you', 'warns that you should never', 'says you risk extreme danger if you', 'forecasts you will find the meaning of life when you', 'says f**k it, just'
]

const whereArr = [
    'Paris, France', 'Kingston, Jamaica', 'Honolulu, Hawaii', 'Beijing, China', 'Casablanca, Morocco', 'Windhoek, Namibia', 'Glasgow, Scotland', 'New York, New York, USA', 'Kathmandu, Nepal', 'Florence, Italy', 'Buenos Aires, Argentina', 'Vancouver, Canada', 'Portland, Oregon, USA', 'McMinnville, TN, USA'
]

const howArr = [
    'horse', 'horse and carriage', 'laser guided passenger missile', 'spaceship', 'car', 'foot', 'long distance slip-n-slide', 'dog sled', 'sprinting', 'swimming the butterfly', 'sailboat'
]
const whatArr = [
    'sailing', 'rock climbing', 'banana picking', 'underwater welding school', 'around the world hot air balloon', 'backpacking', 'skiing the steep pow pow', 'exploring the local culinary scene', 'hang-gliding', 'competitive hot dog eating'
]

let action = actionArr[Math.floor(Math.random()*actionArr.length)];
let where = whereArr[Math.floor(Math.random()*whereArr.length)];
let how = howArr[Math.floor(Math.random()*howArr.length)];
let what = whatArr[Math.floor(Math.random()*whatArr.length)];




console.log(
    `VacayRobot ${action} travel to ${where} by ${how}, for an epic ${what} trip!`
    );

// console.log(where + how + what)
