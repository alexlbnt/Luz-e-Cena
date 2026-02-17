import classNames from "classnames";
import Styles from "./styles.module.scss";

type ButtonProps = {
    variant: "default" | "icon";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;    

const Button = ({children, variant='default', ...rest}: ButtonProps) => {
    const classmap = {
        default: Styles.default,
        icon: Styles.icon
    }
    return (
        <button className={classNames(Styles.botao, classmap[variant])} {...rest}>
            {children}
        </button>
    )
}   

export default Button;