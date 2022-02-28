

function scuberGreetingForFeet(someValue){

      if (someValue > 2500){
        return 'No can do.';
      }
      else if (someValue <= 2500 && someValue > 2000 ){
        return 'I will gladly take your thirty bucks.';
      }
      else if (someValue <= 400 ){
        return 'This one is on me!';
      }
    }



function ternaryCheckCity(cityName){
  let travelChoice = (cityName === 'NYC')? 'Ok, sounds good.' : 'No go.';
  return travelChoice;
}


function switchOnCharmFromTip(generousity){
  switch (generousity){
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }
  
}

console.log(switchOnCharmFromTip('generous'));