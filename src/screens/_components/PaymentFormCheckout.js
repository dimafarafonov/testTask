import Input from "components/Input";


const PaymentFormCheckout = ({ register, setNextStage }) => {
  return (
    <div class="d-flex flex-wrap w-100">
      <div class="left-side flex-auto order-lg-0">
        <div class="checkout-logo w-100 d-none d-lg-block">
          <img src="images/logo-blue.png" alt="" />
        </div>
        <div class="cus-breadcrumb w-100 d-none d-lg-block">
          <ul>
            <li>Shipping</li>
            <li class="active">Payment</li>
          </ul>
        </div>
        <div class="payment-top w-100 d-block">
          <ul>
            <li class="d-flex w-100 flex-wrap justify-content-between">
              {" "}
              <span class="left-text">Contact</span>{" "}
              <span>
                <a href="#">Change</a>
              </span>{" "}
            </li>
            <li class="d-flex w-100 flex-wrap justify-content-between">
              {" "}
              <span class="left-text">Ship to</span>{" "}
              <span>
                <a href="#">Change</a>
              </span>{" "}
            </li>
            <li class="d-flex w-100 flex-wrap justify-content-between">
              {" "}
              <span class="left-text">Shipping method</span>{" "}
              <span>Standard</span>{" "}
              <span>
                <a href="#">Change</a>
              </span>{" "}
            </li>
          </ul>
        </div>
        <div class="payment-card-section w-100 d-block">
          <div class="checkout-title flex-auto">Payment</div>
          <p> All transactions are secure and encrypted. </p>
          <div class="payment-card-box w-100 d-block">
            <div class="payment-card-box-top w-100 d-flex flex-wrap justify-content-between">
              {" "}
              <span>Credit card </span>{" "}
              <span>
                <img src="images/card-logo.jpg" alt="" class="img-fluid" />
              </span>{" "}
            </div>
            <div class="payment-card-box-data w-100 d-block">
              <div class="row gx-3">
                <div class="col-12">
                  <div class="form-group w-100 d-block">
                    <Input
                      register={register}
                      fieldname="cardNumber"
                      type="text"
                      id="card-number"
                      placeholder="Card Number"
                      class="form-control checkout"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group w-100 d-block">
                    <Input
                      register={register}
                      fieldname="cardName"
                      type="text"
                      id="name"
                      placeholder="Name on card"
                      class="form-control checkout"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group w-100 d-block">
                    <Input
                      register={register}
                      fieldname="expiration"
                      type="text"
                      id="expiration"
                      placeholder="Expiration date (MM / YY)"
                      class="form-control checkout"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group w-100 d-block">
                    <Input
                      register={register}
                      fieldname="securiyCode"
                      type="text"
                      id="Security-code"
                      placeholder="Security code"
                      class="form-control checkout"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="billing-address-section w-100 d-block">
          <div class="checkout-title flex-auto">Billing address</div>
          <p> Select the address that matches your card or payment method. </p>
          <div class="radio-button-row w-100 d-block">
            <label class="control control-radio">
              Same as shipping address
              <input type="radio" name="billing-address" checked="checked" />
              <div class="control-indicator"></div>
            </label>
            <label class="control control-radio">
              Use a different billing address
              <input type="radio" name="billing-address" id="address-change" />
              <div class="control-indicator"></div>
            </label>
          </div>
        </div>
        <div class="btn-row w-100 d-flex justify-content-between">
          <div class="back-link" onClick={() => setNextStage(false)}>
            <a href="#">
              <svg
                focusable="false"
                aria-hidden="true"
                class="icon-svg icon-svg--color-accent icon-svg--size-10 previous-link__icon"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 10"
              >
                <path d="M8 1L7 0 3 4 2 5l1 1 4 4 1-1-4-4"></path>
              </svg>
              Return to shipping
            </a>
          </div>
          <button class="checkout-btn">Checkout now</button>
        </div>
        <div class="checkout-footer-link w-100 d-block">
          {" "}
          <a href="#">Refund policy</a> <a href="#">Shipping policy</a>{" "}
          <a href="#">Privacy policy</a> <a href="#">Terms of service</a>{" "}
        </div>
      </div>
    </div>
  );
};

export default PaymentFormCheckout;
