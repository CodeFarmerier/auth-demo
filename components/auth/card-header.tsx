interface ICardHeaderProps {
  headerLabel: string;
}
const CardHeaderLabel = ({ headerLabel }: ICardHeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center">{headerLabel}</h1>
    </div>
  );
};

export default CardHeaderLabel;
