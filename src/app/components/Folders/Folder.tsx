import { FolderSVG } from "../../../svg/FolderSVG";
import "./Folder.css";

export const Folder = () => {
  return (
    <div className="folder-stack">
      <FolderSVG className="folder" />
      <FolderSVG className="folder backside" />
    </div>
  );
};
