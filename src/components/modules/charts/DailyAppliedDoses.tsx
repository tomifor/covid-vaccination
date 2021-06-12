import React from 'react';
import {DailyAppliedDosesData} from '../../../models/chart.model';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryLabel,
  VictoryLegend,
  VictoryVoronoiContainer,
  VictoryArea,
} from 'victory';
import ChartContainer from './ChartContainer';
import moment from 'moment';
import {numberFormat} from '../../../utils/contants';

type Props = {
  data: DailyAppliedDosesData;
  locationName?: string;
};

const DailyAppliedDoses = ({data, locationName}: Props) => {
  const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 576 : true;
  const total = data.totalDoses.map((e) => ({x: e.date, y: e.value}));
  const maxTotal = Math.max.apply(
    Math,
    total.map((o) => {
      return o.y;
    }),
  );

  const legend = [{name: locationName ? locationName : '', color: '#2d6ebd'}];

  const getTickFormat = (t: any) => {
    const dates = t.split('/');

    return dates[0] + '-' + dates[1];
  };

  return (
    <div>
      <ChartContainer customClass={'ar-chart'} title={'Dosis diarias aplicadas'}>
        <VictoryChart
          domain={{y: [0, maxTotal + maxTotal * 0.05]}}
          height={isMobile ? 300 : 230}
          padding={{top: 15, bottom: 25, right: 11, left: isMobile ? 30 : 20}}
          // containerComponent={
          //     <VictoryVoronoiContainer
          //         labels={({datum}) => `Fecha: ${datum.x}, \n ${datum.y}`}
          //     />
          // }
          scale={{x: 'time', y: 'linear'}}
        >
          <VictoryArea
            animate={{
              duration: 1000,
              onLoad: {duration: 1000},
            }}
            data={total}
            height={200}
            interpolation="natural"
            labelComponent={<VictoryLabel renderInPortal dy={-18} style={{fontSize: 6}} />}
            labels={({datum, index}) =>
              (index % 20 === 0 || datum.y === maxTotal) && index > 0 && !isMobile
                ? new Intl.NumberFormat(numberFormat).format(datum.y)
                : ''
            }
            minDomain={{y: 0}}
            name={'total-doses'}
            style={{
              data: {stroke: '#2d6ebd', strokeWidth: 1, strokeLinecap: 'round', fill: '#c0d8ff'},
              parent: {border: '1px solid #ccc'},
              labels: {
                fontSize: 10,
              },
            }}
          />
          <VictoryAxis
            dependentAxis
            style={{
              axis: {
                stroke: '#fff',
              },
            }}
            tickCount={8}
            tickFormat={(t) => `${t >= 1000 ? t / 1000 + 'k' : t}`}
            tickLabelComponent={
              <VictoryLabel style={{fontSize: isMobile ? '14px' : '8px'}} x={isMobile ? 26 : 17} />
            }
          />
          <VictoryAxis
            scale={{x: 'time'}}
            style={{
              axis: {
                stroke: '#fff',
                paddingRight: '40px',
              },
            }}
            tickCount={isMobile ? 5 : 10}
            tickFormat={getTickFormat}
            tickLabelComponent={
              <VictoryLabel
                angle={0}
                dy={-9}
                style={{fontSize: isMobile ? '12px' : '5px'}}
                y={isMobile ? 290 : 218}
              />
            }
          />
          <VictoryLegend
            colorScale={legend.map((elem) => elem.color)}
            data={legend.map((elem) => ({name: elem.name}))}
            gutter={10}
            orientation="horizontal"
            style={{
              labels: {fontWeight: 400, fontSize: isMobile ? 16 : 8},
            }}
            symbolSpacer={5}
            x={isMobile ? 35 : 20}
            y={20}
          />
        </VictoryChart>
      </ChartContainer>
    </div>
  );
};

export default DailyAppliedDoses;
