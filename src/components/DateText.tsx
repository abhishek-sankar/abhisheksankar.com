interface DateTextProps {
  date: string;
  className?: string;
}

export const DateText: React.FC<DateTextProps> = ({ date, className }) => {
  return <span className={className}>{date}</span>;
};
