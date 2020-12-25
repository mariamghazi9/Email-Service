import axios from "axios";
const API_URL = "http://localhost:9000/api/";

class FolderService{
    addFolder(folderMap){
        return axios.post(API_URL + "addFolder", folderMap
        );
    }
    editFolder(folderMap){
        return axios.put(API_URL + "editFolder", folderMap
        );
    }
    deleteFolder(folderId){
        return axios.delete(API_URL + "deleteFolder", {
            params:{
                id: folderId
            }
        });
    }

}
export default new FolderService();
