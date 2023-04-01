import PropTyles from 'prop-types';
import { useState, forwardRef } from 'react';
import images from '@/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';
const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            ref={ref}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTyles.string,
    alt: PropTyles.string,
    className: PropTyles.string,
    fallback: PropTyles.string,
};
export default Image;
