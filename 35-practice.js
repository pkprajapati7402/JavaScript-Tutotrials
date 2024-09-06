/*
Is there a place you've always wanted to fly to? ✈️

Let's use what we learned to build two objects for two boarding passes: departTripTicket and returnTripTicket.

Both objects should have the following properties:

A .name for the passenger.
A .from for where the passenger is flying from.
A .to for where the passenger is flying to.
A .businessClass boolean value for whether the passenger's ticket is in business class (true or false).
An .upgrade() method changes the .businessClass property to true or prints a message if false (e.g., "Your ticket is already business class!").
After creating these objects, use the .upgrade() method on at least one of them and then log both objects to the console.

Bonus: Want an extra challenge? Add a .leaveTime and .arriveTime property to both objects (integers 1-24). Then, define a .flightTime() method property that calculates and prints the travel time with the .leaveTime and .arriveTime properties!
*/



const departTripTicket = {
    name: "Avinash",
    from: "Delhi",
    to: "Mumbai",
    businessClass: false,
    upgrade: true,
  }
  const returnTripTicket = {
    name: "Mohan",
    from: "Mumbai",
    to: "Delhi",
    bussinessClass: true,
    upgrade: false,
  }
  if(departTripTicket.upgrade === false || returnTripTicket.upgrade === false){
    departTripTicket.upgrade = true;
    returnTripTicket.upgrade = true;
  }
  console.log(departTripTicket);
  console.log(returnTripTicket);
  