import React, { useReducer, useState, useEffect } from "react";
import Card from "../../ui/Card";
import style from './ProductAdd.module.css'
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import axios from "axios";
import Button from "../../ui/Button";
import { useNavigate } from "react-router";

const categories = [
    { name: 'Phone', code: 'phone' },
    { name: 'Smart Watch', code: 'smart_watch' },
    { name: 'TV', code: 'tv' },
    { name: 'Laptop', code: 'laptop' },
    { name: 'Tablet', code: 'tablet' }
]

const ProductAdd = () => {
    const navigate = useNavigate()
    const [category, setCategory] = useState()
    const [name, setName] = useState('')
    const [price, setPrice] = useState()
    const [attribute, setAttribute] = useState('')
    const [discounts, setDiscounts] = useState([])
    const [selectedDiscount, setSelectedDiscount] = useState()
    const [errorMsg, setErrorMsg] = useState()


    useEffect(() => {
        try {
            // Make an API call to your authentication endpoint (replace with your actual API URL)
            axios.get('http://localhost:9090/discounts', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                let l = []
                l.push({ name: 'none', code: 'none' })
                response.data.forEach(element => {
                    l.push({ name: `${element.id} - ${element.percentage}%`, code: `${element.id}` })
                });
                setDiscounts(l)
            })
        } catch (error) {
            console.error('API request error:', error);
        }
    }, [])

    const onAdd = (e) => {
        e.preventDefault()
        const isValid = validateForm()
        if (isValid) {
            const data = JSON.stringify({
                category: category.code,
                name: name,
                attribute: JSON.parse(attribute),
                price: price,
                discount_id: selectedDiscount.code === 'none' ? '' : String(selectedDiscount.code),
                image: ""
            })
            console.log(data);
            try{
                axios.post('http://localhost:9090/products', data, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(() => {
                    navigate('/admin/dashboard')
                })
            } catch(err){
                console.error("API request error: " + err)
            }
        } else {

        }
    }

    const onCancel = () => {
        navigate('/admin/dashboard')
    }

    const validateForm = () => {
        try {
            JSON.parse(attribute.trim())
        } catch (err) {
            setErrorMsg("Attribute is not a valid JSON")
            return false;
        }
        return true;
    }

    return <Card className={style.formCard}>
        <h1>Add Product</h1>
        <form onSubmit={onAdd}>
            <Dropdown data-pr-classname={style.item} panelClassName={`${style.items}`} className={style.dropdown} value={category} onChange={(e) => setCategory(e.value)} options={categories} optionLabel="name"
                placeholder="Category" /> <br />
            <InputText placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} className={style.inputText} />
            <InputNumber placeholder="Price..." value={price} onValueChange={(e) => setPrice(e.value)} suffix=" Ft" inputClassName={style.inputNumber} />
            <InputTextarea autoResize placeholder="Attributes (Please provide valid JSON)" value={attribute} onChange={(e) => setAttribute(e.target.value)} rows={5} cols={30} className={`${style.inputText} ${style.textArea}`} /><br />
            {discounts.length > 1 && <Dropdown data-pr-classname={style.item} panelClassName={style.items} className={style.dropdown} value={selectedDiscount} onChange={(e) => setSelectedDiscount(e.value)} options={discounts} optionLabel="name" placeholder="Discounts" />}<br />
            {errorMsg && <div className={style.error}>{errorMsg}</div>}
            <Button type="submit" className={style.addButton}>Add</Button>
            <Button onClick={onCancel}>Cancel</Button>
        </form>
    </Card>
}

export default ProductAdd;