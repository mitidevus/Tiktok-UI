import classNames from 'classnames';
import { useState, forwardRef } from 'react'; // Để biết ref của image ở đâu, cho tippy hiển thị đúng vị trí
import images from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) {
    // Fallback là cái thay thể khi lỗi
    const [fallback, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)} // styles.wrapper là css của Image, className là từ custom từ bên ngoài vào
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
