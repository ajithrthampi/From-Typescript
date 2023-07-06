import {useState} from "react"
import Stepper from "./Stepper"
import Address from "./stepPages/Address"
import BasicDetails from "./stepPages/BasicDetails"
import FileUploads from "./stepPages/FileUploads"
import MultiFileUpload from "./stepPages/MultiFileUpload"
import Status from "./stepPages/Status"
import StepperButton from "./StepperButton"

const Form = () => {

  const [ currentStep, setCurrentStep] = useState<number>(1)

  const steps = [
    "Basic Details",
    "Address",
    "File Upload",
    "Multi File Upload ",
    "Multi File Upload",
    "Status"
  ]

  const displayStep = (step: any) => {
    switch (step) {
      case 1:
        return <BasicDetails />
      case 2:
        return <Address />
      case 3:
        return <FileUploads />
      case 4:
        return <MultiFileUpload />
      case 5:
        return <Status />
        default :
    }
  }

  return (
    <div>
      <div className="bg-gray-300 min-h-screen  flex  items-center justify-center">
        <div className="bg-white flex rounded shadow-lg max-w-5xl p-5 items-center md:py-5 py-20 h-[600px] w-full relative">

          {/* Progress */}
          <div className="absolute top-0 right-0 left-0 ">
            <div className="bg-[#f8fbff] h-20 fle items-center  ">
              <Stepper />
            </div>
          </div>

          {/* Display Contents */}
          <div className="w-full">
            {/* <BasicDetails /> */}
            <Address />
          </div>

          {/* Navigate Button */}
          <div className="absolute bottom-0 bg-red-100 right-0 left-0 py-5">
            <StepperButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form