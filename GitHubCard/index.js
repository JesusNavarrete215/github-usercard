const { default: axios } = require("axios");

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const followersArray = ['tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  ,'bigknell'];

const entryPoint = document.querySelector('.cards')

function getGitHub(name){
  axios.get(`https://api.github.com/users/${name}`)
  .then(res => {
    console.log(res) 
    const newCard = gitCardMaker(res.data) //its passing a string instead of an object
    entryPoint.appendChild(newCard)  //object does not use foreach
  })
  .catch(err => {
    console.log(err)
  })
}

followersArray.forEach(follower => {
   getGitHub(follower)
})

// axios.get(`https://api.github.com/users/jesusnavarrete215`)
// .then(res => {
// console.log(res)
// })
// .catch(err => {
//   console.log(err)
// })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
// const testArray = [{
//   name: 'Jesus',
//   userName: 'JesusNavarrete215',
//   location: 'Arizona',
//   img: 'https://avatars.githubusercontent.com/u/85150148?v=4',
//   adddress: 'https://github.com/JesusNavarrete21',
//   followers: '0',
//   following: '0',
//   bio: 'With a degree in Business I am looking to combine it with full stack web development to expand my horizon.'
// }]

// const followersArray = ['tetondan',
//   'dustinmyers',
//   'justsml',
//   'luishrd',
//   ,'bigknell'];

function gitCardMaker({name, login, location, avatar_url, address, followers, following, bio}){
  //creating the elements
  const cardb = document.createElement('div')
  const imgb = document.createElement('img')
  const cardInfob = document.createElement('div')
  const nameb = document.createElement('h3')
  const userNameb = document.createElement('p')
  const locationb = document.createElement('p')
  const profileb = document.createElement('p')
  const addressb = document.createElement('a')
  const followersb = document.createElement('p')
  const followingb = document.createElement('p')
  const biob = document.createElement('p')
  //creating the hierarchy
  cardb.appendChild(imgb)
  cardb.appendChild(cardInfob)
  cardInfob.appendChild(nameb)
  cardInfob.appendChild(userNameb)
  cardInfob.appendChild(locationb)
  cardInfob.appendChild(profileb)
  profileb.appendChild(addressb) //will need to add a href
  cardInfob.appendChild(followersb)
  cardInfob.appendChild(followingb)
  cardInfob.appendChild(biob)
  //Adding values to the elements
  nameb.textContent = ` Name: ${name}`
  userNameb.textContent = `Username: ${login}`
  locationb.textContent = `Location: ${location}`
  imgb.src = avatar_url
  addressb.src = address
  addressb.textContent = `Profile: ${address}`
  followersb.textContent = `Followers: ${followers}`
  followingb.textContent = `Following: ${following}`
  biob.textContent = `Bio: ${bio}`

  // add class names to the elements
  cardb.classList.add('card')
  cardInfob.classList.add('card-info')
  nameb.classList.add('name')
  userNameb.classList.add('username')
  
  return cardb;
}

// const entryPoint = document.querySelector('.cards')

// followersArray.forEach( card => {
//   const newCard = gitCardMaker(card) //its passing a string instead of an object
//   entryPoint.appendChild(newCard)  
// })

