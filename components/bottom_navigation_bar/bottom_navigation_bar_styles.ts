import { StyleSheet } from "react-native";

const bottomNavigationBarStyles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        backgroundColor: "orange",
        justifyContent: "space-around",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        elevation: 100,
    },
    actionContainer: {
        width: 20,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    actionImage: {
        width: 20,
        height: 20,
    },
});

export default bottomNavigationBarStyles;