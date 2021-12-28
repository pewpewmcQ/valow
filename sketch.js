var input,heading;


function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);
  input = createInput();
  input.position(5,60);
  heading = createElement("h4","enter eney letter");
  heading.position(5,20);
  textAlign(CENTER);
  textSize(50);
 
}

function draw() {
  var value = input.value();
   switch (value) { 
     case 'a': console.log("Vowel");
    break;
     case 'e': console.log("Vowel");
      break;
       case 'i': console.log("Vowel");
        break;
         case 'o': console.log("Vowel");
          break;
           case 'u': console.log("Vowel");
           break;
            default:
               console.log("Please enter any character"); }
  
}

