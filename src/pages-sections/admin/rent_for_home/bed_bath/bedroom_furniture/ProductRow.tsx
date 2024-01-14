import { FC, use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Delete, Edit, Image, RemoveRedEye } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import { FlexBox } from "components/flex-box";
import BazaarSwitch from "components/BazaarSwitch";
import { Paragraph, Small } from "components/Typography";
import { currency } from "lib";
import { StyledTableRow, CategoryWrapper, StyledTableCell, StyledIconButton, } from "../../../StyledComponents";
import { useSnackbar } from "notistack";
import Modal from '@mui/material/Modal';
import EditForm from "./EditForm";
//Firebase
import { arrayRemove, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../../src/firebase";
import { FaBoxOpen } from "react-icons/fa6";


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

// ========================================================================
type ProductRowProps = { product: any, title :any, setRender: (values: any) => void; };
// ========================================================================

const ProductRow: FC<ProductRowProps> = ({product, title, setRender}) => {
  const { china_code, color, dimensions, depth, width, height, final_code, final_name, historical_cost, id, image, kloudek_code, material, name, note, rental_price, seat, selling_price, specification } = product;
  const updatedProduct = { ...product };
  for (let i = 1; i <= specification.length; i++) {
    updatedProduct[`specification_${i}`] = product.specification ? product.specification[i - 1] : null;
  }
  Object.assign(product, updatedProduct);
  // console.log('product',product);
  

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  product.depth = dimensions[0];
  product.width = dimensions[1];
  product.height = dimensions[2];

  const handleDelete = async () => {
    const result = window.confirm("Bạn có chắc xóa sản phẩm");
      if(result){
        try {
          const roomRef = doc(db, "rent_for_home", 'living_room');

          // Get the current data of the document
          const roomSnapshot = await getDoc(roomRef);
          const currentData = roomSnapshot.data();

          // Filter out the object to be deleted from the array
          const updatedSofasSectionals = currentData.bedroom_furniture.filter(
            sofa => sofa.id !== id
          );

          // Update the document with the modified array
          await updateDoc(roomRef, {
            bedroom_furniture: updatedSofasSectionals
          });

          alert("Xóa sản phẩm thành công");
          setRender(true);
        } catch (error) {
          console.log('Có lỗi khi xóa sản phẩm', error);
          alert("Xóa sản phẩm không thành công");
        }
      }
    return
  }

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left">
        <FlexBox alignItems="center" gap={1.5}>
          <Avatar src={image[1]} sx={{ borderRadius: "8px" }} />
          <Box>
            <Paragraph>{name}</Paragraph>
            <Small color="grey.600">#{id.split("-")[0]}</Small>
          </Box>
        </FlexBox>
      </StyledTableCell>

      <StyledTableCell align="left">
        <Paragraph>{final_name}</Paragraph>
      </StyledTableCell>

      <StyledTableCell align="left">
        <FlexBox display="flex" flexDirection='row' flexWrap='nowrap' minWidth='200px' maxHeight='120px' gap='2'>
        {image.map((img: string, index: number) => 
          <Avatar key={index} src={img} style={{ borderRadius: "8px" }} alt={final_name}/>
          )}
          </FlexBox>
      </StyledTableCell>

      <StyledTableCell align="left">{note}</StyledTableCell>
      <StyledTableCell align="left">{china_code}</StyledTableCell>
      <StyledTableCell align="left">{kloudek_code}</StyledTableCell>
      <StyledTableCell align="left">
        <Paragraph style={{ minWidth: '150px' ,maxHeight: '200px', overflowY: 'auto'}}>
          {final_code}
        </Paragraph>
      </StyledTableCell>
      <StyledTableCell align="left">{seat}</StyledTableCell>
      <StyledTableCell align="left">{material}</StyledTableCell>
      <StyledTableCell align="left">
        {dimensions.map((item, index) => 
          <Paragraph key={index} style={{ minWidth: '100px' ,maxHeight: '200px', overflowY: 'auto'}}>
            {['Dài', 'Rộng', 'Cao'][index]} - {item}
          </Paragraph>
        )}
      </StyledTableCell>
      <StyledTableCell align="left">{color}</StyledTableCell>
      <StyledTableCell align="left">{historical_cost}</StyledTableCell>
      <StyledTableCell align="left">{rental_price}</StyledTableCell>
      <StyledTableCell align="left">{selling_price}</StyledTableCell>

      <StyledTableCell align="left">
        <Box style={{ minWidth: '300px' ,maxHeight: '100px', overflowY: 'auto'}}>
          {specification.map((item, index) => 
            <Paragraph key={index}>
              {item}
            </Paragraph>
          )}
        </Box>
        
      </StyledTableCell>

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
          <EditForm initialValues={product} title={title} setOpen={setOpen} setRender={setRender}/>
        </Box>
      </Modal>
        <StyledIconButton>
          <RemoveRedEye />
        </StyledIconButton>
        <StyledIconButton onClick={handleDelete}>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default ProductRow;
