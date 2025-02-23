import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import Router from './components/Router';

const App = () => {
  return (
    <ErrorBoundary fallbackRender={({ error }) => <div>{error.message}</div>}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
