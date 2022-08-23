import React from "react";

const Blog = () => {
    return (
        <div >
            <div className="First">
             

             <h1 className="Imga">Концерты, корпоративы, спортивные праздники, интеллектуальные игры, свадьбы, выпускные, вечеринки, юбилеи и мн.др</h1>
             
             </div> 
            <p className="central">
                <figure>
            <img className="central"src="/k6.png" alt='net'/>
            <figcaption className="central"class="podpis">Концерты от 1000 у.е.</figcaption>
            <hr></hr><img className="central" src="k4.png" alt='net'/> 
            <figcaption className="central"class="podpis">Небольшие площадки от 400 у.е.</figcaption>
            <hr></hr><img className="central" src="k1.png" alt='net'/>
<figcaption className="central" >Маленькие площадки от 100 у.е.</figcaption>
</figure>
</p>
                
           
        </div>
    )
} 

export {Blog}