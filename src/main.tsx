import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// ~
import { GlobalStyles } from 'components';
import './index.css';
import App from './App.tsx';
import { store } from 'store';

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
    <BrowserRouter>
        <GlobalStyles>
            <StyleProvider hashPriority='high'>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#0695ff',
                        },
                    }}
                >
                    <Provider store={store}>
                        <App />
                    </Provider>
                </ConfigProvider>
            </StyleProvider>
        </GlobalStyles>
    </BrowserRouter>
    // </React.StrictMode>,
);
