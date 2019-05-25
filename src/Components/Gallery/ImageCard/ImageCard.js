import React, {useState} from 'react';
import {StyledCardMedia, StyledDescription, StyledImageCard} from "./StyledComponents";

const ImageCard = props => {
    const [isHovering, setIsHovering] = useState(false);
    const onHover = () => {
        setIsHovering(true);
    };

    const onHoverEnd= () => {
        setIsHovering(false);
    };

    return (
        <StyledImageCard onMouseEnter={onHover} onMouseLeave={onHoverEnd}>
            <StyledCardMedia image={props.photo.url}/>
            {
                isHovering &&
                (<StyledDescription>
                    {props.photo.title}
                </StyledDescription>)
            }
        </StyledImageCard>
    )
};

export default ImageCard;