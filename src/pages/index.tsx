import reactLogo from '~/assets/react.svg';
import viteLogo from '/vite.svg';
import './index.scss';
import { Heading, Icon } from '@chakra-ui/react';
import { asyncIncrement, selectCounterReducerCount } from '~/redux/counter/counter.reducer';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { FaRegEdit } from 'react-icons/fa';
import { FlowerGallery } from '~/component/flower-gallery';
import { ChartSection } from '~/component/chart-section';

export function Index() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCounterReducerCount);

  const increment = async () => {
    dispatch(asyncIncrement());
  };

  return (
    <>
      <main>
        <div className="flex justify-center space-x-6 py-6">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <Heading as="h1">Vite + React</Heading>
        <div className="card">
          <button className="btn" onClick={increment}>
            count is {count}
          </button>
          <p>
            <Icon as={FaRegEdit} />
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </main>

      <FlowerGallery />

      <ChartSection />
    </>
  );
}
