const selectElement = document.querySelector('.amoforms-input-select[name="fields[715128_2]"]');
    console.log(selectElement);
    if(selectElement) {
        for (let option of selectElement.options) {
            if (option.text === "Landing Accent wall") {
                option.selected = true;
                break;
            }
        }
    }

    const sourceDiv = document.querySelector('.amoforms__fields__container__inner_above');
    if (sourceDiv) {
        sourceDiv.style.display = 'none';
    }
