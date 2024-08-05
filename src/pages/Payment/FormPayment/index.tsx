import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Input from '@components/Input';
import './styles.scss';
import { useTranslation } from 'react-i18next';

interface FormValues {
  name: string;
  email: string;
  cardName: string;
  cardNumber: string;
  validate: string;
  cvv: string;
}

const validationSchema = Yup.object({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório')
});

const FormPayment: React.FC = () => {
  const initialValues: FormValues = {
    name: '',
    email: '',
    cardName: '',
    cardNumber: '',
    validate: '',
    cvv: ''
  };

  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };
  const { t } = useTranslation();

  const tPath = (path: string) => t(`pages.payment.form.${path}`);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      className={'form-payment-component'}
    >
      <Form className="form-payment-component">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <h2 className="form-payment-component__title">
            {tPath('identification')}
          </h2>
          <div>
            <Input
              name="name"
              type="text"
              label={tPath('name')}
              required={true}
            />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <Input
              name="email"
              type="email"
              label={tPath('email')}
              required={true}
            />
            <ErrorMessage name="email" component="div" />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <h2 className="form-payment-component__title">
            {tPath('paymentMethod')}
          </h2>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <label>
              <input type="radio" id="css" name="fav_language" value="CSS" />
              {tPath('creditCard')}
            </label>
            <br />
            <label>
              <input type="radio" id="html" name="fav_language" value="HTML" />
              {tPath('pix')}
            </label>
            <br />
          </div>

          <div>
            <Input
              name="cardName"
              type="text"
              label={tPath('cardHolderName')}
            />

            <ErrorMessage name="cardName" component="div" />
          </div>

          <div>
            <Input
              name="cardNumber"
              type="text"
              label={tPath('cardNumber')}
              placeholder={tPath('cardNumberPlaceholder')}
            />
            <ErrorMessage name="cardNumber" component="div" />
          </div>
          <div className="form-payment-component__container-inputs">
            <div style={{ width: '100%' }}>
              <Input
                name="validate"
                type="text"
                label={tPath('expiryDate')}
                placeholder="00/00"
              />
              <ErrorMessage name="validate" component="div" />
            </div>

            <div style={{ width: '100%' }}>
              <Input
                name="cvv"
                type="text"
                label={tPath('cvc')}
                placeholder="000"
              />
              <ErrorMessage name="cvv" component="div" />
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default FormPayment;
