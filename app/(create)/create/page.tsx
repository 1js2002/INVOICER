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
import FormDate from "@/components/layout/form-Date";
const page = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form className="container mx-auto flex lg:flex-row flex-col w-full min-h-screen py-10 gap-5  ">
        <Card className=" container flex flex-col w-3/4 min-w-[27rem] ">
          <div className="">
            <div>
              <FormDate />
            </div>
          </div>

          <div className=" ">
            <BillToFrom />
          </div>
          <div>{/* <InvoiceItems /> */}</div>
          <div>{/* <InvoiceTotal /> */}</div>
          <div>{/* <InoviceNotes /> */}</div>
        </Card>

        <Card className="container felx-col py-7 w-1/3">
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
