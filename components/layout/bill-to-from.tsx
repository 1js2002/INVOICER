import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { FormInput } from "@/components/ui/forms/form-input";

const BillToFrom = () => {
  return (
    <div>
      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Bill To:</TableHead>
            <TableHead>Bill From:</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              <FormInput name="sender.name" placeholder="receiver name?" />
            </TableCell>
            <TableCell>
              <FormInput name="receiver.name" placeholder="Your name" />
            </TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              <FormInput name="receiver.email" placeholder="receiver email" />
            </TableCell>
            <TableCell>
              <FormInput name="sender.email" placeholder="Your email" />
            </TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              <FormInput
                name="receiver.address"
                placeholder="receiver address"
              />
            </TableCell>
            <TableCell>
              <FormInput name="sender.address" placeholder="Your address" />
            </TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              <FormInput name="receiver.city" placeholder="receiver city" />
            </TableCell>
            <TableCell>
              <FormInput name="sender.city" placeholder="Your city" />
            </TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              <FormInput
                name="receiver.country"
                placeholder="receiver country"
              />
            </TableCell>
            <TableCell>
              <FormInput name="sender.country" placeholder="Your country" />
            </TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              <FormInput
                name="receiver.zipCode"
                placeholder="receiver zipCode"
              />
            </TableCell>
            <TableCell>
              <FormInput name="sender.zipCode" placeholder="Your zipCode" />
            </TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              <FormInput
                name="receiver.phone"
                placeholder="receiver Phone number"
              />
            </TableCell>
            <TableCell>
              <FormInput name="sender.phone" placeholder="Your phone number" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default BillToFrom;
