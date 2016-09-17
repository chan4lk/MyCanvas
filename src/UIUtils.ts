import Dialog from './Dialog';

export default /**
 * UIUtils
 */
class UIUtils {
    public static ShowDialog(heading:string){
        let dialog = new Dialog();
        let element = document.createElement('div');
        element.innerHTML = dialog.GetHTML(heading);

        let positiveButton = element.getElementsByClassName('btn-action-positive').item(0);
        positiveButton.addEventListener('click', (e)=>{
            document.getElementById('dialog-preview').children.item(0).remove();
        });

        let negetiveButton = element.getElementsByClassName('btn-action-negetive').item(0);
        negetiveButton.addEventListener('click', (e)=>{
            document.getElementById('dialog-preview').children.item(0).remove();
        });

        

        document.getElementById('dialog-preview').appendChild(element);
    }
}