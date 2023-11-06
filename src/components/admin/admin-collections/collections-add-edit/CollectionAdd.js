import React, { useState, useEffect } from "react";
import Card from "../../../ui/Card";
import style from "./CollectionAddEdit.module.css";
import { PickList } from "primereact/picklist";
import axios from "axios";
import Button from "../../../ui/Button";


const CollectionAdd = () => {
    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);
    const [title, setTitle] = useState([]);

    useEffect(() => {
        try {
            // Make an API call to your authentication endpoint (replace with your actual API URL)
            axios.get('http://localhost:9090/products', {headers: { 
                'Content-Type': 'application/json'
            }}).then((response) => {
                setSource(response.data)
            })
        } catch (error) {
            console.error('API request error:', error);
        }
    }, [])

    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    };

    const itemTemplate = (item) => {
        return (
            <div>
                <span>{item.name}</span>
                <span>{item.price}</span>
            </div>
        );
    };

    return <Card className={style.container}>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <PickList source={source} target={target} onChange={onChange} itemTemplate={itemTemplate} filter filterBy="name" breakpoint="1400px"
            sourceHeader="Available" targetHeader="Selected" sourceStyle={{ height: '24rem' }} targetStyle={{ height: '24rem' }}
            sourceFilterPlaceholder="Search by name" targetFilterPlaceholder="Search by name" />

        <Button>Submit</Button>
    </Card>
}

export default CollectionAdd;