import { SvgIcon, SvgIconProps } from "@mui/material";

const Settings = (props: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 16 15"
      sx={{ "& .secondary": { opacity: 0.4 } }}
      {...props}
    >
      <path
        d="M15.2063 8.65732L14.2531 8.09733C14.295 7.70025 14.295 7.29974 14.2531 6.90266L15.2063 6.34266C15.2658 6.30737 15.318 6.26046 15.3597 6.2046C15.4014 6.14875 15.4319 6.08506 15.4495 6.01718C15.467 5.9493 15.4712 5.87857 15.4618 5.80904C15.4524 5.73951 15.4296 5.67254 15.3948 5.61199L13.2999 1.92133C13.2309 1.79933 13.1172 1.71012 12.9838 1.67315C12.8503 1.63618 12.708 1.65446 12.5877 1.72399L11.6345 2.25733C11.3138 2.03579 10.9737 1.84476 10.6185 1.68666V0.566658C10.6185 0.42521 10.5634 0.289554 10.4652 0.189535C10.3669 0.0895155 10.2337 0.0333252 10.0948 0.0333252H5.90515C5.76625 0.0333252 5.63304 0.0895155 5.53483 0.189535C5.43661 0.289554 5.38144 0.42521 5.38144 0.566658V1.68666C5.02532 1.85327 4.68519 2.05324 4.36544 2.28399L3.41228 1.75066C3.29203 1.68113 3.14965 1.66285 3.01622 1.69982C2.88278 1.73679 2.76912 1.826 2.70003 1.94799L0.60519 5.63866C0.570346 5.69921 0.547581 5.76617 0.5382 5.8357C0.528819 5.90523 0.533006 5.97597 0.550521 6.04385C0.568036 6.11173 0.598535 6.17542 0.640269 6.23127C0.682004 6.28712 0.734152 6.33404 0.793726 6.36932L1.74688 6.92932C1.70497 7.3264 1.70497 7.72691 1.74688 8.12399L0.793726 8.65732C0.734152 8.69261 0.682004 8.73953 0.640269 8.79538C0.598535 8.85123 0.568036 8.91492 0.550521 8.9828C0.533006 9.05068 0.528819 9.12142 0.5382 9.19095C0.547581 9.26048 0.570346 9.32744 0.60519 9.38799L2.70003 13.0787C2.76912 13.2006 2.88278 13.2899 3.01622 13.3268C3.14965 13.3638 3.29203 13.3455 3.41228 13.276L4.36544 12.7427C4.68621 12.9642 5.02631 13.1552 5.38144 13.3133V14.4333C5.38144 14.5748 5.43661 14.7104 5.53483 14.8104C5.63304 14.9105 5.76625 14.9667 5.90515 14.9667H10.0948C10.2337 14.9667 10.3669 14.9105 10.4652 14.8104C10.5634 14.7104 10.6185 14.5748 10.6185 14.4333V13.3133C10.9747 13.1467 11.3148 12.9467 11.6345 12.716L12.5877 13.2493C12.708 13.3189 12.8503 13.3371 12.9838 13.3002C13.1172 13.2632 13.2309 13.174 13.2999 13.052L15.3948 9.36132C15.4571 9.24155 15.4723 9.10211 15.4373 8.97135C15.4022 8.84059 15.3196 8.7283 15.2063 8.65732V8.65732Z"
        className="secondary"
      />
      <path d="M8 10C9.38071 10 10.5 8.88071 10.5 7.5C10.5 6.11929 9.38071 5 8 5C6.61929 5 5.5 6.11929 5.5 7.5C5.5 8.88071 6.61929 10 8 10Z" />
    </SvgIcon>
  );
};

export default Settings;
