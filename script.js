var element = document.getElementById("cd")
var select1 = document.getElementById("picked-1")
var select2 = document.getElementById("picked-2")
var select3 = document.getElementById("picked-3")



function move1(icon){
    const values = distance[select1.getAttribute("name")][icon]
    animate(select1, values, icon, "drag", 500)
}

function move2(icon){
    const values = distance[select2.getAttribute("name")][icon]
    animate(select2, values, icon, "shrink", 750)
}

function move3(icon){
    const values = distance[select3.getAttribute("name")][icon]
    animate(select3, values, icon, "bounce", 750)
}

function animate(elm, values, icon, animation, wait){
    elm.classList.add(animation + "-animate-" +values.from + "-" + values.to)
    elm.style.animationDuration = wait + "ms";
    setTimeout(function(){
        elm.classList.remove(values.from)
        elm.classList.add(values.to)
        elm.classList.remove(animation + "-animate-" +values.from + "-" + values.to)
        elm.setAttribute("name", icon)
    }, wait);
}

var hamburgerOpen = false

function HamburgerAnimation(){
    var root = document.documentElement
    var menuItem = document.getElementById("menu-items-1")
    if(!hamburgerOpen){
        root.style.setProperty("--animate-ham-before", "translateX(3.5px) rotate(-315deg)")
        root.style.setProperty("--animate-ham-center", "scale(0)")
        root.style.setProperty("--animate-ham-after", "translateX(3.5px) translateY(1px) rotate(-45deg)")
        hamburgerOpen = true
    } else{
        root.style.setProperty("--animate-ham-before", "none")
        root.style.setProperty("--animate-ham-center", "none")
        root.style.setProperty("--animate-ham-after", "none")
        /*menuItem.classList.add("animate-menu-items-close")
        setTimeout(function(){
            menuItem.classList.add("menu-close")
            menuItem.classList.remove("animate-menu-items-close")
        }, 500)*/
        
        hamburgerOpen = false
    }
    

}