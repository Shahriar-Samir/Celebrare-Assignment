import { LuUndo2 } from "react-icons/lu";
import { LuRedo2 } from "react-icons/lu";

const Header = ({undo,redo}) => {
    return (
        <div className="flex w-full justify-center items-center h-[15vh] gap-10">
        <button className="btn" role="button" onClick={undo}>
        <LuUndo2 className="text-2xl"/>
        <span>Undo</span>
        </button>
        <button className="btn" role="button" onClick={redo}>
        <LuRedo2  className="text-2xl"/>
        <span>Redo</span>
        </button>
        </div>
    );
};

export default Header;