// selecting button as generator and h2 as joke 
const generator = document.querySelector("#generator");
const joke = document.querySelector("#joke");

// fetches data usong icanhazdadjoke api
const getNewJoke = async() => {
  const config = {headers: {Accept: "application/json"}};
  const res = await axios.get("https://icanhazdadjoke.com", config);
  console.log(res.data);
  joke.innerText =  res.data.joke
}

// onclick event listener
generator.addEventListener("click", getNewJoke);
