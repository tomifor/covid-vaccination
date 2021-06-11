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
  const total = data.totalDoses.map((e) => ({x: e.date, y: e.value}));
  const maxTotal = Math.max.apply(
    Math,
    total.map((o) => {
      return o.y;
    }),
  );

  const legend = [{name: locationName ? locationName : '', color: '#2d6ebd'}];

  return (
    <div>
      <ChartContainer customClass={'ar-chart'} title={'Dosis diarias aplicadas'}>
        <VictoryChart
          domain={{y: [0, maxTotal + maxTotal * 0.05]}}
          height={210}
          padding={{top: 15, bottom: 25, right: 6, left: 20}}
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
            height={100}
            interpolation="natural"
            labelComponent={<VictoryLabel renderInPortal dy={-18} style={{fontSize: 6}} />}
            labels={({datum, index}) =>
              (index % 20 === 0 || datum.y === maxTotal) && index > 0
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
          {/*<VictoryAxis*/}
          {/*  dependentAxis*/}
          {/*  style={{*/}
          {/*    axis: {*/}
          {/*      stroke: '#636363',*/}
          {/*    },*/}
          {/*  }}*/}
          {/*  tickCount={8}*/}
          {/*  tickFormat={(t) => `${t >= 1000 ? t / 1000 + 'k' : t}`}*/}
          {/*  tickLabelComponent={<VictoryLabel style={{fontSize: '8px'}} x={17} />}*/}
          {/*/>*/}
          <VictoryAxis
            scale={{x: 'time'}}
            style={{
              axis: {
                stroke: '#fff',
                paddingRight: '40px',
              },
            }}
            tickCount={10}
            tickLabelComponent={
              <VictoryLabel angle={-60} dy={-9} style={{fontSize: '5px'}} y={200} />
            }
          />
          <VictoryLegend
            colorScale={legend.map((elem) => elem.color)}
            data={legend.map((elem) => ({name: elem.name}))}
            gutter={10}
            orientation="horizontal"
            style={{
              labels: {fontWeight: 400, fontSize: 8},
            }}
            symbolSpacer={5}
            x={25}
            y={20}
          />
        </VictoryChart>
      </ChartContainer>
    </div>
  );
};

export default DailyAppliedDoses;
