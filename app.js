slides = [
    {
        text: "“ I’ve been interested in coding for a while but never taken the jump, \
                until now. I couldn’ t recommend this course enough.I’ m now in the job of my dreams and so \
                excited about the future. ”",
        name: "Tanya Sinclair",
        title: "UX Engineer",
        image: "./images/image-tanya.jpg"
    },

    {
        text: "“ If you want to lay the best foundation possible I'd recommend\
                taking this course. The depth the instructors to into is incredible. I\
                now feel so confident about starting up as a professional developer. ”",
        name: "John Tarkpor",
        title: "Junior Front-end Developer",
        image: "./images/image-john.jpg"
    }
]

const nextArrow = document.querySelector(".icon-next");
const prevArrow = document.querySelector(".icon-prev");

const profileName = document.querySelector(".testimonial__text--name");
const profileJob = document.querySelector(".testimonial__text--title");
const profileDescription = document.querySelector(".testimonial__text--description");
const profileImage = document.querySelector(".testimonial__photo");


function prevSlide(event) {
    if (event.currentTarget.className == "icon-prev") {
        profileName.innerText = slides[0].name;
        profileJob.innerText = slides[0].title;
        profileDescription.innerText = slides[0].text;
        profileImage.setAttribute("src", slides[0].image);
    }
}

function nextSlide(event){
    if(event.currentTarget.className == "icon-next"){
        profileName.innerText = slides[1].name;
        profileJob.innerText = slides[1].title;
        profileDescription.innerText = slides[1].text;
        profileImage.setAttribute("src", slides[1].image)
    }
}

nextArrow.addEventListener("click", nextSlide);
prevArrow.addEventListener("click", prevSlide);