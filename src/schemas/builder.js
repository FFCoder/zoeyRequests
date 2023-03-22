import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { FormControlLabel, FormControl, InputLabel } from "@mui/material";
import { Switch } from "@mui/material";
import { NativeSelect } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    marginTop: "2rem",
  },
  formInput: {
    width: "100%",
    marginTop: "1rem",
  },
  button: {
    marginTop: "1rem",
    height: "3rem",
    width: "100%",
  },
  select: {
    width: "100%",
    marginTop: "1rem",
    padding: "0.5rem",
  },
};

const builder = (schema, ref, onSubmit) => {
  const { title, name, fields } = schema;
  let formFields = fields.map((field) => {
    let element;
    let multiline = field.type === "text";
    switch (field.type) {
      case "string":
      case "text":
        element = (
          <TextField
            sx={styles.formInput}
            key={field.name}
            id={field.name}
            label={field.title}
            type={field.type}
            variant="outlined"
            fullWidth
            multiline={multiline}
            minRows={multiline ? 4 : 1}
            required={field.required}
          />
        );
        break;
      case "date":
        element = (
          <DatePicker
            sx={styles.formInput}
            key={field.name}
            id={field.name}
            label={field.title}
            type={field.type}
            variant="outlined"
            fullWidth
            required={field.required}
          />
        );
        break;
      case "time":
        element = (
          <TimePicker
            sx={styles.formInput}
            key={field.name}
            id={field.name}
            label={field.title}
            type={field.type}
            variant="outlined"
            fullWidth
            required={field.required}
          />
        );
        break;
      case "boolean":
        element = (
          <FormControlLabel
            control={<Switch id={field.name} />}
            label={field.title}
            labelPlacement="start"
          />
        );
        break;
      case "multiple":
        element = (
          <FormControl fullWidth sx={styles.formInput}>
            <InputLabel variant="standard" htmlFor={`${field.name}_label`}>
              {field.title}
            </InputLabel>
            <NativeSelect
              sx={styles.select}
              defaultValue={field.options[0].value}
              inputProps={{
                name: field.name,
                id: `${field.name}_label`,
              }}
            >
              {field.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.title}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        );
        break;
      default:
        element = <div></div>;
        break;
    }
    return element;
  });
  return (
    <Container sx={styles.container} maxWidth="false">
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
      <form ref={ref} name={name}>
        {formFields}
        <Button
          sx={styles.button}
          variant="contained"
          color="primary"
          onClick={() => {
            let data = {};
            fields.forEach((field) => {
              switch (field.type) {
                case "string":
                case "text":
                  data[field.name] = document.getElementById(field.name).value;
                  break;
                case "date":
                  data[field.name] = document.getElementById(field.name).value;
                  break;
                case "time":
                  data[field.name] = document.getElementById(field.name).value;
                  break;
                case "boolean":
                  data[field.name] = document.getElementById(
                    field.name
                  ).checked;
                  break;
                case "multiple":
                  data[field.name] = document.getElementById(
                    `${field.name}_label`
                  ).value;
                  break;
                default:
                  break;
              }
            });
            onSubmit(data);
          }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default builder;
