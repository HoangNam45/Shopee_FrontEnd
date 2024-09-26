import classNames from 'classnames/bind';
import styles from './ImageUploader.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);
const ImageUploader = ({ text, quantity, inputName, onImageChange, productExistingImages }) => {
    const [imagesPreview, setImagesPreview] = useState([]);
    const [images, setImages] = useState([]);
    const [existingImages, setExistingImages] = useState(productExistingImages || []);
    console.log(existingImages);
    if (existingImages===)
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newImagePreview = URL.createObjectURL(file);
            setImagesPreview((prev) => [...prev, newImagePreview]);
            const updatedImages = [...images, file];
            setImages(updatedImages);
            onImageChange(updatedImages, inputName);
        }

        event.target.value = null;
    };

    const handleImageDelete = (index) => {
        setImagesPreview((prev) => prev.filter((_, i) => i !== index));
        setImages((prev) => {
            const updatedImages = prev.filter((_, i) => i !== index);
            onImageChange(updatedImages, inputName);
            return updatedImages;
        });
    };

    const handleExistingImageDelete = (index) => {
        setExistingImages((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {existingImages.map((image, index) => (
                <div className={cx('render_img_wrap')} key={index}>
                    <img
                        className={cx('render_img')}
                        src={`http://localhost:5000/uploads/images/productImages/${image}`}
                        alt={`upload-${index}`}
                    />
                    <div className={cx('render_img_delete')}>
                        <FontAwesomeIcon
                            className={cx('render_img_delete_icon')}
                            icon={faTrash}
                            onClick={() => handleExistingImageDelete(index)}
                        />
                    </div>
                </div>
            ))}
            {imagesPreview.map((image, index) => (
                <div className={cx('render_img_wrap')} key={existingImages.length + index}>
                    <img className={cx('render_img')} src={image} alt={`upload-${index}`} />
                    <div className={cx('render_img_delete')}>
                        <FontAwesomeIcon
                            className={cx('render_img_delete_icon')}
                            icon={faTrash}
                            onClick={() => handleImageDelete(index)}
                        />
                    </div>
                </div>
            ))}

            {imagesPreview.length + existingImages.length < quantity && (
                <div className={cx('add_img')}>
                    <label className={cx('add_img_content')}>
                        <i className={cx('add_img_icon')}>
                            <svg fill="currentColor" viewBox="0 0 23 21" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5 0A1.5 1.5 0 0120 1.5V12c-.49-.07-1.01-.07-1.5 0V1.5H2v12.65l3.395-3.408a.75.75 0 01.958-.087l.104.087L7.89 12.18l3.687-5.21a.75.75 0 01.96-.086l.103.087 3.391 3.405c.81.813.433 2.28-.398 3.07A5.235 5.235 0 0014.053 18H2a1.5 1.5 0 01-1.5-1.5v-15A1.5 1.5 0 012 0h16.5z"></path>
                                <path d="M6.5 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM18.5 14.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5H20v2.25a.75.75 0 01-1.5 0V18h-2.25a.75.75 0 010-1.5h2.25v-2.25z"></path>
                            </svg>
                        </i>
                        <div className={cx('add_img_count')}>
                            {text} ({imagesPreview.length}/{quantity})
                        </div>
                        <input name={inputName} type="file" style={{ display: 'none' }} onChange={handleImageUpload} />
                    </label>
                </div>
            )}
        </div>
    );
};

export default ImageUploader;
