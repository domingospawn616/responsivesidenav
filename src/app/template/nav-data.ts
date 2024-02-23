export interface INavData {
    routeLink: string;
    icon: string;
    label: string;
    expanded?: boolean;
    items?: INavData[];
}