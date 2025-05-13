export const validateField = (name, value) => {
    switch (name) {
        case 'productName':
            return value.trim() ? '' : 'Tên sản phẩm không được để trống.';
        case 'productDescription':
            return value.trim() ? '' : 'Mô tả sản phẩm không được để trống.';
        case 'productPrice':
            return value ? '' : 'Giá sản phẩm không được để trống.';
        case 'productStock':
            return value ? '' : 'Kho hàng không được để trống.';
        default:
            return '';
    }
};

export const validateImagesOnSubmit = (formData) => {
    const errors = {
        productImagesError: '',
        backGroundImageError: '',
    };
    // Check for product images: either new or existing
    const hasProductImages =
        (formData.productImages && formData.productImages.length > 0) ||
        (formData.productExistingImages && formData.productExistingImages.length > 0);
    if (!hasProductImages) {
        errors.productImagesError = 'Hình ảnh sản phẩm phải có ít nhất một hình ảnh.';
    }
    // Check for background image: either new or existing
    const hasBackGroundImage =
        (formData.productBackGroundImage && formData.productBackGroundImage.length > 0) ||
        (formData.productExistingBackGroundImage && formData.productExistingBackGroundImage !== '');
    if (!hasBackGroundImage) {
        errors.backGroundImageError = 'Ảnh bìa phải được chọn.';
    }
    return errors;
};
