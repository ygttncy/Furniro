// BillingDetailsForm.js
import { useState } from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";

const BillingDetailsForm = ({ formData, handleChange }) => {
  const [countryOptions] = useState([
    "United States",
    "Canada",
    "Spain",
    "Italy",
    "Germany",
    "Turkey",
  ]);
  const [provinceOptions, setProvinceOptions] = useState([]);

  const handleCountryChange = (id, selectedCountry) => {
    handleChange(id, selectedCountry); 
    switch (selectedCountry) {
      case "United States":
        setProvinceOptions(["California", "Texas", "Florida", "New York"]);
        break;
      case "Canada":
        setProvinceOptions(["Ontario", "Quebec", "British Columbia", "Alberta"]);
        break;
      case "Spain":
        setProvinceOptions(["Madrid", "Barcelona", "Valencia", "Seville"]);
        break;
      case "Italy":
        setProvinceOptions(["Rome", "Milan", "Naples", "Turin"]);
        break;
      case "Germany":
        setProvinceOptions(["Berlin", "Bavaria", "Hamburg", "Hesse"]);
        break;
      case "Turkey":
        setProvinceOptions(["Istanbul", "Ankara", "Izmir", "Antalya"]);
        break;
      default:
        setProvinceOptions([]);
    }
  };

  return (
    <div className="billing-details-container">
      <div className="name-fields">
        <InputField
          id="firstName"
          label="First Name"
          type="text"
          value={formData.firstName || ""}
          onChange={handleChange}
          placeholder="Enter your first name"
        />
        <InputField
          id="lastName"
          label="Last Name"
          type="text"
          value={formData.lastName || ""}
          onChange={handleChange}
          placeholder="Enter your last name"
        />
      </div>

      <InputField
        id="country"
        label="Country/Region"
        type="select"
        value={formData.country || ""}
        onChange={(id, value) => handleCountryChange(id, value)}
        placeholder="Select your country"
        options={countryOptions}
      />

      <InputField
        id="streetAddress"
        label="Street Address"
        type="text"
        value={formData.streetAddress || ""}
        onChange={handleChange}
        placeholder="Enter your street address"
      />
      <InputField
        id="city"
        label="Town/City"
        type="text"
        value={formData.city || ""}
        onChange={handleChange}
        placeholder="Enter your town or city"
      />
      <InputField
        id="province"
        label="Province"
        type="select"
        value={formData.province || ""}
        onChange={handleChange}
        placeholder="Select your province"
        options={provinceOptions}
      />
      <InputField
        id="zipCode"
        label="ZIP Code"
        type="text"
        value={formData.zipCode || ""}
        onChange={handleChange}
        placeholder="Enter your ZIP code"
      />
      <InputField
        id="phone"
        label="Phone"
        type="text"
        value={formData.phone || ""}
        onChange={handleChange}
        placeholder="Enter your phone number"
      />
      <InputField
        id="email"
        label="Email Address"
        type="email"
        value={formData.email || ""}
        onChange={handleChange}
        placeholder="Enter your email address"
      />
    </div>
  );
};

BillingDetailsForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default BillingDetailsForm;
