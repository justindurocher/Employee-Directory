# Employee-Directory

# Day-Planner
<h1>Installation</h1>
<p>The first step in installing this application, was creating a github respository and naming it Day Planner. I then proceded to gitbash to create my four files needed for the project. I created one html file, one css file, and two javascript files; one for my variables and functions, and one for memory.js download for the current date and time presented in the middle of the page. After using bootstrap to create the bare bones of the html, I assigned unique class names to each of the elements on the webpage. This helped a lot for later when I needed to call upon them in javascript. After assigning classes, I went to my css page and began shaping to layout of the page and creating a color scheme. After finishing the layout of the page and picked the correct colors, I started on my javascript page. The first thing I wrote in javascript was the code used in the memory.js file and assigned it to a variable to be displayed inside a div tag that was query selected. I then used the new Date() and .getHour() functions to then create and if statement that would color coat the boxs according to the hour that it was. I query selected each div and added a class of background color to install this. After that I added an on("click") listener to each save button that would set the local storage to the val of the input in the text input field in the middle. I then created a function that would set the localstorage val to the value of the input box apropriate to that time slot. After that I create a function that would reset all of the data in the localstorage and clear the input boxes of previous tasks. After that i ran both functions, and then crated a time interval to reset the page every 60 seconds. Finally I added another on("click") listener to the restart button that ran the restart function and my page was ready to go. The hardest part for me in this project was getting the code in my javascript to run correctly. I needed to review a few code samples from previos lessons in class on localstorage and how to set and get items properly. The link to the application can be found on https://justindurocher.github.io/Day-Planner/ </p>
<h1>Usage</h1>
<p>In this application, the user is able to keep a schedule from the hours of 9am to 5pm. The user is able to input information that can be saved within each hour block. This will allow for anyone to easily keep track of what they have planned for those hours whether it be at work or not. As the day progresses, the boxs will be color coordinated based on the hour of the day. If it its the current time, the box will show red, if the time has passed, the box will be gray, and if the time is in the future, the box will remain blue. The information saved be stay saved in that time slot until the user either manually resets it with the restart your day button, or when the time passes and turns gray; The input will read "Past".</p>
<img src="assets/Capture.PNG" alt="screenshot">
<img src="assets/Capture2.PNG" alt="screenshot2">
<h1>Credits</h1>
<ul>
    <li>www.youtube.com</li>
    <l1>www.github.com</li>
    <li>www.gitlab.com</li>
    <li>www.google.com</li>
    <li>www.stackoverflow.com</li>
    <li>Visual Studio Code</li>
</ul>
