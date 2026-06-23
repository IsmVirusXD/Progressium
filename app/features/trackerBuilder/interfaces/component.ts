export interface Component {
  title: string;
  info?: string;
}

export interface TextListProps extends Component {
  items: string[];
}

export interface CheckTableProps extends Component {
  data: checkRow[];
}

export interface checkRow {
  label: string;
  count: number;
}
