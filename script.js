let initialValue = `M 10 200 Q 490 200 990 200`
let finalValue = `M 10 200 Q 490 200 990 200`


const string =  document.querySelector(".string");


string.addEventListener("mousemove",(dets)=>{
    console.log(dets.x)
    initialValue = `M 10 200 Q ${dets.x} ${dets.y} 990 200`

    gsap.to("svg path ",{
        attr:{d:initialValue},
        duration : 0.2,
        ease:"power3.out"
    })
})


string.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr:{d:finalValue},
        duration:0.8,
        ease:"elastic.out(1,0.2)"

    })
})