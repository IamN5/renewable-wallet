export interface IIcon {
  color: string;
  accentColor?: string;
  size?: number;
}

export type IFocusableIcon = IIcon & {
  focused: boolean;
};
