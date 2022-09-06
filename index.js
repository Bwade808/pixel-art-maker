//GLOBAL VARIABLES
            const body = document.body;
            let pixelDiv1 = document.querySelector('.pixelDiv')
            console.log(pixelDiv1)
            // let redPixel;
            let pixel;

//FUNC TO CREATE PIXEL BLOCKS IN OUTER DIV
            function pixelMakerPixels(color){
                pixel = document.createElement('div');
                pixel.classList.add("pixel");
                pixelDiv1.append(pixel); 
                pixel.style.backgroundColor = color;
            }

//FOR LOOP TO CREATE ALL THE PIXELS        
            for (var i = 0; i<3955;i++){
                pixelMakerPixels("rgb(177, 170, 170)");     
            }

//RED BRUSH SELECTOR EVENT LISTENER    
            let pixelColor;
            let backgroundcolor1 = "red";
            let redBrush = document.querySelector('.red');
            // redBrush.addEventListener()
            // let redBrushOn = false;

//DON'T KNOW WTF I'M DOING-CAN'T FIGURE THIS OUT-CODE
            let allPixels = document.querySelectorAll('.pixel')
            let clear = document.querySelector('.erase');
            let redCount = 0;
            // redPixels.forEach(element =>{
            //     element.addEventListener('click',()=>{
            //     element.style.backgroundColor = "red";  
            //     });
            // });

            allPixels.forEach(element =>{
                element.addEventListener('click',()=>{
                    redCount += 1
                    if(redCount % 2 !== 0){
                        element.style.backgroundColor = "rgb(135, 22, 12)"; 
                    } else {
                        element.style.backgroundColor = "rgb(177, 170, 170)"; 
                    }
                 
                });
            });
          

//Create delegations to brush color and erase parents
            //delegate event lister to child by (event.target.className)


