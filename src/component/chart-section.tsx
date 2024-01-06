'use client';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  Point,
  BubbleDataPoint,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Icon } from '@chakra-ui/react';
import { MdReceipt } from 'react-icons/md';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data: ChartData<
  'bar',
  (number | [number, number] | Point | BubbleDataPoint | null)[],
  unknown
> = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(16, 212, 129, 0.5)',
    },
    {
      label: 'Dataset 3',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const ChartSection = () => {
  return (
    <>
      <main
        className="flex min-h-screen flex-col items-center justify-between p-24 emer"
        id="chart-section"
      >
        <h2 className="font-extrabold text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-400">
            Dataset
          </span>{' '}
          <Icon as={MdReceipt} />
        </h2>
        <Bar options={options} data={data} />
      </main>
    </>
  );
};
