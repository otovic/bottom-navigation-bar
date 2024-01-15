import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import bottomNavigationBarStyles from "./bottom_navigation_bar_styles";
import { BottomNavBarProps } from "./bottom_navigation_bar_types";
import React, { useState } from "react";

const BottomNavBar = (props: BottomNavBarProps) => {
    const [selectedActionIndex, setSelectedActionIndex] = useState<number>(props.defaultSelectedIndex ? props.defaultSelectedIndex : 1);

    const bottomNavBarStyle = StyleSheet.create({
        navBarContainer: {
            height: props.customStyle?.height ? props.customStyle.height + 5 : 50,
            width: "100%",
            backgroundColor: props.customStyle?.backgroundColor ? props.customStyle.backgroundColor : "white",
            borderTopColor: props.customStyle?.borderTopColor ? props.customStyle.borderTopColor : "rgba(0, 0, 0, 0.1)",
            borderTopWidth: props.customStyle?.borderTopWidth ? props.customStyle.borderTopWidth : 1,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            flexDirection: "column",
            padding: 5,
            gap: 5,
        },
        navBar: {
            height: props.customStyle?.height ? props.customStyle.height : 50,
            width: "100%",
            backgroundColor: props.customStyle?.backgroundColor ? props.customStyle.backgroundColor : "white",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
        },
        actionContainer: {
            minWidth: props.iconStyle?.width ? props.iconStyle.width + 10 : 20 + 10,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderTopWidth: props.selectedIconStyle?.showSelectedIconBorder
                ? (props.selectedIconStyle?.selectedIconBorderWidth ? props.selectedIconStyle.selectedIconBorderWidth : 3)
                : 0,
            borderTopColor: "transparent",
            borderBottomWidth: props.selectedIconStyle?.showSelectedIconBorder
                ? (props.selectedIconStyle?.selectedIconBorderWidth ? props.selectedIconStyle.selectedIconBorderWidth : 3)
                : 0,
            borderBottomColor: "transparent",
        },
        actionContainerSelected1: {
            minWidth: props.iconStyle?.width ? props.iconStyle.width + 10 : 20 + 10,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderTopWidth: props.selectedIconStyle?.showSelectedIconBorder
                ? (props.selectedIconStyle?.selectedIconBorderWidth ? props.selectedIconStyle.selectedIconBorderWidth : 3)
                : 0,
            borderTopColor: "transparent",
            borderBottomColor: props.selectedIconStyle?.selectedTintColor ? props.selectedIconStyle.selectedTintColor : "blue",
            borderBottomWidth: props.selectedIconStyle?.showSelectedIconBorder ? (props.selectedIconStyle?.selectedTintColor ? 3 : 0) : 0,
        },
        iconStyle: {
            tintColor: props.iconStyle?.tintColor ? props.iconStyle.tintColor : "black",
            width: props.iconStyle?.width ? props.iconStyle.width : 20,
            height: props.iconStyle?.height ? props.iconStyle.height : 20,
        },
        selectedIconStyle: {
            tintColor: props.selectedIconStyle?.selectedTintColor ? props.selectedIconStyle.selectedTintColor : "black",
            width: props.iconStyle?.width
                ? props.iconStyle.width + (props.selectedIconStyle?.expandOnSelected ? 3 : 0)
                : 20 + (props.selectedIconStyle?.expandOnSelected ? 3 : 0),
            height: props.iconStyle?.height
                ? props.iconStyle.height + (props.selectedIconStyle?.expandOnSelected ? 3 : 0)
                : 20 + (props.selectedIconStyle?.expandOnSelected ? 3 : 0),
        },
    });

    return (
        <View style={bottomNavBarStyle.navBarContainer}>
            <View style={bottomNavBarStyle.navBar}>
                {props.actions?.map((action, index) => {
                    const isSelected = index + 1 == selectedActionIndex;

                    return (
                        <TouchableOpacity key={index} style={isSelected ? bottomNavBarStyle.actionContainerSelected1 : bottomNavBarStyle.actionContainer}
                            onPress={() => {
                                setSelectedActionIndex(index + 1);
                                action.callback
                            }}>
                            <Image source={action.icon} style={isSelected ? bottomNavBarStyle.selectedIconStyle : bottomNavBarStyle.iconStyle}></Image>
                            {action.text ?
                                <Text style={{ fontSize: 10, color: isSelected ? props.selectedIconStyle?.selectedTintColor : "black" }}>{action.text}</Text>
                                : null}
                        </TouchableOpacity>
                    )
                })
                }
            </View>
            {React.isValidElement(props.content) ? <View style={bottomNavBarStyle.navBar}>{props.content}</View> : null}
        </View>
    )
}

export default BottomNavBar;