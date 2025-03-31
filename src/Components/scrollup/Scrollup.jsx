import "./scrollup.css"

function Scrollup() {

    // window.addEventListener("scroll", function(){
    //     const scrollUp = document.querySelector(".scrollup")
    //     console.log(scrollUp)
    //     if(this.scrollY >= 560){
    //         scrollUp.classList.add("show__scroll")
    //     }else{
    //         scrollUp.classList.remove("show__scroll")
    //     }
    // })

  return (
    <a href="#home" className="scrollup">
        <i className="uil uil-arrow-up scrollup_icon"></i>
    </a>
  )
}

export default Scrollup