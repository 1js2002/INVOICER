import React from "react";
import DatePickerFormField from "@/components/ui/forms/date-picker-form";
import { FormInput } from "@/components/ui/forms/form-input";
import { cn } from "@/lib/utils";

const FormDate = () => {
  return (
    <div className="flex  justify-between gap-2 py-4">
      <div className="md:w-22 w-18 space-y-2">
        <DatePickerFormField name="details.invoiceDate" label="Issue Date" />

        <DatePickerFormField name="details.dueDate" label="Due Date" />
      </div>

      <div className="w-22 md:w-64 flex py-3  md:px-0 justify-center text-center">
        <span className="px-3">Invoice No:</span>
        <FormInput
            type="number"    
            name="details.invoiceNumber"
            className={cn("w-14 md:w-20 h-7  text-left font-normal appearance-none")}
        />
        </div>
    </div>
  );
};

export default FormDate;
