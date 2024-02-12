import React from 'react';
import { GridComponent, ColumnsDirective, Search, ColumnDirective, Toolbar, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';
import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy';

const Employees = () => {
    return (
        <div className='m-2 md:-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category="Page" title="Employees" />
            <GridComponent allowPaging allowSorting width='auto' dataSource={employeesData} toolbar={["Search"]}>
                <ColumnsDirective>
                    {employeesGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Search, Toolbar]} />
            </GridComponent>
        </div>
    );
}

export default Employees;
