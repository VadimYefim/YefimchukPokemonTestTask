import './App.scss';

import PokemonRouter from './components/common/Router';

import withRouterProvider from './components/hocs/RouterProvider';
import withStoreProvider from './components/hocs/StoreProvider';

function App() {
    return <PokemonRouter />;
}

export default withStoreProvider(withRouterProvider(App));
