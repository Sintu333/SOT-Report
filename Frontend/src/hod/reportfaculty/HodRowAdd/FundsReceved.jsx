/* eslint-disable react/prop-types */

import {
  TextField,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const FundsReceived = ({ formData, setFormData }) => {
  const handleAddFundReceived = () => {
    setFormData({
      ...formData,
      fundReceived: [
        ...formData.fundReceived,
        {
          srNo: "",
          agency: "",
          amount: "",
        },
      ],
    });
  };

  const handleDeleteFundReceived = (index) => {
    const updatedFundReceived = [...formData.fundReceived];
    updatedFundReceived.splice(index, 1);
    setFormData({
      ...formData,
      fundReceived: updatedFundReceived,
    });
  };

  const handleFundReceivedChange = (index, field, value) => {
    const updatedFundReceived = [...formData.fundReceived];
    updatedFundReceived[index][field] = value;
    setFormData({
      ...formData,
      fundReceived: updatedFundReceived,
    });
  };

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Sr. No.</TableCell>
            <TableCell>Funding Agency</TableCell>
            <TableCell>Amount(Rs. In Lakhs)</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formData.fundReceived.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.srNo}
                  onChange={(e) =>
                    handleFundReceivedChange(index, "srNo", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.agency}
                  onChange={(e) =>
                    handleFundReceivedChange(index, "agency", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.amount}
                  onChange={(e) =>
                    handleFundReceivedChange(index, "amount", e.target.value)
                  }
                />
              </TableCell>

              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteFundReceived(index)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddFundReceived}
      >
        Add Student
      </Button>
    </div>
  );
};

export default FundsReceived;
