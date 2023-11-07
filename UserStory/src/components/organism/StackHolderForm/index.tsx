import Button from "@/components/atoms/Button";
import Dialog from "@/components/atoms/Dialog";
import RadioButton from "@/components/atoms/RadioButtom";
import TextField from "@/components/atoms/TextField";
import Typography from "@/components/atoms/Typography";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { nanoid } from "nanoid";
import theme from "@/theme";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Stack,
  styled,
} from "@mui/material";
import React, { useEffect } from "react";
import { StackHolderFormType, StakHolderData } from "@/utils/types";

interface AddStackHolderFormProps {
  open: boolean;
  handleClose: () => void;
  addNewStackHolder: (newStackHolder: StakHolderData) => void;
  initailValues?: StakHolderData;
  formType?: StackHolderFormType;
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const AddStackHolderForm = ({
  open,
  handleClose,
  addNewStackHolder,
  initailValues,
  formType = "add",
}: AddStackHolderFormProps): React.ReactNode => {
  const [newStackHolder, setNewStackHolder] = React.useState({
    firstName: initailValues?.firstName ?? "",
    lastName: initailValues?.lastName ?? "",
    contactEmail: initailValues?.contactEmail ?? "",
    ralationShip: "Employee",
  });

  useEffect(() => {
    if (initailValues) {
      setNewStackHolder({
        firstName: initailValues?.firstName ?? "",
        lastName: initailValues?.lastName ?? "",
        contactEmail: initailValues?.contactEmail ?? "",
        ralationShip: initailValues?.relationship ?? "Employee",
      });
    } else {
      setNewStackHolder({
        firstName: "",
        lastName: "",
        contactEmail: "",
        ralationShip: "Employee",
      });
    }
  }, [initailValues]);

  const handleContinue = () => {
    addNewStackHolder({
      id: formType === "add" ? nanoid() : (initailValues?.id as any),
      firstName: newStackHolder.firstName,
      lastName: newStackHolder.lastName,
      name: newStackHolder.firstName + " " + newStackHolder.lastName,
      contactEmail: newStackHolder.contactEmail,
      relationship: newStackHolder.ralationShip,
      portfolioEmail: newStackHolder.contactEmail,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewStackHolder({
      ...newStackHolder,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <StyledDialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          height: theme.spacing(144),
          width: theme.spacing(120),
        },
      }}
    >
      <DialogTitle>
        <Typography text="Add stakeholder" variant="b2" />
      </DialogTitle>
      <DialogContent dividers>
        <Stack gap={2}>
          <Stack sx={{ mx: 6 }} gap={4}>
            <Typography text="Basic information" variant="b4" mb={8} />
            <FormControl
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <FormLabel required>
                <Typography text="Stakeholder type" variant="b4" />
              </FormLabel>
              <RadioGroup row>
                <FormControlLabel
                  value="Indivisual"
                  control={<RadioButton />}
                  label="Individual"
                />
                <FormControlLabel
                  value="Non-individual"
                  control={<RadioButton />}
                  label="Non-individual"
                />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel>
                <Typography text="First Name" variant="b4" />
              </FormLabel>
              <TextField
                variant="outlined"
                name="firstName"
                required
                onChange={handleInputChange}
                value={newStackHolder.firstName}
              />
            </FormControl>
            <FormControl>
              <FormLabel>
                <Typography text="Last Name" variant="b4" />
              </FormLabel>
              <TextField
                variant="outlined"
                name="lastName"
                value={newStackHolder.lastName}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>
                <Typography text="Contact email" variant="b4" />
              </FormLabel>
              <TextField
                variant="outlined"
                value={newStackHolder.contactEmail}
                name="contactEmail"
                type="email"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>
                <Typography text="Date of birth" variant="b4" />
              </FormLabel>
              <TextField
                size="small"
                variant="outlined"
                name="dateOfBirth"
                type="date"
                sx={{ width: "fit-content" }}
              />
            </FormControl>
          </Stack>
          <Divider />
          <Stack sx={{ mx: 6 }} gap={4}>
            <Typography text="Identification information" variant="b4" mb={7} />
            <FormControl>
              <FormLabel>
                <Typography text="Tax ID" variant="b4" />
              </FormLabel>
              <TextField variant="outlined" name="taxId" type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>
                <Typography text="Employee ID" variant="b4" />
              </FormLabel>
              <TextField variant="outlined" name="employeeId" type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>
                <Typography text="Payroll ID" variant="b4" />
              </FormLabel>
              <TextField variant="outlined" name="payrollID" type="text" />
            </FormControl>
          </Stack>
          <Divider />
          <Stack sx={{ mx: 6 }} gap={4}>
            <Typography text="Relationship information" variant="b4" mb={7} />
            <Stack direction="row" gap={2} alignItems="center">
              <FormControl>
                <FormLabel>
                  <Typography text="Effective Date" variant="b4" />
                </FormLabel>
                <TextField
                  variant="outlined"
                  name="effectiveDate"
                  type="date"
                />
              </FormControl>
              <FormControl>
                <FormLabel>
                  <Typography text="Relationship" variant="b4" />
                </FormLabel>
                <TextField
                  variant="outlined"
                  disabled
                  name="relationship"
                  value="Employee"
                  type="text"
                />
              </FormControl>
              <AddRoundedIcon sx={{ mt: 3 }} />
              <RemoveRoundedIcon sx={{ mt: 3 }} />
            </Stack>
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ mt: 2, mb: 2 }}>
        <Button text="Cancel" variant="outlined" onClick={handleClose} />
        <Button
          text={formType === "add" ? "Add stakeholder" : "Update"}
          onClick={handleContinue}
        />
      </DialogActions>
    </StyledDialog>
  );
};

export default AddStackHolderForm;
