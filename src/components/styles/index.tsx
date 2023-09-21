import { ReactNode } from 'react';
import '../../assets/app.css';

const GlobalStyles: React.FC<{ children: ReactNode }> = ({ children }) => {
    return children;
};

export default GlobalStyles;
