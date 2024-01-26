"use client";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { DatePickerForm } from "@/components/DatePickerForm";
import { FormInput } from "@/components/ui/forms/form-input";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const page = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form className="container mx-auto flex md:flex-row flex-col w-full min-h-screen py-6  ">
        <Card className=" container flex flex-col md:w-full ">
          <div className="py-7">
            <div className="flex flex-row items center justify-between">
              <div>
                Current Date:{" "}
                <span className="current-date">
                  {new Date().toLocaleDateString("en-US")}
                </span>
              </div>
              <div></div>

              <div>invocieNumber</div>
            </div>
          </div>

          <div className=" ">
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
                    <FormInput
                      name="sender.name"
                      placeholder="receiver name?"
                    />
                  </TableCell>
                  <TableCell>
                    <FormInput name="receiver.name" placeholder="Your name" />
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    <FormInput
                      name="receiver.email"
                      placeholder="receiver email"
                    />
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
                    <FormInput
                      name="sender.address"
                      placeholder="Your address"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    <FormInput
                      name="receiver.city"
                      placeholder="receiver city"
                    />
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
                    <FormInput
                      name="sender.country"
                      placeholder="Your country"
                    />
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
                    <FormInput
                      name="sender.zipCode"
                      placeholder="Your zipCode"
                    />
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
                    <FormInput
                      name="sender.phone"
                      placeholder="Your phone number"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div>{/* <InvoiceItems /> */}</div>
          <div>{/* <InvoiceTotal /> */}</div>
          <div>{/* <InoviceNotes /> */}</div>
        </Card>
        <div className="container felx-col  md:w-[600px] py-7">
          <Card>
            <button className={cn(buttonVariants({ variant: "default" }))}>
              Review Invoice
            </button>
            <div>{/* <InvoiceCurrency /> */}</div>
          </Card>
        </div>
      </form>
    </FormProvider>
  );
};

export default page;
