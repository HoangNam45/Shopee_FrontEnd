import * as yup from 'yup';

const validationSchema = yup.object().shape({
    account: yup.string().required('Vui lòng nhập tài khoản'),
    password: yup.string().required('Vui lòng nhập mật khẩu'),
});

export default validationSchema;
