// take the current time or random time if it's morning or afternoon.

const time = Math.random();
if(time < 12){
    console.log("Morning");
} else{
    console.log("Afternoon");
}