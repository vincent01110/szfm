import React, { useReducer, useState } from "react";
import Card from "../components/ui/Card";
import style from './AdminItem.module.css';
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

const categories = [
    {name: 'Phone', code: 'phone'},
    {name: 'Smart Watch', code: 'smart_watch'},
    {name: 'TV', code: 'tv'},
    {name: 'Laptop', code: 'laptop'},
    {name: 'Tablet', code: 'tablet'}
]

const AdminItem = () => {
    const [category, setCategory] = useState()
    const [name, setName] = useState()


    return <Card className={style.formCard}>
        <form>
            <Dropdown data-pr-classname={style.item} panelClassName={style.items} className={style.category} value={category} onChange={(e) => setCategory(e.value)} options={categories} optionLabel="name"
                placeholder="Category" /> <br />
            <InputText placeholder="Name..." onChange={(e) => setName(e.value)} className={style.textInput} />
        </form>
    </Card>
}

export default AdminItem;