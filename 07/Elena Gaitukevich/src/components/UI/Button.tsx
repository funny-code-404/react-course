type TButton = {
  children: string;
};

export function Button({ children }: TButton) {
  return <button className="button">{children}</button>;
}
