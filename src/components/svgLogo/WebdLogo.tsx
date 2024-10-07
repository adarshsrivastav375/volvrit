const WebDLogo = ({ color }: { color?: any }) => {
  return (
    <>
      <svg
        width="82"
        height="82"
        viewBox="0 0 82 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M59.7913 10.2502H22.208C18.3597 10.0353 14.5826 11.3518 11.7018 13.9125C8.82106 16.4732 7.07074 20.0699 6.83301 23.9169V44.417C7.07074 48.2638 8.82106 51.8606 11.7018 54.4213C14.5826 56.9818 18.3597 58.2986 22.208 58.0837H59.7913C63.6395 58.2986 67.4167 56.9818 70.2976 54.4213C73.1782 51.8606 74.9285 48.2638 75.1663 44.417V23.9169C74.9285 20.0699 73.1782 16.4732 70.2976 13.9125C67.4167 11.3518 63.6395 10.0353 59.7913 10.2502Z"
          stroke={color ?? "black"}
          strokeWidth="3.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M41 58.0833V71.75"
          stroke={color ?? "black"}
          strokeWidth="3.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M54.3265 71.75H26.9932"
          stroke={color ?? "black"}
          strokeWidth="3.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default WebDLogo;
