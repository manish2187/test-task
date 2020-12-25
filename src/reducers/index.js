const initialState = {
    selectableData: [
        {
            key: "Portugal", value: [
                "Assia Jayavant", "Luvleen Lawrence", "Rey Mibourne", "Cayla Brister"
            ]
        },

        {
            key: "Nicaragua", value: [
                "Deveedas Nandi", "Obasey Chidy", "Xenie Dolezelova", "Ezequiel Dengra"
            ]
        },
        {
            key: "Marshl Island", value: [
                "Aron Almaraz", "Jelena Denesova"
            ]
        },

    ],

    selectedData: [],
    name: "",


};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "SET_SELECTED_DATA":

            let { selectedValue, key, checked } = action.payload;
            let mstate = { ...state };
            let selectedData = mstate.selectedData;
            let selectedIndex = 0;
            let keyExist = false;
            for (let i = 0; i < selectedData.length; i++) {
                if (key == selectedData[i].key) {

                    selectedIndex = i;
                    keyExist = true;
                    break;
                }
            }
            if (checked) {
                if (!keyExist) {

                    selectedData.push({ "key": key, value: [selectedValue] });

                } else {
                    selectedData[selectedIndex].value.push(selectedValue);
                }

            } else {

                const keyIndex = selectedData[selectedIndex].value.indexOf(selectedValue);
                if (keyIndex > -1) {
                    selectedData[selectedIndex].value.splice(keyIndex, 1);
                }

            }
            let checkValues = [];
            for (let i = 0; i < selectedData.length; i++) {
                if (!selectedData[i].value.length == 0) {

                    checkValues.push(selectedData[i].value);
                }

            }
            if (checkValues.length == 0) {
                selectedData = [];
            }
            return { ...state, selectedData: [...selectedData] };
        case "SET_NAME":
            console.log("action", action);
            return { ...state, name: action.payload };
        default:
            return state;
    }
};
export default reducer;
