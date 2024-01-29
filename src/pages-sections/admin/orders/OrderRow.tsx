import { FC, useState } from "react";
import { useRouter } from "next/router";
import { Delete, RemoveRedEye, Edit } from "@mui/icons-material";
import { currency } from "lib";
import {
  StatusWrapper,
  StyledIconButton,
  StyledTableCell,
  StyledTableRow,
} from "../StyledComponents";
import { format } from "date-fns";
import { Avatar, Box, Modal } from "@mui/material";
import EditForm from "./EditForm";
//Firebase
import { arrayRemove, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../src/firebase";
import { FaBoxOpen } from "react-icons/fa6";

// ========================================================================
type OrderRowProps = { order: any, title :any, setRender: (values: any) => void; };
// ========================================================================

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxHeight: '90%',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 20,
  overflowY: 'auto',
  p: 2
};

const OrderRow: FC<OrderRowProps> = ({ order, title, setRender }) => {
  const {  id, date, name, phone, email, address, note, products, quantity, price, voucher, sum } = order;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Dùng với timestamp cảu Firebase
  const formatDate = ( nanoseconds : any, seconds : any) => {
    // Assuming nanoseconds and seconds are parameters from your order data
    const timestampInSeconds = seconds + nanoseconds / 1e9; // convert nanoseconds to seconds
    const timestampInMilliseconds = timestampInSeconds * 1000; // convert seconds to milliseconds
    const date = new Date(timestampInMilliseconds);

    // Format the date as "dd/mm/yy"
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // months are 0-indexed
    const year = date.getFullYear().toString().slice(-2);

    return `${day}/${month}/${year}`;
  }

  // Dùng bình thường bằng chuỗi
  var dateTimeArray = date.split(' ');
  var ngay = dateTimeArray[0];
  var thoiGian = dateTimeArray[1] + ' ' + dateTimeArray[2];
  var gio = thoiGian.slice(0, -6);

  const handleDelete = async () => {
    const result = window.confirm("Bạn có chắc xóa sản phẩm");
      if(result){
        try {
          const roomRef = doc(db, "orders", 'am09mJfmXgULicYqNbm5');

          // Get the current data of the document
          const roomSnapshot = await getDoc(roomRef);
          const currentData = roomSnapshot.data();

          // Filter out the object to be deleted from the array
          const updatedOrders = currentData.list.filter(
            item => item.id !== id
          );

          // Update the document with the modified array
          await updateDoc(roomRef, {
            list: updatedOrders
          });
          alert("Xóa sản phẩm thành công");
          router.push('/admin/orders')
        } catch (error) {
          console.log('Có lỗi khi xóa sản phẩm', error);
          alert("Xóa sản phẩm không thành công");
        }
      }
    return
  }

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left" sx={{ fontWeight: 400 }}>
        {ngay}
      </StyledTableCell>

      <StyledTableCell align="left" sx={{ fontWeight: 400 }}>
        {name}
      </StyledTableCell>

      <StyledTableCell align="left" sx={{ fontWeight: 400 }}>
        {email}
      </StyledTableCell>

      <StyledTableCell align="left" sx={{ fontWeight: 400 }}>
        {phone}
      </StyledTableCell>

      <StyledTableCell align="left" sx={{ fontWeight: 400 }}>
        {address}
      </StyledTableCell>

      <StyledTableCell align="left" sx={{ fontWeight: 400 }}>
        {products?.map((item : any, index : any) => (
          <div key={index}>{item}</div>
        ))}
      </StyledTableCell>

      <StyledTableCell align="left">
        {quantity?.map((item : any, index : any) => (
          <div key={index}>{item}</div>
        ))}
      </StyledTableCell>

      <StyledTableCell align="left">
        {price?.map((item : any, index : any) => (
          <div key={index}>{item}</div>
        ))}
      </StyledTableCell>

    <StyledTableCell align="left">{sum}</StyledTableCell>

    <StyledTableCell align="left" sx={{ fontWeight: 400 }}>{note}</StyledTableCell>

    <StyledTableCell align="center">
      <StyledIconButton
          // onClick={() => router.push(`/admin/products/${name}`)}
          onClick={handleOpen}
        >
          <Edit />
        </StyledIconButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <EditForm initialValues={order} title={title} setOpen={setOpen} setRender={setRender}/>
        </Box>
      </Modal>
        {/* <StyledIconButton>
          <RemoveRedEye />
        </StyledIconButton> */}
        <StyledIconButton onClick={handleDelete}>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>


    </StyledTableRow>
  );
};

export default OrderRow;