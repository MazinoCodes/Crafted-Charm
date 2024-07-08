import  { useState } from 'react';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('#2A2D30');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const getCircleClass = (color) => {
    return `w-[60px] h-[60px] md:w-[45px] md:h-[45px] rounded-full bg-${color} border-4  ${selectedColor === color ? 'border-[#E4851A]' : ''}`;
  };

  return (
    <div className="flex gap-2">
      <label>
        <input
          type="radio"
          name="color"
          value="#2A2D30"
          checked={selectedColor === '#2A2D30'}
          onChange={() => handleColorChange('#2A2D30')}
          className="hidden"
        />
        <div className={`${getCircleClass('#2A2D30')} bg-[#2A2D30]`}></div>
      </label>
      <label>
        <input
          type="radio"
          name="color"
          value="#234566"
          checked={selectedColor === '#234566'}
          onChange={() => handleColorChange('#234566')}
          className="hidden"
        />
        <div className={`${getCircleClass('#234566')} bg-[#234566]`}></div>
      </label>
      <label>
        <input
          type="radio"
          name="color"
          value="#C6CFD7"
          checked={selectedColor === '#C6CFD7'}
          onChange={() => handleColorChange('#C6CFD7')}
          className="hidden"
        />
        <div className={`${getCircleClass('#C6CFD7')} bg-[#C6CFD7]`}></div>
      </label>
      <label>
        <input
          type="radio"
          name="color"
          value="#BBB1A7"
          checked={selectedColor === '#BBB1A7'}
          onChange={() => handleColorChange('#BBB1A7')}
          className='hidden'
        />
        <div className={`${getCircleClass('#BBB1A7')} bg-[#BBB1A7]`}></div>
      </label>
      <label>
        <input
          type="radio"
          name="color"
          value="#82572C"
          checked={selectedColor === '#82572C'}
          onChange={() => handleColorChange('#82572C')}
          className="hidden"
        />
        <div className={`${getCircleClass('#82572C')} bg-[#82572C]`}></div>
      </label>
    </div>
  );
};

export default ColorPicker;
