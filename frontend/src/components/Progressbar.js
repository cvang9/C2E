import React from 'react'

const Progressbar = ({score}) => {
    const num = score*100/4;
    const funcProgressStatus = () => {
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
    
    const progressgreen = () => ({
        width: funcProgressStatus(), 
        background: "green",
        height: "10px"
    })
  return (
    <>
        <div className="progress" style={{height: "10px"}}>
            <div className="progress-bar" style={progressgreen()}></div>
        </div>    
    </>
  )
}

export default Progressbar