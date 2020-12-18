import {
    Injectable,
} from '@nestjs/common';
import * as mkdirp from 'mkdirp';
import * as moment from 'moment';
import * as mime from 'mime';
import * as fs from 'fs';
import { BASE_URL } from '../config';
@Injectable()
export class FileUploadService {
    async upload(type: string, file: any): Promise<string> {
        // Create path
        const directoryPath = 'files/' + type + '/';
        mkdirp.sync(directoryPath);
        // Extract the extension
        // const extension = mime.getExtension(file.mimetype);
        const extension = file.mimetype.split("/")[1]
        // Generate file name
        // const name = moment().format('YYYYMMDDHHmmss');
        const name = Math.random().toString().split(".")[1]
        const filePath = await directoryPath + name + '.' + extension;
        // Save the file
        await fs.writeFile(filePath, file.buffer, err => {
            if (err) {
                return err;
            }
        });
        const fileFullPath = BASE_URL + filePath;
        return fileFullPath;
    }
    async validateFile(file) {
        const extension = file.mimetype.split("/")[1]
        if (extension.toLowerCase() == "jpeg" || extension.toLowerCase() == "png") {
            return true
        } else return false
    }
    async validatePdfFiles(file) {
        const extension = file.mimetype.split("/")[1]
        if (extension.toLowerCase() == "pdf") {
            return true
        } else return false
    }
    async convertBase64(type: string, base64) {
        //upload image
        // Create path
        const directoryPath = 'files/' + type + '/';
        mkdirp.sync(directoryPath);
        const name = Math.random().toString().split(".")[1]
        var matches = base64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
        if (matches.length !== 3) {
            return new Error("Invalid input string");
        }
        let response = {};
        let responseType = matches[1];
        let responseData = Buffer.from(matches[2], "base64");
        let key = responseType
        let val = responseData
        response[key] = val
        let extension = responseType.split("/")[1];
        const filePath = await directoryPath + name + '.' + extension;
        if (extension !== "png" && extension !== "jpeg") {
            return "the image should be in format PNG or JPEG"
        }
        await fs.writeFile(filePath, responseData, err => {
            if (err) {
                return err;
            }
        });
        const fileFullPath = BASE_URL + filePath;
        return fileFullPath;
    }
}
