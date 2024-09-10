import { useState ,  } from "react";

function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({});

  const validateStep = () => {
    const newErrors = {};

    // Validation for Step 1 (Personal Details)
    if (step === 0) {
      if (!formData.firstName) newErrors.firstName = "First Name is required";
      if (!formData.lastName) newErrors.lastName = "Last Name is required";
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
    }

    // Validation for Step 2 (Address)
    if (step === 1) {
      if (!formData.address) newErrors.address = "Address is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.country) newErrors.country = "Country is required";
    }

    // Validation for Step 3 (Payment Details)
    if (step === 2) {
      if (!formData.cardNumber) newErrors.cardNumber = "Card Number is required";
      if (!formData.expiryDate) newErrors.expiryDate = "Expiry Date is required";
      if (!formData.cvv) newErrors.cvv = "cvv is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleSubmit = () => {
    if (validateStep()) {
      console.log("Final Form Data:", formData);
      alert("Form Submitted Successfully");
    }
  };

  return (
    <div>
    <h1 className=" pt-9 text-center font-extrabold text-2xl capitalize mb-9">{step === 0 && "personal details"} {step === 1 && "address details"} {step === 2 && "payment details"}</h1>
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Step {step + 1}</h1>
      <form>
        {step === 0 && (
          <div>
            <div className="mb-4">
              <label>First Name</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full border p-2"
              />
              <p className="text-red-600">{errors.firstName}</p>
            </div>
            <div className="mb-4">
              <label>Last Name</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="block w-full border p-2"
              />
              <p className="text-red-600">{errors.lastName}</p>
            </div>
            <div className="mb-4">
              <label>Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full border p-2"
              />
              <p className="text-red-600">{errors.email}</p>
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <div className="mb-4">
              <label>Address</label>
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="block w-full border p-2"
              />
              <p className="text-red-600">{errors.address}</p>
            </div>
            <div className="mb-4">
              <label>City</label>
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="block w-full border p-2"
              />
              <p className="text-red-600">{errors.city}</p>
            </div>
            <div className="mb-4">
              <label>Country</label>
              <input
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="block w-full border p-2"
              />
              <p className="text-red-600">{errors.country}</p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="mb-4">
              <label>Card Number</label>
              <input
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="block w-full border p-2"
              />
              <p className="text-red-600">{errors.cardNumber}</p>
            </div>
            <div className="mb-4">
              <label>Expiry Date</label>
              <input
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="block w-full border p-2"
              />
              <p className="text-red-600">{errors.expiryDate}</p>
            </div>
            <div className="mb-4">
              <label>CVV</label>
              <input
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="block w-full border p-2"
              />
              <p className="text-red-600">{errors.cvv}</p>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-4">
          {step > 0 && (
            <button
              type="button"
              className="bg-gray-500 text-white p-2 rounded"
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
          )}
          {step < 2 ? (
            <button
              type="button"
              className="bg-blue-500 text-white p-2 rounded"
              onClick={handleNext}
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              className="bg-green-500 text-white p-2 rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
    </div>
  )
}

export default App
