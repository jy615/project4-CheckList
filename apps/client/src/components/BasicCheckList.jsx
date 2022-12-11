import React from "react";
import { useState } from "react";
function BasicCheckList() {
  const [ischecked, setIsChecked] = useState(false);
  const [isExerciseTest, setIsExerciseTest] = useState(false);
  const [isDobutamineTest, setIsDobutamineTest] = useState(true);
  const handleCheck = () => {
    setIsChecked(!ischecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let logInData = Object.fromEntries(formData.entries());
    let allDataCorrect = false;
    console.log(logInData);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="px-10 py-20">
      <div className="container flex justify-evenly mx-auto">
          <label className="text-black-800 text-xl mt-6 font-extrabold container flex justify-evenly">
            Stress Test
          </label>
         
        </div>
        
        <div className="float-left text-gray-800 text-m container flex justify-between mx-auto">
          <label>Patient 2-Identifiers (name & NRIC/FIN)</label>
          <div className="ustify-between block">
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input name= "2identify" type="radio" className="w-4 h-4 rounded" value="yes"/>
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input name= "2identify" type="radio" className="w-4 h-4 rounded" value="no" />
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
                <input name= "consent" type="radio" className="w-4 h-4 rounded" value="yes" />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input name= "consent" type="radio" className="w-4 h-4 rounded" value="no" />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
        </div>

        <div className="float-left text-gray-800 text-m container flex justify-between mx-auto">
          <label>Drug Allergy (if any)</label>
          <div className="block">
            <div className="mt-2">
              <label className="float-right inline-flex items-center">
                <input name= "drugallergy" type="radio" className="w-4 h-4 rounded"  value="yes"/>
                <span className="ml-2">No</span>
              </label>
              <label className="float-right inline-flex items-center">
                <input name= "drugallergy" type="radio" className="w-4 h-4 rounded" value="no" />
                <span className="ml-2">Yes</span>
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
        <div className="float-left text-gray-600 font-bold text-xl mt-6 container flex justify-between mx-auto">
          <label>Patient's History</label>
        </div>
        <div className="float-left text-gray-800 text-m container flex justify-between mx-auto">
          <label>Hypertension</label>
          <div className="block">
            <div className="mt-2">
            <label className="float-right inline-flex items-center">
                <input name= "hypertension" type="radio" className="w-4 h-4 rounded"  value="yes"/>
                <span className="ml-2">No</span>
              </label>
              <label className="float-right inline-flex items-center">
                <input name= "hypertension" type="radio" className="w-4 h-4 rounded" value="no" />
                <span className="ml-2">Yes</span>
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
        <div className="float-left text-gray-800 text-m container flex justify-between mx-auto">
          <label>Dyslipidemia</label>
          <div className="block">
            <div className="mt-2">
            <label className="float-right inline-flex items-center">
                <input name= "dyslipidemia" type="radio" className="w-4 h-4 rounded"  value="yes"/>
                <span className="ml-2">No</span>
              </label>
              <label className="float-right inline-flex items-center">
                <input name= "dyslipidemia" type="radio" className="w-4 h-4 rounded" value="no" />
                <span className="ml-2">Yes</span>
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
        <div className="float-left text-gray-800 text-m container flex justify-between mx-auto">
          <label>Diabetes Mellitus</label>
          <div className="block">
            <div className="mt-2">
            <label className="float-right inline-flex items-center">
                <input name= "diabetic" type="radio" className="w-4 h-4 rounded"  value="yes"/>
                <span className="ml-2">No</span>
              </label>
              <label className="float-right inline-flex items-center">
                <input name= "diabetic" type="radio" className="w-4 h-4 rounded" value="no" />
                <span className="ml-2">Yes</span>
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
        <div className="float-left text-gray-800 text-m container flex justify-between mx-auto">
          <label>Family History of Heart Disease?</label>
          <div className="block">
            <div className="mt-2">
            <label className="float-right inline-flex items-center">
                <input name= "familyhistory" type="radio" className="w-4 h-4 rounded"  value="yes"/>
                <span className="ml-2">No</span>
              </label>
              <label className="float-right inline-flex items-center">
                <input name= "familyhistory" type="radio" className="w-4 h-4 rounded" value="no" />
                <span className="ml-2">Yes</span>
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
        <div className="float-left text-gray-800 text-m container flex justify-between mx-auto">
          <label>Smoker/ Ex-Smoker</label>
          <div className="block">
            <div className="mt-2">
            <label className="float-right inline-flex items-center">
                <input name= "smoker" type="radio" className="w-4 h-4 rounded"  value="yes"/>
                <span className="ml-2">No</span>
              </label>
              <label className="float-right inline-flex items-center">
                <input name= "smoker" type="radio" className="w-4 h-4 rounded" value="no" />
                <span className="ml-2">Yes</span>
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
        <div className="float-left text-gray-800 text-m container flex justify-between mx-auto">
          <label>Menopause</label>
          <div className="block">
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input name="menopause" type="radio" className="w-4 h-4 rounded" value="yes" />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input name="menopause" type="radio" className="w-4 h-4 rounded" value="no" />
                <span className="ml-2">No</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" className="w-4 h-4 rounded" name="menopause" value="NA" />
                <span className="ml-2">Not Applicable</span>
              </label>
            </div>
          </div>
        </div>
        {isExerciseTest && (
          <>
            <div className="float-left text-gray-800 text-m container flex justify-between mx-auto">
              <label>
                Taken Any Beta-blockers? (atenolol, bisoprolol etc)
              </label>
              <div className="block">
                <div className="mt-2">
                  <label className="float-right inline-flex items-center">
                    <input
                    name="betablockers"
                      type="radio"
                      className="w-4 h-4 rounded"
                      value="yes"
                    />
                    <span className="ml-2">No</span>
                  </label>
                  <label className="float-right inline-flex items-center">
                    <input name="betablockers" type="radio" className="w-4 h-4 rounded" value="no"/>
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input name="betablockers" type="radio" className="w-4 h-4 rounded" value="NA" />
                    <span className="ml-2">Not Applicable</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="float-left text-gray-800 text-m container flex justify-between mx-auto">
              <label>
                Is Patient Fit to Exercise? (leg injury/ operation done?)
              </label>
              <div className="block">
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="w-4 h-4 rounded"
                      name="fittoexercise"
                      value="yes"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" className="w-4 h-4 rounded" name="fittoexercise" value="no" />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>
            </div>
          </>
        )}
        {isDobutamineTest && (
          <>
            <div className="float-left text-gray-800 text-m container flex justify-between mx-auto">
              <label>
                Taken Any Beta-blockers? (atenolol, bisoprolol, metoprolol etc)
              </label>
              <div className="block">
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="w-4 h-4 rounded"
                      name="betablockers" 
                      value="yes"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" className="w-4 h-4 rounded" name="betablockers" value="no" />
                    <span className="ml-2">No</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" className="w-4 h-4 rounded" name="betablockers" value="NA" />
                    <span className="ml-2">Not Applicable</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="float-left text-gray-800 text-m container flex justify-between mx-auto">
              <label>Does The Patient Has Asthma?</label>
              <div className="block">
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="w-4 h-4 rounded"
                      name="asthma"
                      value="yes"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" className="w-4 h-4 rounded" name="asthma" value="no"/>
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="float-left text-gray-800 text-m container flex justify-between mx-auto">
              <label>Does The Patient Has Glaucoma?</label>
              <div className="block">
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="w-4 h-4 rounded"
                      name="glaucoma"
                      value="yes"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" className="w-4 h-4 rounded"   name="glaucoma" value="no"/>
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="text-gray-800 inline-block justify-between">
          <label htmlFor="test">Procedure Status:</label>
          <select id="test">
            <option defaultValue>Proceed</option>
            <option value="testconverted">Reschedule</option>
            <option value="testcancelled">Cancel</option>
          </select>
          <input
            id="remarks"
            type="text"
            name="remarks"
            className="text-gray-800 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex pl-3 text-sm border-gray-300 rounded border"
            placeholder="Additional Remarks"
          />
          
        </div>
        <div className="absolute right-0 -mt-10 float-right bg-blue-400  hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-full" >
            <button onSubmit={handleSubmit}>Confirm </button>
          </div>
          </div>
      </form>
    </>
  )
}

export default BasicCheckList;
