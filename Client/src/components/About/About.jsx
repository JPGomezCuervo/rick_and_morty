import React from "react"
import style from './About.module.css'

class About extends React.Component {
   
    render (){
        return (
            <div className={style.Background}>        
           
           
            <div className={style.Detail_Container}>


                <>
                <div className={style.Main_info}>
                  <h1>Juan Pablo</h1>
                  <img src='/imagen.jpg' alt='Juan Pablo'/>
                </div>

                <div className={style.Attributes}>

                  <div>
                    <h2 className={style.Attribute}> Status:</h2>
                    <p className={style.Attribute}>Alive</p>
                  </div>

                  <div>
                    <h2 className={style.Attribute}>Specie:</h2>
                    <p className={style.Attribute}>Human</p>
                  </div>

                  <div>
                    <h2 className={style.Attribute}>Gender:</h2>
                    <p className={style.Attribute}>Male</p>
                  </div>

                  <div>
                    <h2 className={style.Attribute}>Origin:</h2>
                    <p className={style.Attribute}>Earth</p>
                  </div>

                </div>




                </>

            </div>
            
        
        </div>

        )
                 
    }
}

export default About