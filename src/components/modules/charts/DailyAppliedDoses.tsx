import React from 'react';
import {DailyAppliedDosesData} from '../../../models/chart.model';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryLabel,
  VictoryLegend,
  VictoryVoronoiContainer,
} from 'victory';
import ChartContainer from './ChartContainer';
import moment from 'moment';

type Props = {
  data: DailyAppliedDosesData;
};

const DailyAppliedDoses = ({data}: Props) => {
  const total = data.totalDoses.map((e) => ({x: e.date, y: e.value}));
  const doses1 = data.doses1.map((e) => ({x: e.date, y: e.value}));
  const doses2 = data.doses2.map((e) => ({x: e.date, y: e.value}));
  const maxTotal = Math.max.apply(
    Math,
    total.map((o) => {
      return o.y;
    }),
  );

  const legend = [{name: 'Dosis diarias aplicadas', color: '#2d6ebd'}];

  return (
    <div>
      <ChartContainer customClass={'ar-chart'} title={'Argentina'}>
        <VictoryChart
          domain={{y: [0, maxTotal]}}
          height={210}
          padding={{top: 20, bottom: 25, right: 6, left: 20}}
          // containerComponent={
          //     <VictoryVoronoiContainer
          //         labels={({datum}) => `Fecha: ${datum.x}, \n ${datum.y}`}
          //     />
          // }
          scale={{x: 'time', y: 'linear'}}
        >
          <VictoryLine
            animate={{
              duration: 1000,
              onLoad: {duration: 1000},
            }}
            data={total}
            height={100}
            interpolation="natural"
            labelComponent={<VictoryLabel renderInPortal dx={-10} dy={-2} style={{fontSize: 8}} />}
            labels={({datum}) => (total && total[total.length - 1].y === datum.y ? datum.y : '')}
            minDomain={{y: 0}}
            name={'total-doses'}
            style={{
              data: {stroke: '#2d6ebd', strokeWidth: 1, strokeLinecap: 'round'},
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
                stroke: '#636363',
              },
            }}
            tickCount={8}
            tickFormat={(t) => `${t / 1000}k`}
            tickLabelComponent={<VictoryLabel style={{fontSize: '8px'}} x={17} />}
          />
          <VictoryAxis
            scale={{x: 'time'}}
            style={{
              axis: {
                stroke: '#636363',
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
