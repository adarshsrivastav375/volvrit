const PencilLogo = ({ color }: { color?: any }) => {
  return (
    <>
      <svg
        width="61"
        height="61"
        viewBox="0 0 61 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.1259 42.6581H18.4838V35.1581M16.2403 37.4016L44.5111 9.13061C46.4639 7.17798 49.6296 7.17798 51.5824 9.13061C53.5349 11.0832 53.5349 14.2491 51.5824 16.2017L22.8944 44.8896C21.5542 46.2298 20.8842 46.8998 20.1424 47.4758C19.4835 47.9876 18.7831 48.4436 18.0484 48.8388C17.2213 49.2838 16.3372 49.6251 14.5692 50.3078L8.48438 52.6576L10.4422 46.7833C11.1103 44.7788 11.4445 43.7763 11.9091 42.8403C12.3218 42.0091 12.8107 41.2181 13.3696 40.4771C13.9989 39.6428 14.746 38.8958 16.2403 37.4016Z"
          stroke={color ?? "black"}
          strokeWidth="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default PencilLogo;