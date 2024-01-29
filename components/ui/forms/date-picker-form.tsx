"use client";

import { useState } from "react";

// RHF
import { useFormContext } from "react-hook-form";

// ShadCn
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

// Utils
import { cn } from "@/lib/utils";

// Variables
import { DATE_OPTIONS } from "@/lib/variables";

// Icons
import { CalendarIcon } from "lucide-react";
import { NameType } from '../../../types/index';

// Types


type DatePickerFormFieldProps = {
    name: NameType;
    label?: string;
};

const DatePickerFormField = ({ name, label }: DatePickerFormFieldProps) => {
    const { control } = useFormContext();

    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    return (
        <div className="px-3">
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <div className="flex justify-between gap-3 items-center text-sm  ">
                            <div className="">
                                <FormLabel>{label}:</FormLabel>
                            </div>
                            <div>
                                <Popover
                                    open={isPopoverOpen}
                                    onOpenChange={setIsPopoverOpen}
                                >
                                    <PopoverTrigger asChild>
                                        <FormControl >
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "lg:w-[10rem] w-[3.2rem] ",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon className="lg:mr-2 lg:h-4 lg:w-4 " />
                                                <span className="hidden lg:block ">
                                                    {field.value ? (
                                                        new Date(field.value).toLocaleDateString("en-US", DATE_OPTIONS)
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                </span>
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            captionLayout="dropdown-buttons"
                                            defaultMonth={field.value}
                                            selected={new Date(field.value)}
                                            onSelect={(e) => {
                                                field.onChange(e);
                                                setIsPopoverOpen(false);
                                            }}
                                            disabled={(date) =>
                                                date < new Date("1900-01-01")
                                            }
                                            fromYear={1960}
                                            toYear={
                                                new Date().getFullYear() + 30
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </div>
                        </div>
                    </FormItem>
                )}
            />
        </div>
    );
};

export default DatePickerFormField;
