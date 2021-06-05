export interface ChartValue {
  value: number;
  date: string;
}

export interface DailyAppliedDosesData {
  doses1: ChartValue[];
  doses2: ChartValue[];
  totalDoses: ChartValue[];
}
