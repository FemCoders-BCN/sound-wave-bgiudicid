import microphone from "../assets/images/microphone.svg";
import albums from "../assets/images/albums.svg";
import more from "../assets/images/more.svg";

console.log(more);

export default function Icons(){
    return(
        <div className="icons">
                <div class="container"><img src={microphone} alt="Microphone" />
                <p class="text">Charts</p></div>
                <div class="container"><img src={albums} alt="Albums" />
                <p class="text">Albums</p></div>
                <div clas="container"><img src={more} alt="More" />
                <p class="text">More</p></div>
        </div>
       
    )
}