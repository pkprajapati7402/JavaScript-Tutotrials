/*
Scope
Now that we're getting more familiar with functions, it's time to explore scope.

In programming, every function and variable has a "scope." This means that when we define a variable inside a function, that variable can only be used within that function and not outside of it.

Let's use an add() function as an example:

function add(x, y) {
  let answer = x + y;
  return answer;
}

console.log(answer);

This code will throw a ReferenceError that states the answer variable is not defined. This is because we are trying to access a variable that was made in a function.

Note: Any area outside the curly brackets of functions or loops is known as the global scope.

If we were to define an answer outside of the add() function:

function add(x, y) {
  let answer = x + y;
  return answer;
}

let answer = "This";
console.log(answer); // Output: This

We now have two answer variables in two different scopes:

One defined inside the add() function as a number.
One defined outside the add() function as a string (in the global scope).
Always be mindful of where you are defining new variable and where you are using them.

Let's fix this code really quick by removing that global answer variable and calling add() inside the console.log() statement:

console.log(add(2, 2)); // Output: 4

Instructions
You are helping your content creator friend with building clout on their various social media channels by analyzing their views from last week.

Here are the viewership numbers, stored as arrays:

const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

They need the following statistics from each array:

The mean, or average number of views.
The median, or middle value of the sorted array.
To calculate the mean and median, create two functions called mean() and median(). Each function accepts an viewsArray parameter.

Define a totalViews variable that is local to the scope of the mean() function. Use it to calculate the average views.

For the median, you'll need to sort the viewsArray parameter beforehand. Inside the scope of the median() array, define two variables called sortedStats and middleIndex.

Lastly, call these functions on all three arrays and log the results to the Console! The output should look like this:

TikTok
Mean: 4625.142857142857
Median: 5222

Instagram
Mean: 3970
Median: 3921

YouTube
Mean: 3698.285714285714
Median: 2789
*/

function tiktok() {
    const tv = [1932, 2300, 453, 5222, 6733, 7402, 8334];
    let sum = 0;

    // Calculate the sum
    for (let i = 0; i < tv.length; i++) {
        sum += tv[i];
    }

    // Calculate the mean
    const mean = sum / tv.length;

    // Sort the array for median calculation
    tv.sort((a, b) => a - b);

    // Calculate the median
    let median;
    const mid = Math.floor(tv.length / 2);
    if (tv.length % 2 === 0) {
        median = (tv[mid - 1] + tv[mid]) / 2;
    } else {
        median = tv[mid];
    }

    console.log("TikTok \nMean: ", mean, "\nMedian: ", median, "\n");
}

function insta() {
    const iv = [936, 2576, 453, 7013, 5489, 7402, 3921];
    let sum = 0;

    // Calculate the sum
    for (let i = 0; i < iv.length; i++) {
        sum += iv[i];
    }

    // Calculate the mean
    const mean = sum / iv.length;

    // Sort the array for median calculation
    iv.sort((a, b) => a - b);

    // Calculate the median
    let median;
    const mid = Math.floor(iv.length / 2);
    if (iv.length % 2 === 0) {
        median = (iv[mid - 1] + iv[mid]) / 2;
    } else {
        median = iv[mid];
    }

    console.log("Instagram \nMean: ", mean, "\nMedian: ", median, "\n");
}

function yout() {
    const yv = [2300, 453, 5222, 989, 6733, 7402, 2789];
    let sum = 0;

    // Calculate the sum
    for (let i = 0; i < yv.length; i++) {
        sum += yv[i];
    }

    // Calculate the mean
    const mean = sum / yv.length;

    // Sort the array for median calculation
    yv.sort((a, b) => a - b);

    // Calculate the median
    let median;
    const mid = Math.floor(yv.length / 2);
    if (yv.length % 2 === 0) {
        median = (yv[mid - 1] + yv[mid]) / 2;
    } else {
        median = yv[mid];
    }

    console.log("YouTube \nMean: ", mean, "\nMedian: ", median, "\n");
}

tiktok();
insta();
yout();
