export type getRequestType = { [key: string]: string };

export type anyKeyObject = { [key: string]: any };

export type fileType = {
  lastModifiedDate: Date;
  filepath: string;
  newFilename: string;
  originalFilename: string;
  mimetype: string;
  size: number;
};
