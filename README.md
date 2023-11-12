
# Comic-Creator-2

Using the Comic Generator, anyone can make and share cool 10-panel comic strips in a simple interface. It works by using a special tool that turns text into pictures. So, when you write a story, this tool transforms it into awesome comic panels.





## API Reference

### Comic Creator API Reference
#### Comic Panel Generator

This project utilizes the Hugging Face API for generating comic panels. The `query` function in the `script2.js` file is responsible for fetching the API. Here's how you can use it:

## API Reference

### `query(data)`

This asynchronous function sends a POST request to the Hugging Face API, transforming text inputs into comic panels.

#### Parameters:

- `data` (Object): The input data for generating comic panels. Should have the structure: `{ "inputs": "Your text here" }`.

#### Example Usage:

```javascript
// Import the query function
import { query } from './script2.js';

// Call the query function with your input data
query({ "inputs": "Astronaut riding a horse" }).then((response) => {
  // Use the generated image
  console.log(response);
});



```


## Project structure

#### HTML
The primary HTML document outlining the layout of the webpage. 
#### CSS
style2.css: The CSS file responsible for formatting and styling the webpage.
#### Javascript
script2.js: The JavaScript file that encompasses the logic for retrieving data from the API and creating comic panels.
## How to use this


1.Follow the provided link to access the deployed project.[link]()

2.Utilize the input form to input text for each of the ten comic panels.

3.Initiate the text-to-image conversion process by clicking the "Generate" button.

4.Experience the transformative magic of the API as it turns your text into dynamic and colorful comic panels.

5.Share your creatively generated comic strip with others and showcase the unique narrative you've crafted.## Authors

- [@HarshRaja1234](https://github.com/HarshRaja1234)

## 🚀 About Me
Harsh Bamniya, M.Tech 2nd Year
(Infrastructure Systems) Centre for Transportation Systems, IIT Roorkee
