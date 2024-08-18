import * as yup from 'yup';

const validationSchema = yup.object().shape({
    account: yup.string().required('Vui lòng nhập tài khoản'),
    password: yup.string().min(6, 'Mật khẩu cần ít nhất 6 ký tự').required('Vui lòng nhập mật khẩu'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp')
        .required('Vui lòng điền mục này'),
});

export default validationSchema;
