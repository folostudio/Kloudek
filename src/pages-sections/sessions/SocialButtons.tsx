import Link from "next/link";
import { FC, Fragment } from "react";
import { Box, Button, Divider } from "@mui/material";
import Image from "components/BazaarImage";
import { H6 } from "components/Typography";
import { FlexBox, FlexRowCenter } from "components/flex-box";
import { useSnackbar } from "notistack";
// back-end
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";
// import Cookies from 'js-cookie';

// =======================================
type SocialButtonsProps = {
  handleGoogle?: () => void;
  handleFacebook?: () => void;
};
// =======================================

const provider = new GoogleAuthProvider();

const SocialButtons: FC<SocialButtonsProps> = (props) => {

  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const auth = getAuth();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      // Cookies.set('accessToken', token, { secure: true });
      // Handle successful login, e.g., update UI or send user to the next page
      enqueueSnackbar("Đăng nhập thành công", { variant: "success" });
      
      // router.push('/');
    } catch (error) {
      // Handle errors
      enqueueSnackbar("Đăng nhập không thành công", { variant: "error" });
      const errorCode = error.code;
      const errorMessage = error.message;
      // Handle specific error cases if needed
      console.error("Lỗi đăng nhập:", errorCode, errorMessage);
    }
  };

  return (
    <Fragment>
      <Box mb={3} mt={3.8}>
        <Box width="200px" mx="auto">
          <Divider />
        </Box>

        <FlexBox justifyContent="center" mt={-1.625}>
          <Box color="grey.600" bgcolor="background.paper" px={2}>
            {/* or */}
          </Box>
        </FlexBox>
      </Box>

      {/* <Button
        className="facebookButton"
        size="medium"
        fullWidth
        sx={{ height: 44 }}
      >
        <Image
          src="/assets/images/icons/facebook-filled-white.svg"
          alt="facebook"
        />
        <Box fontSize="12px" ml={1}>
          Continue with Facebook
        </Box>
      </Button> */}

      <Button
        className="googleButton"
        size="medium"
        fullWidth
        sx={{ height: 44 }}
        onClick={handleGoogleSignIn}
      >
        <Image src="/assets/images/icons/google-1.svg" alt="facebook" />
        <Box fontSize="12px" ml={1}>
          Đăng nhập với Google
        </Box>
      </Button>
    </Fragment>
  );
};

export default SocialButtons;
