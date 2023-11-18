import React, { useEffect } from 'react';
import style from './ProductDesc.module.css';
import Card from '../../../ui/Card';
import { ProgressSpinner } from 'primereact/progressspinner';


const ProductDesc = (props) => {


    useEffect(() => {
        console.log(props.desc);
    }, [props.loading])

    return <Card className={style.container}>
        {!props.loading && props.desc ? <div>
            {Object.entries(props.desc).map(([category, properties]) => (
                <div key={category}>
                    <h3 style={{ margin: 0 }}>{category}</h3>
                    <ul style={{ listStyle: 'none' }}>
                        {Object.entries(properties).map(([property, value]) => (
                            <li key={property}>
                                <strong>{property}:</strong> {value}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div> : 
        <div className={style.spinnerDiv}>
            <ProgressSpinner style={{ width: '30rem', height: '20rem' }} strokeWidth="8" fill="white" animationDuration="1s" />
        </div>}
    </Card>;
}

export default ProductDesc;