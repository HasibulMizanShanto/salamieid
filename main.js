const input = document.getElementById("inpt")
const btn = document.getElementById("btn")
const demo = document.getElementById("demo")
const txt = document.getElementById("txt")




function myfunction(val,tex){
    
    let lgth = val.length
    let tgth = tex.length
    if(lgth>11 || lgth<11 || val<0 || val == 000|| tgth ==""){
        demo.innerHTML = "fill the input properly"
    }
    else{
        demo.innerHTML =`হাই ${tex}, ঈদ মোবারাক!!,ঈদ-উল ফিতরের অনেক অনেক শুভেচ্ছা রইলো।পরিবার,প্রিয়জনদের সাথে দিনটি উপভোগ করো,
        আর তোমার জন্য ${Math.round(val/4)} গুলো দোয়া রইলো।এর থেকে বড় সালামী আর কি হতে পারে।💝`;


        document.querySelector(".text").style.display="none";
        document.querySelector(".input").style.display="none";
        document.body.style.background = "url(images/esalami.png)";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "norepeat";
        document.body.style.backgroundAttachment = "fixed";


    }
}
btn.addEventListener("click",()=>{
    myfunction(input.value,txt.value);
})


