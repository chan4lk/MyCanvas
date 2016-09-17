export /**
 * Dialog
 */
 default class Dialog {
  
    /**
     * Get HTML
     */
    public GetHTML(heading:string = "Dialog Heading") {
        return `<div class="ms-Dialog">
                    <div class="ms-Overlay"></div>
                    <div class="ms-Dialog-main">
                        <button class="ms-Dialog-button ms-Dialog-button--close">
                        <i class="ms-Icon ms-Icon--x"></i>
                        </button>
                        <div class="ms-Dialog-header">
                        <p class="ms-Dialog-title">${heading}</p>
                        </div>
                        <div class="ms-Dialog-inner">
                        <div class="ms-Dialog-content">
                          <form>
                          
                            <input type="color" name="favcolor">
                          </form>
                        </div>
                        <div class="ms-Dialog-actions">
                            <div class="ms-Dialog-actionsRight">
                            <button class="ms-Dialog-action ms-Button ms-Button--primary btn-action-positive">
                                <span class="ms-Button-label">OK</span>
                            </button>
                            <button class="ms-Dialog-action ms-Button btn-action-negetive">
                                <span class="ms-Button-label">Cancel</span>
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    `;
    }
}