import { useFormContext } from "react-hook-form";
import { Input, InputProps } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type FormInputProps = {
  name: string;
  label?: string;
  labelHelper?: string;
  placeholder?: string;
  vertical?: boolean;
} & InputProps;

export const FormInput = ({
  name,
  label,
  labelHelper,
  placeholder,
  ...props
}: FormInputProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{`${label}:`}</FormLabel>}

          {labelHelper && <span className="text-xs"> {labelHelper}</span>}

          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              className="w-full  lg:w-[23rem] md:text-md text-sm"
              {...props}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
