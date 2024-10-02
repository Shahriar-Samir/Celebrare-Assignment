
import Header from "./components/header";
import Canvas from "./components/canvas";
import Footer from "./components/footer";
import { useRef, useState } from "react";


const App = () => {
  const canvasRef = useRef() 
  const [memory,setMemory] = useState([])
  const [elements,setElements] = useState([])
  const [removedItems,setRemovedItems] = useState([])
  const [id,setId] = useState(0)
  const [selectedEl,setSelectedItem] = useState()




  const addFontSize = (e)=>{
    if(!selectedEl){
      return 
    }
      selectedEl.style.fontSize = e.target.value
      setElements(oldEls=>{
        return oldEls.map(el=>{
            const parsedId = parseInt(selectedEl.id)
              if(parsedId === el.id){
                setMemory(oldMemo=>{
                  return [...oldMemo,{...el,fontSize:e.target.value,exist:true,memoId:oldMemo[oldMemo.length-1].memoId+1,textChanged:true,info:{x:oldMemo[oldMemo.length-1].info.x,y:oldMemo[oldMemo.length-1].info.y}}]
                })
                return {...el,fontSize:e.target.value}
              }
              else{
                return el
              }
        })
      })
      setRemovedItems([])
  }

  const addFont = (e)=>{
    if(!selectedEl){
      return 
    }
      selectedEl.style.fontFamily = e.target.value
      setElements(oldEls=>{
        return oldEls.map(el=>{
            const parsedId = parseInt(selectedEl.id)
              if(parsedId === el.id){
                setMemory(oldMemo=>{
                  return [...oldMemo,{...el,fontFamily:e.target.value,exist:true,memoId:oldMemo[oldMemo.length-1].memoId+1,textChanged:true,info:{x:oldMemo[oldMemo.length-1].info.x,y:oldMemo[oldMemo.length-1].info.y}}]
                })
                return {...el,fontFamily:e.target.value}
              }
              else{
                return el
              }
        })
      })
      setRemovedItems([])
  }

  const boldText = ()=>{
    if(!selectedEl){
      return 
    }
    setElements(oldEls=>{
      return oldEls.map(el=>{
          const parsedId = parseInt(selectedEl.id)
            if(parsedId === el.id){
              setMemory(oldMemo=>{
                return [...oldMemo,{...el,bold:!el.bold,exist:true,memoId:oldMemo[oldMemo.length-1].memoId+1,textChanged:true,info:{x:oldMemo[oldMemo.length-1].info.x,y:oldMemo[oldMemo.length-1].info.y}}]
              })
              return {...el,bold:!el.bold}
            }
            else{
              return el
            }
      })
    })
    setRemovedItems([])
  }
  const italicText = ()=>{
    if(!selectedEl){
      return 
    }
    setElements(oldEls=>{
      return oldEls.map(el=>{
          const parsedId = parseInt(selectedEl.id)
            if(parsedId === el.id){
              setMemory(oldMemo=>{
                return [...oldMemo,{...el,italic:!el.italic,exist:true,memoId:oldMemo[oldMemo.length-1].memoId+1,textChanged:true,info:{x:oldMemo[oldMemo.length-1].info.x,y:oldMemo[oldMemo.length-1].info.y}}]
              })
              return {...el,italic:!el.italic}
            }
            else{
              return el
            }
      })
    })
    setRemovedItems([])
  }

  const underlineText = (e)=>{
    if(!selectedEl){
      return 
    }
    setElements(oldEls=>{
      return oldEls.map(el=>{
          const parsedId = parseInt(selectedEl.id)
            if(parsedId === el.id){
              setMemory(oldMemo=>{
                return [...oldMemo,{...el,underline:!el.underline,exist:true,memoId:oldMemo[oldMemo.length-1].memoId+1,textChanged:true,info:{x:oldMemo[oldMemo.length-1].info.x,y:oldMemo[oldMemo.length-1].info.y}}]
              })
              return {...el,underline:!el.underline}
            }
            else{
              return el
            }
      })
    })
    setRemovedItems([])
  }

  const selectItem = (e)=>{
          e.stopPropagation()
          if(selectedEl && (e.target !== selectedEl)){
            selectedEl.classList.remove("!border-green-400")
          }
          e.target.classList.add('!border-green-400')
          return setSelectedItem(e.target)
  }

  const unSelectItem = (e)=>{
    selectedEl.classList.remove("!border-green-400")    
    setSelectedItem()
  }



  const position = (elId,info,oldInfo,elInfo)=>{

        setElements(oldElements=>{
            const newElements = oldElements.map(el=>{
                    if(elId===el.id){               
                      return {...el}
                    }
                    else{
                      return el
                    }
            })
            setMemory(oldMemory=>{
              const {left,top,bottom,right} = canvasRef.current.getBoundingClientRect()
              let getInfo = {x:info.point.x,y:info.point.y}
              if(info.point.x<left){
                getInfo = {x:left+10,y:getInfo.y}
              }
              if(info.point.x>right){
                getInfo = {x:right-25,y:getInfo.y}
              }
              if(info.point.y<top){
                getInfo = {x:getInfo.x,y:top+20}
              }
              if(info.point.y>bottom){
                getInfo = {x:getInfo.x,y:bottom-20}
              }
              return [...oldMemory,{id:elId,info:getInfo,exist:true,memoId:oldMemory[oldMemory.length-1].memoId+1,bold:elInfo.bold,fontSize:elInfo.fontSize,italic:elInfo.italic,underline:elInfo.underline,fontFamily:elInfo.fontFamily,textChanged:false}]
            })
            return newElements
        })
        setRemovedItems([])
      
  }


  const addText = ()=>{
        setElements(oldElements=>{
          return [...oldElements,{id:id,info:{x:0,y:0},bold:false,fontSize:'16px',italic:false,underline:false,fontFamily:'Arial, sans-serif'}]
        })
        setMemory(oldMemory=>{
          const {left,top} = canvasRef.current.getBoundingClientRect()
          return [...oldMemory,{id:id,info:{x:0,y:0,},exist:false,memoId:oldMemory.length,bold:false,fontSize:'16px',italic:false,underline:false,fontFamily:'Arial, sans-serif'},{id:id,info:{x:left+20,y:top+20},exist:true,memoId:oldMemory.length+1,bold:false,fontSize:'16px',italic:false,underline:false,fontFamily:'Arial, sans-serif',textChanged:false}]
        })
        setId(id+1)
  }
//  undo
  const undo = ()=>{
    
        if(memory.length<1){
          return
        }
        if(memory[memory.length-1].textChanged){
          setElements(oldEl=>{
            const newEls = oldEl.map(el=>{
              if(el.id === memory[memory.length-1].id){
                const allEls = memory.filter(mel=>{
                  return mel.id === el.id
                })
                const preEl = allEls[allEls.length-2]
                const {memoId,textChanged,exist,...restEl} = preEl
                return {...restEl,info:{x:el.info.x,y:el.info.y}}
              }
              else{
                return el
              }
            })
            return newEls
          })
          setRemovedItems(oldRevI=>{
            return [...oldRevI,memory[memory.length-1]]
          })
          setMemory(oldMemo=>{
              const newMemo = oldMemo.filter(el=>{
                return el.memoId !== oldMemo[oldMemo.length-1].memoId
              })
              return newMemo
          })
        }
       else{
        if(!memory[memory.length-2].exist){
          setElements(oldElements=>{
            return oldElements.filter(el=>{
              return el.id !== memory[memory.length-2].id
            })
          })

            setRemovedItems(oldMemo=>{
              return [...oldMemo,memory[memory.length-1],memory[memory.length-2]]
            })
            setMemory(oldMemory=>{
              const old1= oldMemory.filter(item=>{
                    return oldMemory[oldMemory.length-1].memoId !== item.memoId
              })
              const old2 = old1.filter(item=>{
                return oldMemory[oldMemory.length-2].memoId !== item.memoId
          })
            return old2
            })
      }
      else{

        setElements(oldElements=>{
          return oldElements.map(el=>{
                  if(el.id===memory[memory.length-1].id){
                    const newMemory = memory.filter(item=>{
                            return el.id === item.id
                    })
                      const newInfo = {x:el.info.x+newMemory[newMemory.length-2].info.x-newMemory[newMemory.length-1].info.x,y:el.info.y+newMemory[newMemory.length-2].info.y-newMemory[newMemory.length-1].info.y}
                    return {...newMemory[newMemory.length-1],info:newInfo}
                  }
                  else{
                    return el
                  }
          })
        })
        setRemovedItems(oldMemo=>{
          return [...oldMemo,memory[memory.length-1]]
        })
        setMemory(oldMemory=>{
          return oldMemory.filter(item=>{
                return oldMemory[oldMemory.length-1].memoId !== item.memoId
          })
        })
      }

       }        
  }
// redo
  const redo = ()=>{
    if(removedItems.length<1){
      return
    }
    if(removedItems[removedItems.length-1].textChanged){
      setElements(oldEl=>{
        const newEls = oldEl.map(el=>{
          if(el.id === removedItems[removedItems.length-1].id){
            const allEls = removedItems.filter(mel=>{
              return mel.id === el.id
            })
            const preEl = allEls[allEls.length-1]
            const {memoId,textChanged,exist,...restEl} = preEl
            return {...restEl,info:{x:el.info.x,y:el.info.y}}
          }
          else{
            return el
          }
        })
        return newEls
      })
      setMemory(oldMemo=>{
          return [...oldMemo,removedItems[removedItems.length-1]]
      })
      setRemovedItems(oldRevI=>{
        return oldRevI.filter(item=>{
              return oldRevI[oldRevI.length-1].memoId !== item.memoId
        })
      })
    }
    else{
      if(!removedItems[removedItems.length-1].exist){
        setElements(oldElements=>{
          const newItem = removedItems[removedItems.length-1]
          return [...oldElements,newItem]
        })
        setMemory(oldMemo=>{
          return [...oldMemo,removedItems[removedItems.length-1],removedItems[removedItems.length-2]]
        })
        setRemovedItems(oldMemory=>{
          const old1= oldMemory.filter(item=>{
                return oldMemory[oldMemory.length-1].memoId !== item.memoId
          })
          const old2 = old1.filter(item=>{
            return oldMemory[oldMemory.length-2].memoId !== item.memoId
      })
      return old2
    })
    }
    else{
        setElements(oldElements=>{
          return oldElements.map(el=>{
                  if(el.id===removedItems[removedItems.length-1].id){
                    const newMemory = memory.filter(item=>{
                      return el.id === item.id})
                      const newRemovedItems = removedItems.filter(item=>{
                        return el.id === item.id})
                    const newInfo = {x:el.info.x-(newMemory[newMemory.length-1].info.x-newRemovedItems[newRemovedItems.length-1].info.x),y:el.info.y-(newMemory[newMemory.length-1].info.y-newRemovedItems[newRemovedItems.length-1].info.y)}
                    return {...newRemovedItems[newRemovedItems.length-1],info:newInfo,id:el.id}
                  }
                  else{
                    return el
                  }
          })
        })
      
  
      setMemory(oldMemo=>{
        return [...oldMemo,removedItems[removedItems.length-1]]
      })
      setRemovedItems(oldMemo=>{
     
        return oldMemo.filter(item=>{
          return oldMemo[removedItems.length-1].memoId !== item.memoId
    })
      })
    }
    }    
  }

  return (
    <div className="w-full h-[100vh] overflow-x-hidden ">
                <Header undo={undo} redo={redo}/>
                <Canvas canvasRef={canvasRef} elements={elements} selectItem={selectItem} position={position} unSelectItem={unSelectItem}/>
                <Footer addText={addText} addFont={addFont} addFontSize={addFontSize} italicText={italicText} boldText={boldText} underlineText={underlineText} />
    </div>
  );
};

export default App;