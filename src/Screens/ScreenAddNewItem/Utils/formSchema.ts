import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),
  age: Yup.number()
    .required('Age is required')
    .min(0, 'Age must be a positive number')
    .max(150, 'Age must be less than or equal to 150'),
  marks: Yup.number()
    .required('Marks are required')
    .min(0, 'Marks must be a positive number')
    .max(100, 'Marks cannot exceed 100'),
  city: Yup.string()
    .required('City is required')
    .min(2, 'City name must be at least 2 characters')
    .max(50, 'City name cannot exceed 50 characters'),
});

export default validationSchema;
