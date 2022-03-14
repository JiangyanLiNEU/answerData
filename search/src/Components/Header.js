export const Header = () => {

     // define the font style and size
     const EngFont = {
          fontFamily:"'Lobster', cursive", 
          fontSize:"xxx-large", 
          color:"#2c6e49"
     }

     const ChinFont = {
          fontFamily:"'Rampart One', cursive",
          fontSize:'xx-large', 
          color:"#2c6e49",
          marginLeft: '50px'
     }

     return (
          <div style={{display:"flex", padding: '5px', margin:"20px"}}>
               <span style={EngFont}>Answer Database</span>
               <span style={ChinFont}>答案小助手 :-)</span>
          </div>
     )
}