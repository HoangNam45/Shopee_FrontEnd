import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    disabled = false,
    sub_primary = false,
    primary_text = false,
    small = false,
    medium = false,
    large = false,
    full_width = false,
    text = false,
    size_auto = false,
    dashed_border = false,
    quite_small = false,
    children,
    onClick,
    className,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    //Remove event listener when btn disabled
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    } else {
        Comp = 'button';
    }

    const classes = cx('button', {
        primary,
        medium,
        large,
        small,
        full_width,
        text,
        dashed_border,
        size_auto,
        quite_small,
        primary_text,
        sub_primary,
        disabled,
        [className]: className,
    });

    return (
        //type
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}
export default Button;
