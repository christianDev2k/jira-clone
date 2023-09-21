import { useRoutes } from 'react-router-dom';
import router from 'router';

function App() {
    return <div className='max-w-screen-2xl mx-auto'>{useRoutes(router)}</div>;
}

export default App;
