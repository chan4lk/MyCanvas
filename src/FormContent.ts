export default /**
 * FormContent
 */
    class FormContent {

    public static get ButtonForm() {

        return `
            <div>
                <div class="ms-TextField">
                    <label class="ms-Label">Value</label>
                    <input class="ms-TextField-field">
                    <span class="ms-TextField-description">The header text value.</span>
                </div>
                <div class="ms-Dropdown" tabindex="0">
                    <label class="ms-Label">Postion</label>
                    <i class="ms-Dropdown-caretDown ms-Icon ms-Icon--caretDown"></i>
                    <select class="ms-Dropdown-select">
                        <option>Choose a sound…</option>
                        <option>Top Left</option>
                        <option>Top Center</option>
                        <option>Top Right</option>
                        <option>Middle Left</option>
                        <option>Middle Center</option>
                        <option>Middle Right</option>
                        <option>Bottom Left</option>
                        <option>Bottom Center</option>               
                        <option>Bottom Right</option>               
                    </select>
                </div>
            </div>
        `;
    }

    public static get TeaserForm() {
        return "";
    }

    public static get HeaderForm() {
        return ""
    };

}