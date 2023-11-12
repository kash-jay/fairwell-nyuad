# fairwell-nyuad
## Project Name: Firwell NYUAD
The project is a web-based interactive firewell for NYUAD students. 

**Concept and storyline**:
For this assignment, we had an initial idea to create a dark comic story of the last day you lived. Even though we wrote the script for each of the three stories and constructed the idea not all of us liked it so instead we decided to make a fire-well website for NYUAD students. On this website, the audience goes on a journey around the NYUAD campus center and listens to what seniors have to say about their favorite places on campus.

**Process**:
Our first step was to agree on an idea which took a lot of time, we had to figure out how to make the idea work best in a website environment and give the audience the feel that they are actually moving around the campus architecture. After we had the basis of the project we went around to interview students and ask them what they would miss the most around campus. Then we edited the audio files and the images we took to give the an illustrated look. After that, we began putting things together adding the buttons and designing the site. We changed a lot of things many times until we liked the final look.

**General Design and Interactivity**:
The general design of the website was inspired by the campus architecture as the buttons take you up and dawn left or right depending on what the audience wants to view.
The C2 page in the website consisted of a 6 divs, each one with the backgroud image set as an image of each of its location. Each time a button is pressed, the goToImage function loops through each image div and shifts the position of each up/down by 100% height, so that only the div of the current location is in the viewport, which is how we achieved the visual effect of going up/down. Each time the goToImage function is called, it checks if audio is currently playing and if so, it pauses it to ensure that audios don't overlap. Then it loads the correct audio into a variable and starts playing it.  

**Work Distribution**:


**Reflection and Evaluation**: 