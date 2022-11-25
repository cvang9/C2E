import React from 'react'

const Failbar = ({score}) => {
    const num = score*100/4;
    const funcFailStatus = () => {
        switch(score){
            case 0:
            return "0px";
            case 1:
            return "25%";
            case 2:
            return "50%";
            case 3:
            return "75%";
            case 4:
            return "100%";
            default:
            return "0px"
            
        }
    }
    
    const failred = () => ({
        width: funcFailStatus(), 
        background: "red",
        height: "10px"
    })
  return (
    <>
        <div className="progress" style={{height: "10px"}}>
            <div className="progress-bar" style={failred()}></div>
        </div>    
    </>
  )
}

export default Failbar