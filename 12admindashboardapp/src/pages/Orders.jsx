import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';

const Orders = () => {
    return (
        <div className='m-2 md:-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category="Page" title="Orders" />
            <GridComponent id='gridcomp' dataSource={ordersData} allowPaging={true} allowSorting>
                <ColumnsDirective>
                    {ordersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit]} />
            </GridComponent>
        </div>
    );
}

export default Orders;
