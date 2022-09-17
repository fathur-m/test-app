interface Props {
  children: JSX.Element | JSX.Element[];
  classname?: string;
  imageBg: string;
}

const BackgroundImg = ({ children, classname, imageBg }: Props) => {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${imageBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="overlay"></div>
      <div className={`${classname}`}>{children}</div>
    </div>
  );
};

export default BackgroundImg;
