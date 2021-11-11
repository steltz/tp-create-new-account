import React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

export const FormInputText = ({ name, control, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          id="outlined-input"
          fullWidth
          onChange={onChange}
          value={value}
          label={label}
          error={!!error}
          helperText={
            formState.errors[name]?.type === "required" && `${label} required`
          }
        />
      )}
    />
  );
};
