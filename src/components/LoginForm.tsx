import { Schemas } from '@components/Forms';

type Props = { onSuccess: () => void };
import { Form, Formik, Field, FormikHelpers, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object({
    email: Schemas.email,
    password: Schemas.password,
});
type FormValues = Yup.InferType<typeof LoginSchema>;
const initialValues: FormValues = { email: '', password: '' };

const LoginForm = ({ onSuccess }: Props) => {
    const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
        console.log('submitting values', values);
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            onSuccess();
            actions.setSubmitting(false);
        }, 1000);
    };

    return (
        <Formik initialValues={initialValues} validationSchema={LoginSchema} onSubmit={handleSubmit}>
            {() => (
                <Form className="p-4 space-y-4" noValidate>
                    <div>
                        <Field type="email" name="email" placeholder="Email" />
                        <ErrorMessage name="email" />
                    </div>
                    <div>
                        <Field type="password" name="password" placeholder="Password" />
                        <ErrorMessage name="password" />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
