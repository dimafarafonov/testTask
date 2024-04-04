const Header = () => {
  return (
    <div class="mobile-data w-100 d-block d-lg-none">
      <div class="checkout-logo w-100 d-block">
        <img
          src={require("assets/images/logo-blue.png")}
          alt=""
          class="m-auto d-block"
        />
      </div>
      <div class="cus-breadcrumb w-100 d-block">
        <ul>
          <li>Shipping</li>
          <li class="active">Payment</li>
        </ul>
      </div>
    </div>
  );
};

export default Header
