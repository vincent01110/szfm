import React, { useEffect, useState } from "react";
import style from "./CollectionsTable.module.css";
import Card from "../../../ui/Card";
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";


const columns = [
    {field: 'id', header: 'Id'},
    {field: 'name', header: 'Name'},
    {field: 'category', header: 'Category'},
    {field: 'price', header: 'Price'},
    {field: 'discountedPrice', header: 'Discounted Price'},
];

const CollectionsTable = props => {
    
    return <Card className={style.container}>
        
    </Card>
}

export default CollectionsTable;