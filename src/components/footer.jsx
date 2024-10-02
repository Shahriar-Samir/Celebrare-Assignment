import React from 'react';
import { FaBold } from "react-icons/fa";
import { FiItalic } from "react-icons/fi";
import { FiUnderline } from "react-icons/fi";
import { RiText } from "react-icons/ri";

const Footer = ({addText,addFont,addFontSize,boldText,italicText,underlineText}) => {
  const fontSizes = Array.from({ length: 61 }, (_, index) => index)
  const fonts = [ 'Arial, sans-serif',
    'Georgia, serif',
    'Helvetica, sans-serif',
    'Times New Roman, serif',
    'Courier New, monospace',
    'Verdana, sans-serif']
  return (
        <div className='w-full h-[20vh]'>
        <div className='w-full h-[10vh] flex justify-center items-center gap-5 border-b-2 border-gray-300'>
        <select className='rounded-2xl border p-1 cursor-pointer' onChange={addFont} name='fonts' >
          {fonts.map(font=>{
            return <option key={font} value={font}>{font}</option>
          })}
        </select>
        <select className='' onChange={addFontSize} name='fontSize'>
          {fontSizes.map(fontsize=>{
            return <option key={fontsize+'px'} value={fontsize+'px'}>{fontsize}px</option>
          })}
        </select>
        <button className='p-1 border cursor-pointer'><FaBold onClick={boldText} className=''/></button>
        <button className='p-1 border cursor-pointer'><FiItalic onClick={italicText}/></button>
          <button className='p-1 border cursor-pointer'><FiUnderline onClick={underlineText}/></button>
        </div>
        <div className='w-full flex justify-center items-center py-5'>
            <button className='btn rounded-3xl ' onClick={addText}><RiText /> Add text</button>
        </div>
        </div>
    );
};

export default Footer;