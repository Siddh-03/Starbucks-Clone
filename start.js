let body = document.querySelector("body")
let reward = document.querySelector("#rewards")
document.addEventListener("DOMContentLoaded", function () {
    reward.style = " border-bottom: 5px solid #008248"
})


let menu = document.querySelector("#menu")
menu.addEventListener("click", function () {
    menu.style = "bore border-bottom: 5px solid #008248"
    location.href = "menu.html"
})

document.querySelector("#sign-in").addEventListener("click", function () {
    location.href = "sign-in.html"
})

let joinbtnlinks = document.querySelectorAll(".join")
joinbtnlinks.forEach(el => {
    el.addEventListener("click", (e) => {
        e.preventDefault()
        location.href = "join.html"
    })
});

//learn how section will write when get 3+ hours at a time!!!!
let learnmore = document.querySelector(".learnmore")
let lm1 = document.querySelector("#lm1")
let lm2 = document.querySelector("#lm2")
let lm3 = document.querySelector("#lm3")
lm1.addEventListener("click", function () {
    let lm1div = document.createElement("div")
    lm1div.classList.add("lmdiv")
    console.log("added");
    learnmore.style.display = "flex"
    lm1div.innerHTML = `<div id="clsbtn"><button id="close"><span class="material-symbols-outlined ham">close</span></button></div>
    <img src="/Assets/Commercial/1A.jpg" alt="" id="lm1img1" class="lm1img1">
    <h3>Free food, drinks & more</h3>
    <p>Redeem your Stars for favorites like a handcrafted cold brew, protein box or even a coffee tumbler.</p>
    <div class="dots">
    <button id="navbtn1"><img src="/Assets/Icons/left-arrow.png" class="navicon"></button>
    <button id="navbtn2"><img src="/Assets/Icons/Dot.png" class="navicon"></button>
    <button id="navbtn3"><img src="/Assets/Icons/Dot.png" class="navicon"></button>
    <button id="navbtn4"><img src="/Assets/Icons/Dot.png" class="navicon"></button>
    <button id="navbtn5"><img src="/Assets/Icons/right-arrow.png" class="navicon"></button>
    </div>`
    learnmore.appendChild(lm1div)
    let closebtn = document.querySelector("#close")
    closebtn.addEventListener("click", function () {
        learnmore.style.display = "none"
        lm1div.remove()
    })
})




window.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".strbtn");
    const custDrink = document.querySelector(".cust-drink");
    const extraContent = {
        navbtn2: {
            img: "./Assets/Commercial/1A.png",
            title: "Free food, drinks & more",
            desc:"Redeem your Stars for favorites like a handcrafted cold brew, protein box or even a coffee tumbler."
        },
        navbtn3: {
            img:"./Assets/Commercial/1B.png",
            title:"Complimentary birthday treat",
            desc:"Every year on your birthday get a free drink or food item of your choice."
        },
        navbtn4: {
            img:"./Assets/Commercial/1C.png",
            title:"Our best offers, all in the app",
            desc:"Make the most of every visit. You’ll find chances to earn Bonus Stars and more in your Offers tab."
        }
    }

    // navbtns.forEach(navbtn => {
    //     navbtn.addEventListener("click", function (e) {
    //         e.preventDefault();

    //         navbtn.forEach(b => b.classList.remove("active"));

    //         navbtn.classList.add("active")

    //         lm1div.style.opacity = "0";

    //         setTimeout(() => {
    //             const id = navbtn.id;
    //             const { img, title, desc } = content[id];
    //             custDrink.innerHTML = `
    //                 <img src="${img}" alt="">
    //                 <div class="drink-details">
    //                     <h3>${title}</h3>
    //                     <p>${desc}</p>
    //                 </div>
    //             `;
    //             lm1div.style.opacity = "1";
    //         }, 300);
    //     });
    // });


    
    const content = {
        strbtn1: {
            img: "./Assets/Commercial/25.png",
            title: "Customize your drink",
            desc: "Make your drink just right with an extra espresso shot or a dash of your favorite syrup.",
        },
        strbtn2: {
            img: "./Assets/Commercial/100.png",
            title: "Brewed hot or iced coffee or tea, bakery item, packaged snack and more",
            desc: "Treat yourself to an iced coffee, buttery croissant, bag of chips and more.",
        },
        strbtn3: {
            img: "./Assets/Commercial/200.png",
            title: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",
            desc: "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.",
        },
        strbtn4: {
            img: "./Assets/Commercial/300.png",
            title: "Sandwich, protein box or at-home coffee",
            desc: "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.",
        },
        strbtn5: {
            img: "./Assets/Commercial/400.png",
            title: "Select Starbucks® merchandise",
            desc: "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.",
        }
    };

    buttons.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();

            buttons.forEach(b => b.classList.remove("active"));

            btn.classList.add("active")

            custDrink.style.opacity = "0";

            setTimeout(() => {
                const id = btn.id;
                const { img, title, desc } = content[id];
                custDrink.innerHTML = `
                    <img src="${img}" alt="">
                    <div class="drink-details">
                        <h3>${title}</h3>
                        <p>${desc}</p>
                    </div>
                `;
                custDrink.style.opacity = "1";
            }, 300);
        });
    });
});

// let hamburger = document.querySelector(".ham-burger")
// document.querySelector("#ham-btn").addEventListener("click" , function(){
//     let div = document.createElement("div")
//     div.classList.add("ham")
//     hamburger.appendChild(div)
// })

let hamBtn = document.getElementById("ham-btn");
const hamMenu = document.getElementById("ham-menu");
let ham = document.querySelector(".ham");
hamBtn.addEventListener("click", () => {
    if (ham.textContent === "close") {
        ham.textContent = "menu"; // changes to cross
        hamBtn.style.backgroundColor = "#f1f8f6"
        hamBtn.style.color = "black"
        hamBtn.style.transition = "background-color 0.3s ease-in-out"
        body.style.overflow = "auto"
    } else {
        ham.textContent = "close"; // changes back to hamburger
        hamBtn.style.backgroundColor = "#f1f8f6"
        hamBtn.style.color = "black"
        body.style.position = "sticky"
        body.style.overflow = "hidden"
    }
    hamMenu.classList.toggle("open");
});

