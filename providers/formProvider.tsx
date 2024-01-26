"use client";

import React from "react";

// RHF
import { FormProvider, useForm } from "react-hook-form";

// Zod
import { zodResolver } from "@hookform/resolvers/zod";

// Schema



// Types

// Variables
import { FORM_DEFAULT_VALUES } from "@/lib/variables";
import { InvoiceType } from '../types/index';
import { InvoiceSchema } from "@/schemas";

type ProvidersProps = {
  children: React.ReactNode;
};

const formProviders = ({ children }: ProvidersProps) => {
  const form = useForm<InvoiceType>({
    resolver: zodResolver(InvoiceSchema),
    defaultValues: FORM_DEFAULT_VALUES,
  });

  return (
    <FormProvider {...form}>
      {children}
    </FormProvider>
  );
};

export default formProviders;
