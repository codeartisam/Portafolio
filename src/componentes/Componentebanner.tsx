import * as React from 'react';

interface Props{
    contactanosBig?: string;
    contactanosLittle?: string;
}

const Componentbanner: React.FC<Props> = ({contactanosBig, contactanosLittle}) => {

    return (
        <>
            <h3>{contactanosBig}</h3>
            <input type="button" className="btn-contactanos" value="contáctanos" />
            <p>{contactanosLittle}</p>
        </>
    );

};

export default Componentbanner;