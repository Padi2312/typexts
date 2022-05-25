import * as uglify from 'uglify-js'
import * as fs from "fs";
import * as  path from "path";

const sourceDir = "./dist"

const getAllFilesInDir = function (dirPath: string, arrayOfFiles: string[]): string[] {
    const files = fs.readdirSync(dirPath)
    arrayOfFiles = arrayOfFiles || []
    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFilesInDir(dirPath + "/" + file, arrayOfFiles)
        } else {
            arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
        }
    })
    return arrayOfFiles
}

const filterOnlyJS = (fileList: string[]): string[] => {
    return fileList.filter(it => path.extname(it) === ".js")
}

const minify = (file: string) => {
    const data = fs.readFileSync(file, "utf-8")
    const result = uglify.minify(data)
    if (!result.error)
        fs.writeFileSync(file, result.code)
}

let files: string[] = []
getAllFilesInDir(sourceDir, files)
filterOnlyJS(files).forEach(minify)

