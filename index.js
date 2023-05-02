require('dotenv').config();

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

//const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dogs&limit=25&offset=0&rating=g&lang=en`;
const endpoint = 'https://api.giphy.com/v1/gifs/search?api_key=Pp9HJmT34iPHhewG9IxCOjGv7FwL5i4q&q=dogs&limit=25&offset=0&rating=g&lang=en';


async function getImage(query){
    const response = await fetch(endpoint);
    //const data = await JSON.parse(response);
    const data = await response.json();
    console.log(data);
    let newurl = 'https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=' + query + '&limit=25&offset=0&rating=g&lang=en';
    return newurl;
}


