function scuberGreetingForFeet(distance){

  if (distance <= 400){
   return 'This one is on me!';
  }else if (distance > 2000 && distance <=2500){
    return 'I will gladly take your thirty bucks.'
  }else{
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  return city == "NYC" ? "Ok, sounds good."
  :"No go."
}

function switchOnCharmFromTip(tip){
  console.log(tip);
  let message;
  switch(tip){
    case "generous":
      message ="Thank you so much.";
      break;

      case ("not as generous"):
        //console.log(tip)
        message= 'Thank you.'
        break;

        case ("not as generous"):
          //console.log(tip);
          message= 'Thank you.'
          break;

          default:
            message= 'Bye.'
            console.log('Bye.');
  }
return message
}