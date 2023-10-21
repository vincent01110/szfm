import React from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


const ProductTable = props => {

    const columns = [
        {field: 'id', header: 'Id'},
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'price', header: 'Price'},
        {field: 'discountedPrice', header: 'Discounted Price'},
    ];

    return <div>
        <DataTable value={props.products} tableStyle={{ minWidth: '50rem' }}>
            {columns.map((col, i) => (
                <Column key={col.field} field={col.field} header={col.header} />
            ))}
        </DataTable>
    </div>
}

export default ProductTable;