import { motion} from "framer-motion"


const Canvas = ({canvasRef,elements,position,selectItem,unSelectItem}) => {
    
    return (
        <div className="w-full bg-gray-100 h-[70vh]">
            <motion.div ref={canvasRef} onClick={unSelectItem} className='w-1/2 h-[67vh] bg-gray-200 mx-auto relative border-b-[3px] border-gray-400'>
            {elements.map(elInfo=>{
                return  <motion.h1 key={elInfo.id} onDragEnd={(e,info)=>position(elInfo.id,info,elInfo.info,elInfo)} id={elInfo.id} dragConstraints={canvasRef} dragElastic={0} dragMomentum={false} drag dragListener={true} className={`ms-2 mt-2 w-fit absolute max-w-full border border-transparent ${elInfo.bold? 'font-bold' : ''} ${elInfo.italic? 'italic' : ''} ${elInfo.underline? 'underline' : ''}`} style={{top:elInfo.info.y,left:elInfo.info.x,fontFamily:elInfo.fontFamily,fontSize:elInfo.fontSize}} onClick={selectItem} >Text</motion.h1> 
            })}
        </motion.div>
        </div>
    );
};

export default Canvas;  