"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
} from "@nextui-org/react";
import {  Trash2 } from "lucide-react";

const columns = [
  { name: "PRODUCT", uid: "Product" },
  { name: "PRICE", uid: "Price" },
  { name: "QUANTITY", uid: "Quantity" },
  { name: "TOTAL", uid: "Total" },
  { name: "ACTIONS", uid: "actions" },
];

const users = [
  {
    id: 1,
    Product: "Tony Reichert",
    Price: "CEO",
    Quantity: "10",
    Total: "100",

    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },

  {
    id: 2,
    Product: "Tony Reichert",
    Price: "CEO",
    Quantity: "10",
    Total: "100",

    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: 3,
    Product: "Tony Reichert",
    Price: "CEO",
    Quantity: "10",
    Total: "100",

    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
];



export default function CartTable() {
  const renderCell = React.useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "Product":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "Price":
        return (
          <div className="flex flex-col">
            <p className="text-sm capitalize text-bold">{cellValue}</p>
            <p className="text-sm capitalize text-bold text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "Quantity":
        return (
          <Chip className="capitalize" color="primary" size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "Total":
        return (
          <Chip className="capitalize" color="primary" size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg cursor-pointer text-danger active:opacity-50">
                <Trash2 />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
