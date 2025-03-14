
function claimForm() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
    <h1 className="text-2xl font-bold text-center text-black-600 mb-6">Medical Claim Form</h1>

    <form className="space-y-8">
      {/* Patient Information Section */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Patient Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="patient-name" className="mb-2 font-medium">Full Name</label>
            <input type="text" id="patient-name" className="p-2 border border-gray-300 rounded-md" placeholder="Enter full name" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="patient-dob" className="mb-2 font-medium">Date of Birth</label>
            <input type="date" id="patient-dob" className="p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="patient-address" className="mb-2 font-medium">Address</label>
            <input type="text" id="patient-address" className="p-2 border border-gray-300 rounded-md" placeholder="Enter address" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="patient-contact" className="mb-2 font-medium">Contact Details</label>
            <input type="tel" id="patient-contact" className="p-2 border border-gray-300 rounded-md" placeholder="Enter contact number" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="policy-number" className="mb-2 font-medium">Policy Number</label>
            <input type="text" id="policy-number" className="p-2 border border-gray-300 rounded-md" placeholder="Enter policy number" />
          </div>
        </div>
      </div><br/><br/>

      {/* Insurance Information Section */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Insurance Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="insurance-provider" className="mb-2 font-medium">Health Insurance Provider</label>
            <input type="text" id="insurance-provider" className="p-2 border border-gray-300 rounded-md" placeholder="Enter provider name" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="policyholder-details" className="mb-2 font-medium">Policyholder's Details</label>
            <input type="text" id="policyholder-details" className="p-2 border border-gray-300 rounded-md" placeholder="Enter policyholder details" />
          </div>
        </div>
      </div>
      <br/><br/>


      {/* Treatment Information Section */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Treatment Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="diagnosis" className="mb-2 font-medium">Diagnosis/Medical Condition</label>
            <textarea id="diagnosis" className="p-2 border border-gray-300 rounded-md" placeholder="Enter diagnosis" rows="4"></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="treatment-description" className="mb-2 font-medium">Description of Treatment</label>
            <textarea id="treatment-description" className="p-2 border border-gray-300 rounded-md" placeholder="Enter treatment description" rows="4"></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="dates-of-service" className="mb-2 font-medium">Dates of Service</label>
            <input type="text" id="dates-of-service" className="p-2 border border-gray-300 rounded-md" placeholder="Enter service dates" />
          </div>
        </div>
      </div>
      <br/><br/>


      {/* Healthcare Provider Information Section */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Healthcare Provider Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="provider-name" className="mb-2 font-medium">Healthcare Provider Name</label>
            <input type="text" id="provider-name" className="p-2 border border-gray-300 rounded-md" placeholder="Enter provider name" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="provider-license" className="mb-2 font-medium">License/Registration Number</label>
            <input type="text" id="provider-license" className="p-2 border border-gray-300 rounded-md" placeholder="Enter license number" />
          </div>
        </div>
      </div>
      <br/><br/>


      {/* Hospital and Emergency Information Section */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Hospital & Emergency Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="hospital-name" className="mb-2 font-medium">Hospital Name</label>
            <input type="text" id="hospital-name" className="p-2 border border-gray-300 rounded-md" placeholder="Enter hospital name" />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Emergency/Non-Emergency</label>
            <div className="flex items-center">
              <input type="checkbox" id="emergency" className="mr-2" />
              <label htmlFor="emergency" className="font-medium">Emergency</label>
            </div>
            
          </div>
        </div>
      </div>
      <br/><br/>


      {/* Medication and Pre-existing Conditions Section */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Medication & Pre-existing Conditions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="medication-type" className="mb-2 font-medium">Type of Medication</label>
            <input type="text" id="medication-type" className="p-2 border border-gray-300 rounded-md" placeholder="Enter medication type (e.g., generic, branded)" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="pre-existing-conditions" className="mb-2 font-medium">Pre-existing Conditions</label>
            <textarea id="pre-existing-conditions" className="p-2 border border-gray-300 rounded-md" placeholder="Enter pre-existing conditions" rows="4"></textarea>
          </div>
        </div>
      </div>
      <br/><br/>


      {/* Expense Details Section */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Expense Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="itemized-services" className="mb-2 font-medium">Itemized List of Services</label>
            <textarea id="itemized-services" className="p-2 border border-gray-300 rounded-md" placeholder="Enter services rendered" rows="4"></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="service-cost" className="mb-2 font-medium">Cost of  Service</label>
            <input type="text" id="service-cost" className="p-2 border border-gray-300 rounded-md" placeholder="Enter cost of each service" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="total-amount" className="mb-2 font-medium">Total Amount Paid</label>
            <input type="text" id="total-amount" className="p-2 border border-gray-300 rounded-md" placeholder="Enter total amount paid" />
          </div>
        </div>
      </div>
      <br/><br/>


      {/* Proof of Payment Section */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Proof of Payment</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="receipts" className="mb-2 font-medium">Receipts or Invoices</label>
            <input type="file" id="receipts" className="p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="payment-method" className="mb-2 font-medium">Payment Method</label>
            <input type="text" id="payment-method" className="p-2 border border-gray-300 rounded-md" placeholder="Enter payment method" />
          </div>
        </div>
      </div>
      <br/><br/>


      {/* Signature Section */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Signature</h2>
        <div className="flex flex-col">
          <label htmlFor="signature" className="mb-2 font-medium">Patient's Signature</label>
          <input type="text" id="signature" className="p-2 border border-gray-300 rounded-md" placeholder="Enter signature" />
        </div>
      </div>

      <div className="text-center mt-8">
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-full">Submit Claim</button>
      </div>
    </form>
  </div>
  )
}
export default claimForm;