// let toggle = document.querySelector(".toggle");
// const sideBar= document.querySelector('.side-bar');


// toggle.addEventListener("click", function(){
//     sideBar.classList.toggle('active')
// });

//  intersecting section......
const sections = document.querySelectorAll('.sec-inter')
const options = {
    threshold:0.1
};
const observer1 = new IntersectionObserver(sectionWacth,options);



function sectionWacth(entries,observer){
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('sec-inter-show');
           
        } 
    })
};

sections.forEach(section=>{
    observer1.observe(section)
});
