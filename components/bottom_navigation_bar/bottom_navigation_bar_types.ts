export type BottomNavBarProps = {
    customStyle?: {
        height?: number,
        backgroundColor?: string,
        borderTopColor?: string,
        borderTopWidth?: number,
    },
    navigation: any,
    iconStyle?: iconStyle,
    selectedIconStyle?: SelectedIconStyle,
    defaultSelectedIndex?: number,
    actions: Array<BottomNavBarAction>,
}

export type BottomNavBarAction = {
    callback: Function,
    icon: any,
    text?: string,
}

export type SelectedIconStyle = {
    selectedTintColor?: string,
    expandOnSelected?: boolean,
    selectedIconBorderWidth?: number,
    showSelectedIconBorder?: boolean,
}

export type iconStyle = {
    width?: number,
    height?: number,
    tintColor?: string,
}