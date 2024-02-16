import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import { Header } from '../../components'

const LineChart = () => {
    const { currentMode } = useStateContext();
    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category='Line' title='Inflation Rate in Percentage' />
            <ChartComponent
                id='line-chart'
                height='420px'
                primaryXAxis={LinePrimaryXAxis}
                primaryYAxis={LinePrimaryYAxis}
                chartArea={{ boarder: { width: 0 } }}
                tooltip={{ enable: true }}
                background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            >
                <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
                <SeriesCollectionDirective>
                    {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}

export default LineChart