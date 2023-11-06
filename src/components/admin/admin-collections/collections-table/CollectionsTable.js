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
    const [expandedRows, setExpandedRows] = useState([])
    const [selectedColl, setSelectedColl] = useState()

    const headerTemplate = (data) => {
        return (
            <React.Fragment>
                <span className={style.headerSpan}>{`${data.collection_id} - ${data.collection_name}`}
                <input type="radio" name="collection" id={data.collection_id}  onChange={() => {setSelectedColl(data.collection_id)}} /></span>
            </React.Fragment>
        );
    };

    
    return <Card className={style.container}>
        <DataTable value={props.collections} rowGroupMode="subheader" groupRowsBy="collection_name"
                    sortMode="single" sortField="collection_id" sortOrder={1}
                    expandableRowGroups expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                    rowGroupHeaderTemplate={headerTemplate} tableStyle={{ minWidth: '50rem' }}
                    tableClassName={style.table}>
                <Column field="id" header="Id" className={style.collumn}></Column>
                <Column field="category" header="Category" className={style.collumn}></Column>
                <Column field="name" header="Name" className={style.collumn}></Column>
                <Column field="price" header="Price" className={style.collumn}></Column>
            </DataTable>
    </Card>
}

export default CollectionsTable;