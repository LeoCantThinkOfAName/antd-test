import React, { ReactElement } from "react";
import { Table, Button } from "antd";
import { useTypedSelector } from "../../reducers/Store";

// types
import { ImageType } from "../../types/ImageType";
import { ColumnProps } from "antd/lib/table";
import { EditableFormRow, EditableCell } from "../../components/EditableRow";

const columns: ColumnProps<ImageType>[] = [
  {
    key: "id",
    title: "ID",
    dataIndex: "id",
    fixed: "left",
    onCell: (_record: ColumnProps<ImageType>) => {
      return {
        editable: false,
      };
    },
  },
  {
    key: "albumId",
    title: "Album ID",
    dataIndex: "albumId",
    fixed: "left",
    align: "center",
    onCell: (record: ColumnProps<ImageType>) => {
      return {
        editable: true,
        record,
      };
    },
  },
  {
    title: "Action",
    key: "action",
    fixed: "left",
    width: 80,
    align: "center",
    render: (_text: string, record: ImageType) => {
      return (
        <Button shape="circle" type="danger">
          DEL
        </Button>
      );
    },
    onCell: (_record: ColumnProps<ImageType>) => {
      return {
        editable: false,
      };
    },
  },
  {
    key: "title",
    title: "title",
    dataIndex: "title",
    fixed: "left",
    render: (text: string) => (
      <div
        style={{
          maxWidth: 150,
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </div>
    ),
    onCell: (_record: ColumnProps<ImageType>) => {
      return {
        editable: false,
      };
    },
  },
  {
    key: "thumbnail",
    title: "Thumbnail",
    dataIndex: "thumbnailUrl",
    width: 80,
    render: (text: string, record: ImageType): ReactElement => {
      return <img src={text} alt={record.title} style={{ maxWidth: 50 }} />;
    },
  },
  {
    key: "url",
    title: "URL",
    dataIndex: "url",
    width: 1600,
    render: (text: string) => (
      <a href={text} rel="noopener noreferrer" target="_blank">
        {text}
      </a>
    ),
  },
];

const Rooms = (): ReactElement => {
  const imageList = useTypedSelector<ImageType[]>(state => state.imageList);

  return (
    <Table
      columns={columns}
      components={{
        body: {
          row: EditableFormRow,
          cell: EditableCell,
        },
      }}
      dataSource={imageList}
      bordered
      rowKey={record => record.id.toString()}
      scroll={{ x: 2085 }}
      tableLayout="fixed"
      pagination={false}
      title={() => "ROOMS"}
      footer={() => "Footer"}
    />
  );
};

export default Rooms;
