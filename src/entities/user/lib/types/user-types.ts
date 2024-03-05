export interface IUserProps {
    options:  {weight: string, water: string }[];
    onChange: (arg: {weight: string, water: string }) => void;
    value: string
}