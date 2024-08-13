import { forwardRef, useState } from 'react';
import { Formik, Form, FormikHelpers, FormikProps } from 'formik';
import * as Yup from 'yup';
import Input from '@components/Input';
import './styles.scss';
import { useTranslation } from 'react-i18next';
import { QRCode, Radio } from 'antd';
import { showNotification } from '@components/CustomNotification';
import { useNavigate } from 'react-router-dom';

enum PaymentMethod {
  CREDIT = 1,
  PIX = 2
}

interface FormValues {
  name: string;
  email: string;
  cardName: string;
  cardNumber: string;
  validate: string;
  cvv: string;
}

interface Props {
  onSubmit: (values: FormValues) => void;
}

const FormPayment = forwardRef<FormikProps<FormValues>, Props>((_, ref) => {
  const { t } = useTranslation();
  const [paymentMethod, setPaymentMethod] = useState<number>(1);
  const navigate = useNavigate();

  const initialValues: FormValues = {
    name: '',
    email: '',
    cardName: '',
    cardNumber: '',
    validate: '',
    cvv: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('pages.payment.form.nameRequired')),
    email: Yup.string()
      .email(t('pages.payment.form.invalidEmail'))
      .required(t('pages.payment.form.emailRequired'))
  });

  const tPath = (path: string) => t(`pages.payment.form.${path}`);

  const handleSubmit = (_, { setSubmitting }: FormikHelpers<FormValues>) => {
    setSubmitting(false);
    showNotification('success', {
      message: 'Reserva efetuada com Sucesso',
      description: 'Você pode acompanhar os detalhes no e-mail de cadastro.'
    });
    navigate('/');
  };

  return (
    <Formik
      innerRef={ref}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnBlur={true}
      validateOnChange={true}
      validateOnMount={false}
    >
      {({ errors, touched, handleChange, values }) => (
        <Form className="form-payment-component">
          <div className="form-payment-component__content">
            <h2 className="form-payment-component__title">
              {tPath('identification')}
            </h2>
            <Input
              name="name"
              type="text"
              label={tPath('name')}
              value={values.name}
              onChange={handleChange}
              required={true}
              error={errors.name && touched.name ? errors.name : undefined}
            />

            <Input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              label={tPath('email')}
              required={true}
              error={errors.email && touched.email ? errors.email : undefined}
            />
          </div>

          <div className="form-payment-component__content">
            <h2 className="form-payment-component__title">
              {tPath('paymentMethod')}
            </h2>

            <Radio.Group
              onChange={e => setPaymentMethod(e.target.value)}
              value={paymentMethod}
              className="form-payment-component__container-radios"
            >
              <Radio value={PaymentMethod.CREDIT}>{tPath('creditCard')}</Radio>
              <Radio value={PaymentMethod.PIX}>{tPath('pix')}</Radio>
            </Radio.Group>

            {paymentMethod === PaymentMethod.CREDIT && (
              <>
                <Input
                  name="cardName"
                  type="text"
                  label={tPath('cardHolderName')}
                  value={values.cardName}
                  onChange={handleChange}
                  error={
                    errors.cardName && touched.cardName
                      ? errors.cardName
                      : undefined
                  }
                />

                <Input
                  name="cardNumber"
                  type="text"
                  label={tPath('cardNumber')}
                  placeholder={tPath('cardNumberPlaceholder')}
                  value={values.cardNumber}
                  onChange={handleChange}
                  error={
                    errors.cardNumber && touched.cardNumber
                      ? errors.cardNumber
                      : undefined
                  }
                />
                <div className="form-payment-component__container-inputs">
                  <div className="form-payment-component__container">
                    <Input
                      name="validate"
                      type="text"
                      label={tPath('expiryDate')}
                      placeholder="00/00"
                      value={values.validate}
                      onChange={handleChange}
                      error={
                        errors.validate && touched.validate
                          ? errors.validate
                          : undefined
                      }
                    />
                  </div>

                  <div className="form-payment-component__container">
                    <Input
                      name="cvv"
                      type="text"
                      label={tPath('cvc')}
                      placeholder="000"
                      value={values.cvv}
                      onChange={handleChange}
                      error={errors.cvv && touched.cvv ? errors.cvv : undefined}
                    />
                  </div>
                </div>
              </>
            )}

            {paymentMethod === PaymentMethod.PIX && (
              <div className="form-payment-component__content">
                <p>{tPath('pixInstructions')}</p>
                <QRCode value={'-'} />
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
});

export default FormPayment;
