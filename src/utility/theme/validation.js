import * as Yup from 'yup';

const login = Yup.object().shape({
  mobile: Yup.string()
    .required('The mobile number is required')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits'),
});

export default validation = {
  login,
};
