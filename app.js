// dad jokes generator using api : https://icanhazdadjoke.com/
// use of header : application/json

const jokesList = document.querySelector('#jokes');
const btn = document.querySelector("#gen");

document.body.addEventListener('keypress',(event)=> {
  console.log(event);
  if(event.keyCode === 13 || event.keyCode === 32) insertJoke();
})


async function insertJoke(){
  let joke = await generateJoke();
  // console.log(joke);
  let newLi = document.createElement('li');
  newLi.append(joke);
  jokesList.append(newLi);
}


async function generateJoke() {
  const conifg = { headers: {Accept : "application/json"}}
  const newJoke = await axios.get('https://icanhazdadjoke.com/', conifg);
  return newJoke.data.joke;
  // console.log(newJoke.data.joke);
}


btn.addEventListener('click', insertJoke);
