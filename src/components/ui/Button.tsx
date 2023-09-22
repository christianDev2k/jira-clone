import { Button as ButtonA, ButtonProps as ButtonPropsA } from 'antd';

type ButtonProps = ButtonPropsA & {
    // định nghĩa thêm props của mình
};

const Button = (props: ButtonProps) => {
    return <ButtonA {...props} />;
};

export default Button;
