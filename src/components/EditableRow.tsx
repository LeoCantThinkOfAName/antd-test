import React, { createContext, useState, ReactElement } from "react";
import { ImageType } from "../types/ImageType";
import { Form } from "antd";

const EditableContext = createContext<Partial<ImageType>>({});

const EditableRow = ({ form, ...props }: { form: any }) => {
  return (
    <EditableContext.Provider value={form}>
      <tr {...props} />
    </EditableContext.Provider>
  );
};

export const EditableCell = (props: any): ReactElement => {
  const { editable, ...restProps } = props;
  const [editing, SetEditing] = useState<boolean>(false);

  return <td {...restProps}>{props.children}</td>;
};

export const EditableFormRow = Form.create()(EditableRow);
