//GLOBAL VARIABLES
            const body = document.body;
            let pixelDiv1 = document.querySelector('.pixelDiv')
        
            let outerDiv = document.querySelector('.outerDiv')
            let pixel;
            const redPaint = "rgb(135, 22, 12)";
            const bluePaint = "rgb(19, 10, 182)";
            const blackPaint = "black";
            const greenPaint = "rgb(13, 94, 35)";
            const orangePaint = "rgb(238, 160, 17)";
            const yellowPaint = "yellow";
            const purplePaint = "purple";
            const clear = "rgb(177, 170, 170)"
            let x;

//FUNC TO CREATE PIXEL BLOCKS IN OUTER DIV
            function pixelMakerPixels(color){
                pixel = document.createElement('div');
                pixel.classList.add("pixel");
                pixelDiv1.append(pixel); 
                pixel.style.backgroundColor = color;
            }

//FOR LOOP TO CREATE ALL THE PIXELS        
            for (var i = 0; i<3956;i++){
                pixelMakerPixels(clear);     
            }

//RED BRUSH SELECTOR EVENT LISTENER    
            let pixelColor;
            let colorPaletteDiv = document.querySelector('.colorPaletteDiv')
                 
//PIXEL ART MAKER EVENT LISTENER/DELEGATION CODE

//BRUSH PIXEL FUNC
            let brush = false;
            let brushFunc = (color) =>{
                pixelDiv1.addEventListener('mouseover',(event)=>{
                if(event.target.className === 'pixel' && brush === true){
                     event.target.style.backgroundColor = color;   
                }
                  
                })
            }

            window.document.addEventListener('mousedown', ()=>{
                brush = true;
            })
            window.document.addEventListener('mouseup', ()=>{
                brush = false;
            })

//PAINT PIXEL FUNC
            let pixelFunc = (color)=>{
            pixelDiv1.addEventListener('click', (event)=>{
                if(event.target.className === 'pixel'){
                event.target.style.backgroundColor = color;
                }
            }) 
            }


            colorPaletteDiv.addEventListener('click', (event)=>{
                x = event.target.className;
                console.log('This is x:', x)
                    brushFunc(x);
                    pixelFunc(x);
                
            })
          

//Create delegations to brush color and erase parents
            //delegate event lister to child by (event.target.className)

//OLD CODE THAT GOT REFACTORED
// //REDBRUSH LISTENER 
//             redBrush.addEventListener('click', (event)=>{
//                 if(event.target.className === 'red'){
//                     // pixelFunc(redPaint);
//                     brushFunc(redPaint);
//                 }
//                })
// //BLUEBRUSH LISTENER 
//             blueBrush.addEventListener('click', (event)=>{
//                 if(event.target.className === 'blue'){
//                     pixelFunc(bluePaint);
//                 }
//                })
// //GREENBRUSH LISTENER 
//             greenBrush.addEventListener('click', (event)=>{
//                 if(event.target.className === 'green'){
//                     pixelFunc(greenPaint);
//                 }
//                })
// //BLACKBRUSH LISTENER 
//             blackBrush.addEventListener('click', (event)=>{
//                 if(event.target.className === 'black'){
//                     pixelFunc(blackPaint);
//                 }
//                })
// //YELLOWBRUSH LISTENER 
//     yellowBrush.addEventListener('click', (event)=>{
//                 if(event.target.className === 'yellow'){
//                     pixelFunc(yellowPaint);
//                 }
//                })
// //ORANGEBRUSH LISTENER 
//     orangeBrush.addEventListener('click', (event)=>{
//                 if(event.target.className === 'orange'){
//                     pixelFunc(orangePaint);
//                 }
//                })
// //PURPLEBRUSH LISTENER 
//     purpleBrush.addEventListener('click', (event)=>{
//                 if(event.target.className === 'purple'){
//                     pixelFunc(purplePaint);
//                 }
//                })
// //CLEAR PIXEL LISTENER 
//            outerDiv.addEventListener('click', (event)=>{
//             if(event.target.className === 'erase'){
//                 pixelFunc(clear);
//             }
//            })

// let redBrush = document.querySelector('.red');
            // let blueBrush = document.querySelector('.blue');
            // let greenBrush = document.querySelector('.green');
            // let blackBrush = document.querySelector('.black');
            // let orangeBrush = document.querySelector('.orange');
            // let yellowBrush = document.querySelector('.yellow');
            // let purpleBrush = document.querySelector('.purple');

            

         











