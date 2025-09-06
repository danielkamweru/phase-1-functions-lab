// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation- 42);
}
distanceFromHqInBlocks(43);

function distanceFromHqInFeet(pickupLocation){
    return  distanceFromHqInBlocks(pickupLocation) *264;
}
distanceFromHqInFeet(43);

function distanceTravelledInFeet(start, destination){
    return  Math.abs(destination - start) *264
}
function calculatesFarePrice(start, destination){
return Math.abs(destination - start) -1;
}
calculatesFarePrice(43, 44);

function calculatesFarePrice(start, destination){

if (distanceTravelledInFeet(start, destination) > 2500){
    return `cannot travel that far`;
}else if(distanceTravelledInFeet(start, destination) > 2000){
    return 25;
}

else if(distanceTravelledInFeet(start, destination) > 400){
    return (distanceTravelledInFeet(start, destination) -400) * 0.02;
}
else {
    return 0;
}
}






