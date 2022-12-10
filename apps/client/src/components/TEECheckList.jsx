import React from 'react'

function TEECheckList() {
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="flex justify-start">
        <label className="text-black-800 text-xl mt-6 font-extrabold container flex justify-evenly">
          Stress Test
        </label>
        <div className="bg-blue-400 mt-2 hover:bg-blue-700 text-white font-bold py-4 px-2 rounded-full">
          <button>Confirm </button>
        </div>
      </div>

      <div className="float-left text-gray-800 text-m container flex justify-between mx-auto">
        <label>Patient 2-Identifiers (name & NRIC/FIN)</label>
        <div className="ustify-between block">
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input type="radio" className="w-4 h-4 rounded" />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" className="w-4 h-4 rounded" />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
      </div>
      <div className="float-left text-gray-800 text-m container flex justify-between mx-auto">
        <label>Is Consent Form signed?</label>
        <div className="block">
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input type="radio" className="w-4 h-4 rounded" name="yes" />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" className="w-4 h-4 rounded" name="no" />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
      </div>

      <div className="float-left text-gray-800 text-m container flex justify-between mx-auto">
        <label>Drug Allergy (if any)</label>
        <div className="block">
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input type="radio" className="w-4 h-4 rounded" name="yes" />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" className="w-4 h-4 rounded" name="no" />
              <span className="ml-2">No</span>
            </label>
            <input
              id="remarks"
              type="text"
              name="remarks"
              className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex pl-3 text-sm border-gray-300 rounded border"
              placeholder="Remarks"
            />
          </div>
        </div>
      </div>
      </form>
      </>
  )
}

export default TEECheckList