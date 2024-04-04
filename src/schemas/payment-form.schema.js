import * as yup from "yup";

const PaymentSchema = yup.object().shape({
  email: yup.string().email().required(),
  emailCheckbox: yup.boolean().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  discount: yup.string().required(),
  address: yup.string().required(),
  apartment: yup.string().required(),
  city: yup.string().required(),
  zipCode: yup.string().required(),
  tel: yup.string().required(),
});

export default PaymentSchema;
