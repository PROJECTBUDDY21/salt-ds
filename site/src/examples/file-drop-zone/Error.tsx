import { SyntheticEvent, ReactElement } from "react";
import {
  Text,
  FileDropZone,
  FileDropZoneIcon,
  FileDropZoneTrigger,
} from "@salt-ds/core";

const validate = (event: SyntheticEvent, files: File[]) => {
  console.log("validate files", files);
};

export const Error = (): ReactElement => (
  <FileDropZone
    style={{ width: 300 }}
    onDrop={(event, files) => validate(event, files)}
    status="error"
  >
    <FileDropZoneIcon status="error" />
    <strong>File format is not allowed</strong>
    <FileDropZoneTrigger accept=".png" onChange={validate} />
    <Text>Only .png files</Text>
  </FileDropZone>
);
