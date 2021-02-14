export default {
    OS_NAME: process.env.VUE_APP_OS_NAME,
    ACCENT_COLOR: "#595959",
    SUPPORTED_DEVICES: [
        {
            name: "Pixel 2",
            model: "walleye",
        },
        {
            name: "Pixel 2 XL",
            model: "taimen",
        },
        {
            name: "Pixel 4a 5G",
            model: "bramble",
        },
        {
            name: "Pixel 5",
            model: "redfin",
        },
        {
            name: "Unremarkable",
            model: "yukawa",
        }
    ],
    RELEASE_VARIANTS: {
        minimal: {
            description: "Minimal version without Google apps or services.",
            suffix: "",
        },
        gapps: {
            description:
                "Version with Google services included, so the apps you’re familiar with will work. Recommended for most users.",
            suffix: " with Google services",
        },
    },
    DONATION_LINKS: [
        {
        },
        {
        },
    ],
};
