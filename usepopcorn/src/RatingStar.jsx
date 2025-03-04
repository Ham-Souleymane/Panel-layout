import { useState } from "react";

const containerStyle = {
    display: 'flex',
    alignItems: "center",
    gap: "16px",
};

const starContainerStyle = {
    display: "flex",
    gap: "4px",
};

const textStyle = {
    lineHeight: "0",
    margin: "0",
};



export default function RatingStar({
     maxRating = 5,
     Textcolor= '#000',
     color='#FFD700',
     Textsize = 24,
     size=24

     }) {
        const textStyle = {
            lineHeight: "0",
            margin: "0",
           color:`${Textcolor}`,
           fontSize: `${Textsize}px`
        };
        
    const [rating, setRating] = useState(0);
    const [temprating,setTemprating]=useState(0);
    
    return (
        <div style={containerStyle}>
            <div className="star-container" style={starContainerStyle}>
                {Array.from({ length: maxRating }, (_, i) => (
                    <Star 
                        key={i} 
                        onRate={() => setRating(i + 1)} 
                        onHoverIn={()=>setTemprating(i+1)}
                        onHoverOut={()=>setTemprating(0)}
                        full={temprating? temprating>=i+1 : rating >= i + 1} 
                        size={size}
                        color={color}
                    />
                ))}
            </div>
            <p style={textStyle}>{temprating|| rating|| ''}</p>
        </div>
    );
}

function Star({ onRate, full,onHoverIn,onHoverOut,size,color }) {
    const starStyle = {
        width: `${size}px`,
        height: `${size}px`,
        cursor: "pointer",

    };
    return (
        <span onClick={onRate} style={starStyle} onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
            {full ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={`${color}`} stroke={`${color}`}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.811l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.811h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke={`${color}`} strokeWidth="1">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.811l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.811h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            )}
        </span>
    )
}
