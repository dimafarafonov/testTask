import "css/payment.css";
import { useState } from "react";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import PaymentSchema from "schemas/payment-form.schema";
import Header from "components/Header";
import Total from "screens/_components/PaymentFormTotal";
import PaymentFormFields from "screens/_components/PaymentFormFields";
import PaymentFormCheckout from "screens/_components/PaymentFormCheckout";

const PaymentForm = () => {
  const [nextStage, setNextStage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PaymentSchema),
  });
  const onSubmitHandler = (data) => {
    setNextStage(true);
    console.log({ data });
  };

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <div id="wrapper w-100 d-block">
      <div class="container small-container">
        <Header />
        <div class="d-flex flex-wrap w-100">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <Total register={register} />
            {nextStage ? (
              <PaymentFormCheckout register={register} />
            ) : (
              <PaymentFormFields
                register={register}
                isFormValid={isFormValid}
                setNextStage
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
