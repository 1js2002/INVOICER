"use client";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { useForm, FormProvider, useFormContext, Form } from "react-hook-form";
import { DatePickerForm } from "@/components/DatePickerForm";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BillToFrom from "@/components/layout/bill-to-from";
import DatePickerFormField from "@/components/ui/forms/date-picker-form";
import { FormInput } from "@/components/ui/forms/form-input";

const page = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form className="container mx-auto flex lg:flex-row flex-col w-full min-h-screen py-6 gap-4  ">
        <Card className=" container flex flex-col w-3/4 min-w-[27rem] ">
          <div className="py-7 flex w-full justify-between items-center ">
            <div className="flex flex-col w-2/3 items-start flex-wrap gap-3 ">
              <DatePickerFormField
                name="details.InvoiceDate"
                label="Issue Date"
              />
              <DatePickerFormField name="details.dueDate" label="Due Date" />
            </div>
            <div  className="w-1/4 flex  ">

            <FormInput
              name="details.invoiceNumber"
              placeholder="Invoice Number"
             className="w-24 flex items-end"
            />
            </div>
          </div>

          <div className=" ">
            <BillToFrom />
          </div>
          <div>{/* <InvoiceItems /> */}</div>
          <div>{/* <InvoiceTotal /> */}</div>
          <div>{/* <InoviceNotes /> */}</div>
        </Card>
      
        <Card className="container felx-col py-7  w-1/3">
          <button className={cn(buttonVariants({ variant: "default" }))}>
            Review Invoice
          </button>
          <div>{/* <InvoiceCurrency /> */}</div>
        </Card>
      </form>
    </FormProvider>
  );
};

export default page;
