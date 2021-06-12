import React from 'react';
import ChartContainer from './ChartContainer';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLabel,
  VictoryLegend,
} from 'victory';
import {AgeRange, Gender, Rates} from '../../../models/rates.model';

type Props = {
  title: string;
  data?: Rates[];
  field: string;
};

const AccumulativeRatesChart: React.FC<Props> = ({title, data, field}): JSX.Element => {
  if (!data) {
    return <div />;
  }

  const male = data
    .filter((e: Rates) => e.sexo === Gender.Male && e.rango !== null)
    .map((e) => ({
      x: AgeRange[e.rango],
      //@ts-ignore
      y: parseFloat(((e[field] * 100) / e.personas).toFixed(2)),
    }));


  const female = data
    .filter((e: Rates) => e.sexo === Gender.Female && e.rango !== null)
    .map((e) => ({
      x: AgeRange[e.rango],
      //@ts-ignore
      y: parseFloat(((e[field] * 100) / e.personas).toFixed(2)),
    }));

  return (
    <div>
      <ChartContainer title={title}>
        <VictoryChart horizontal height={480} padding={{top: 15, bottom: 25, right: 50, left: 50}}>
          <VictoryAxis />
          <VictoryGroup colorScale={['#e99347', '#533EDA']} height={500} offset={14}>
            <VictoryBar
              cornerRadius={{topLeft: 7, topRight: 7}}
              data={female}
              labelComponent={
                <VictoryLabel
                  backgroundPadding={{left: 5, right: 5, top: 2, bottom: 1}}
                  backgroundStyle={[{fill: '#e99347', opacity: 0.1, borderRadius: '40px'}]}
                  dy={-2}
                  style={{
                    fontFamily: 'Lato, Helvetica, sans-serif',
                    fontSize: 10,
                    fill: '#e99347',
                    zIndex: 999,
                  }}
                />
              }
              labels={({datum}) => datum.y + '%'}
              style={{
                data: {
                  width: 14,
                },
              }}
            />
            <VictoryBar
              cornerRadius={{topLeft: 7, topRight: 7}}
              data={male}
              labelComponent={
                <VictoryLabel
                  backgroundPadding={{left: 5, right: 5, top: 2, bottom: 1}}
                  backgroundStyle={[{fill: '#533EDA', opacity: 0.1}]}
                  dy={-2}
                  style={{
                    fontFamily: 'Lato, Helvetica, sans-serif',
                    fontSize: 10,
                    fill: '#533EDA',
                  }}
                />
              }
              labels={({datum}) => datum.y + '%'}
              style={{
                data: {
                  width: 14,
                },
              }}
            />
          </VictoryGroup>
          <VictoryLegend
            data={[
              {name: 'Masculino', symbol: {fill: '#533EDA'}},
              {name: 'Femenino', symbol: {fill: '#e99347'}},
            ]}
            gutter={20}
            labelComponent={<VictoryLabel style={{fontFamily: 'Lato, Helvetica, sans-serif'}} />}
            orientation="horizontal"
            x={145}
            y={450}
          />
        </VictoryChart>
      </ChartContainer>
    </div>
  );
};

export default AccumulativeRatesChart;
