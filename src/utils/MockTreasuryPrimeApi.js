const mockRequestTime = async () => new Promise((r) => setTimeout(r, 3000));

const accountApplicationPOST = async (account) => {
  await mockRequestTime();
};

const depositPOST = async (deposit) => {
  const { account_type, routing_number, amount, name_on_account } = deposit;
  const last4 = deposit.account_number.slice(-4);
  await mockRequestTime();
  return {
    ach: {
      account_type,
      last4,
      routing_number,
    },
    amount,
    card: null,
    created_at: "2019-05-15T03:54:28Z",
    id: "adpt_11g55kqm445g",
    name_on_account,
    updated_at: "2019-05-15T03:54:28Z",
    userdata: null,
  };
};

const personApplicationPOST = async (person) => {
  await mockRequestTime();
  return {
    bankdata: null,
    citizenship: person.citizenship,
    created_at: "2019-05-15T03:39:26Z",
    date_of_birth: person.date_of_birth,
    document_ids: [],
    email_address: person.email_address,
    first_name: person.first_name,
    gov_id: null,
    id: "apsn_11g55jve4455",
    last_name: person.last_name,
    mailing_address: null,
    middle_name: null,
    occupation: null,
    person_id: null,
    phone_number: person.phone_number,
    physical_address: {
      city: person.city,
      postal_code: person.postal_code,
      state: person.state,
      street_line_1: person.street_line_1,
      street_line_2: null,
      country: person.country,
    },
    secondary_email_address: null,
    updated_at: "2019-05-15T03:39:26Z",
    user_id: null,
    userdata: null,
  };
};

const mockTreasuryPrimeApi = {
  accountApplicationPOST,
  depositPOST,
  personApplicationPOST,
};

export default mockTreasuryPrimeApi;
