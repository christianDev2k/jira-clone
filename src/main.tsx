import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { GlobalStyles } from 'components';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';

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
                    <App />
                </ConfigProvider>
            </StyleProvider>
        </GlobalStyles>
    </BrowserRouter>
    // </React.StrictMode>,
);
