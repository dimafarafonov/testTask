import Input from "components/Input";

const PaymentForm = ({ register, isFormValid }) => {
  return (
    <div class="left-side flex-auto order-lg-0">
      <div class="checkout-logo w-100 d-none d-lg-block">
        <img src={require("assets/images/logo-blue.png")} alt="" />
      </div>
      <div class="cus-breadcrumb w-100 d-none d-lg-block">
        <ul>
          <li>Shipping </li>
          <li class="active">Payment</li>
        </ul>
      </div>
      <div class="left-top-row w-100 d-flex flex-wrap justify-content-between">
        <div class="checkout-title flex-auto">Contact</div>
        <div class="email-box w-100 d-block">
          <Input
            register={register}
            fieldname="email"
            type="email"
            id="email"
            class="form-control checkout"
            placeholder="Email"
          />
          <div class="checkbox-row w-100 d-block">
            <label class="control control-checkbox">
              Email me with news and offers
              <Input
                register={register}
                type="checkbox"
                fieldname="emailCheckbox"
              />
              <div class="control-indicator"></div>
            </label>
          </div>
        </div>
      </div>
      <div class="checkout-form-section w-100 d-block">
        <div class="checkout-title flex-auto">Shipping address</div>
        <div class="checkout-form w-100 d-block">
          <div class="row gx-3">
            <div class="col-12">
              <div class="form-group">
                <select id="country" class="form-select checkout">
                  <option
                    data-code="US"
                    data-pure-numeric-postal-code="false"
                    value="United States"
                  >
                    {" "}
                    United States{" "}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <Input
                  register={register}
                  fieldname="firstName"
                  type="text"
                  id="first-name"
                  class="form-control checkout"
                  placeholder="First name (optional)"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <Input
                  register={register}
                  fieldname="lastName"
                  type="text"
                  id="last-name"
                  class="form-control checkout"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <Input
                  register={register}
                  fieldname="address"
                  type="text"
                  id="address"
                  class="form-control checkout"
                  placeholder="Address"
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <Input
                  register={register}
                  fieldname="apartment"
                  type="text"
                  id="apartment"
                  class="form-control checkout"
                  placeholder="Apartment, suite, etc. (optional)"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <Input
                  register={register}
                  fieldname="city"
                  type="text"
                  id="city"
                  class="form-control checkout"
                  placeholder="City"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <select id="state" class="form-select checkout">
                  <option>State</option>
                  <option data-alternate-values='["Alabama"]' value="AL">
                    Alabama
                  </option>
                  <option data-alternate-values='["Alaska"]' value="AK">
                    Alaska
                  </option>
                  <option data-alternate-values='["Arizona"]' value="AZ">
                    Arizona
                  </option>
                  <option data-alternate-values='["Arkansas"]' value="AR">
                    Arkansas
                  </option>
                  <option data-alternate-values='["California"]' value="CA">
                    California
                  </option>
                  <option data-alternate-values='["Colorado"]' value="CO">
                    Colorado
                  </option>
                  <option data-alternate-values='["Connecticut"]' value="CT">
                    Connecticut
                  </option>
                  <option data-alternate-values='["Delaware"]' value="DE">
                    Delaware
                  </option>
                  <option data-alternate-values='["Florida"]' value="FL">
                    Florida
                  </option>
                  <option data-alternate-values='["Georgia"]' value="GA">
                    Georgia
                  </option>
                  <option data-alternate-values='["Hawaii"]' value="HI">
                    Hawaii
                  </option>
                  <option data-alternate-values='["Idaho"]' value="ID">
                    Idaho
                  </option>
                  <option data-alternate-values='["Illinois"]' value="IL">
                    Illinois
                  </option>
                  <option data-alternate-values='["Indiana"]' value="IN">
                    Indiana
                  </option>
                  <option data-alternate-values='["Iowa"]' value="IA">
                    Iowa
                  </option>
                  <option data-alternate-values='["Kansas"]' value="KS">
                    Kansas
                  </option>
                  <option data-alternate-values='["Kentucky"]' value="KY">
                    Kentucky
                  </option>
                  <option data-alternate-values='["Louisiana"]' value="LA">
                    Louisiana
                  </option>
                  <option data-alternate-values='["Maine"]' value="ME">
                    Maine
                  </option>
                  <option data-alternate-values='["Maryland"]' value="MD">
                    Maryland
                  </option>
                  <option data-alternate-values='["Massachusetts"]' value="MA">
                    Massachusetts
                  </option>
                  <option data-alternate-values='["Michigan"]' value="MI">
                    Michigan
                  </option>
                  <option data-alternate-values='["Minnesota"]' value="MN">
                    Minnesota
                  </option>
                  <option data-alternate-values='["Mississippi"]' value="MS">
                    Mississippi
                  </option>
                  <option data-alternate-values='["Missouri"]' value="MO">
                    Missouri
                  </option>
                  <option data-alternate-values='["Montana"]' value="MT">
                    Montana
                  </option>
                  <option data-alternate-values='["Nebraska"]' value="NE">
                    Nebraska
                  </option>
                  <option data-alternate-values='["Nevada"]' value="NV">
                    Nevada
                  </option>
                  <option data-alternate-values='["New Hampshire"]' value="NH">
                    New Hampshire
                  </option>
                  <option data-alternate-values='["New Jersey"]' value="NJ">
                    New Jersey
                  </option>
                  <option data-alternate-values='["New Mexico"]' value="NM">
                    New Mexico
                  </option>
                  <option data-alternate-values='["New York"]' value="NY">
                    New York
                  </option>
                  <option data-alternate-values='["North Carolina"]' value="NC">
                    North Carolina
                  </option>
                  <option data-alternate-values='["North Dakota"]' value="ND">
                    North Dakota
                  </option>
                  <option data-alternate-values='["Ohio"]' value="OH">
                    Ohio
                  </option>
                  <option data-alternate-values='["Oklahoma"]' value="OK">
                    Oklahoma
                  </option>
                  <option data-alternate-values='["Oregon"]' value="OR">
                    Oregon
                  </option>
                  <option data-alternate-values='["Pennsylvania"]' value="PA">
                    Pennsylvania
                  </option>
                  <option data-alternate-values='["Puerto Rico"]' value="PR">
                    Puerto Rico
                  </option>
                  <option data-alternate-values='["Rhode Island"]' value="RI">
                    Rhode Island
                  </option>
                  <option data-alternate-values='["South Carolina"]' value="SC">
                    South Carolina
                  </option>
                  <option data-alternate-values='["South Dakota"]' value="SD">
                    South Dakota
                  </option>
                  <option data-alternate-values='["Tennessee"]' value="TN">
                    Tennessee
                  </option>
                  <option data-alternate-values='["Texas"]' value="TX">
                    Texas
                  </option>
                  <option data-alternate-values='["Utah"]' value="UT">
                    Utah
                  </option>
                  <option data-alternate-values='["Vermont"]' value="VT">
                    Vermont
                  </option>
                  <option data-alternate-values='["Virginia"]' value="VA">
                    Virginia
                  </option>
                  <option data-alternate-values='["Washington"]' value="WA">
                    Washington
                  </option>
                  <option
                    data-alternate-values='["District of Columbia"]'
                    value="DC"
                  >
                    Washington DC
                  </option>
                  <option data-alternate-values='["West Virginia"]' value="WV">
                    West Virginia
                  </option>
                  <option data-alternate-values='["Wisconsin"]' value="WI">
                    Wisconsin
                  </option>
                  <option data-alternate-values='["Wyoming"]' value="WY">
                    Wyoming
                  </option>
                  <option
                    data-alternate-values='["Armed Forces Pacific"]'
                    value="AP"
                  >
                    Armed Forces Pacific
                  </option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <Input
                  register={register}
                  fieldname="zipCode"
                  type="text"
                  id="zipCode"
                  class="form-control checkout"
                  placeholder="Zip code"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <Input
                  register={register}
                  fieldname="tel"
                  type="tel"
                  id="phone"
                  class="form-control checkout"
                  placeholder="Phone"
                />
              </div>
            </div>
          </div>
          <div class="btn-row w-100 d-flex justify-content-end">
            <button class="checkout-btn" disabled={!isFormValid}>
              Continue to payment
            </button>
          </div>
        </div>
      </div>
      <div class="checkout-footer-link w-100 d-block">
        <a href="#">Refund policy</a> <a href="#">Shipping policy</a>{" "}
        <a href="#">Privacy policy</a> <a href="#">Terms of service</a>{" "}
      </div>
    </div>
  );
};

export default PaymentForm;
