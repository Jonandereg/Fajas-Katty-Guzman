import React,{FunctionComponent,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { adminContext } from '../../../App'
import moment from 'moment'
import Measurements from '../../measurementsInput/measurements';

const MeasurementsTable:FunctionComponent = ()=> {
  const { users } = useContext(adminContext)
  
  const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });
  
  
  function createData(
    firstName: any,
    lastName: any,
    age: number|undefined,
    gender: string|undefined,
    email: string|undefined,
    mobile: string|undefined,
    ) {
     
      let mytest =[]
      let thisUser = users?.find(user=> user.firstName&& user.email==email)
      if (thisUser &&thisUser.measurements && thisUser.measurements.length>0) mytest.push(thisUser.measurements[0])
      return {
        firstName,
        lastName,
        age,
        gender,
        email,
        mobile,
        history: mytest,
      };
    }
    
    function Row(props: { row: ReturnType<typeof createData> }) {
      const { row } = props;
      const [open, setOpen] = React.useState(false);
      const classes = useRowStyles();
      
      return (
        <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.firstName}
        </TableCell>
        <TableCell align="right">{row.lastName}</TableCell>
        <TableCell align="right">{row.age}</TableCell>
        <TableCell align="right">{row.gender}</TableCell>
        <TableCell align="right">{row.email}</TableCell>
        <TableCell align="right">{row.mobile}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Measurements(in cm)
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Size </TableCell>
                    <TableCell align="right">Bust Size</TableCell>
                    <TableCell align="right">Lower Bust Contour</TableCell>  
                    <TableCell align="right">Hips Contour</TableCell>
                    <TableCell align="right">Upper Thighs Contour</TableCell>  
                    <TableCell align="right">Mid Thighs Contour</TableCell>   
                    <TableCell align="right">Above Knee Contour</TableCell>   
                    <TableCell align="right">Below Knee Contour</TableCell>  
                    <TableCell align="right">Calf Contour</TableCell>                  
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={moment(historyRow.date).format('h:mm a - MMMM Do YYYY')}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.siza}</TableCell>
                      <TableCell align="right">{historyRow.bustSize}</TableCell>
                      <TableCell align="right">{historyRow.contourLowerBust}</TableCell>
                      <TableCell align="right">{historyRow.contourHips}</TableCell>
                      <TableCell align="right">{historyRow.contourUpperThigh}</TableCell>
                      <TableCell align="right">{historyRow.contourMidThigh}</TableCell>
                      <TableCell align="right">{historyRow.contourAboveKnee}</TableCell> 
                      <TableCell align="right">{historyRow.contourBelowKnee}</TableCell> 
                      <TableCell align="right">{historyRow.contourCalf}</TableCell>                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
  let rows = [
    createData('smoke', 'mirrors', 60, 'male', 'thenightmare@seventhHell.com', '3.99'),   
  ];
  
  
  users?.forEach(user=>{rows.push(createData(user.firstName,user.lastName,user.age,user.gender,user.email,user.mobileNumber))})
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">Mobile Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.firstName} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MeasurementsTable