const STRIPE_TEST = {
  id: "cs_test_a1RPMR0d4ju1I3JPvY3SmEqg193rz632I6TPYMDxZtsWrqrbPN54xXwc8S",
  object: "checkout.session",
  after_expiration: null,
  allow_promotion_codes: null,
  amount_subtotal: 110000,
  amount_total: 110000,
  automatic_tax: { enabled: false, liability: null, status: null },
  billing_address_collection: null,
  cancel_url: "http://localhost:5173/cancel",
  client_reference_id: null,
  client_secret: null,
  consent: null,
  consent_collection: null,
  created: 1710978825,
  currency: "usd",
  currency_conversion: null,
  custom_fields: [],
  custom_text: {
    after_submit: null,
    shipping_address: null,
    submit: null,
    terms_of_service_acceptance: null,
  },
  customer: null,
  customer_creation: "if_required",
  customer_details: null,
  customer_email: null,
  expires_at: 1711065225,
  invoice: null,
  invoice_creation: {
    enabled: false,
    invoice_data: {
      account_tax_ids: null,
      custom_fields: null,
      description: null,
      footer: null,
      issuer: null,
      metadata: {},
      rendering_options: null,
    },
  },
  livemode: false,
  locale: null,
  metadata: {},
  mode: "payment",
  payment_intent: null,
  payment_link: null,
  payment_method_collection: "if_required",
  payment_method_configuration_details: null,
  payment_method_options: { card: { request_three_d_secure: "automatic" } },
  payment_method_types: ["card"],
  payment_status: "unpaid",
  phone_number_collection: { enabled: false },
  recovered_from: null,
  setup_intent: null,
  shipping_address_collection: null,
  shipping_cost: null,
  shipping_details: null,
  shipping_options: [],
  status: "open",
  submit_type: null,
  subscription: null,
  success_url: "http://localhost:5173/success",
  total_details: { amount_discount: 0, amount_shipping: 0, amount_tax: 0 },
  ui_mode: "hosted",
  url: "https://checkout.stripe.com/c/pay/cs_test_a1RPMR0d4ju1I3JPvY3SmEqg193rz632I6TPYMDxZtsWrqrbPN54xXwc8S#fidkdWxOYHwnPyd1blpxYHZxWjA0SnJVREhOMTBObXVoamhHR2ZfblwzMTJWf2ZXdkZIc3BkaV1RSGpOZ0hhVFNIYlNKY3RDX0hwTUJMYkJtNUFmZFBnTHdAVEtmZ2hXVHRucEZCTHZPUX1UNTV2Y2M1XW93QycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
};
