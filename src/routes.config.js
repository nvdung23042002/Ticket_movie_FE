const routes = [
    {
      path: "/",
      element: <Layout component={Home} />,
      label: "Home"
    },
    {
      path: "/booking",
      element: <Layout component={Booking} />,
      label: "Booking"
    },
    {
      path: "/Payment",
      element: <div>Payment</div>,
      label: "Payment"
    }
  ];
  export default routes;