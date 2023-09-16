const button = document.querySelector("button");
const PickColor = async () => {
    const eyeDropper = new EyeDropper();
    const { sRGBHex } = await eyeDropper.open();
    console.log(sRGBHex);
    document.getElementById("Paragraph").innerHTML=sRGBHex;
}
button.addEventListener("click", PickColor);