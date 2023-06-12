
const main = () => {
    let zombietomb = document.getElementById("zombietomb");
    let frameWidth = 100;
    let totalFrames = 11;
    let currentFrame= 0;

    let animation = () => {
        let zombiePosition = -(currentFrame * frameWidth);
        let animationTimeout = window.setTimeout(animation, 200);

        currentFrame++;
        zombietomb.style.backgroundPositionX = zombiePosition + "px";
        
       
        if (currentFrame >= totalFrames) {
            clearTimeout(animationTimeout);
        
        }
      
    

        
    }

    animation();


    let left = 0;
    let newCurrentFrame = -1000;

    window.addEventListener("keydown", (event) => {
        let direction = event.key;
        
        let zombiePosition = (newCurrentFrame * frameWidth);
        
            

            if (event.key === "ArrowRight" && zombietomb.style.backgroundPositionX === "-1000px") {
                left++;
                zombietomb.style.left = left + "px";
            
            } else if (event.key === "ArrowLeft" && zombietomb.style.backgroundPositionX === "-1000px") {
                left--;
                zombietomb.style.left = left + "px";
            } else if (event.key === "ArrowDown" || zombietomb.style.backgroundPositionX === "-1000px") {
                newCurrentFrame++;
                zombietomb.style.backgroundPositionX = zombiePosition + "px";
            } else if (event.key === "ArrowUp" || zombietomb.style.backgroundPositionX === "-99000px") {
                newCurrentFrame--;
                zombietomb.style.backgroundPositionX = zombiePosition + "px";
            }
        })
    

}


window.addEventListener("load", main);

