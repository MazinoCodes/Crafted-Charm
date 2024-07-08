
const StepProgress = ({ step }) => {
  return (
    <div>
      <div className="flex justify-center items-center mb-6 w-[40vw] phone:w-[80vw] tablet:w-[80vw] tablet:ml-24 phone:ml-20 ml-20">
        <div className="flex items-center w-[90vw] h-2 px-2 step-line phone:w-[82.5vw]">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center w-full">
              <div className={`rounded-full h-10 w-10 flex items-center justify-center z-[2] ${step >= s ? 'bg-[#343A40] text-white' : 'bg-[#d1d5db] text-gray-600'}`}>
                {s}
              </div>
              {s < 3 && <div className={`h-2 flex-1 ${step > s ? 'bg-[#343A40]' : 'bg-gray-300'}`}></div>}
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-row gap-10 pl-16 font-semibold  phone:gap-0 phone:w-full  phone:ml-7'>
        <p className='phone:text-center'>User Details</p>
        <p className='ml-8 phone:ml-[30px] phone:text-center phone:relative phone:right-3'>Delivery Details</p>
        <p className='ml-12 phone:mr-[40px] phone:relative phone:right-9'>Payment</p>
      </div>
    </div>
  );
};

export default StepProgress;
