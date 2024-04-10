import fs from "fs/promises"
import fsn, { mkdir } from "fs"
import path from "path"


const basePath = "F:\\Node js\\extensionDirectory" //Add the path where your items are cluttred.
let files = await fs.readdir(basePath)

for (const item of files) {
    let ext = item.split(".")[item.split(".").length-1]
    if(ext != "js" && ext != "json" && item.split(".").length > 1){
        if(fsn.existsSync(path.join(basePath, ext))){
            //Move the file to this directory if it's not a js or json file
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item))
        }
        else{
            fs.mkdir(ext)
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item))
        }
    }
}