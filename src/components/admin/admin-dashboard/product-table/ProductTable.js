import React, { useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import style from './ProductTable.module.css';
import Card from "../../../ui/Card";


const ProductTable = props => {
    const columns = [
        {field: 'id', header: 'Id'},
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'price', header: 'Price'},
        {field: 'discountedPrice', header: 'Discounted Price'},
    ];

    

    return <Card className={style.container}>
        <DataTable cellClassName={style.cell} rowClassName={style.row} selectionMode="single" selection={props.selectedProduct} onSelectionChange={(e) => props.selectChangeHandler(e.value)} dataKey="id" removableSort={true} value={props.products} tableStyle={{ minWidth: '50rem' }}>
            {columns.map((col, i) => (
                <Column key={col.field} sortable field={col.field} header={col.header} />
            ))}
        </DataTable>
    </Card>
}

export default ProductTable;