const range__input = document.getElementById("range__input");

range__input.addEventListener("input", (e) => {
    // console.log("abu", e.target.value);
    const value = +e.target.value;
    const label = e.target.nextElementSibling;

    label.innerText=value;

    const maxValue=+e.target.max;

    const range__width=+getComputedStyle(e.target).getPropertyValue("width").replace("px","");
    const label__width=+getComputedStyle(label).getPropertyValue("width").replace("px","");

    // console.log(range__width,label__width);

    const leftPositionOfLabel=value*(range__width/maxValue)-(label__width/2);
    label.style.left=`${leftPositionOfLabel}px`;

    // console.log(left);




})