# Project Overview

## Project Links

Github Repo: https://github.com/hannahbannan/SEIR-526-Mars-Project
- [add your deployment link]()

## Project Description

In this project I will create an app that displays the weather report on Mars. I want to make this look like your normal weather app, but that of another planet! I want this app to be both fun to look at and educational, so I will incorporate information on Mars' weather and seasons as well.

NASA uses their API to create a one-page weather report: https://mars.nasa.gov/insight/weather/
I will be creating a similar but expanded application around this report.


## API

NASA’s InSight Mars lander takes continuous weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, an area near Mars’ equator. This API provides the weather measurements from the last 7 sols (or days, for us Earthlings). It includes data for temperature, windspeed, and pressure.

API URL: https://api.nasa.gov/insight_weather/?api_key=NVPo1OZ86ApquiqVgY9DX61fYLbMSAO1vfNbNDwP&feedtype=json&ver=1.0

Here is a snippet of the API - atmospheric temperature (AT) on Sol 554. Shows average temp, count of measurements taken that sol, minimum, and maximum temp.

"554": {
	"AT": {
		"av": -56.99,
		"ct": 180572,
		"mn": -92.401,
		"mx": -3.97
	},
}


## Wireframes

Check out my Sketch files in this repo if you are able to open. Otherwise, screenshots of my wireframe and React architecture can be found below.

Wireframes: https://cloudinary.com/console/c-5cd56b7c6bedd7284e59603c7be5e5/media_library/folders/2ef6dd14ed55eb15388adb2c7a4726a2

React Architecture: https://res.cloudinary.com/hannahbannan/image/upload/v1593123215/Mars%20Project/Screen_Shot_2020-06-25_at_3.13.30_PM_mawnzx.png



#### MVP 
- Fetch data from NASA API
- Render a daily weather page, 7-day report, and seasons page using the data from the API
- Write an "About" page explaining the weather information

#### PostMVP 

- Fetch data from a second weather API to compare your local weather to the Mars weather. Example: "It is 88 degrees colder in Mars today than it is in Los Angeles."

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
