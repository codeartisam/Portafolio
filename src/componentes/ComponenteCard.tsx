import * as React from 'react';

interface Props {
    img?: string;
    title?: string;
    description?: string;
}

const MyComponent: React.FC<Props> = ({ img, title, description }) => {

    return (
        <div className='card-component'>
            <img src={img} />
            <h3>{title}</h3>
            <p>{description}</p>
            <input type="button" className='btn-interesa' value="Me interesa" />
        </div>
    );
};

export default MyComponent;