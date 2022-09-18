import PropTypes from "prop-types";
import { useState } from "react";
// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import { withStyles } from "@material-ui/core/styles";
import MuiTableHead from "@material-ui/core/TableHead";
import { connect } from "react-redux";
// project imports
import MainCard from "ui-component/cards/MainCard";
import SkeletonPopularCard from "ui-component/cards/Skeleton/PopularCard";

// assets
import { add, format, differenceInCalendarDays, isFuture } from "date-fns";

// ===============================|| ApprovalHistory ||=============================== //

const ApprovalHistory = ({ isLoading, userSession }) => {
  const theme = useTheme();

  const dateFormatter = (date) => {
    return format(new Date(date), "dd/MMM/YYYY");
  };

  const columns = [
    { id: "name", label: "Doctor", minWidth: 170 },
    { id: "hos", label: "Hospital", minWidth: 100 },
    {
      id: "disease",
      label: "Disease",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },

    {
      id: "date",
      label: "Date",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  function createData(name, hos, disease, date) {
    // const density = dateFormatter(date)
    return { name, hos, disease, date };
  }

  const rows = [
    createData("Rahul", "nukkad", "Gyno", "15/09/2022"),
    createData("Rahul", "nukkad", "Gyno", "15/09/2022"),
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const TableHead = withStyles((theme) => ({
    root: {
      backgroundColor: "#80cc28",
    },
  }))(MuiTableHead);

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </MainCard>
      )}
    </>
  );
};

ApprovalHistory.propTypes = {
  isLoading: PropTypes.bool,
  userSession: PropTypes.userSession
};

const mapStateToProps = (state) => {
  return {
    userSession: state.userSession,
  };
};

export default connect(mapStateToProps, { })(ApprovalHistory);
