const containerEl=document.querySelector(".container");

for(let index=1; index<50; index++){
const colorContainerEl=document.createElement("div");
colorContainerEl.classList.add("color-container");

const colorCodeEl= document.createElement("span");
colorCodeEl.classList.add("color-code");
colorContainerEl.appendChild(colorCodeEl);


const copyButtonEl=document.createElement("button");
copyButtonEl.innerText="Copy";
colorContainerEl.appendChild(copyButtonEl);

containerEl.appendChild(colorContainerEl);
}

function randomColor(){
    const chars = "0123456789ABCDEF";
    const colorCodeLength = 6;
    let colorCode = "";

    for(let index= 0; index<colorCodeLength; index++){
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode +=chars.substring(randomNum,randomNum+1);
    }
    return colorCode;
}
const colorContainerEls= document.querySelectorAll(".color-container");

generateColors();
function generateColors(){

    for(let i=0; i<colorContainerEls.length; i++){
        const colorContainerEl= colorContainerEls[i];
        const newColorCode = randomColor();
        const colorCodeEl=colorContainerEl.querySelector(".color-code");

        colorContainerEl.style.backgroundColor = "#"+newColorCode;
        colorCodeEl.innerText = "#"+ newColorCode;
    }
}

colorContainerEls.forEach((colorContainerEl)=>{
const copyButtonEl = colorContainerEl.querySelector("button");
const colorCodeEl = colorContainerEl.querySelector(".color-code");

copyButtonEl.addEventListener("click",()=>{
    const colorCode= colorCodeEl.innerText;
    copytoClipBoard(colorCode);
});
});

function copytoClipBoard(text){

    navigator.clipboard.writeText(text)
    .then(()=>{
        alert("Copied to ClipBoard: "+ text);
    })
    .catch((error)=>{
        console.log("Failed to Copy to ClipBoard",error);
    })
}