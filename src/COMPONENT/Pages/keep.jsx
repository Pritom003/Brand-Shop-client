
"use client";
import { Button, Popover } from "keep-react";
import image from '../../assets/image/1702371728968[2333].png'

export const PopoverComponent = () => {
  return (
  <div className="flex justify-center align-bottom items-center">
      <Popover 
    position="top"
    // style={{ background: 'linear-gradient(135deg, #7B64B6, #C898B9)' }}
    className="bg-gradient-to-r from-indigo-500 ..."
      trigger="hover"
      title="Hello I am Priotm"
      description="Feel free to explore this website and if you have any comment pleae  mail me 'njahanpritom65@gmail.com' "
    >
      <Button  className="rounded-full" size="xs "><img src={image} className="w-[200px] rounded-full" alt="" /></Button>
    </Popover>
  </div>
  );
}
