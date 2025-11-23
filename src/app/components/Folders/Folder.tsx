import { FolderSVG } from "../../../svg/FolderSVG";
import "./Folder.css";

export const Folder = () => {
  return (
    <div className="folder-stack">
      <div className="folder-tag">
        <span>Life, Career and other secrets</span>
      </div>
      <FolderSVG className="folder" />
      <FolderSVG className="folder backside" />
    </div>
  );
};
